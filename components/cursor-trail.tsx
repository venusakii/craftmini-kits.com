"use client"

import { useEffect } from "react"

export function CursorTrail() {
  useEffect(() => {
    const colors = [
      "oklch(0.85 0.12 290)", // lavender
      "oklch(0.75 0.15 35)", // coral
      "oklch(0.85 0.10 160)", // mint
      "oklch(0.70 0.15 270)", // periwinkle
      "oklch(0.88 0.05 70)", // sand
    ]

    let colorIndex = 0

    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement("div")
      trail.className = "cursor-trail"
      trail.style.left = e.clientX + "px"
      trail.style.top = e.clientY + "px"
      trail.style.backgroundColor = colors[colorIndex]

      document.body.appendChild(trail)

      colorIndex = (colorIndex + 1) % colors.length

      setTimeout(() => {
        trail.remove()
      }, 1000)
    }

    // Throttle the event to avoid performance issues
    let lastTime = 0
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime > 50) {
        handleMouseMove(e)
        lastTime = now
      }
    }

    window.addEventListener("mousemove", throttledMouseMove)

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
    }
  }, [])

  return null
}
