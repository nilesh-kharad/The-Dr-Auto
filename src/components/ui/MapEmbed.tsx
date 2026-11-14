import { mapsEmbedUrl } from "@/lib/address"
import { cn } from "@/lib/utils"

export function MapEmbed({ className }: { className?: string }) {
  return (
    <iframe
      title="Map showing THE DR AUTO, opposite Katraj Lake, Pune"
      src={mapsEmbedUrl()}
      className={cn("h-full min-h-72 w-full border-0", className)}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
