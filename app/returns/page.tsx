import { Footer } from "@/components/footer"
import { RotateCcw, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-coral via-lavender to-mint">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="font-serif text-5xl md:text-6xl text-center mb-8 text-periwinkle">Returns & Exchanges</h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
          <div className="flex items-start gap-4">
            <RotateCcw className="w-8 h-8 text-lavender flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">30-Day Return Policy</h2>
              <p className="text-gray-600">
                We want you to love your craft kits! If you're not completely satisfied, you can return unused items
                within 30 days of delivery for a full refund.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-mint flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">What Can Be Returned</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Unopened craft kits in original packaging</li>
                <li>• Items with all original materials and instructions</li>
                <li>• Products in resalable condition</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <XCircle className="w-8 h-8 text-coral flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Non-Returnable Items</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Opened or partially used kits</li>
                <li>• Custom or personalized items</li>
                <li>• Sale or clearance items</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-periwinkle flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">How to Return</h2>
              <ol className="text-gray-600 space-y-2">
                <li>1. Contact us at returns@craftmini-kits.com</li>
                <li>2. Receive your return authorization and shipping label</li>
                <li>3. Pack items securely and ship back</li>
                <li>4. Refund processed within 5-7 business days of receipt</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
