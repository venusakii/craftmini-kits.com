import { Footer } from "@/components/footer"
import { Package, Truck, Clock, MapPin } from "lucide-react"

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-mint via-sandy to-lavender">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="font-serif text-5xl md:text-6xl text-center mb-8 text-periwinkle">Shipping Information</h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
          <div className="flex items-start gap-4">
            <Package className="w-8 h-8 text-lavender flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Processing Time</h2>
              <p className="text-gray-600">
                Orders are typically processed within 1-2 business days. You'll receive a confirmation email once your
                order ships.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Truck className="w-8 h-8 text-coral flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Delivery Times</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Standard Shipping: 5-7 business days</li>
                <li>• Express Shipping: 2-3 business days</li>
                <li>• Overnight Shipping: 1 business day</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 text-mint flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Shipping Costs</h2>
              <p className="text-gray-600">
                Shipping costs are calculated at checkout based on your location and selected shipping method. Free
                shipping on orders over $50!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-periwinkle flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">International Shipping</h2>
              <p className="text-gray-600">
                We ship worldwide! International orders may take 10-21 business days and are subject to customs fees in
                your country.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
