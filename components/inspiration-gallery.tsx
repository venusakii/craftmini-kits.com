"use client"

const inspirationImages = [
  {
    slug: "dimensions-cross-stitch-creation",
    image: "https://m.media-amazon.com/images/I/919Ui+wqJWL._AC_SX679_.jpg",
    color: "from-coral/40 to-transparent",
  },
  {
    slug: "macrame-dream-catcher",
    image: "https://m.media-amazon.com/images/I/71TQl8FK8BL._AC_SX679_.jpg",
    color: "from-mint/40 to-transparent",
  },
  {
    slug: "candle-making-project",
    image: "https://m.media-amazon.com/images/I/61z1f5xSpcL._AC_SX679_PIbundle-40,TopRight,0,0_SH20_.jpg",
    color: "from-lavender/40 to-transparent",
  },
  {
    slug: "artistro-watercolor-art",
    image: "https://m.media-amazon.com/images/I/81vkeAwaSHL._AC_SY879_PIbundle-48,TopRight,0,0_SH20_.jpg",
    color: "from-periwinkle/40 to-transparent",
  },
  {
    slug: "inscraft-embroidery-hoop",
    image: "https://m.media-amazon.com/images/I/91G9WBs4HbL._AC_SX679_.jpg",
    color: "from-coral/40 to-transparent",
  },
  {
    slug: "polymer-clay-sculpture",
    image: "https://m.media-amazon.com/images/I/81ByuR6rikL._AC_SX679_.jpg",
    color: "from-mint/40 to-transparent",
  },
  {
    slug: "beginner-embroidery-design",
    image: "https://m.media-amazon.com/images/I/71ENtwRIXxL._AC_SX679_.jpg",
    color: "from-lavender/40 to-transparent",
  },
  {
    slug: "darning-mushroom-repair",
    image: "https://m.media-amazon.com/images/I/71bm5-dQYEL._AC_SX679_.jpg",
    color: "from-periwinkle/40 to-transparent",
  },
  {
    slug: "origami-paper-art",
    image: "https://m.media-amazon.com/images/I/71eDGoe3b5L._AC_SX679_.jpg",
    color: "from-coral/40 to-transparent",
  },
]

export function InspirationGallery() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">Color Stories</h2>
          <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto text-pretty">
            Real creations from our amazing community of makers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {inspirationImages.map((item, index) => (
            <div
              key={item.slug}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={`Customer creation ${item.slug}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Paper texture overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.3"/%3E%3C/svg%3E")',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
