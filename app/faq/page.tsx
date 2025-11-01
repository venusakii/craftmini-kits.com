import { Footer } from "@/components/footer"
import { HelpCircle } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      question: "What comes in each craft kit?",
      answer:
        "Each kit includes all the materials, tools, and step-by-step instructions you need to complete your project. No additional supplies required!",
    },
    {
      question: "Are the kits suitable for beginners?",
      answer:
        "Our kits are designed for all skill levels. Each kit includes detailed instructions with photos to guide you through every step.",
    },
    {
      question: "How long does it take to complete a kit?",
      answer:
        "Most kits can be completed in 2-4 hours, depending on the complexity and your crafting pace. It's perfect for a relaxing afternoon or evening project.",
    },
    {
      question: "Can I purchase kits as gifts?",
      answer:
        "Yes! Our kits make wonderful gifts. We offer gift wrapping options at checkout and can include a personalized message.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes, we offer discounts for bulk orders of 10+ kits. Contact us at wholesale@craftmini-kits.com for pricing.",
    },
    {
      question: "What if I'm missing a material from my kit?",
      answer:
        "We carefully check each kit before shipping, but if something is missing, contact us immediately and we'll send a replacement at no charge.",
    },
    {
      question: "Are your materials eco-friendly?",
      answer:
        "We're committed to sustainability! Many of our materials are recycled or sustainably sourced, and we use minimal plastic packaging.",
    },
    {
      question: "Can I request a custom kit?",
      answer:
        "We love custom orders! Contact us with your ideas and we'll work with you to create a personalized craft kit experience.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-periwinkle via-mint to-sandy">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="font-serif text-5xl md:text-6xl text-center mb-8 text-periwinkle">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-lavender flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h2>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-lavender to-coral text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
