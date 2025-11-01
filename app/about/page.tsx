import { AboutSection } from "@/components/about-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-5xl md:text-6xl text-center mb-8 text-lavender-dark italic">
          About CraftMini Kits
        </h1>
        <AboutSection />
      </div>
    </main>
  )
}
