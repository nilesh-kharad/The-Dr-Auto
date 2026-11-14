"use client"

import { Menu, Phone, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useId, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { business } from "@/config/business"
import { bookingHref, navLinks } from "@/config/navigation"
import { Button } from "@/components/ui/Button"
import { WhatsAppIcon } from "@/components/ui/icons"
import { Logo } from "@/components/ui/Logo"
import { whatsappLink } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const pathname = usePathname()
  const reduce = useReducedMotion()
  const menuId = useId()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const open = openPath === pathname
  const whatsapp = whatsappLink(business.whatsapp.defaultMessage)
  const closeMenu = () => setOpenPath(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    const frame = requestAnimationFrame(onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpenPath(null)
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
    }
  }, [open])

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-white/10 bg-ink/95 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-ink/80 to-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActive(link.href, pathname)
            return (
                <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
                className={cn(
                  "relative text-sm font-medium text-white/75 transition-colors hover:text-white",
                  "after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-accent after:transition-transform after:content-['']",
                  active ? "text-white after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <Button href={bookingHref} className="px-3 py-2">
              Book
            </Button>
          </div>
          <div className="hidden lg:block">
            <Button href={bookingHref}>Book a Service</Button>
          </div>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.22 }}
            style={{ zIndex: 60 }}
            className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ink lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobile">
              {navLinks.map((link) => {
                const active = isActive(link.href, pathname)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                    className={cn(
                      "rounded-xl px-3 py-3 text-2xl font-semibold tracking-tight",
                      active ? "text-white" : "text-white/75",
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="mt-4 flex flex-col gap-3">
                <Button href={bookingHref}>Book a Service</Button>
                <Button href={`tel:${business.phone.tel}`} variant="secondary">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {business.phone.display}
                </Button>
                {whatsapp ? (
                  <Button href={whatsapp} variant="whatsapp">
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp Us
                  </Button>
                ) : null}
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
