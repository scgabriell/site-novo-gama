import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Instituto Gama - Fisioterapia Especializada",
  description: "Fisioterapia personalizada no Instituto Gama. RPG, Pilates, Reabilitação e mais. Agende sua consulta!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/logo-instituto-gama.png" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <div suppressHydrationWarning style={{ minHeight: "100vh" }}>
          {children}
        </div>
        <div suppressHydrationWarning>
          <Toaster />
          <WhatsAppFloatingButton />
        </div>
      </body>
    </html>
  )
}
