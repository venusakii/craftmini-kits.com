import { Reviews } from "@/components/reviews"

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl md:text-6xl text-center mb-4 text-lavender-dark italic">Customer Reviews</h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          See what our creative community has to say about CraftMini Kits.
        </p>
        <Reviews />
      </div>
    </main>
  )
}
