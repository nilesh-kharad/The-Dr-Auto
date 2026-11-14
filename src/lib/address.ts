import { business } from "@/config/business"

export function addressLines() {
  const { address } = business
  return [
    address.line1,
    address.line2,
    address.line3,
    `${address.locality}, ${address.city} – ${address.postalCode}`,
  ]
}

export function addressSingleLine() {
  const { address } = business
  return [
    address.line1,
    address.line2,
    address.line3,
    address.locality,
    address.city,
    `${address.state} ${address.postalCode}`,
    address.country,
  ].join(", ")
}

export function streetAddress() {
  const { address } = business
  return [address.line1, address.line2, address.line3].join(", ")
}

export function mapsEmbedUrl() {
  const query = encodeURIComponent(`${business.name}, ${addressSingleLine()}`)
  return `https://maps.google.com/maps?q=${query}&z=16&hl=en&output=embed`
}

export function mapsDirectionsUrl() {
  const query = encodeURIComponent(`${business.name}, ${addressSingleLine()}`)
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`
}
