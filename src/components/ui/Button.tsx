import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-accent-strong text-white hover:bg-[#a41612]",
  secondary: "border border-white/30 bg-white/5 text-white hover:bg-white hover:text-ink",
  outline: "border border-ink/15 bg-white text-ink hover:border-ink hover:bg-ink hover:text-white",
  whatsapp: "bg-[#075E54] text-white hover:bg-[#054c44]",
}

type Variant = keyof typeof variants

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60"

type LinkButton = {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
}

type NativeButton = {
  href?: undefined
  children: ReactNode
  variant?: Variant
  className?: string
  type?: "button" | "submit"
  onClick?: () => void
  disabled?: boolean
}

export function Button(props: LinkButton | NativeButton) {
  const className = cn(base, variants[props.variant ?? "primary"], props.className)

  if ("href" in props && props.href) {
    const external = props.href.startsWith("http")
    if (external || props.href.startsWith("tel:") || props.href.startsWith("mailto:")) {
      return (
        <a
          href={props.href}
          className={className}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {props.children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    )
  }

  const button = props as NativeButton
  return (
    <button type={button.type ?? "button"} className={className} onClick={button.onClick} disabled={button.disabled}>
      {button.children}
    </button>
  )
}
