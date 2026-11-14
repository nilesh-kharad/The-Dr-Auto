import Image from "next/image"
import { comparisons, galleryNotice, galleryPhotos, galleryUsesPlaceholders } from "@/data/gallery"
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function GallerySection({
  compact = false,
}: {
  compact?: boolean
}) {
  const pairs = compact ? comparisons.slice(0, 1) : comparisons
  const photos = compact ? galleryPhotos.slice(0, 4) : galleryPhotos
  const placeholders = galleryUsesPlaceholders()

  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="gallery-heading">
      <Container>
        <div className="reveal">
          <SectionHeading
            id="gallery-heading"
            eyebrow="Gallery"
            title="Before & After"
            description="A comparison slider for restoration photos, plus a grid you can replace with pictures from the workshop."
          />
        </div>
        {placeholders ? (
          <p className="reveal mt-6 max-w-3xl rounded-2xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-ink">
            {galleryNotice}
          </p>
        ) : null}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {pairs.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {photos.map((photo) => (
            <li key={photo.src + photo.caption} className="overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              </div>
              <p className="px-1 pt-2 text-xs font-medium text-stone">{photo.caption}</p>
            </li>
          ))}
        </ul>
        {compact ? (
          <div className="mt-8">
            <Button href="/gallery" variant="outline">
              Open the gallery
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
