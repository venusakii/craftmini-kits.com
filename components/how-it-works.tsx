"use client"

import { Package, Eye, Sparkles, Share2 } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Choose your kit",
    description: "Browse our curated collection and find the perfect creative project",
    icon: Package,
    color: "bg-lavender",
  },
  {
    number: 2,
    title: "Open & explore",
    description: "Unbox your kit and discover all the premium materials inside",
    icon: Eye,
    color: "bg-coral",
  },
  {
    number: 3,
    title: "Create your magic",
    description: "Follow the guide and let your creativity flow freely",
    icon: Sparkles,
    color: "bg-mint",
  },
  {
    number: 4,
    title: "Share your masterpiece",
    description: "Show off your creation and inspire others in our community",
    icon: Share2,
    color: "bg-periwinkle",
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">From Kit to Creation</h2>
          <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto text-pretty">
            Your creative journey in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="brush-reveal relative group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Number badge */}
                  <div
                    className={`absolute -top-4 -left-4 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-charcoal mb-3 text-balance">{step.title}</h3>
                  <p className="text-charcoal/70 font-light leading-relaxed text-pretty">{step.description}</p>

                  {/* Decorative brush stroke */}
                  <div className={`absolute bottom-4 left-8 right-8 h-1 ${step.color} opacity-20 rounded-full`} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
