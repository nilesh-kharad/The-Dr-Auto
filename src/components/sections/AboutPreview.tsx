import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="about-heading">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <SectionHeading
            id="about-heading"
            eyebrow="The workshop"
            title="More Than Just a Car Garage."
            description="THE DR AUTO is a multi-brand car repair and service centre in Katraj, Pune, opposite Katraj Lake. Drivers bring in everyday cars for servicing, denting and painting, mechanical and engine repairs, AC work, oil changes, washing and diagnostics."
          />
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-stone">
            <p>
              The work is customer-focused. The concern is heard first, the estimate is explained before the job moves ahead, and you can ask for a progress update while the car is in the workshop.
            </p>
            <p>
              Attention to detail and clear communication sit with the repair itself. It is a local workshop for cars across brands.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              More about the workshop
            </Button>
          </div>
        </div>
        <div className="reveal relative">
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-2xl bg-accent sm:block" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/4]">
            <Image
              src="/images/about.jpg"
              alt="Illustrative stock photo of a technician working on a car in a workshop bay."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/90 p-4 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Katraj, Pune</p>
              <p className="mt-1 font-semibold">Opposite Katraj Lake</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
