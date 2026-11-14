import Image from "next/image"
import { CallToAction } from "@/components/sections/CallToAction"
import { PageHero } from "@/components/sections/PageHero"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { business } from "@/config/business"
import { bookingHref } from "@/config/navigation"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "About the Workshop",
  description:
    "THE DR AUTO is a multi-brand car repair and service centre in Katraj, Pune, opposite Katraj Lake. Clear estimates, careful work and a workshop you can call.",
  path: "/about",
})

const steps = [
  "Call or send a WhatsApp message with the car and the problem.",
  "Agree a time and bring the car to the workshop opposite Katraj Lake.",
  "The work is discussed and the estimate is shared before it proceeds.",
  "Collect the car once the agreed work is done.",
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="More Than Just a Car Garage."
        description="A local workshop in Katraj for servicing, denting, painting and repair, with the job explained before it starts."
      >
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "About" }]} />
      </PageHero>
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-stone">
            <p>
              {business.name} is a {business.category.toLowerCase()} in {business.address.locality}, {business.address.city}. The workshop is at {business.address.line1}, {business.address.line2.toLowerCase()}, in {business.address.line3}.
            </p>
            <p>
              People come in for periodic servicing, denting and painting, mechanical repairs, engine work, car AC service, oil changes, washing and diagnostics. The approach is customer-focused: listen, explain the estimate, and keep the conversation open while the car is here.
            </p>
            <p>
              The workshop has been in Katraj since {business.establishedYear}. Call before you visit so the hours for that day are confirmed.
            </p>
            <Button href={bookingHref}>Book a Service</Button>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/about.jpg"
              alt="Illustrative stock photo of a technician working on a car in a workshop."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>
      <section className="bg-mist py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">A visit</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">How an enquiry usually moves</h2>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              This is the ordinary path. The exact job and the time it takes depend on the car.
            </p>
          </div>
          <ol className="grid gap-3">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl bg-white p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <WhyChooseUs />
      <CallToAction />
    </>
  )
}
