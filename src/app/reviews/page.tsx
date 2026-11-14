import { CallToAction } from "@/components/sections/CallToAction"
import { PageHero } from "@/components/sections/PageHero"
import { Testimonials } from "@/components/sections/Testimonials"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Customer Reviews",
  description:
    "Customer feedback for THE DR AUTO, a car service centre in Katraj, Pune. Verified reviews are added only after they are checked. Sample quotations are not shown.",
  path: "/reviews",
})

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Customer feedback"
        description="The public listing score is shown here. Individual comments are added only after someone checks them against the source."
      >
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Reviews" }]} />
      </PageHero>
      <Testimonials />
      <CallToAction />
    </>
  )
}
