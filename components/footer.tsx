"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Purple to coral gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-dark via-periwinkle to-coral opacity-90" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-3xl text-white">CraftMini Kits</h3>
            <p className="text-white/80 font-light text-pretty">
              Small kits, big creativity. Bringing color and inspiration to every maker.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-white/80 font-light">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  All Kits
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-white/80 font-light">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20 space-y-4 text-center md:text-left">
          <p className="text-white/80 text-sm font-light">© 2025 CraftMini-Kits.com — All Rights Reserved.</p>
          <p className="text-white/70 text-xs font-light text-pretty">
            🛒 Amazon Affiliate Partner — As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
