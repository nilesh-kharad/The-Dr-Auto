import { Star } from "lucide-react"
import { business } from "@/config/business"
import { publishedTestimonials } from "@/data/testimonials"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { WhatsAppIcon } from "@/components/ui/icons"
import { whatsappLink } from "@/lib/whatsapp"

export function Testimonials() {
  const reviews = publishedTestimonials()
  const whatsapp = whatsappLink(business.whatsapp.defaultMessage)

  return (
    <section className="bg-mist py-20 sm:py-24" aria-labelledby="reviews-heading">
      <Container>
        <div className="reveal">
          <SectionHeading
            id="reviews-heading"
            eyebrow="Reviews"
            title="Customer feedback"
            description="Names and quotations are published only after they are checked. Sample reviews are not used."
          />
        </div>
        {reviews.length > 0 ? (
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <li key={review.id} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <p className="flex items-center gap-1 text-accent-strong" aria-label={`${review.rating} out of 5`}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${index < review.rating ? "fill-accent text-accent" : "text-black/15"}`}
                      aria-hidden="true"
                    />
                  ))}
                </p>
                <blockquote className="mt-4 text-sm leading-relaxed text-ink">“{review.quote}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="block font-semibold">{review.name}</span>
                  <span className="text-stone">
                    {review.source}
                    {review.date ? ` · ${review.date}` : ""}
                  </span>
                </figcaption>
              </li>
            ))}
          </ul>
        ) : (
          <div className="reveal mt-10 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                {business.rating.show ? (
                  <p className="text-4xl font-extrabold tracking-tight text-ink">
                    {business.rating.score}
                    <span className="text-lg font-semibold text-stone">/{business.rating.max}</span>
                  </p>
                ) : null}
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-stone">{business.rating.label}</p>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-stone sm:text-base">
                Verified customer comments will appear in this section. THE DR AUTO is publicly listed at {business.rating.score}/
                {business.rating.max}. Individual names and quotations stay off this page until they are confirmed, so nothing here is a sample quote.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`tel:${business.phone.tel}`}>Call {business.phone.display}</Button>
              {whatsapp ? (
                <Button href={whatsapp} variant="whatsapp">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Us
                </Button>
              ) : null}
              {business.googleReviewsUrl ? (
                <Button href={business.googleReviewsUrl} variant="outline">
                  Google listing
                </Button>
              ) : null}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
