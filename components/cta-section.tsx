"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Rainbow motion background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-lavender via-coral via-mint via-periwinkle to-sand opacity-60 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lavender/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/20 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight text-balance">
          Create. Color. Connect.
        </h2>

        <p className="text-2xl md:text-3xl text-charcoal/80 font-light text-pretty">
          Your next masterpiece fits in your pocket.
        </p>

        <div className="pt-8">
          <Link href="/products">
            <Button
              size="lg"
              className="watercolor-btn bg-charcoal hover:bg-charcoal/90 text-white px-12 py-8 text-xl rounded-full shadow-2xl group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                Shop Now
              </span>
              {/* Color explosion effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-coral via-lavender to-mint opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-4 pt-12">
          <div className="w-3 h-3 rounded-full bg-lavender animate-bounce" />
          <div className="w-3 h-3 rounded-full bg-coral animate-bounce delay-100" />
          <div className="w-3 h-3 rounded-full bg-mint animate-bounce delay-200" />
          <div className="w-3 h-3 rounded-full bg-periwinkle animate-bounce delay-300" />
          <div className="w-3 h-3 rounded-full bg-sand animate-bounce delay-500" />
        </div>
      </div>
    </section>
  )
}
