"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhatsAppFloatingButton() {
  const whatsappLink = "https://wa.me/5511932433033?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!"
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipDismissed, setTooltipDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible && !tooltipDismissed) {
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 3000)
      return () => clearTimeout(tooltipTimer)
    }
  }, [isVisible, tooltipDismissed])

  const dismissTooltip = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowTooltip(false)
    setTooltipDismissed(true)
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      )}
    >
      {/* Tooltip */}
      <div
        className={cn(
          "absolute bottom-full right-0 mb-3 transition-all duration-300",
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <div className="relative bg-white rounded-xl shadow-xl p-4 max-w-[200px] border border-gray-100">
          <button
            onClick={dismissTooltip}
            className="absolute -top-2 -right-2 p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Fechar"
          >
            <X className="h-3 w-3 text-gray-500" />
          </button>
          <p className="text-sm text-gray-700 font-medium">
            Precisa de ajuda? Fale conosco!
          </p>
          <div className="absolute bottom-0 right-6 translate-y-full">
            <div className="border-8 border-transparent border-t-white" />
          </div>
        </div>
      </div>

      {/* Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Agendar via WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
        
        {/* Icon */}
        <MessageCircle className="h-8 w-8 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  )
}
