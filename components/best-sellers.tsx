"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const bestSellers = [
  {
    slug: "lavender-dreams-cross-stitch",
    name: "Lavender Dreams Cross Stitch",
    price: "$29.99",
    rating: 5,
    reviews: 234,
    image: "/lavender-cross-stitch-embroidery-kit.jpg",
    badge: "Best Seller",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLE1?tag=craftmini-20",
  },
  {
    slug: "sunset-macrame-wall-hanging",
    name: "Sunset Macrame Wall Hanging",
    price: "$36.99",
    rating: 5,
    reviews: 189,
    image: "/sunset-macrame-wall-hanging-craft.jpg",
    badge: "Trending",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLE2?tag=craftmini-20",
  },
  {
    slug: "botanical-watercolor-set",
    name: "Botanical Watercolor Set",
    price: "$32.99",
    rating: 5,
    reviews: 312,
    image: "/botanical-watercolor-painting-set.jpg",
    badge: "Customer Favorite",
    amazonUrl: "https://www.amazon.com/dp/EXAMPLE3?tag=craftmini-20",
  },
]

export function BestSellers() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % bestSellers.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + bestSellers.length) % bestSellers.length)
  }

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated color flashes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coral/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-lavender/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">Loved by Makers</h2>
          <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto text-pretty">
            Our most popular kits that creators can't get enough of
          </p>
        </div>

        <div className="relative">
          <Card className="bg-white/70 backdrop-blur-md border-white/80 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  <img
                    src={bestSellers[currentIndex].image || "/placeholder.svg"}
                    alt={bestSellers[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-coral text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {bestSellers[currentIndex].badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal text-balance">
                    {bestSellers[currentIndex].name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-coral text-coral" />
                      ))}
                    </div>
                    <span className="text-charcoal/70">({bestSellers[currentIndex].reviews} reviews)</span>
                  </div>

                  <p className="text-charcoal/70 font-light leading-relaxed text-pretty">
                    One of our most beloved kits, perfect for both beginners and experienced crafters. Includes
                    everything you need to create something beautiful.
                  </p>

                  {/* Amazon URL Button */}
                  <Button variant="default" className="bg-coral text-white hover:bg-coral/80">
                    <Link href={bestSellers[currentIndex].amazonUrl} target="_blank">
                      Buy on Amazon
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {bestSellers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-coral w-8" : "bg-charcoal/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
