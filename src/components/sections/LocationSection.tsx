import { Clock, MapPin, Navigation, Phone } from "lucide-react"
import { business } from "@/config/business"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { MapEmbed } from "@/components/ui/MapEmbed"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { WhatsAppIcon } from "@/components/ui/icons"
import { addressLines, mapsDirectionsUrl } from "@/lib/address"
import { whatsappLink } from "@/lib/whatsapp"

export function LocationSection() {
  const whatsapp = whatsappLink(business.whatsapp.defaultMessage)

  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="location-heading">
      <Container className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <SectionHeading id="location-heading" eyebrow="Find us" title="Visit the workshop" />
          <h3 className="mt-8 text-lg font-bold">{business.name}</h3>
          <address className="mt-3 space-y-1 text-base not-italic leading-relaxed text-stone">
            {addressLines().map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
              <span>Opposite Katraj Lake, Vighnaharta Nagar, Katraj, Pune.</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
              <a href={`tel:${business.phone.tel}`} className="font-semibold text-ink hover:text-accent-strong">
                {business.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-ink">Approximate hours</span>
                <span className="mt-1 block text-stone">{business.hours.summary}</span>
                <span className="mt-1 block text-stone">{business.hours.note}</span>
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={mapsDirectionsUrl()}>
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get directions
            </Button>
            {whatsapp ? (
              <Button href={whatsapp} variant="whatsapp">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp enquiry
              </Button>
            ) : (
              <Button href="/contact#enquiry" variant="outline">
                Send an enquiry
              </Button>
            )}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          <MapEmbed className="h-80 sm:h-[26rem]" />
        </div>
      </Container>
    </section>
  )
}
