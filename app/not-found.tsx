import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 text-gray-800 p-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Página Não Encontrada</h2>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-md">
        Ops! Parece que a página que você está procurando não existe ou foi movida.
      </p>
      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white"
      >
        <Link href="/">Voltar para a Página Inicial</Link>
      </Button>
    </div>
  )
}
