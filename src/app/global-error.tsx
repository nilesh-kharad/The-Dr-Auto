"use client"

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#111214", color: "#fff", fontFamily: "sans-serif" }}>
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "8rem 1.5rem" }}>
          <h1 style={{ fontSize: "2rem" }}>Something went wrong.</h1>
          <p>Reload the page or try again in a moment.</p>
          <button type="button" onClick={reset} style={{ marginTop: "1.5rem", padding: "0.75rem 1rem" }}>
            Try again
          </button>
        </main>
      </body>
    </html>
  )
}
