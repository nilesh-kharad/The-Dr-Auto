"use client"

import Image from "next/image"
import { useState } from "react"
import type { GalleryComparison } from "@/data/gallery"

export function BeforeAfterSlider({ item }: { item: GalleryComparison }) {
  const [value, setValue] = useState(52)
  const leftLabel = item.isPlaceholder ? "Photograph A" : "Before"
  const rightLabel = item.isPlaceholder ? "Photograph B" : "After"

  return (
    <figure className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <div className="relative aspect-[16/10] bg-ink">
        <Image
          src={item.right.src}
          alt={item.right.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          <Image
            src={item.left.src}
            alt={item.left.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
          />
        </div>
        <input
          type="range"
          min={5}
          max={95}
          value={value}
          aria-label="Compare the two photographs"
          aria-valuetext={`${value} percent`}
          onChange={(event) => setValue(Number(event.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xs font-bold text-ink shadow">
            ↔
          </span>
        </div>
        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white">
          {leftLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white">
          {rightLabel}
        </span>
      </div>
      <figcaption className="px-4 py-3 text-sm leading-relaxed text-stone">{item.caption}</figcaption>
    </figure>
  )
}
