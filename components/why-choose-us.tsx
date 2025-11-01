"use client"

import { Leaf, Palette, Hand } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Eco-friendly materials",
    description: "Sustainably sourced and environmentally conscious supplies in every kit",
    gradient: "from-mint to-sage",
  },
  {
    icon: Palette,
    title: "Designed by artists",
    description: "Each kit is curated by professional artists who understand quality and creativity",
    gradient: "from-coral to-peach",
  },
  {
    icon: Hand,
    title: "Made for every hand",
    description: "Whether you're a beginner or expert, our kits adapt to your skill level",
    gradient: "from-lavender to-periwinkle",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">More Than Kits</h2>
          <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto text-pretty">
            We're committed to bringing you the best creative experience possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="group relative" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-2xl font-semibold text-charcoal mb-4 text-balance">{feature.title}</h3>
                  <p className="relative text-charcoal/70 font-light leading-relaxed text-pretty">
                    {feature.description}
                  </p>

                  {/* Breathing effect indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-charcoal/20 to-transparent rounded-full" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
