import type { Metadata } from "next"
import { business } from "@/config/business"
import { services } from "@/config/services"
import { streetAddress } from "@/lib/address"
import { absoluteUrl } from "@/lib/utils"

type PageMetaInput = {
  title: string
  description: string
  path: string
  absolute?: boolean
}

export function pageMetadata({ title, description, path, absolute = false }: PageMetaInput): Metadata {
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: business.locale,
      siteName: business.name,
      images: [
        {
          url: "/images/og.jpg",
          width: 1200,
          height: 630,
          alt: "Illustrative photograph of a premium car in a workshop, used by THE DR AUTO.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og.jpg"],
    },
  }
}

export function autoRepairJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: business.name,
    description: business.summary,
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/og.jpg"),
    telephone: business.phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress(),
      addressLocality: `${business.address.locality}, ${business.address.city}`,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.countryCode,
    },
    areaServed: business.areaServed.map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Car repair and servicing",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.summary,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
  }

  if (business.email) data.email = business.email
  if (business.social.length > 0) data.sameAs = business.social.map((item) => item.href)

  if (business.hours.confirmed) {
    data.openingHoursSpecification = business.hours.days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day.day,
      opens: day.opens,
      closes: day.closes,
    }))
  }

  return data
}

export function serviceJsonLd(service: { name: string; summary: string; slug: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
    areaServed: business.areaServed.map((name) => ({ "@type": "Place", name })),
    provider: {
      "@type": "AutoRepair",
      name: business.name,
      telephone: business.phone.tel,
      url: absoluteUrl("/"),
    },
  }
}
