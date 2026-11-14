import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"
import { Analytics } from "@/components/seo/Analytics"
import { JsonLd } from "@/components/seo/JsonLd"
import { business } from "@/config/business"
import { autoRepairJsonLd } from "@/lib/seo"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const verification =
  googleVerification && /^[A-Za-z0-9_-]+$/.test(googleVerification) ? { google: googleVerification } : undefined

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Car Service Centre in Katraj, Pune | THE DR AUTO",
    template: "%s | THE DR AUTO",
  },
  description:
    "THE DR AUTO is a multi-brand car service centre in Katraj, Pune. Book denting, painting, servicing, mechanical repairs, AC work and diagnostics opposite Katraj Lake.",
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: business.locale,
    siteName: business.name,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Illustrative photograph of a premium car in a workshop, used by THE DR AUTO.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${manrope.className} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <JsonLd data={autoRepairJsonLd()} />
      </body>
    </html>
  )
}
