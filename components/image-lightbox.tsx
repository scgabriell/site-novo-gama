"use client"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
  images: Array<{
    src: string
    alt: string
    title: string
    description: string
  }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ImageLightbox({ images, currentIndex, isOpen, onClose, onNext, onPrevious }: ImageLightboxProps) {
  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      {/* Overlay para fechar */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Container da imagem */}
      <div className="relative max-w-4xl max-h-full w-full">
        {/* Botão fechar */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Botão anterior */}
        {images.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={onPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}

        {/* Botão próximo */}
        {images.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={onNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}

        {/* Imagem */}
        <div className="relative w-full h-[70vh] bg-black rounded-lg overflow-hidden">
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>

        {/* Informações da imagem */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{currentImage.title}</h3>
          <p className="text-gray-200">{currentImage.description}</p>
          {images.length > 1 && (
            <p className="text-sm text-gray-300 mt-2">
              {currentIndex + 1} de {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}