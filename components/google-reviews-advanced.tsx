"use client"

import { useState, useEffect } from "react"
import { Star, Globe, ExternalLink, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { cn } from "@/lib/utils"

interface GoogleReview {
  author_name: string
  rating: number
  text: string
  time: number
  profile_photo_url?: string
  relative_time_description: string
}

export function GoogleReviewsAdvanced() {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [averageRating, setAverageRating] = useState(0)
  const [totalReviews, setTotalReviews] = useState(0)

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/google-reviews")

        if (!response.ok) {
          throw new Error("Erro ao buscar avaliações")
        }

        const data = await response.json()

        if (data.reviews && Array.isArray(data.reviews)) {
          setReviews(data.reviews.slice(0, 6))
          setTotalReviews(data.reviews.length)

          if (data.reviews.length > 0) {
            const avg =
              data.reviews.reduce((sum: number, review: GoogleReview) => sum + review.rating, 0) /
              data.reviews.length
            setAverageRating(parseFloat(avg.toFixed(1)))
          }
        }
      } catch (err) {
        console.error("Erro ao carregar Google Reviews:", err)
        setError("Não foi possível carregar as avaliações. Tente novamente mais tarde.")
      } finally {
        setLoading(false)
      }
    }

    fetchGoogleReviews()
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4 w-4",
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        )}
      />
    ))
  }

  if (loading) {
    return (
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <div className="inline-block h-8 w-32 bg-gray-200 rounded-md animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 border border-gray-200">
              <Globe className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Avaliações do Google</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que nossos pacientes dizem
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Confira as experiências reais de quem já confiou no Instituto Gama
            </p>

            {/* Rating Summary */}
            {!error && reviews.length > 0 && (
              <div className="inline-flex items-center gap-6 bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900">{averageRating}</div>
                  <div className="flex gap-1 justify-center mt-2">{renderStars(Math.round(averageRating))}</div>
                  <p className="text-sm text-gray-600 mt-2">
                    Baseado em {totalReviews} avaliações
                  </p>
                </div>
                <div className="hidden md:block w-px h-16 bg-gray-200" />
                <div className="text-left">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">{totalReviews}+</span> pacientes
                    satisfeitos
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Avaliações verificadas do Google
                  </p>
                </div>
              </div>
            )}
          </div>
        </AnimateOnScroll>

        {/* Error State */}
        {error && (
          <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900">Avaliações temporariamente indisponíveis</h3>
              <p className="text-sm text-yellow-800 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex gap-2 mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="font-semibold text-gray-900 text-sm">{review.author_name}</p>
                      <p className="text-xs text-gray-500">{review.relative_time_description}</p>
                    </div>
                    {review.profile_photo_url && (
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="h-10 w-10 rounded-full ml-2"
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/Instituto+Gama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Ver todas as avaliações no Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
