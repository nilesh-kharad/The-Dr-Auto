import { business } from "@/config/business"

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ")
}

export function absoluteUrl(path = "/") {
  const base = business.siteUrl.replace(/\/$/, "")
  if (!path || path === "/") return `${base}/`
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}
