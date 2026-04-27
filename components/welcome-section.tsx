import Image from "next/image"

export function WelcomeSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container mx-auto px-5 max-w-6xl">
        {/* Stats bar */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.1em] uppercase" style={{ color: "var(--color-text-muted)" }}>
            2 Championship Golf Courses  ·  3,200 Ft Runway  ·  7 Parks  ·  30+ Floor Plans
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <h2 className="font-serif mb-3" style={{ color: "var(--color-text)" }}>
              Where Craftsmanship Meets Community
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Every Charterstone home is custom-built in Pecan Plantation — a gated community with championship
              golf, a private runway, and 30+ parks. We design homes for the way you actually live, with the
              craftsmanship to prove it.
            </p>
          </div>
          <div className="md:col-span-2">
            <Image
              src="/elevations/bluebird-elevation-b-rendered.jpg"
              alt="Charterstone home exterior"
              width={600}
              height={400}
              className="w-full object-cover rounded-sm"
              style={{ aspectRatio: "3/2", border: "1px solid var(--color-border)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
