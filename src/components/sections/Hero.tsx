import { Star } from "lucide-react"
import Image from "next/image"
import { business } from "@/config/business"
import { bookingHref } from "@/config/navigation"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"

const trust = [
  { value: `Est. ${business.establishedYear}`, label: "Established in Katraj" },
  ...(business.rating.show
    ? [
        {
          value: `${business.rating.score}/${business.rating.max}`,
          label: business.rating.reviewCount
            ? `${business.rating.label} · ${business.rating.reviewCount} reviews`
            : business.rating.label,
        },
      ]
    : []),
  { value: "Multi-brand", label: "Professional automotive care" },
  { value: "Clear estimates", label: "Transparent service approach" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
      <Image
        src="/images/hero.jpg"
        alt="Illustrative photograph of a premium car inside a modern workshop. This is not the THE DR AUTO workshop."
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/35" />
      <Container className="relative pb-24 pt-28 sm:pb-16 sm:pt-32">
        <div className="max-lg:mr-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Car service centre in Katraj, Pune</p>
        <span className="mt-5 block h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.02]">
          {business.tagline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{business.heroSupport}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={bookingHref}>Book Your Service</Button>
          <Button href="#services" variant="secondary">
            Explore Our Services
          </Button>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {trust.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <dt className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
                {item.label === business.rating.label ? <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" /> : null}
                {item.value}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{item.label}</dd>
            </div>
          ))}
        </dl>
        </div>
      </Container>
    </section>
  )
}
