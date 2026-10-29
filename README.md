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

## Replace work photos easily
Place your images in `public/images/` and use these filenames:
- `work001.jpg`
- `work002.jpg`
- `work003.jpg`
- `work004.jpg`
- `work005.png`

Keep filenames unchanged to avoid editing the code, or update the `work` array in `src/App.tsx`.
The first four are photos supplied for this website. `work005.png` is a supplied exterior design reference and is labeled as inspiration.

Logo files:
- `public/images/hindtech-logo.png`
- `public/images/ma-innovex-logo.png`

## Before publishing — important
1. **Reviews:** Open `src/config/reviews.ts` and replace all three placeholders with genuine Google review text, reviewer names, and actual ratings. Do not publish the placeholder testimonials.
2. **Google Reviews URL:** Open `src/config/business.ts` and replace `googleReviewsUrl` and `writeReviewUrl` with the exact verified Google Business Profile/review link.
3. **Domain / SEO:** Replace `REPLACE-WITH-YOUR-PRODUCTION-DOMAIN.com` in `src/config/business.ts`, `public/robots.txt`, `public/sitemap.xml`, and configure the canonical URL in `index.html`. Do not deploy placeholder domain values.
4. Verify the address pin and opening hours.
5. The enquiry form is demo-only and does not send or store submissions. Connect a secure backend before launch.
6. Floating contact actions are in `DEMO_MODE = true`. After approval, configure production call/WhatsApp behaviour in `src/config/business.ts` and `src/App.tsx`.
7. Verify all services are actually offered before publishing.

## SEO expectations
The project includes semantic headings, metadata, local business JSON-LD, image alt text, sitemap and robots placeholders. SEO cannot guarantee a top Google ranking. After deployment, verify the domain in Google Search Console, submit the sitemap, keep the Google Business Profile complete, gather genuine reviews, and publish useful service/location content.
