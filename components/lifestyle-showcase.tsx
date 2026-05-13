import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Lifestyle {
  title: string
  description: string
  image: string
}

const lifestyles: Lifestyle[] = [
  {
    title: "36 Holes From Your Front Door",
    description:
      "Pecan Plantation's two championship courses wind through the community, with tee times just minutes from home. The clubhouse, pro shop, and golf academy are all part of daily life here.",
    image: "/championship-golf-course-pecan-plantation.jpg",
  },
  {
    title: "A Runway in Your Backyard",
    description:
      "The community's 3,200-foot private runway and hangar home options make Pecan Plantation one of the few true fly-in communities in Texas. An active pilots association keeps the aviation spirit alive.",
    image: "/private-runway-aviation-community.jpg",
  },
  {
    title: "Room to Grow",
    description:
      "Top-rated schools, youth programs, and a safe gated community make Pecan Plantation ideal for families. With 30+ parks and miles of trails, there's always somewhere new to explore.",
    image: "/family-friendly-community-parks.jpg",
  },
]

export function LifestyleShowcase() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
      <div className="container mx-auto px-5 max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: "#d4af37" }}>
          Pecan Plantation Living
        </p>
        <h2 className="font-serif mb-3" style={{ color: "#1e4b8b" }}>
          Life in Pecan Plantation
        </h2>
        <p className="text-base mb-12" style={{ color: "var(--color-text-muted)" }}>
          More than a home — a way of life.
        </p>

        <div className="space-y-16">
          {lifestyles.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-11 gap-8 items-center"
            >
              <div className={`md:col-span-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div
                  className="overflow-hidden rounded-md"
                  style={{
                    border: "2px solid var(--color-border)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={467}
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/2" }}
                  />
                </div>
              </div>
              <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div
                  className="p-6 rounded-md"
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, var(--color-bg-alt) 100%)",
                    border: "1px solid var(--color-border)",
                    borderLeft: "4px solid #7d1935",
                  }}
                >
                  <h3 className="font-serif mb-3" style={{ color: "#1e4b8b" }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/life-in-pecan"
            className="inline-flex items-center gap-2 btn-primary group"
          >
            Explore More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
