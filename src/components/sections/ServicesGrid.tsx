import { services } from "@/config/services"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ServiceCard } from "@/components/ui/ServiceCard"

export function ServicesGrid({
  showHeading = true,
  showAllLink = true,
}: {
  showHeading?: boolean
  showAllLink?: boolean
}) {
  return (
    <section id="services" className="bg-mist py-20 sm:py-24" aria-labelledby="services-heading">
      <Container>
        {showHeading ? null : <h2 id="services-heading" className="sr-only">Services</h2>}
        {showHeading ? (
          <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              id="services-heading"
              eyebrow="Services"
              title="Repair, service and finishing."
              description="Car repair in Katraj for multi-brand vehicles: bodywork, periodic servicing, mechanical and engine repairs, car AC service, oil changes, washing and diagnostics."
            />
            {showAllLink ? (
              <Button href="/services" variant="outline" className="shrink-0">
                View All Services
              </Button>
            ) : null}
          </div>
        ) : null}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
