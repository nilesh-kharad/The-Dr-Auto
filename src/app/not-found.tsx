import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"

export default function NotFound() {
  return (
    <section className="bg-ink text-white">
      <Container className="py-28 pt-36">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">This page is not on the lot.</h1>
        <p className="mt-4 max-w-lg text-white/75">The link may be old. Head back to the workshop homepage or look through the services.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back home</Button>
          <Button href="/services" variant="secondary">
            View services
          </Button>
        </div>
      </Container>
    </section>
  )
}
