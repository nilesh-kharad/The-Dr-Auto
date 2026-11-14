/**
 * Public details for THE DR AUTO.
 * Update this file when the owner confirms hours, the review count, or contact details.
 * Do not add certifications, warranties, prices, staff names, or partnerships here
 * unless the owner has confirmed them.
 */

export type SocialLink = {
  label: string
  href: string
}

export const business = {
  name: "THE DR AUTO",
  category: "Multi-brand Car Repair & Service Centre",
  establishedYear: 2021,
  /** Set to true after the owner confirms the opening year. */
  establishedYearConfirmed: false,
  tagline: "Your Car Deserves Expert Care.",
  heroSupport:
    "Professional car servicing, denting, painting and repair solutions you can trust. Experience quality workmanship and transparent service at THE DR AUTO, Katraj, Pune.",
  summary:
    "THE DR AUTO is a multi-brand car repair and service centre in Katraj, Pune, opposite Katraj Lake.",
  address: {
    line1: "Sr. No. 31, Shelar Mala",
    line2: "Opposite Katraj Lake",
    line3: "Vighnaharta Nagar",
    locality: "Katraj",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411046",
    country: "India",
    countryCode: "IN",
  },
  phone: {
    display: "+91 77769 73787",
    tel: "+917776973787",
  },
  /** Leave empty until a workshop email is confirmed. */
  email: "",
  whatsapp: {
    /**
     * Turn this off if 77769 73787 is not on WhatsApp.
     * Enquiry buttons then send people to the contact form and the phone number.
     */
    enabled: true,
    /** Country code plus number, digits only. */
    number: "917776973787",
    defaultMessage:
      "Hello THE DR AUTO, I would like to enquire about car servicing. Please share the details.",
  },
  hours: {
    /**
     * The project brief lists Monday–Saturday, about 9:30 AM–8:00 PM.
     * Another public directory listed 9:30 AM–7:30 PM, including Sunday.
     * Keep confirmed: false until the owner signs off, and call before visiting.
     */
    confirmed: false,
    summary: "Monday to Saturday, 9:30 AM – 8:00 PM",
    note: "These hours are approximate. Call the workshop before you visit. Sunday hours are not published yet.",
    days: [
      { day: "Monday", opens: "09:30", closes: "20:00" },
      { day: "Tuesday", opens: "09:30", closes: "20:00" },
      { day: "Wednesday", opens: "09:30", closes: "20:00" },
      { day: "Thursday", opens: "09:30", closes: "20:00" },
      { day: "Friday", opens: "09:30", closes: "20:00" },
      { day: "Saturday", opens: "09:30", closes: "20:00" },
    ],
  },
  rating: {
    /**
     * 4.9/5 is the public listing score supplied for this project.
     * Review counts did not match across sources (brief: 136, another index: 79),
     * so reviewCount stays null and is not shown until the owner confirms it.
     */
    show: true,
    score: 4.9,
    max: 5,
    reviewCount: null as number | null,
    label: "Customer rating",
    confirmed: false,
  },
  /** Paste the Google Maps place URL after it is confirmed. Leave empty until then. */
  googleReviewsUrl: "",
  /** Add a profile only after the owner confirms it belongs to the workshop. */
  social: [] as SocialLink[],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  copyrightYear: 2026,
  locale: "en_IN",
  areaServed: ["Katraj", "Pune"],
}

export type Business = typeof business
