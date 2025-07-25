import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Fisio Alice Gama - Fisioterapia Especializada",
  description: "Fisioterapia personalizada com Alice Gama. RPG, Pilates, Reabilitação e mais. Agende sua consulta!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
