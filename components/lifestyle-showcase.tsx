import Image from "next/image"

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
    <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="font-serif mb-3" style={{ color: "var(--color-text)" }}>
          Life in Pecan Plantation
        </h2>
        <p className="text-base mb-12" style={{ color: "var(--color-text-muted)" }}>
          More than a home — a way of life.
        </p>

        <div className="space-y-16">
          {lifestyles.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-11 gap-8 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={`md:col-span-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={467}
                  className="w-full object-cover rounded-sm"
                  style={{ aspectRatio: "3/2", border: "1px solid var(--color-border)" }}
                />
              </div>
              <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-serif mb-3" style={{ color: "var(--color-text)" }}>
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
