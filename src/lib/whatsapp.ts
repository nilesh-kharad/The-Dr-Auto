import { business } from "@/config/business"

export function whatsappLink(message: string) {
  if (!business.whatsapp.enabled) return null
  const number = business.whatsapp.number.replace(/\D/g, "")
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function serviceEnquiryMessage(serviceName: string) {
  return `Hello THE DR AUTO, I would like to enquire about ${serviceName}. Please share the details.`
}
