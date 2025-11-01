"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Palette } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Watercolor background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-coral/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mint/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="inline-block">
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-2 tracking-wide">CraftMini Kits</h1>
          <p className="text-sm md:text-base text-charcoal/70 italic font-light tracking-widest">
            Art in Motion. Color in Every Scroll.
          </p>
        </div>

        {/* Main headline */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-tight text-balance">
            Make Every Color Yours
          </h2>
          <p className="text-xl md:text-2xl text-charcoal/80 font-light max-w-2xl mx-auto text-pretty">
            Small Kits. Big Creativity.
          </p>
          <p className="text-lg md:text-xl text-charcoal/70 font-light max-w-xl mx-auto text-pretty">
            Handpicked DIY mini-kits that bring your art to life.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/products">
            <Button
              size="lg"
              className="watercolor-btn bg-coral hover:bg-coral-light text-white px-8 py-6 text-lg rounded-full shadow-lg group"
            >
              <Palette className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Shop Kits
            </Button>
          </Link>
          <Link href="/gallery">
            <Button
              size="lg"
              variant="outline"
              className="watercolor-btn border-2 border-charcoal/20 bg-white/60 backdrop-blur-sm hover:bg-white/80 text-charcoal px-8 py-6 text-lg rounded-full shadow-lg group"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Gallery
            </Button>
          </Link>
        </div>

        {/* Decorative brush strokes */}
      </div>
    </section>
  )
}
