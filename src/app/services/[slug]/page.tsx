import { Suspense } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { EnquiryForm, EnquiryFormSkeleton } from "@/components/forms/EnquiryForm"
import { PageHero } from "@/components/sections/PageHero"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { JsonLd } from "@/components/seo/JsonLd"
import { WhatsAppIcon } from "@/components/ui/icons"
import { getRelatedServices, getService, services } from "@/config/services"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { serviceJsonLd, pageMetadata } from "@/lib/seo"
import { serviceEnquiryMessage, whatsappLink } from "@/lib/whatsapp"
import { business } from "@/config/business"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: "Service" }
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  })
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const related = getRelatedServices(service.slug)
  const whatsapp = whatsappLink(serviceEnquiryMessage(service.name))

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <PageHero eyebrow="Service" title={service.name} description={service.summary}>
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { label: service.name },
          ]}
        />
      </PageHero>
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-stone">
              <p>{service.description}</p>
              <p>
                This is one of the services at {business.name} in {business.address.locality}, {business.address.city}. Ask what the car needs when you enquire, and the workshop will talk through the estimate before work starts.
              </p>
            </div>
            <h2 className="mt-8 text-xl font-bold tracking-tight">What you can ask about</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {service.points.map((point) => (
                <li key={point} className="rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-ink">
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`tel:${business.phone.tel}`}>Call {business.phone.display}</Button>
              {whatsapp ? (
                <Button href={whatsapp} variant="whatsapp">
                  <WhatsAppIcon className="h-4 w-4" />
                  Enquire on WhatsApp
                </Button>
              ) : null}
            </div>
          </div>
          <Suspense fallback={<EnquiryFormSkeleton />}>
            <EnquiryForm defaultService={service.name} />
          </Suspense>
        </Container>
      </section>
      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight">Other services</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
