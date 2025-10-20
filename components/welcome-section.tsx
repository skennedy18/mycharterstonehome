"use client"

import { useEffect, useRef, useState } from "react"

interface Stat {
  number: string
  label: string
}

const stats: Stat[] = [
  { number: "2", label: "Championship Golf Courses" },
  { number: "3,200", label: "Ft Private Runway" },
  { number: "7", label: "Parks & Recreation Areas" },
  { number: "30+", label: "Floor Plans Available" },
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = target / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-burgundy font-serif">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function WelcomeSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">Welcome to Charterstone Homes</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the perfect blend of luxury living and active lifestyle in Pecan Plantation. Our custom-built homes
            are designed for those who appreciate quality craftsmanship, stunning golf course views, and a vibrant
            community atmosphere.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {index === 1 ? (
                <div className="text-5xl md:text-6xl font-bold text-burgundy font-serif">3,200</div>
              ) : index === 3 ? (
                <div className="text-5xl md:text-6xl font-bold text-burgundy font-serif">30+</div>
              ) : (
                <AnimatedCounter target={Number.parseInt(stat.number)} />
              )}
              <p className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
