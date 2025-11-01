"use client"

import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const kits = [
  {
    name: "DMC Stitch",
    skill: "Beginner",
    duration: "1-2 hrs",
    type: "Embroidery",
    rating: 5,
  },
  {
    name: "Macrame Mini",
    skill: "Intermediate",
    duration: "3 hrs",
    type: "Decor",
    rating: 4,
  },
  {
    name: "Candle Set",
    skill: "Easy",
    duration: "1 hr",
    type: "Scented",
    rating: 5,
  },
  {
    name: "Watercolor Kit",
    skill: "Beginner",
    duration: "2 hrs",
    type: "Painting",
    rating: 5,
  },
  {
    name: "Punch Needle",
    skill: "Intermediate",
    duration: "2-3 hrs",
    type: "Textile",
    rating: 4,
  },
]

export function ComparisonTable() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">Find Your Perfect Kit</h2>
          <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto text-pretty">
            Compare our kits to discover the ideal match for your skill level and interests
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/80">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-lavender/30">
                  <th className="px-6 py-4 text-left text-charcoal font-semibold">Kit</th>
                  <th className="px-6 py-4 text-left text-charcoal font-semibold">Skill Level</th>
                  <th className="px-6 py-4 text-left text-charcoal font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left text-charcoal font-semibold">Type</th>
                  <th className="px-6 py-4 text-left text-charcoal font-semibold">Rating</th>
                  
                </tr>
              </thead>
              <tbody>
                {kits.map((kit, index) => (
                  <tr
                    key={kit.name}
                    className="border-t border-charcoal/10 hover:bg-coral/10 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-semibold text-charcoal">{kit.name}</td>
                    <td className="px-6 py-4 text-charcoal/70">
                      <span className="inline-block px-3 py-1 bg-mint/30 rounded-full text-sm">{kit.skill}</span>
                    </td>
                    <td className="px-6 py-4 text-charcoal/70">{kit.duration}</td>
                    <td className="px-6 py-4 text-charcoal/70">{kit.type}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < kit.rating ? "fill-coral text-coral" : "fill-none text-charcoal/20"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
