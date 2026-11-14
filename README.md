# THE DR AUTO

Marketing site for THE DR AUTO, a multi-brand car repair and service centre in Katraj, Pune.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update the business

Most public details live in configuration, not in the page components.

| What | Where |
| --- | --- |
| Name, address, phone, hours, rating, WhatsApp, site URL | `src/config/business.ts` |
| Services | `src/config/services.ts` |
| Navigation | `src/config/navigation.ts` |
| Gallery photos and comparison pairs | `src/data/gallery.ts` and `public/images/` |
| Customer reviews | `src/data/testimonials.ts` |
| Differentiators | `src/data/why-us.ts` |

Set `whatsapp.enabled` to `false` if the published phone number is not on WhatsApp. Enquiry buttons then point at the contact form and the phone number.

## Confirm before launch

These items were supplied for the build and are not fully verified:

- Established year is shown as 2021. Set `establishedYearConfirmed` after the owner confirms it.
- Hours are shown as approximate: Monday to Saturday, 9:30 AM – 8:00 PM. Sunday is not listed. A separate public directory showed 9:30 AM – 7:30 PM including Sunday. Set `hours.confirmed` to `true` only after the owner confirms the schedule. Structured data omits opening hours until then.
- The customer rating is shown as 4.9/5 from the public listing. Review counts conflicted (136 in the project brief, 79 in another index), so the count stays hidden. Set `rating.reviewCount` after checking the live Google listing, and `rating.confirmed` when that check is done.
- Do not add certifications, prices, staff names, warranties, or partnerships unless the owner confirms them.
- Social links stay empty until a profile is confirmed. Put a confirmed Google Maps URL in `googleReviewsUrl` if you want a listing link on the reviews section.
- Replace stock photographs before launch. They are labelled as illustrative and are not customer jobs. Set `isPlaceholder` to `false` on a gallery pair only when both images are the same vehicle from the workshop.

## Reviews

Add an entry to `src/data/testimonials.ts` and set `verified: true` only after the quote, name, and rating have been checked. Unverified entries are not rendered.

## Enquiry form

The form validates on the client and opens WhatsApp with the details. That does not confirm a booking. To send enquiries to an API later, set `NEXT_PUBLIC_ENQUIRY_ENDPOINT`. The form POSTs the same fields as JSON and skips WhatsApp when that URL is set.

## SEO and analytics

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL` to the live domain before publishing. Canonical URLs, the sitemap, and structured data use it.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` for Google Analytics 4.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` for the Search Console meta tag.

`src/app/sitemap.ts`, `src/app/robots.ts`, and AutoRepair structured data are included.

## Stack

Next.js App Router, TypeScript, Tailwind CSS, Lucide, and Framer Motion.
