# Quibi — "The 180-Day Disaster" · Faceless YouTube Production Kit

**Runtime target:** ~5:00 · **Aspect:** 16:9 (1920×1080) · **Style:** dark minimalist, teal/black, premium motion-graphics
**Narrator voice (locked):** `Mark (en)` via Higgsfield `inworld_text_to_speech`

---

## STATUS — what's already generated (8 credits spent)

| # | Asset | File | Notes |
|---|-------|------|-------|
| ✅ | Intro voiceover (0:00–0:45) | `assets/01_voiceover_intro.wav` | Full hook, Mark (en) |
| ✅ | Hero — tombstone | `assets/img1_tombstone.png` | Cold open |
| ✅ | Hero — Turnstyle phone | `assets/img2_turnstyle.png` | 1:30 tech beat |
| ✅ | Hero — couch vs TV | `assets/img3_couch_tv.png` | Thesis shot |

**To finish the video you need ~90–110 more credits** (see budget at the bottom). Everything below is ready to paste into the Higgsfield tools.

---

## COST FACTS (preflighted, real numbers)

- **TTS narration:** flat **2 credits** per generation (length-independent at script scale) → split script into ~10 chunks ≈ **20 credits**
- **AI image (`nano_banana_pro`):** **2 credits** each → ~26 scenes ≈ **52 credits**
- **AI video clip (`seedance_2_0`, 8s/720p):** **36 credits** each → use ONLY for the 2–3 hero "wow" moments, not the whole video
- **Music bed (`sonilo_music`) / SFX (`mirelo_text_to_audio`):** a few credits each

> Recommended build = **AI images + Ken Burns motion + TTS + music**. Looks cinematic, costs ~1/15th of full AI-video.

---

## PRODUCTION METHOD (no editing skills required)

1. Generate every image + voiceover chunk in Higgsfield (prompts below).
2. Assemble in **one** of these:
   - **CapCut (free, easiest):** drop voiceover on the audio track, lay images in order, apply "zoom in" to each, add the text captions, drop a music bed at ~-18dB. Export 1080p.
   - **ffmpeg (scripted):** install ffmpeg, then run `build_intro.ps1` (provided) — it Ken-Burns-zooms each image and muxes the voiceover automatically.
   - **DaVinci Resolve (free, pro):** same idea, more control.

---

## FULL SHOT LIST + TTS-READY SCRIPT

> **VO chunk** = paste into `generate_audio` (model `inworld_text_to_speech`, voice `Mark (en)`).
> **IMG** = paste into `generate_image` (model `nano_banana_pro`, aspect_ratio `16:9`). All prompts end implicitly in: *dark teal and black minimalist palette, cinematic rim light, volumetric haze, high contrast, premium motion-graphics aesthetic.*
> **TXT** = on-screen text overlay. **MOTION** = camera move in editor.

### ACT 1 — THE HOOK (0:00–0:45)  ·  VO = `01_voiceover_intro.wav` ✅
| t | Visual (IMG prompt / asset) | TXT | MOTION | Audio/SFX |
|---|---|---|---|---|
| 0:00 | Counter graphic: huge digital number `$1,750,000,000` on black ticking down to `$0`. IMG: *"a massive glowing digital odometer counter reading $1,750,000,000 floating in black void"* | — | slow push-in | sub-bass drone rising → hard silence |
| 0:10 | `img1_tombstone.png` ✅ | — | slow zoom-in on stone | drone tail |
| 0:18 | Founders on stage. IMG: *"two confident corporate executives, a man and a woman, smiling on a brightly lit tech-conference stage, shot from the audience, slightly stylized"* | — | subtle parallax | VO continues |
| 0:30 | Glitch/burst transition to title card. IMG: *"minimalist title card, the word QUIBI in clean white sans-serif on black with a thin teal underline"* | **THE 180-DAY DISASTER** | hold | impact whoosh |

### ACT 2 — THE ARROGANT VISION (0:45–2:00)
**VO chunk A:** "The year was 2018. Hollywood titan Jeffrey Katzenberg noticed a trend: millions of people were watching short videos on their phones during their morning commutes. His conclusion? People wanted premium, high-budget, movie-quality shows... but delivered in ten-minute chunks. He called it: Quick Bites. Or... Quibi."
**VO chunk B:** "To run this tech empire, he hired Meg Whitman — the former CEO of eBay. Together, they were unstoppable on paper. They convinced every major studio to give them money. They paid filmmakers up to one hundred thousand dollars... per minute... to produce content."
**VO chunk C:** "Their secret weapon was a patented tech called Turnstyle. If you held your phone vertically, you saw a close-up character angle. Turn it horizontally, and the app instantly, seamlessly shifted to a wide cinematic view. It was a brilliant piece of mobile engineering. Too bad it was built for a world that didn't exist."

| t | Visual (IMG prompt) | TXT | MOTION |
|---|---|---|---|
| 0:45 | *"futuristic corporate boardroom interior, sleek glass and steel, empty, dramatic"* | `THE PROBLEM` (typewriter) | slow pan |
| 1:00 | *"a crowded subway car, commuters lit by the glow of their phones, stylized silhouettes"* | — | push-in |
| 1:12 | Split: *"left half a shaky vertical phone clip, right half a high-end cinematic film frame, both pointing to a 3D smartphone in center"* | — | hold / arrows |
| 1:24 | *"stacks of glowing cash and film-reel icons flowing into a smartphone, money-burning motif"* | `$100,000 / MINUTE` | drift up |
| 1:30 | `img2_turnstyle.png` ✅ | `"TURNSTYLE"` | slow rotate/zoom |
| 1:50 | *"a sleek phone glowing alone in a vast empty white void, tiny and isolated"* | `built for a world that didn't exist` | pull-back |

### ACT 3 — THE FATAL FLAWS (2:00–3:45)
**VO chunk D:** "Quibi officially launched on April 6th, 2020. If that date sounds familiar, it's because the entire world had just gone into a global pandemic lockdown."
**VO chunk E:** "Quibi's entire value proposition was built for people on the go — on subways, waiting in lines, sitting in coffee shops. Instead, their target audience was suddenly locked at home, sitting right in front of fifty-inch televisions equipped with Netflix and YouTube. But here is the kicker: Quibi didn't have a TV app. You could only watch it on a phone. The founders literally refused to allow casting to a television."
**VO chunk F:** "But that wasn't even their biggest mistake. In an effort to protect their precious Hollywood content, Quibi's developers built a deep structural block into the app's code. It completely disabled the ability to take screenshots or record screen clips."
**VO chunk G:** "Think about how apps grow today. They grow through memes. They grow because a user shares a funny screenshot on Twitter, or uploads a reaction clip on TikTok. By banning screenshots, Quibi essentially locked its content in a digital vault. They made it impossible for their app to go viral. They killed their own free marketing."

| t | Visual (IMG prompt) | TXT | MOTION | SFX |
|---|---|---|---|---|
| 2:00 | *"a calendar page slamming down reading APRIL 2020, red warning tint"* | `APRIL 6, 2020` | slam-in | harsh digital error buzz |
| 2:10 | *"an empty locked-down city street at dusk, eerie, deserted, stylized"* | — | slow drift | — |
| 2:25 | `img3_couch_tv.png` ✅ | — | slow push to TV | — |
| 2:45 | *"a smartphone with a bold red NO-CASTING / no-TV symbol over it, dark studio"* | `NO TV APP` | hold | — |
| 3:00 | *"a hand trying to screenshot a phone but the screen is solid black, glitch effect"* | `SCREENSHOTS BANNED` | shake | shutter-fail click |
| 3:20 | *"a collage of generic internet meme panels fading to grayscale and dissolving away"* | — | dissolve out | — |
| 3:35 | *"glowing content sealed inside a heavy steel digital vault, padlocked"* | `they killed their own free marketing` | push-in | vault clunk |

### ACT 4 — THE AUTOPSY (3:45–5:00)
**VO chunk H:** "The results were catastrophic. Out of the millions who signed up for the free trial, over ninety percent dropped off the moment they had to pay the five-dollar monthly fee. Quibi was bleeding cash at an unprecedented rate."
**VO chunk I:** "On December 1st, 2020 — just over six months after launching — Quibi officially turned off its servers. One point seven five billion dollars... evaporated."
**VO chunk J (close):** "The ultimate lesson of Quibi is simple. It doesn't matter how much money you have, or how famous your creators are. If you build a technology based on how you think people should behave, rather than how they actually behave... your business is dead on arrival."

| t | Visual (IMG prompt) | TXT | MOTION |
|---|---|---|---|
| 3:45 | *"a stark line chart with a near-vertical downward crash line, glowing red, dark grid"* | `90% CHURN` | draw-on line |
| 4:05 | *"a desaturated black-and-white newspaper front page, headline QUIBI SHUTS DOWN"* | `QUIBI SHUTS DOWN` | papers stack in |
| 4:20 | *"the $1,750,000,000 counter from the open, now dissolving into ash/particles"* | `$1,750,000,000 → $0` | particles |
| 4:35 | Founders image (desaturated B&W) | `DEC 1, 2020` | slow fade |
| 4:50 | *"clean high-contrast closing frame, empty dark space with a single teal underline"* | `Build for how people behave — not how you wish they did.` | hold, slow fade to black |

---

## MUSIC & SFX TO GENERATE

- **Music bed (whole video):** `sonilo_music`, duration ~300s — prompt: *"dark cinematic documentary underscore, tense minimal pulse, low brooding synth bass, restrained, building subtle dread, no melody-forward, suitable for a business-collapse explainer."* Keep at **-18 to -22 dB** under the VO.
- **Drone hit (open):** `mirelo_text_to_audio` — *"rising sub-bass drone swelling then cutting to sudden silence."*
- **Error buzz (2:00):** *"harsh short digital error buzzer."*
- **Impact whooshes (transitions):** *"clean cinematic whoosh impact transition."*

---

## REMAINING-ASSET BUDGET (to finish the film)

| Bucket | Qty | Credits |
|---|---|---|
| VO chunks A–J (10) | 10 | ~20 |
| New scene images (~22 left) | 22 | ~44 |
| Music bed | 1 | ~6–10 |
| SFX | ~4 | ~8 |
| (Optional) animate 2 hero images to video clips | 2 | ~72 |
| **Core total (images build)** | | **~80–100** |
| **With 2 hero video clips** | | **~150–170** |

A **500-credit top-up** covers the full film comfortably with margin for re-rolls.

---

## NEXT STEPS

1. Top up credits (a 500 pack is plenty).
2. Say **"generate the rest"** and I'll batch all VO chunks + scene images using the prompts above.
3. Install ffmpeg (or use CapCut) and assemble. If ffmpeg, run `build_intro.ps1` for the intro, then I'll extend the script to the full timeline.
