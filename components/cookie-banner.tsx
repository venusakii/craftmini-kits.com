"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies-accepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/60 p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-coral to-lavender rounded-full flex items-center justify-center flex-shrink-0">
            <Palette className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-charcoal/80 font-light leading-relaxed text-pretty">
              This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to
              our use of cookies.
            </p>
          </div>
        </div>
        <Button
          onClick={acceptCookies}
          className="w-full watercolor-btn bg-gradient-to-r from-coral via-lavender to-mint hover:opacity-90 text-white rounded-full shadow-lg"
        >
          <Palette className="mr-2 h-4 w-4" />
          Accept the Colors
        </Button>
      </div>
    </div>
  )
}
