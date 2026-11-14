import { AboutPreview } from "@/components/sections/AboutPreview"
import { CallToAction } from "@/components/sections/CallToAction"
import { GallerySection } from "@/components/sections/GallerySection"
import { Hero } from "@/components/sections/Hero"
import { LocationSection } from "@/components/sections/LocationSection"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { Testimonials } from "@/components/sections/Testimonials"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Car Service Centre in Katraj, Pune | THE DR AUTO",
  description:
    "THE DR AUTO is a multi-brand car service centre in Katraj, Pune. Book denting, painting, servicing, mechanical repairs, AC work and diagnostics opposite Katraj Lake.",
  path: "/",
  absolute: true,
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <GallerySection compact />
      <Testimonials />
      <CallToAction />
      <LocationSection />
    </>
  )
}
