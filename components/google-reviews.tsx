"use client"

import { useState, useEffect } from "react"
import { Star, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

interface GoogleReview {
  author_name: string
  rating: number
  text: string
  time: number
  profile_photo_url?: string
  relative_time_description: string
}

export function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [averageRating, setAverageRating] = useState(0)

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
          
          if (data.reviews.length > 0) {
            const avg = data.reviews.reduce((sum: number, review: GoogleReview) => sum + review.rating, 0) / data.reviews.length
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

  if (loading) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Avaliações do Google
              </h2>
              <p className="text-gray-600">Carregando avaliações...</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    )
  }

  if (error || reviews.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
              <Globe className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Google Reviews</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 text-balance">
              Avaliações do Google
            </h2>
            {averageRating > 0 && (
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">{averageRating}</span>
                <span className="text-gray-600">baseado em {reviews.length}+ avaliações</span>
              </div>
            )}
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <AnimateOnScroll
              key={`${review.author_name}-${index}`}
              animation="fade-up"
              delay={index * 100}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex mb-3 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {review.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    {review.profile_photo_url ? (
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-10 h-10 rounded-full object-cover"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                        {review.author_name.charAt(0)}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{review.author_name}</p>
                      <p className="text-gray-500 text-xs">{review.relative_time_description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Link to Google Reviews */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Instituto+Gama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Globe className="h-5 w-5" />
            Ver todas as avaliações no Google Maps
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
