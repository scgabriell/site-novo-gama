"use client"

import type React from "react"

import { Toaster } from "@/components/ui/toaster"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"
import { ClientOnly } from "@/components/client-only"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ClientOnly>
        <Toaster />
        <WhatsAppFloatingButton />
      </ClientOnly>
    </>
  )
}
