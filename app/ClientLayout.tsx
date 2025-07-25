"use client" // Adicione esta linha no topo do arquivo!

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
// Remova a importação SessionProvider
// - import { SessionProvider } from "next-auth/react"
import { Toaster } from "@/components/ui/toaster" // Para os toasts
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload da imagem crítica */}
        <link rel="preload" as="image" href="/images/alice-gama.png" fetchPriority="high" />
        {/* Preconnect para otimizar carregamento de recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {/* Remova o SessionProvider */}
        {/* - <SessionProvider> */}
        {children}
        <Toaster />
        <WhatsAppFloatingButton />
        {/* - </SessionProvider> */}
      </body>
    </html>
  )
}
