"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="bg-ink text-white">
      <Container className="py-28 pt-36">
        <h1 className="text-4xl font-extrabold tracking-tight">Something went wrong.</h1>
        <p className="mt-4 max-w-lg text-white/75">The page did not load. Try again, or call the workshop if you were in the middle of an enquiry.</p>
        <div className="mt-8">
          <Button type="button" onClick={reset}>
            Try again
          </Button>
        </div>
      </Container>
    </section>
  )
}
