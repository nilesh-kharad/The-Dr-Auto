"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, useState, type FormEvent, type ReactNode } from "react"
import { business } from "@/config/business"
import { getService, serviceChoices } from "@/config/services"
import { Button } from "@/components/ui/Button"
import { submitEnquiry, todayISO, validateEnquiry, type EnquiryErrors, type EnquiryInput } from "@/lib/enquiry"
import { cn } from "@/lib/utils"

const empty: EnquiryInput = {
  name: "",
  phone: "",
  carBrand: "",
  carModel: "",
  service: "",
  preferredDate: "",
  message: "",
}

const fieldClass =
  "w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone/70 focus:border-accent-strong"

export function EnquiryFormSkeleton() {
  return <div className="h-[36rem] animate-pulse rounded-2xl bg-mist" aria-hidden="true" />
}

export function EnquiryForm({ defaultService }: { defaultService?: string }) {
  const searchParams = useSearchParams()
  const fromQuery = getService(searchParams.get("service") ?? "")?.name
  const initialService = defaultService || fromQuery || ""
  const [values, setValues] = useState<EnquiryInput>({ ...empty, service: initialService })
  const [honeypot, setHoneypot] = useState("")
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ tone: "ok" | "error"; text: string; url?: string } | null>(null)
  const minDate = useMemo(() => todayISO(), [])
  const choices = serviceChoices()
  const usesApi = Boolean(process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT)

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setValues((current) => ({ ...current, [key]: value }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFeedback(null)
    if (honeypot) {
      setFeedback({
        tone: "ok",
        text: "Your enquiry is noted. This does not confirm a booking.",
      })
      return
    }
    const nextErrors = validateEnquiry(values)
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus()
      return
    }

    setSubmitting(true)
    const result = await submitEnquiry(values)
    setSubmitting(false)

    if (!result.ok) {
      setFeedback({ tone: "error", text: result.message })
      return
    }

    if (result.channel === "api") {
      setFeedback({
        tone: "ok",
        text: "Your enquiry has been sent. The workshop will contact you. This is not a confirmed booking.",
      })
      setValues({ ...empty, service: initialService })
      return
    }

    const opened = window.open(result.url, "_blank", "noopener,noreferrer")
    setFeedback({
      tone: "ok",
      text: opened
        ? "WhatsApp is open with your enquiry. Send that message to reach the workshop. Opening WhatsApp does not confirm a booking."
        : "Your browser blocked the WhatsApp window. Use the button below to open it. Nothing has been booked yet.",
      url: result.url,
    })
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm sm:p-8" id="enquiry">
      <h2 className="text-2xl font-extrabold tracking-tight text-ink">Service enquiry</h2>
      <p className="mt-2 text-sm leading-relaxed text-stone">
        Share the car and the work you need. {usesApi ? "The workshop receives the enquiry from this form." : "The details are prepared in WhatsApp for you to send."} This does not confirm a booking.
      </p>

      {feedback ? (
        <div
          role="status"
          className={cn(
            "mt-5 rounded-xl px-4 py-3 text-sm leading-relaxed",
            feedback.tone === "ok" ? "bg-ink text-white" : "bg-red-50 text-accent-strong",
          )}
        >
          <p>{feedback.text}</p>
          {feedback.url ? (
            <a href={feedback.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold underline">
              Open WhatsApp
            </a>
          ) : null}
        </div>
      ) : null}

      {Object.keys(errors).length > 0 ? (
        <p role="alert" className="mt-5 text-sm font-medium text-accent-strong">
          Check the highlighted fields and try again.
        </p>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Customer name" id="name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            required
          />
        </Field>
        <Field label="Phone number" id="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            required
          />
        </Field>
        <Field label="Car brand" id="carBrand" error={errors.carBrand}>
          <input
            id="carBrand"
            name="carBrand"
            autoComplete="off"
            placeholder="e.g. Hyundai"
            value={values.carBrand}
            onChange={(event) => update("carBrand", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.carBrand)}
            required
          />
        </Field>
        <Field label="Car model" id="carModel" error={errors.carModel}>
          <input
            id="carModel"
            name="carModel"
            autoComplete="off"
            placeholder="e.g. Creta"
            value={values.carModel}
            onChange={(event) => update("carModel", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.carModel)}
            required
          />
        </Field>
        <Field label="Service required" id="service" error={errors.service} className="sm:col-span-2">
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.service)}
            required
          >
            <option value="">Select a service</option>
            {choices.map((choice) => (
              <option key={choice} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred date" id="preferredDate" error={errors.preferredDate} className="sm:col-span-2">
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            min={minDate}
            value={values.preferredDate}
            onChange={(event) => update("preferredDate", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.preferredDate)}
            required
          />
        </Field>
        <Field label="Additional message" id="message" error={errors.message} className="sm:col-span-2" optional>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.message)}
          />
        </Field>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Preparing…" : usesApi ? "Submit enquiry" : "Continue on WhatsApp"}
        </Button>
        <a href={`tel:${business.phone.tel}`} className="text-sm font-semibold text-ink hover:text-accent-strong">
          Or call {business.phone.display}
        </a>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-stone">
        {usesApi
          ? "Sending this form does not reserve a slot."
          : "The workshop sees the enquiry only after you press send in WhatsApp. Opening the chat does not reserve a slot."}
      </p>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  children,
  className,
  optional,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
  className?: string
  optional?: boolean
}) {
  const errorId = `${id}-error`
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {optional ? <span className="font-normal text-stone"> (optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-accent-strong">
          {error}
        </p>
      ) : null}
    </div>
  )
}
