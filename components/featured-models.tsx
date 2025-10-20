"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Maximize, Car } from "lucide-react"

interface Model {
  name: string
  image: string
  beds: number
  baths: number
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
    baths: 3.5,
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">Featured Home Models</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular floor plans, each designed with luxury and functionality in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {models.map((model, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={model.image || "/placeholder.svg"}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {model.available && (
                    <Badge className="absolute top-4 right-4 bg-champagne text-navy animate-pulse">Available Now</Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-navy mb-2">{model.name}</h3>
                  <p className="text-2xl font-bold text-burgundy mb-4">Starting at {model.price}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4" />
                      <span>{model.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4" />
                      <span>{model.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize className="h-4 w-4" />
                      <span>{model.sqft} Sq Ft</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4" />
                      <span>{model.garage} Car Garage</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-burgundy hover:bg-burgundy/90 text-white">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white bg-transparent"
          >
            View All Models
          </Button>
        </div>
      </div>
    </section>
  )
}
