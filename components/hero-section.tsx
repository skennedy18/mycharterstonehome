"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Where Luxury Meets Lifestyle"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/aerial-view-of-golf-course-at-sunrise.jpg"
        >
          <source src="/aerial-drone-footage-pecan-plantation-golf-course.jpg" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 min-h-[1.2em]">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Custom Homes in Texas's Premier Golf & Aviation Community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/models">
            <Button size="lg" className="bg-burgundy hover:bg-burgundy/90 text-white text-lg px-8 py-6">
              Explore Floor Plans
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-6"
            >
              Schedule Private Tour
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  )
}
