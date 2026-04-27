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
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-5">
        <h2 className="font-serif text-white text-center mb-10">Pecan Plantation Amenities</h2>
        <p className="text-center text-white/90 text-sm tracking-[0.1em] uppercase">
          {amenities.join("  ·  ")}
        </p>
      </div>
    </section>
  )
}
