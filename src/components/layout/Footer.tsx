import Link from "next/link"
import { business } from "@/config/business"
import { navLinks } from "@/config/navigation"
import { services } from "@/config/services"
import { Logo } from "@/components/ui/Logo"
import { addressLines } from "@/lib/address"

export function Footer() {
  return (
    <footer className="border-t-2 border-accent bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Multi-brand car repair and servicing in Katraj, Pune. Denting, painting, mechanical work, AC service and routine care.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Explore</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Services</h2>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-sm text-muted transition-colors hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Visit</h2>
          <p className="mt-4 text-sm font-semibold">{business.name}</p>
          <address className="mt-2 space-y-1 text-sm not-italic leading-relaxed text-muted">
            {addressLines().map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-4 text-sm text-muted">{business.hours.summary}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">{business.hours.note}</p>
          <a href={`tel:${business.phone.tel}`} className="mt-4 inline-block text-sm font-semibold text-white hover:text-accent">
            {business.phone.display}
          </a>
          {business.email ? (
            <a href={`mailto:${business.email}`} className="mt-2 block text-sm text-muted hover:text-white">
              {business.email}
            </a>
          ) : null}
          {business.social.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-3">
              {business.social.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted hover:text-white" target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 pb-24 text-xs text-muted sm:px-6 lg:px-8">
          <p>
            © {business.copyrightYear} {business.name}. All rights reserved.
          </p>
          <p>Katraj, Pune, Maharashtra.</p>
        </div>
      </div>
    </footer>
  )
}
