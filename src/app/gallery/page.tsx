import { CallToAction } from "@/components/sections/CallToAction"
import { GallerySection } from "@/components/sections/GallerySection"
import { PageHero } from "@/components/sections/PageHero"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Workshop Gallery",
  description:
    "Placeholder gallery for THE DR AUTO in Katraj, Pune. Comparison slider and photo grid, ready to swap for real workshop photographs.",
  path: "/gallery",
})

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Before & After"
        description="The layout is ready for workshop photographs. The pictures on this page are stock samples, not customer cars from THE DR AUTO."
      >
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Gallery" }]} />
      </PageHero>
      <GallerySection />
      <CallToAction />
    </>
  )
}
