import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ variant = "onDark" }: { variant?: "onDark" | "onLight" }) {
  const onDark = variant === "onDark"
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="THE DR AUTO, home">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-strong text-[15px] font-extrabold tracking-tight text-white">
        DR
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block text-[10px] font-semibold tracking-[0.28em]",
            onDark ? "text-muted" : "text-stone",
          )}
        >
          THE
        </span>
        <span className={cn("mt-1 block text-lg font-extrabold tracking-[0.04em]", onDark ? "text-white" : "text-ink")}>
          DR AUTO
        </span>
      </span>
    </Link>
  )
}
