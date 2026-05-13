import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const sections = [
  {
    label: "CHAMPIONSHIP GOLF",
    title: "36 Holes From Your Front Door",
    description:
      "Pecan Plantation's two championship courses wind through rolling hills and mature pecan groves. Whether you're a seasoned player or just picking up the game, the golf community here is second to none — complete with a pro shop, lessons, and year-round tournaments.",
    image: "/championship-golf-course-pecan-plantation.jpg",
    features: ["Two 18-Hole Championship Courses", "Full-Service Pro Shop", "Golf Academy & Junior Programs", "Year-Round Tournaments & Events"],
  },
  {
    label: "PRIVATE AVIATION",
    title: "Fly Home — Literally",
    description:
      "With a 3,200-foot private runway and dedicated hangar home sites, Pecan Plantation is one of the few communities in the country where you can taxi from the runway to your own garage. The active Pilots Association keeps the aviation community thriving.",
    image: "/private-runway-aviation-community.jpg",
    features: ["3,200 Ft Private Runway", "Hangar Home Homesites", "Active Pilots Association", "Direct Runway Taxiway Access"],
  },
  {
    label: "FAMILY & COMMUNITY",
    title: "A Place to Grow Together",
    description:
      "From top-rated schools and youth sports to community pools, playgrounds, and social events, Pecan Plantation is built for families. The gated community provides peace of mind while neighbors become lifelong friends.",
    image: "/family-friendly-community-parks.jpg",
    features: ["Top-Rated Local Schools", "Youth Sports & Programs", "Community Pools & Parks", "Safe, Gated Community"],
  },
  {
    label: "LAKE & MARINA",
    title: "Waterfront Living at Its Best",
    description:
      "Enjoy access to the Brazos River and community marina. Whether it's kayaking on a quiet morning, fishing at sunset, or gathering lakeside with friends, the water is never far from your doorstep.",
    image: "/luxury-home-with-lake-view.jpg",
    features: ["Community Marina Access", "Brazos River Frontage", "Fishing & Kayaking", "Lakeside Gathering Spaces"],
  },
]

export default function LifeInPecanPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/aerial-drone-footage-pecan-plantation-golf-course.jpg"
            alt="Aerial view of Pecan Plantation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <p
            className="text-sm uppercase tracking-[0.25em] font-light mb-8"
            style={{ color: "#d4af37", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Pecan Plantation Living
          </p>
          <h1
            className="font-serif text-white mb-6 leading-[1.1]"
            style={{ fontWeight: 400, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Life in Pecan Plantation
          </h1>
          <p
            className="text-lg text-white/85 font-light tracking-wide max-w-lg mx-auto"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            More than a home — a way of life.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className="py-16 md:py-20"
          style={{
            backgroundColor: index % 2 === 0 ? "var(--color-bg)" : "#ffffff",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <div className="container mx-auto px-5 max-w-6xl">
            <div className={`grid md:grid-cols-11 gap-8 items-center`}>
              <div className={`md:col-span-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div
                  className="overflow-hidden rounded-md"
                  style={{
                    border: "2px solid var(--color-border)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={700}
                    height={467}
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/2" }}
                  />
                </div>
              </div>
              <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <p
                  className="text-[11px] uppercase tracking-[0.15em] mb-2"
                  style={{ color: "#d4af37" }}
                >
                  {section.label}
                </p>
                <h2 className="font-serif mb-3" style={{ color: "#1e4b8b" }}>
                  {section.title}
                </h2>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {section.description}
                </p>
                <ul className="space-y-2.5">
                  {section.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <div
                        className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#7d1935" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section
        className="py-16 md:py-20 text-center"
        style={{
          background: "linear-gradient(180deg, #1e4b8b 0%, #153568 100%)",
          borderTop: "3px solid #d4af37",
        }}
      >
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="font-serif text-white mb-4" style={{ fontWeight: 400 }}>
            Ready to Call Pecan Plantation Home?
          </h2>
          <p className="text-base font-light mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
            Discover the perfect homesite and start building the life you've been dreaming of.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/available-plots" className="btn-primary">
              View Available Homesites
            </Link>
            <Link href="/contact" className="btn-secondary-light">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
