import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aerial-view-of-golf-course-at-sunrise.jpg"
          alt="Aerial view of Pecan Plantation golf course"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <h1 className="font-serif text-white mb-8 leading-[1.15]" style={{ fontWeight: 400 }}>
          Custom Homes in Texas&rsquo;s Premier Golf &amp; Aviation Community
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/models" className="btn-primary">
            Explore Floor Plans
          </Link>
          <Link href="/contact" className="btn-secondary-light">
            Schedule a Tour
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  )
}
