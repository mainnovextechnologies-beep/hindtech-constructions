# HINDTECH CONSTRUCTIONS — React + Vite

## Run locally
1. Install Node.js LTS.
2. Extract this ZIP and open a terminal in the `hindtech-constructions` folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Production build
- Run `npm run build`
- Run `npm run preview` to test the built site.

## Gallery image management
All supplied work photos are included once in `public/images/`:
- `work001.jpg` through `work004.jpg`
- `work005.png`
- `work006.jpg` through `work009.jpg`

Replace an image using the same filename to update it without changing the gallery code. `work005.png` is a supplied exterior design reference and is labelled as inspiration, not as a completed project.

## Logos
- `public/images/hindtech-logo.png` — latest blue/cyan HINDTECH CONSTRUCTIONS logo supplied on 30 October 2026.
- `public/images/ma-innovex-logo.png` — MA Innovex Technologies footer credit.

## Reviews
The four visible customer review excerpts are transcribed from the Google reviews screenshot supplied by the business. The rating (4.9) and review count (13) reflect the previously supplied business listing details. Recheck these details against the live Google Business Profile before publishing.

## Live contact behaviour
- WhatsApp buttons open a pre-filled WhatsApp message to the configured business number.
- The phone button starts a phone call using the configured number.
- The project enquiry form validates required fields and opens a pre-filled WhatsApp enquiry. The visitor reviews and sends the message in WhatsApp.
- The map and Google review links open external Google destinations.
- Gallery filters, image lightbox, mobile navigation and back-to-top control work in the browser.

## Before publishing
1. Confirm the business phone number and address in `src/config/business.ts`.
2. Replace `googleReviewsUrl` and `writeReviewUrl` with the exact Google Business Profile review links. The current links open a Google Maps search for the business.
3. Replace `REPLACE-WITH-YOUR-PRODUCTION-DOMAIN.com` in `src/config/business.ts`, `public/robots.txt`, and `public/sitemap.xml`; add the canonical URL in `index.html`.
4. Verify services, business hours, map pin and all business details.
5. Verify the reviews, rating and review count against the current Google listing.

## SEO
The project includes page metadata, local business structured data, semantic headings, image alt text, sitemap and robots placeholders. SEO cannot guarantee first position in Google. After deployment, verify the domain in Google Search Console, submit the sitemap, keep the Google Business Profile complete, gather genuine reviews and publish useful service/location content.
