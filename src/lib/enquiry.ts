import { generalEnquiryLabel, serviceChoices } from "@/config/services"
import { whatsappLink } from "@/lib/whatsapp"

export type EnquiryInput = {
  name: string
  phone: string
  carBrand: string
  carModel: string
  service: string
  preferredDate: string
  message: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryInput, string>>

export type EnquiryResult =
  | { ok: true; channel: "api" }
  | { ok: true; channel: "whatsapp"; url: string }
  | { ok: false; message: string }

const choices = new Set(serviceChoices())

export function todayISO(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function isValidIndianMobile(value: string) {
  const digits = value.replace(/\D/g, "")
  const local = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits
  return /^[6-9]\d{9}$/.test(local)
}

export function validateEnquiry(input: EnquiryInput, today = todayISO()): EnquiryErrors {
  const errors: EnquiryErrors = {}
  const name = input.name.trim()
  const brand = input.carBrand.trim()
  const model = input.carModel.trim()
  const message = input.message.trim()

  if (name.length < 2 || name.length > 60) {
    errors.name = "Enter your name."
  } else if (!/^[\p{L} .'-]+$/u.test(name)) {
    errors.name = "Use letters in the name."
  }

  if (!isValidIndianMobile(input.phone)) {
    errors.phone = "Enter a 10-digit Indian mobile number."
  }

  if (brand.length < 2 || brand.length > 40) {
    errors.carBrand = "Enter the car brand."
  }

  if (model.length < 1 || model.length > 40) {
    errors.carModel = "Enter the car model."
  }

  if (!choices.has(input.service)) {
    errors.service = "Choose a service."
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.preferredDate)) {
    errors.preferredDate = "Choose a preferred date."
  } else if (input.preferredDate < today) {
    errors.preferredDate = "Choose today or a later date."
  }

  if (message.length > 800) {
    errors.message = "Keep the message under 800 characters."
  }

  return errors
}

export function formatEnquiryDate(value: string) {
  const parsed = new Date(`${value}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return value
  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function buildEnquiryMessage(input: EnquiryInput) {
  const lines = [
    "Hello THE DR AUTO, I would like to enquire about a service.",
    `Name: ${input.name.trim()}`,
    `Phone: ${input.phone.trim()}`,
    `Car: ${input.carBrand.trim()} ${input.carModel.trim()}`,
    `Service: ${input.service || generalEnquiryLabel}`,
    `Preferred date: ${formatEnquiryDate(input.preferredDate)}`,
  ]
  const message = input.message.trim()
  if (message) lines.push(`Message: ${message}`)
  lines.push("This is an enquiry, not a confirmed booking.")
  return lines.join("\n")
}

function enquiryEndpoint() {
  const value = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT
  if (!value) return null
  try {
    const url = new URL(value)
    if (url.protocol !== "https:" && url.protocol !== "http:") return null
    return url.toString()
  } catch {
    return null
  }
}

/**
 * Sends an enquiry to a future API when NEXT_PUBLIC_ENQUIRY_ENDPOINT is set.
 * Otherwise it prepares a WhatsApp message. Opening WhatsApp does not confirm a booking.
 */
export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  const endpoint = enquiryEndpoint()
  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...input,
          name: input.name.trim(),
          phone: input.phone.trim(),
          carBrand: input.carBrand.trim(),
          carModel: input.carModel.trim(),
          message: input.message.trim(),
          source: "website",
        }),
      })
      if (!response.ok) {
        return { ok: false, message: "The enquiry could not be sent. Please call the workshop." }
      }
      return { ok: true, channel: "api" }
    } catch {
      return { ok: false, message: "The enquiry could not be sent. Please call the workshop." }
    }
  }

  const url = whatsappLink(buildEnquiryMessage(input))
  if (!url) {
    return {
      ok: false,
      message: "WhatsApp enquiries are turned off. Please call the workshop to book a visit.",
    }
  }
  return { ok: true, channel: "whatsapp", url }
}
