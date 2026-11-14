import { Suspense } from "react"
import { Clock, Phone } from "lucide-react"
import { EnquiryForm, EnquiryFormSkeleton } from "@/components/forms/EnquiryForm"
import { PageHero } from "@/components/sections/PageHero"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { MapEmbed } from "@/components/ui/MapEmbed"
import { WhatsAppIcon } from "@/components/ui/icons"
import { business } from "@/config/business"
import { addressLines, mapsDirectionsUrl } from "@/lib/address"
import { pageMetadata } from "@/lib/seo"
import { whatsappLink } from "@/lib/whatsapp"

export const metadata = pageMetadata({
  title: "Contact a Car Mechanic in Katraj",
  description:
    "Contact THE DR AUTO, a car mechanic and multi-brand service centre in Katraj, Pune. Call, WhatsApp, or send a service enquiry. Opposite Katraj Lake.",
  path: "/contact",
})

export default function ContactPage() {
  const whatsapp = whatsappLink(business.whatsapp.defaultMessage)

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a service enquiry"
        description="Call the workshop, send a WhatsApp message, or fill in the form. An enquiry is not a confirmed booking until the workshop agrees a time."
      >
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
      </PageHero>
      <section className="bg-mist py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <Suspense fallback={<EnquiryFormSkeleton />}>
            <EnquiryForm />
          </Suspense>
          <aside className="rounded-2xl bg-ink p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight">{business.name}</h2>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-muted">
              {addressLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-6 space-y-4 text-sm">
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <a href={`tel:${business.phone.tel}`} className="font-semibold text-white">
                  {business.phone.display}
                </a>
              </p>
              <p className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">Approximate hours</span>
                  <span className="mt-1 block text-muted">{business.hours.summary}</span>
                  <span className="mt-1 block text-muted">{business.hours.note}</span>
                </span>
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Button href={`tel:${business.phone.tel}`}>Call Now</Button>
              {whatsapp ? (
                <Button href={whatsapp} variant="whatsapp">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Us
                </Button>
              ) : null}
              <Button href={mapsDirectionsUrl()} variant="secondary">
                Get directions
              </Button>
            </div>
          </aside>
        </Container>
        <Container className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-black/5">
            <MapEmbed className="h-80" />
          </div>
        </Container>
      </section>
    </>
  )
}
