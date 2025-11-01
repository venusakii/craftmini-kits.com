"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Palette } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [colorMode, setColorMode] = useState<"calm" | "vibrant">("vibrant")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleColorMode = () => {
    const newMode = colorMode === "calm" ? "vibrant" : "calm"
    setColorMode(newMode)
    document.documentElement.style.setProperty("--color-intensity", newMode === "calm" ? "0.7" : "1")
  }

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-lavender/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender via-coral to-mint flex items-center justify-center shadow-md group-hover:shadow-xl transition-shadow">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif text-2xl text-lavender-dark group-hover:text-coral transition-colors">
              CraftMini
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors relative group ${
                  pathname === link.href ? "text-coral" : "text-gray-700 hover:text-coral"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-coral transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-full bg-transparent hover:bg-lavender/10"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-lavender/20 shadow-xl">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-base font-medium transition-colors py-2 ${
                  pathname === link.href ? "text-coral" : "text-gray-700 hover:text-coral"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-lavender/20">
              <Button
                onClick={toggleColorMode}
                variant="outline"
                size="sm"
                className="flex-1 watercolor-btn rounded-full bg-transparent"
              >
                <Palette className="h-4 w-4 mr-2" />
                {colorMode === "vibrant" ? "Calm" : "Vibrant"} Mode
              </Button>
              <Link href="/products" className="flex-1">
                <Button className="w-full watercolor-btn bg-coral hover:bg-coral-light text-white rounded-full">
                  Shop Now
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
