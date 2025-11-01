import { HowItWorks } from "@/components/how-it-works"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl md:text-6xl text-center mb-4 text-lavender-dark italic">How It Works</h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Creating art has never been easier. Follow these simple steps to start your creative journey.
        </p>
        <HowItWorks />
      </div>
    </main>
  )
}
