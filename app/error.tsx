"use client" // Este é um Client Component

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Opcionalmente, logue o erro para um serviço de relatórios de erro
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 text-gray-800 p-4">
      <h2 className="text-4xl font-bold text-red-700 mb-4">Algo deu errado!</h2>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-md">
        Lamentamos, mas ocorreu um erro inesperado. Por favor, tente novamente.
      </p>
      <Button
        onClick={
          // Tente se recuperar tentando renderizar o segmento novamente
          () => reset()
        }
        size="lg"
        className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
      >
        Tentar Novamente
      </Button>
    </div>
  )
}
