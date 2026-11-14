import { differentiators } from "@/data/why-us"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { whyIcons } from "@/components/ui/service-icons"

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24" aria-labelledby="why-heading">
      <Container>
        <div className="reveal">
          <SectionHeading
            id="why-heading"
            eyebrow="The way we work"
            title="Why Choose Us"
            description="A direct way of working: clear estimates, careful work, and someone you can speak to while the car is here."
            tone="dark"
          />
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = whyIcons[item.icon]
            return (
              <li key={item.title} className="rounded-2xl border border-white/10 bg-panel p-6 transition-colors hover:border-accent/50">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
