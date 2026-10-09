# V Team Bath — Updated animated website

Five main pages plus a volunteer interest page, 15 projects, award highlights, three official community links, and smoother reduced-motion-aware transitions.

## Run

```bash
npm install
npm run build
npm run dev
```

Open http://localhost:3000. Keep your previous site as a backup.

## Important

- **SU logo:** The society card contains a clearly labelled typographic **SU placeholder**, not an official supplied logo file. Replace it with an approved official SU logo image in `public/su-logo.png` and swap the placeholder block in `app/page.tsx` after obtaining the branding asset/permission. Do not mistake this for an official logo.
- The interest form currently prepares an email; it doesn't store submissions or send them automatically.
- Award links lead to SU source pages; please verify all recognition wording before public release.
- "Who we've worked with" should be reserved for confirmed former partners; other project contacts are labelled as organisations/opportunities.
- Site contact: vteam@bath.ac.uk. The Project Leader button opens the Microsoft Form.

## Visual/interaction update
- Both navbar and footer include linked SU, Instagram and WhatsApp marks.
- Instagram and WhatsApp icon graphics are bundled in `/public/social`.
- **Official SU artwork is NOT included**: the blue `the SU` wordmark is a temporary text badge (not the approved SU logo). Replace it with an official approved asset before publication.
- The V Team header now shows the V Team logo without adjacent text.
- Scroll effects use IntersectionObserver and honour reduced-motion preferences.
- The project-card label is `Who we have worked with` except V Aware (`Featured in a previous campaign`). Confirm each historical partner claim with the committee before publishing.

## Latest adjustments
- Official SU logo image loads from the SU Bath website at runtime (internet connection required).
- Minimal Instagram and WhatsApp icons are included inline.
- On project cards, collaboration labels only appear for V Code (confirmed) and V Aware (previous campaign); descriptions of other opportunities remain visible without a misleading collaboration heading.
- Explore Opportunities under Register Volunteering Interest links to the official SU volunteer browsing directory.
