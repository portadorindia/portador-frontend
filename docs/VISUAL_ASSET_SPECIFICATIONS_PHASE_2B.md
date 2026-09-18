# Visual Asset Specifications - Phase 2B

The repository currently contains the official PORTADOR logo and browser/app icons, but no approved operational photography. Phase 2B therefore uses lightweight, abstract aviation/cargo UI treatments and does not introduce generic stock or AI-generated imagery.

## Asset 1: Homepage aviation hero

- Subject: real commercial airport cargo operation, aircraft cargo hold or terminal-side cargo movement
- Composition: wide landscape with clear negative space on the left for copy and operational detail on the right
- Crop master: 2400 x 1500 px, 8:5
- Delivery: AVIF and WebP, target 220 KB AVIF / 320 KB WebP or lower
- Art direction: black, graphite, neutral metal, restrained practical lighting; PORTADOR red may appear only as a subtle overlay in the website
- Exclude: airline logos, fake liveries, passenger lifestyle shots, delivery bikes, impossible cargo placement, dramatic AI artifacts
- Rights: commercial web usage rights and model/property releases where applicable

## Asset 2: Heavy air cargo feature

- Subject: palletized industrial cargo, machinery component, ULD, or secured multi-box commercial consignment
- Composition: horizontal 3:2 image with cargo fully visible and believable restraint/packing
- Crop master: 2000 x 1333 px
- Delivery: AVIF and WebP, target 180 KB AVIF / 280 KB WebP or lower
- Exclude: loose freight, unsafe ramp activity, branding from another logistics provider, parcel-courier imagery

## Asset 3: PORTADOR BLACK / OBC

- Subject: professional accompanied-cargo context at a terminal or premium business-travel environment
- Composition: human subject secondary to the secure hand-carry context; no identifiable customer documents
- Crop master: 1800 x 1200 px
- Delivery: AVIF and WebP
- Exclude: luxury stereotypes, cash/jewelry closeups, visible boarding passes, fake security credentials

## Asset 4: Airport and network coverage

- Subject: certified airport terminal/cargo infrastructure photography or a licensed aviation-network data visualization
- Composition: 16:9, adaptable to mobile crop
- Crop master: 2400 x 1350 px
- Exclude: political boundary maps unless sourced from a certified and current geospatial provider

## Implementation notes

- Add approved files under `public/media/` with descriptive, stable names.
- Render through `next/image` with explicit dimensions, responsive `sizes`, and meaningful alt text.
- Keep hero image priority limited to the actual above-fold asset.
- Do not modify or recreate `public/portador-logo.png`.
- Keep a CSS-only fallback so the page remains complete if imagery is delayed or disabled.

## Round 2 asset review

- The repository still contains no approved operational photography with source, rights, and responsive masters.
- Local Company Profile and Pitch Deck files were located, but no standalone source-photography package or licensing record was found in the repository. Investor materials may also contain confidential or presentation-only content.
- No deck image was copied into the website during Round 2. The refreshed experience therefore uses the official logo, restrained aviation iconography, controlled red illumination, stronger contrast, and CSS depth without adding stock or synthetic aircraft imagery.
- Founder action: provide the approved original image files and written web-use approval before the photographic anchor areas above are implemented.
