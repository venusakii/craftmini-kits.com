import { InspirationGallery } from "@/components/inspiration-gallery"

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl md:text-6xl text-center mb-4 text-lavender-dark italic">
          Inspiration Gallery
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Explore beautiful creations from our community of artists and crafters.
        </p>
        <InspirationGallery />
      </div>
    </main>
  )
}
