/**
 * Customer reviews for THE DR AUTO.
 *
 * Only add a review after it has been checked against the live Google listing
 * (or another source the owner trusts). Do not invent names, quotations, or ratings.
 *
 * Set verified to true only for entries that have been checked. Unverified
 * entries are ignored by the website.
 *
 * Example:
 * {
 *   id: "google-1",
 *   name: "Name as shown on the review",
 *   quote: "Exact review text.",
 *   rating: 5,
 *   date: "2026-01-15",
 *   source: "Google",
 *   verified: true,
 * }
 */
export type Testimonial = {
  id: string
  name: string
  quote: string
  rating: number
  date: string
  source: string
  verified: boolean
}

export const testimonials: Testimonial[] = []

export function publishedTestimonials() {
  return testimonials.filter((item) => item.verified && item.quote.trim() && item.name.trim())
}
