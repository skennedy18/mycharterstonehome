import Link from "next/link"

interface Model {
  name: string
  image: string
  beds: number
  baths: number | string
  sqft: string
  garage: number
  price: string
  available: boolean
}

const models: Model[] = [
  {
    name: "The Bluebird",
    image: "/elevations/bluebird-elevation-b-rendered.jpg",
    beds: 4,
    baths: 3,
    sqft: "2,659",
    garage: 3,
    price: "$470,000",
    available: true,
  },
  {
    name: "The Magpie",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180%20Middlewood%20Cir_Cardinal.png-6jlcNpFIPksnSKEB9HTFz9J3EJXKNE.jpeg",
    beds: 4,
    baths: 3,
    sqft: "3,000",
    garage: 3,
    price: "$490,000",
    available: true,
  },
  {
    name: "The Cardinal",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180%20Middlewood%20Cir_Cardinal.png-6jlcNpFIPksnSKEB9HTFz9J3EJXKNE.jpeg",
    beds: 4,
    baths: "3.5",
    sqft: "2,905",
    garage: 3,
    price: "$490,000",
    available: true,
  },
  {
    name: "The Martin",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2184%20Middlewood%20Cir_Martin.png-1yw8K0L1IGkkbrPbYJnRv3jL6kuTrv.jpeg",
    beds: 4,
    baths: 3,
    sqft: "3,000",
    garage: 3,
    price: "$490,000",
    available: true,
  },
]

export function FeaturedModels() {
  return (
    <section
      className="py-16 md:py-20"
      style={{
        background: "linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="mb-3">
          <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: "#d4af37" }}>
            Our Collection
          </p>
          <h2 className="font-serif" style={{ color: "#1e4b8b" }}>Featured Home Models</h2>
        </div>
        <p className="text-base mb-10" style={{ color: "var(--color-text-muted)" }}>
          Explore our most popular floor plans, each designed with luxury and functionality in mind.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={model.image || "/placeholder.svg"}
                  alt={model.name}
                  className="w-full object-cover transition-transform duration-600 hover:scale-[1.03]"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
              <div
                className="p-6"
                style={{ borderTop: "3px solid #7d1935" }}
              >
                {model.available && (
                  <p className="text-[11px] tracking-[0.1em] uppercase mb-2" style={{ color: "#d4af37" }}>
                    Available Now
                  </p>
                )}
                <h3 className="font-serif mb-1" style={{ color: "#1e4b8b" }}>{model.name}</h3>
                <p className="text-base font-normal mb-3" style={{ color: "#7d1935" }}>
                  Starting at {model.price}
                </p>
                <p className="text-[13px] font-light mb-4" style={{ color: "var(--color-text-muted)" }}>
                  {model.beds} Bed · {model.baths} Bath · {model.sqft} Sq Ft · {model.garage} Car
                </p>
                <Link
                  href="/models"
                  className="text-[13px] tracking-[0.05em] uppercase underline underline-offset-4 transition-colors duration-300"
                  style={{ color: "#7d1935" }}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/models" className="btn-secondary">
            View All Floor Plans
          </Link>
        </div>
      </div>
    </section>
  )
}
