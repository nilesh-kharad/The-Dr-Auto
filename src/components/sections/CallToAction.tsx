import { Phone } from "lucide-react"
import { business } from "@/config/business"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { WhatsAppIcon } from "@/components/ui/icons"
import { whatsappLink } from "@/lib/whatsapp"

export function CallToAction() {
  const whatsapp = whatsappLink(business.whatsapp.defaultMessage)

  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20" aria-labelledby="cta-heading">
      <p aria-hidden="true" className="pointer-events-none absolute -right-4 bottom-0 select-none text-[9rem] font-extrabold leading-none text-white/[0.04] sm:text-[14rem]">
        DR
      </p>
      <Container className="relative">
        <div className="max-w-3xl border-l-4 border-accent pl-6">
          <h2 id="cta-heading" className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Need Expert Care for Your Car?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Get in touch with THE DR AUTO and let our team help you with your car servicing and repair requirements.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${business.phone.tel}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </Button>
            {whatsapp ? (
              <Button href={whatsapp} variant="secondary">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </Button>
            ) : (
              <Button href="/contact#enquiry" variant="secondary">
                Send an enquiry
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
