"use client"

const reviews = [
  {
    slug: "sarah-m-review",
    text: "Such a fun kit to do with my daughter!",
    author: "Sarah M.",
    color: "bg-lavender",
  },
  {
    slug: "jessica-l-review",
    text: "Love the colors, the thread feels premium!",
    author: "Jessica L.",
    color: "bg-coral",
  },
  {
    slug: "michael-r-review",
    text: "It's small but full of happiness.",
    author: "Michael R.",
    color: "bg-mint",
  },
  {
    slug: "emma-t-review",
    text: "Perfect for beginners like me!",
    author: "Emma T.",
    color: "bg-periwinkle",
  },
  {
    slug: "david-k-review",
    text: "The instructions were so easy to follow.",
    author: "David K.",
    color: "bg-coral-light",
  },
  {
    slug: "lisa-p-review",
    text: "Can't wait to order my next kit!",
    author: "Lisa P.",
    color: "bg-mint-light",
  },
]

export function Reviews() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">Artists Speak</h2>
          <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto text-pretty">
            Hear what our creative community has to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={review.slug} className="float-bubble" style={{ animationDelay: `${index * 300}ms` }}>
              <div
                className={`${review.color} text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-6xl opacity-20 font-serif">"</div>

                <p className="text-lg font-light mb-4 relative z-10 text-pretty">{review.text}</p>
                <p className="text-sm font-semibold relative z-10">— {review.author}</p>

                {/* Watercolor splash effect */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
