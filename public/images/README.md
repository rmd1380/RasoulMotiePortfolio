# Homepage social preview

Provide a dedicated JPEG at `public/images/rasoul-motie-social-preview.jpg`.

- Required dimensions: **1200 × 627 pixels** (approximately 1.91:1).
- Suggested content: Rasoul Motie, Video Editor & Content Creator, with motion
  graphics, storytelling, and YouTube/social media positioning. Keep important
  text away from the edges and legible at thumbnail size.
- No placeholder image is included. The metadata references this reserved path;
  image previews will not work until the JPEG is supplied and deployed.
- Public URL: `https://rasoulmotie.ir/images/rasoul-motie-social-preview.jpg`.

Run `npm run build` after adding the image. Next.js copies it to
`out/images/rasoul-motie-social-preview.jpg` for the existing static deployment.
Verify that the public URL returns HTTP 200 with an image content type and is
accessible without login or bot challenges.

After deployment, inspect `https://rasoulmotie.ir/` at
https://www.linkedin.com/post-inspector/ to refresh LinkedIn's cached preview.
If an existing Featured item remains stale, remove and re-add that item after
confirming the new preview in Post Inspector.
