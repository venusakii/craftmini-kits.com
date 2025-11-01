import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-lavender via-mint to-sandy">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="font-serif text-5xl md:text-6xl text-center mb-8 text-periwinkle">Contact Us</h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <p className="text-lg text-gray-700 mb-8 text-center">
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:border-lavender focus:ring-2 focus:ring-lavender/20 outline-none transition-all resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-lavender to-coral text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  )
}
