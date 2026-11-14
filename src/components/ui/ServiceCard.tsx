"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import type { Service } from "@/config/services"
import { WhatsAppIcon } from "@/components/ui/icons"
import { serviceIcons } from "@/components/ui/service-icons"
import { serviceEnquiryMessage, whatsappLink } from "@/lib/whatsapp"

export function ServiceCard({ service }: { service: Service }) {
  const reduce = useReducedMotion()
  const Icon = serviceIcons[service.icon]
  const whatsapp = whatsappLink(serviceEnquiryMessage(service.name))
  const enquireHref = whatsapp ?? `/contact?service=${service.slug}#enquiry`

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent-strong">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">{service.summary}</p>
        <div className="mt-5 flex items-center justify-between gap-3 text-sm font-semibold">
          <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1 text-ink hover:text-accent-strong">
            Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {whatsapp ? (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#075E54]">
              <WhatsAppIcon className="h-4 w-4" />
              Enquire
            </a>
          ) : (
            <Link href={enquireHref} className="text-accent-strong">
              Enquire
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}
