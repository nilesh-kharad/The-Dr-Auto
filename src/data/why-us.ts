export type WhyIconName = "receipt" | "wrench" | "hand" | "messages" | "scan" | "headset"

export type Differentiator = {
  title: string
  description: string
  icon: WhyIconName
}

export const differentiators: Differentiator[] = [
  {
    title: "Transparent Estimates",
    description: "The job and the estimate are explained before work goes ahead, so you know what is being done.",
    icon: "receipt",
  },
  {
    title: "Quality Workmanship",
    description: "Repairs and servicing are carried out with care for how the car drives and how it looks afterwards.",
    icon: "wrench",
  },
  {
    title: "Customer-Focused Approach",
    description: "The visit starts from the concern you bring in. The workshop works from that, not from a fixed script.",
    icon: "hand",
  },
  {
    title: "Timely Progress Updates",
    description: "While the car is in the workshop, you can ask where the job stands and what is left.",
    icon: "messages",
  },
  {
    title: "Attention to Detail",
    description: "Panels, finish and the smaller checks are treated as part of the job, not an afterthought.",
    icon: "scan",
  },
  {
    title: "Professional Support",
    description: "Call or send a message and the workshop will help you with the next step for your car.",
    icon: "headset",
  },
]
