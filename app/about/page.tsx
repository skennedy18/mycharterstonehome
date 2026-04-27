"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const team = [
  {
    name: "Ted Broden",
    role: "Builder",
    image: "/team/ted-broden.png",
    bio: "With nearly 25 years of experience in real estate development and construction management, Ted has a proven track record of managing and executing technically complex, high-profile projects. His notable developments include 8899 Beverly and The Rosewood Houses, both exemplifying a commitment to quality, innovation, and sustainability. Ted brings expertise in luxury residential development and LEED-certified design to every project.",
  },
]

const testimonials = [
  {
    name: "Robert & Linda Thompson",
    home: "The Oakmont",
    quote:
      "Building with Charterstone was a dream come true. The attention to detail and quality craftsmanship exceeded our expectations.",
  },
  {
    name: "James Martinez",
    home: "The Aviator",
    quote:
      "As a pilot, having a hangar home was essential. Charterstone made the process seamless and delivered exactly what we wanted.",
  },
  {
    name: "The Anderson Family",
    home: "The Magnolia",
    quote: "We love our new home and the Pecan Plantation community. Charterstone helped us every step of the way.",
  },
]

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section
          className="relative min-h-[50vh] flex items-end overflow-hidden"
          style={{ backgroundImage: "url('/championship-golf-course-pecan-plantation.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/50" />
          <div className="relative z-10 container mx-auto px-5 pb-12 max-w-6xl">
            <h1 className="font-serif text-white">About Charterstone Homes</h1>
            <p className="text-base text-white/85 max-w-xl mt-3">
              Building dreams and creating lasting legacies in Pecan Plantation since 2015.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="container mx-auto px-5 max-w-6xl">
            <div className="grid md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-3">
                <h2 className="font-serif mb-3" style={{ color: "#1e4b8b" }}>Our Story</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  Charterstone Homes was founded with a simple mission: to build exceptional custom homes that reflect the
                  unique lifestyle and dreams of each homeowner. Over the years, we&rsquo;ve become the preferred builder in
                  Pecan Plantation, known for our commitment to quality, innovation, and customer satisfaction.
                </p>
              </div>
              <div className="md:col-span-2">
                <img
                  src="/elevations/bluebird-elevation-b-rendered.jpg"
                  alt="Charterstone home"
                  className="w-full object-cover rounded-sm"
                  style={{ aspectRatio: "3/2", border: "2px solid var(--color-border)", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-bg-alt)" }}>
          <div className="container mx-auto px-5 max-w-6xl">
            <h2 className="font-serif mb-10" style={{ color: "#1e4b8b" }}>Meet Our Team</h2>
            <div className="max-w-3xl">
              {team.map((member, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-48 flex-shrink-0">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full rounded-sm"
                      style={{ border: "1px solid var(--color-border)" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-serif mb-1" style={{ color: "#1e4b8b" }}>{member.name}</h3>
                    <p className="text-sm uppercase tracking-[0.08em] mb-3" style={{ color: "#d4af37" }}>
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-20" style={{ background: "linear-gradient(135deg, #1e4b8b 0%, #153568 100%)", color: "rgba(255,255,255,0.9)" }}>
          <div className="container mx-auto px-5 max-w-6xl">
            <h2 className="font-serif mb-10 text-white">What Our Clients Say</h2>
            <div className="space-y-10 max-w-3xl">
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <p className="font-serif italic text-[1.2rem] leading-relaxed text-white/90 mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {testimonial.name} — {testimonial.home}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
