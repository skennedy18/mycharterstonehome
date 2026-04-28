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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-white/80 font-light mb-8" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
          Charterstone Homes
        </p>
        <h1 className="font-serif text-white mb-6 leading-[1.1]" style={{ fontWeight: 400, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
          Build Your Dream Home<br />in Pecan Plantation
        </h1>
        <p className="text-lg text-white/85 font-light mb-12 max-w-lg mx-auto tracking-wide" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
          Texas&rsquo;s Premier Golf &amp; Aviation Community
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            href="/models"
            className="text-[13px] font-medium uppercase tracking-[0.1em] transition-all duration-300"
            style={{
              padding: "14px 36px",
              backgroundColor: "#7d1935",
              color: "white",
              borderRadius: "999px",
              boxShadow: "0 4px 20px rgba(125,25,53,0.4), 0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            Explore Floor Plans
          </Link>
          <Link
            href="/contact"
            className="text-[13px] font-medium uppercase tracking-[0.1em] transition-all duration-300"
            style={{
              padding: "14px 36px",
              border: "2px solid rgba(255,255,255,0.6)",
              color: "white",
              borderRadius: "999px",
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
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
