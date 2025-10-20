"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Plane, Trophy, Users } from "lucide-react"
import { useState } from "react"

interface Lifestyle {
  title: string
  icon: React.ReactNode
  image: string
  features: string[]
}

const lifestyles: Lifestyle[] = [
  {
    title: "Golf Enthusiast",
    icon: <Trophy className="h-8 w-8" />,
    image: "/championship-golf-course-pecan-plantation.jpg",
    features: ["36 Holes Championship Golf", "Pro Shop & Lessons", "Golf Academy Programs"],
  },
  {
    title: "Aviation Lover",
    icon: <Plane className="h-8 w-8" />,
    image: "/private-runway-aviation-community.jpg",
    features: ["3,200 Ft Private Runway", "Hangar Home Options", "Active Pilots Association"],
  },
  {
    title: "Family Living",
    icon: <Users className="h-8 w-8" />,
    image: "/family-friendly-community-parks.jpg",
    features: ["Top-Rated Schools", "Youth Programs", "Safe Gated Community"],
  },
]

export function LifestyleShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">Your Lifestyle Awaits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pecan Plantation offers something special for everyone. Choose the lifestyle that speaks to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {lifestyles.map((lifestyle, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                activeIndex === index ? "ring-2 ring-burgundy scale-105" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img
                    src={lifestyle.image || "/placeholder.svg"}
                    alt={lifestyle.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="mb-2">{lifestyle.icon}</div>
                    <h3 className="font-serif text-2xl font-bold">{lifestyle.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {lifestyle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-champagne" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
