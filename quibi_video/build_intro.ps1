# build_intro.ps1 — assembles the Quibi intro proof-of-concept from the 3 hero
# images + the intro voiceover, with a slow Ken Burns zoom on each image.
#
# Requires ffmpeg + ffprobe on PATH.  Install:  winget install Gyan.FFmpeg
# Run from this folder:  powershell -ExecutionPolicy Bypass -File .\build_intro.ps1

$ErrorActionPreference = "Stop"
$root   = $PSScriptRoot
$assets = Join-Path $root "assets"
$out    = Join-Path $root "intro_proof.mp4"

$audio = Join-Path $assets "01_voiceover_intro.wav"
$imgs  = @(
  (Join-Path $assets "img1_tombstone.png"),   # tombstone
  (Join-Path $assets "img2_turnstyle.png"),   # turnstyle phone
  (Join-Path $assets "img3_couch_tv.png")     # couch vs TV
)

if (-not (Get-Command ffmpeg  -ErrorAction SilentlyContinue)) { throw "ffmpeg not found on PATH. Install: winget install Gyan.FFmpeg" }
if (-not (Get-Command ffprobe -ErrorAction SilentlyContinue)) { throw "ffprobe not found on PATH." }

# Total audio length, split evenly across the 3 images.
$dur = [double](ffprobe -v error -show_entries format=duration -of csv=p=0 $audio)
$per = [math]::Round($dur / $imgs.Count, 2)
$fps = 30
$frames = [int]($per * $fps)
Write-Host "Audio = $dur s  ->  $per s per image ($frames frames @ ${fps}fps)"

# Build a zoompan (slow push-in) clip for each image at 1920x1080.
$inputs = @()
$filters = @()
for ($i = 0; $i -lt $imgs.Count; $i++) {
  $inputs += @("-loop","1","-t","$per","-i", $imgs[$i])
  $filters += "[$i:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080," +
              "zoompan=z='min(zoom+0.0006,1.10)':d=$frames:s=1920x1080:fps=$fps[v$i]"
}
$concat = (0..($imgs.Count-1) | ForEach-Object { "[v$_]" }) -join ""
$filterComplex = ($filters -join ";") + ";" + $concat + "concat=n=$($imgs.Count):v=1:a=0[vout]"

$args = @()
$args += $inputs
$args += @("-i", $audio)
$args += @("-filter_complex", $filterComplex)
$args += @("-map","[vout]","-map","$($imgs.Count):a")
$args += @("-c:v","libx264","-pix_fmt","yuv420p","-r","$fps","-c:a","aac","-b:a","192k","-shortest","-y", $out)

Write-Host "Rendering -> $out"
& ffmpeg @args
Write-Host "Done: $out"
