"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloatingButton() {
  const whatsappLink = "https://wa.me/5511932433033?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!"

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="icon"
        className="w-16 h-16 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center"
        aria-label="Agendar via WhatsApp"
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-8 w-8 text-white" />
        </a>
      </Button>
    </div>
  )
}
