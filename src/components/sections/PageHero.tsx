import Image from "next/image"
import type { ReactNode } from "react"
import { Container } from "@/components/ui/Container"

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
      <Container className="relative py-20 pt-28 sm:py-24 sm:pt-32">
        {children}
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{description}</p>
      </Container>
    </section>
  )
}
