import { CallToAction } from "@/components/sections/CallToAction"
import { PageHero } from "@/components/sections/PageHero"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Car Repair in Katraj, Pune",
  description:
    "Car repair in Katraj, Pune at THE DR AUTO. Denting and painting, periodic servicing, mechanical and engine repairs, AC service, oil changes, washing and diagnostics.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Car repair and servicing in Katraj"
        description="Multi-brand work from one workshop opposite Katraj Lake. Choose a service to see what it covers, then send an enquiry or call."
      >
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Services" }]} />
      </PageHero>
      <ServicesGrid showHeading={false} showAllLink={false} />
      <CallToAction />
    </>
  )
}
