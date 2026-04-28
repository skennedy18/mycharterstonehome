"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const galleryImages = [
  {
    src: "/gallery/exterior-1.png",
    alt: "Exterior view of custom home",
    category: "Exterior",
  },
  {
    src: "/gallery/kitchen-1.png",
    alt: "Modern kitchen with island",
    category: "Interior",
  },
  {
    src: "/gallery/kitchen-2.png",
    alt: "Luxury kitchen with custom cabinetry",
    category: "Interior",
  },
  {
    src: "/gallery/living-room-1.png",
    alt: "Spacious living room with vaulted ceilings",
    category: "Interior",
  },
  {
    src: "/gallery/bedroom-1.png",
    alt: "Master bedroom with modern design",
    category: "Interior",
  },
  {
    src: "/gallery/bedroom-2.png",
    alt: "Elegant bedroom with natural light",
    category: "Interior",
  },
  {
    src: "/gallery/bathroom-1.png",
    alt: "Contemporary bathroom with dual vanities",
    category: "Interior",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<"All" | "Exterior" | "Interior">("All")

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)
  const filters = ["All", "Exterior", "Interior"] as const

  return (
    <main>
      <Navigation />
      <div>
        {/* Hero Section */}
        <section
          className="relative min-h-[60vh] flex items-end overflow-hidden"
          style={{ backgroundImage: "url('/gallery/exterior-1.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
          <div className="relative z-10 container mx-auto px-5 pb-12 max-w-6xl">
            <h1 className="font-serif text-white">Gallery</h1>
            <p className="text-base text-white/85 max-w-xl mt-3">
              Explore our stunning collection of custom homes and interior designs.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-6" style={{ backgroundColor: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="container mx-auto px-5 max-w-6xl">
            <div className="flex justify-center gap-6">
              {filters.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className="text-[13px] uppercase tracking-[0.05em] pb-1 transition-all duration-300"
                  style={{
                    color: filter === category ? "var(--color-primary)" : "var(--color-text-muted)",
                    borderBottom: filter === category ? "2px solid var(--color-primary)" : "2px solid transparent",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-20" style={{ backgroundColor: "var(--color-bg-alt)" }}>
          <div className="container mx-auto px-5 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group overflow-hidden cursor-pointer rounded-sm"
                  style={{ border: "1px solid var(--color-border)" }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      style={{ aspectRatio: "4/3" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95">
          <div className="relative w-full h-[90vh] flex items-center justify-center">
            {selectedImage !== null && (
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
