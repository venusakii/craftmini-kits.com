"use client"

export function AboutSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender/30 to-coral/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl">
              <img src="/watercolor-hand-holding-paintbrush-artistic-illust.jpg" alt="Hand with paintbrush" className="w-full h-auto rounded-2xl" />
            </div>
          </div>

          {/* Right side - Text */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
              Craft Without Limits
            </h2>
            <div className="space-y-4 text-lg text-charcoal/80 font-light leading-relaxed">
              <p className="text-pretty">At CraftMini Kits, we believe creativity should fit in your hands.</p>
              <p className="text-pretty">
                <span className="font-semibold text-coral">Compact, colorful, complete</span> — every kit is a small
                world of art waiting to be discovered.
              </p>
              <p className="text-pretty">
                Whether you're stitching your first embroidery or crafting a macrame masterpiece, our curated kits bring
                joy, color, and inspiration to every moment.
              </p>
            </div>

            {/* Decorative color swatches */}
            <div className="flex gap-3 pt-4">
              <div className="w-12 h-12 rounded-full bg-lavender shadow-lg" />
              <div className="w-12 h-12 rounded-full bg-coral shadow-lg" />
              <div className="w-12 h-12 rounded-full bg-mint shadow-lg" />
              <div className="w-12 h-12 rounded-full bg-periwinkle shadow-lg" />
              <div className="w-12 h-12 rounded-full bg-sand shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
