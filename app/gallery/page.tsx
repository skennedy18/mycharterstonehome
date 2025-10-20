"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react"

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

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <main>
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-burgundy to-navy text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore our stunning collection of custom homes and interior designs.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4">
              {["All", "Exterior", "Interior"].map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilter(category as "All" | "Exterior" | "Interior")}
                  variant={filter === category ? "default" : "outline"}
                  className={filter === category ? "bg-burgundy hover:bg-burgundy/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer bg-gray-200"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-black/95 border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            {selectedImage !== null && (
              <>
                <img
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].alt}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  {selectedImage + 1} / {filteredImages.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
