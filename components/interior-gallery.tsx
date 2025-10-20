"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

interface InteriorImage {
  url: string
  caption: string
}

interface InteriorGalleryProps {
  images: InteriorImage[]
  modelName: string
}

export function InteriorGallery({ images, modelName }: InteriorGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.caption}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-6xl h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="font-serif text-2xl text-navy">
                {modelName} - {selectedIndex !== null && images[selectedIndex]?.caption}
              </DialogTitle>
              <Button variant="ghost" size="icon" onClick={() => setSelectedIndex(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="flex-1 relative flex items-center justify-center p-6">
            {selectedIndex !== null && (
              <>
                <div className="relative w-full h-full">
                  <Image
                    src={images[selectedIndex].url || "/placeholder.svg"}
                    alt={images[selectedIndex].caption}
                    fill
                    className="object-contain"
                  />
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  {selectedIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
