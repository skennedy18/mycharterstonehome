import Image from "next/image"

export function WelcomeSection() {
  return (
    <>
      {/* Stats bar */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #1e4b8b 0%, #153568 100%)",
          borderTop: "3px solid #d4af37",
          borderBottom: "3px solid #d4af37",
        }}
      >
        <div className="container mx-auto px-5 max-w-6xl">
          <p className="text-sm tracking-[0.1em] uppercase text-center text-white/90">
            2 Championship Golf Courses &nbsp;·&nbsp; 3,200 Ft Runway &nbsp;·&nbsp; 7 Parks &nbsp;·&nbsp; 30+ Floor Plans
          </p>
        </div>
      </section>

      {/* About Charterstone Homes */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.15em] mb-3" style={{ color: "#d4af37" }}>
                About Charterstone Homes
              </p>
              <h2 className="font-serif mb-4" style={{ color: "#1e4b8b" }}>
                Welcome to Charterstone Homes
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                Every Charterstone home is custom-built in Pecan Plantation — a gated community with championship
                golf, a private runway, and 30+ parks. We design homes for the way you actually live, with the
                craftsmanship to prove it.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-muted)" }}>
                With nearly 25 years of experience in luxury residential development, our team brings expertise in
                quality construction, innovative design, and sustainable building practices to every project.
              </p>
              <a
                href="/about"
                className="text-[13px] tracking-[0.05em] uppercase underline underline-offset-4 transition-colors duration-300"
                style={{ color: "#7d1935" }}
              >
                Learn More About Us
              </a>
            </div>
            <div className="md:col-span-2">
              <div
                className="rounded-md overflow-hidden"
                style={{
                  border: "2px solid var(--color-border)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src="/elevations/bluebird-elevation-b-rendered.jpg"
                  alt="Charterstone home exterior"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/2" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
