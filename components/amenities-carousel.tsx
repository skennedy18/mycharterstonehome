export function AmenitiesCarousel() {
  const amenities = [
    "Championship Golf",
    "Private Runway",
    "Marina & Lake",
    "Dining",
    "Fitness",
    "Tennis",
    "Pools",
    "Community Events",
  ]

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/championship-golf-course-pecan-plantation.jpg')" }}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30,75,139,0.85) 0%, rgba(125,25,53,0.85) 100%)" }} />
      <div className="relative z-10 container mx-auto px-5 max-w-6xl">
        <p className="text-center text-[11px] uppercase tracking-[0.15em] mb-3" style={{ color: "#d4af37" }}>
          World-Class Amenities
        </p>
        <h2 className="font-serif text-white text-center mb-10">Pecan Plantation Amenities</h2>
        <div
          className="mx-auto py-4 px-8 rounded-md"
          style={{
            border: "1px solid rgba(212,175,55,0.4)",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(4px)",
          }}
        >
          <p className="text-center text-white/90 text-sm tracking-[0.1em] uppercase">
            {amenities.join("  ·  ")}
          </p>
        </div>
      </div>
    </section>
  )
}
