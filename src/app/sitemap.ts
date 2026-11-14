import type { MetadataRoute } from "next"
import { services } from "@/config/services"
import { absoluteUrl } from "@/lib/utils"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-14T00:00:00.000Z")
  const paths = ["/", "/about", "/services", "/gallery", "/reviews", "/contact", ...services.map((service) => `/services/${service.slug}`)]

  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.7 : 0.8,
  }))
}
