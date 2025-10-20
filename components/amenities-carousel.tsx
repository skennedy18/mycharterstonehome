"use client"

import { useEffect, useRef } from "react"

interface Amenity {
  name: string
  icon: string
}

const amenities: Amenity[] = [
  { name: "Championship Golf", icon: "⛳" },
  { name: "Private Runway", icon: "✈️" },
  { name: "Marina & Lake", icon: "⛵" },
  { name: "Fine Dining", icon: "🍽️" },
  { name: "Fitness Center", icon: "💪" },
  { name: "Tennis Courts", icon: "🎾" },
  { name: "Swimming Pools", icon: "🏊" },
  { name: "Community Events", icon: "🎉" },
]

export function AmenitiesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scroll = () => {
      scrollAmount += 1
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
      scrollContainer.scrollLeft = scrollAmount
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-navy text-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">World-Class Amenities</h2>
        <p className="text-lg text-white/80 text-center max-w-2xl mx-auto">
          Enjoy resort-style living with access to premium facilities and activities.
        </p>
      </div>

      <div ref={scrollRef} className="flex gap-8 overflow-hidden" style={{ scrollBehavior: "auto" }}>
        {[...amenities, ...amenities].map((amenity, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center w-48 h-48 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
          >
            <span className="text-5xl mb-3">{amenity.icon}</span>
            <span className="text-sm font-medium text-center px-4">{amenity.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
