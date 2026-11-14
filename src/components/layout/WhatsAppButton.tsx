import { business } from "@/config/business"
import { WhatsAppIcon } from "@/components/ui/icons"
import { whatsappLink } from "@/lib/whatsapp"

export function WhatsAppButton() {
  const href = whatsappLink(business.whatsapp.defaultMessage)
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp THE DR AUTO"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#075E54] text-white shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
