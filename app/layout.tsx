import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Instituto Gama - Fisioterapia Especializada em São Paulo",
    template: "%s | Instituto Gama",
  },
  description:
    "Fisioterapia personalizada no Instituto Gama. Especialistas em RPG, Pilates, Acupuntura, Reabilitação e mais. Atendimento humanizado em São Paulo. Agende sua consulta!",
  keywords: [
    "fisioterapia",
    "RPG",
    "pilates",
    "acupuntura",
    "reabilitação",
    "São Paulo",
    "fisioterapeuta",
    "tratamento",
    "dor nas costas",
    "postura",
  ],
  authors: [{ name: "Instituto Gama" }],
  creator: "Instituto Gama",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://institutogama.com",
    siteName: "Instituto Gama",
    title: "Instituto Gama - Fisioterapia Especializada",
    description:
      "Fisioterapia personalizada com atendimento humanizado. RPG, Pilates, Acupuntura e mais. Agende sua consulta!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Gama - Fisioterapia Especializada",
    description: "Fisioterapia personalizada com atendimento humanizado em São Paulo.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/logo-instituto-gama.avif" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
