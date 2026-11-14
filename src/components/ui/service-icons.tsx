import {
  AirVent,
  CarFront,
  Cog,
  Droplets,
  Fuel,
  Gauge,
  HandHeart,
  Headset,
  MessagesSquare,
  Paintbrush,
  ReceiptText,
  ScanEye,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import type { ServiceIconName } from "@/config/services"
import type { WhyIconName } from "@/data/why-us"

export const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  paintbrush: Paintbrush,
  car: CarFront,
  wrench: Wrench,
  cog: Cog,
  air: AirVent,
  droplets: Droplets,
  fuel: Fuel,
  gauge: Gauge,
}

export const whyIcons: Record<WhyIconName, LucideIcon> = {
  receipt: ReceiptText,
  wrench: Wrench,
  hand: HandHeart,
  messages: MessagesSquare,
  scan: ScanEye,
  headset: Headset,
}
