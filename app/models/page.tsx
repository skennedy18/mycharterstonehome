"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ModelFilters } from "@/components/model-filters"
import { MortgageCalculator } from "@/components/mortgage-calculator"
import { FloorPlanViewer } from "@/components/floor-plan-viewer"
import { InteriorGallery } from "@/components/interior-gallery"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Maximize, Car, Download, Eye, ImageIcon } from "lucide-react"

interface InteriorImage {
  url: string
  caption: string
}

interface Model {
  id: number
  name: string
  image: string
  beds: number
  baths: number
  sqft: number
  garage: number
  price: number
  lotType: string
  available: boolean
  floorPlans: Array<{ name: string; image: string; type: string }>
  elevations: string[]
  interiorImages?: InteriorImage[]
}

const allModels: Model[] = [
  {
    id: 1,
    name: "The Martin",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2184%20Middlewood%20Cir_Martin.png-1yw8K0L1IGkkbrPbYJnRv3jL6kuTrv.jpeg",
    beds: 4,
    baths: 3,
    sqft: 3000,
    garage: 3,
    price: 490000,
    lotType: "golf",
    available: true,
    floorPlans: [{ name: "Main Floor Plan", image: "/floor-plans/martin-plan.png", type: "Main Level" }],
    elevations: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2184%20Middlewood%20Cir_Martin.png-1yw8K0L1IGkkbrPbYJnRv3jL6kuTrv.jpeg",
    ],
    interiorImages: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180-1%20%281%29.png-ggKbNmCl6A7a0EGXyN4nJ3pyzBMvM7.jpeg",
        caption: "Open Concept Living & Kitchen",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-2.png-NWu5qpwd2LyV9qkskiXIBCWLWutRoh.jpeg",
        caption: "Dining Area",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-3.png-Krtr5QWsNVV1CJ5k7SD1RUcSNnwxoa.jpeg",
        caption: "Master Bedroom",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-4.png-1p6dW2aVb8c2Y3J58ryFUfsCM6azJx.jpeg",
        caption: "Master Bathroom",
      },
    ],
  },
  {
    id: 2,
    name: "The Bluebird",
    image: "/elevations/bluebird-elevation-b-rendered.jpg",
    beds: 4,
    baths: 3,
    sqft: 2659,
    garage: 3,
    price: 470000,
    lotType: "standard",
    available: true,
    floorPlans: [{ name: "Main Floor Plan", image: "/floor-plans/bluebird-plan.png", type: "Main Level" }],
    elevations: ["/elevations/bluebird-elevation-b.png"],
  },
  {
    id: 3,
    name: "The Magpie",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2188%20Middlewood%20Cir_Magpie.png-zx0jiaz0NEJV7JnQ2TZ3peNKjASDP3.jpeg",
    beds: 4,
    baths: 3,
    sqft: 3000,
    garage: 3,
    price: 490000,
    lotType: "golf",
    available: true,
    floorPlans: [{ name: "Main Floor Plan", image: "/floor-plans/magpie-plan.png", type: "Main Level" }],
    elevations: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2188%20Middlewood%20Cir_Magpie.png-zx0jiaz0NEJV7JnQ2TZ3peNKjASDP3.jpeg",
    ],
  },
  {
    id: 4,
    name: "The Cardinal",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180%20Middlewood%20Cir_Cardinal.png-6jlcNpFIPksnSKEB9HTFz9J3EJXKNE.jpeg",
    beds: 4,
    baths: 3.5,
    sqft: 2905,
    garage: 3,
    price: 490000,
    lotType: "golf",
    available: true,
    floorPlans: [{ name: "Main Floor Plan", image: "/floor-plans/cardinal-plan.png", type: "Main Level" }],
    elevations: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180%20Middlewood%20Cir_Cardinal.png-6jlcNpFIPksnSKEB9HTFz9J3EJXKNE.jpeg",
    ],
    interiorImages: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2119-1%20%281%29.png-13nBNWH2n3kk55QJeXaPZTp58glHsZ.jpeg",
        caption: "Open Concept Living & Kitchen",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180-2.png-upNlsjkkuPZr9OxyhAzTOkTDtd98zo.jpeg",
        caption: "Formal Dining Room",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180-3.png-N0Wn4QDJ1smWwQeq4tjTG7PheXppHR.jpeg",
        caption: "Master Bedroom",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2180-4.png-JPvjXr8hVA4t8gdLs893OgpBCKgR77.jpeg",
        caption: "Master Bathroom",
      },
    ],
  },
]

export default function ModelsPage() {
  const [priceRange, setPriceRange] = useState([400000, 600000])
  const [sqftRange, setSqftRange] = useState([2000, 4000])
  const [bedrooms, setBedrooms] = useState("any")
  const [lotType, setLotType] = useState("any")
  const [selectedModel, setSelectedModel] = useState<Model | null>(null)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [expandedModel, setExpandedModel] = useState<number | null>(null)

  const resetFilters = () => {
    setPriceRange([400000, 600000])
    setSqftRange([2000, 4000])
    setBedrooms("any")
    setLotType("any")
  }

  const filteredModels = allModels.filter((model) => {
    const matchesPrice = model.price >= priceRange[0] && model.price <= priceRange[1]
    const matchesSqft = model.sqft >= sqftRange[0] && model.sqft <= sqftRange[1]
    const matchesBedrooms = bedrooms === "any" || model.beds >= Number.parseInt(bedrooms)
    const matchesLotType = lotType === "any" || model.lotType === lotType
    return matchesPrice && matchesSqft && matchesBedrooms && matchesLotType
  })

  const handleViewFloorPlans = (model: Model) => {
    setSelectedModel(model)
    setViewerOpen(true)
  }

  return (
    <main>
      <Navigation />
      <div className="pt-20">
        <section className="bg-gradient-to-r from-burgundy to-navy text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Our Home Models</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover the perfect floor plan for your lifestyle. Each home is thoughtfully designed with luxury and
              comfort in mind.
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <ModelFilters
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  sqftRange={sqftRange}
                  setSqftRange={setSqftRange}
                  bedrooms={bedrooms}
                  setBedrooms={setBedrooms}
                  lotType={lotType}
                  setLotType={setLotType}
                  onReset={resetFilters}
                />
                <MortgageCalculator />
              </div>

              <div className="lg:col-span-3">
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing {filteredModels.length} of {allModels.length} models
                  </p>
                </div>

                <div className="space-y-6">
                  {filteredModels.map((model) => (
                    <Card
                      key={model.id}
                      className="overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="relative h-64 md:h-auto overflow-hidden">
                            <img
                              src={model.image || "/placeholder.svg"}
                              alt={model.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {model.available && (
                              <Badge className="absolute top-4 right-4 bg-champagne text-navy animate-pulse">
                                Available Now
                              </Badge>
                            )}
                          </div>
                          <div className="p-6">
                            <h3 className="font-serif text-2xl font-bold text-navy mb-2">{model.name}</h3>
                            <p className="text-2xl font-bold text-burgundy mb-4">
                              Starting at ${model.price.toLocaleString()}
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-6">
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
                                <span>{model.sqft.toLocaleString()} Sq Ft</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Car className="h-4 w-4" />
                                <span>{model.garage} Car Garage</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-2">
                                <Button
                                  className="flex-1 bg-burgundy hover:bg-burgundy/90 text-white"
                                  onClick={() => handleViewFloorPlans(model)}
                                >
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Floor Plans
                                </Button>
                                {model.interiorImages && model.interiorImages.length > 0 && (
                                  <Button
                                    variant="outline"
                                    onClick={() => setExpandedModel(expandedModel === model.id ? null : model.id)}
                                  >
                                    <ImageIcon className="h-4 w-4 mr-2" />
                                    Interiors
                                  </Button>
                                )}
                              </div>
                              <Button variant="ghost" className="w-full text-navy hover:text-burgundy">
                                <Download className="h-4 w-4 mr-2" />
                                Download Floor Plan
                              </Button>
                            </div>
                          </div>
                        </div>
                        {expandedModel === model.id && model.interiorImages && (
                          <div className="p-6 border-t bg-gray-50">
                            <h4 className="font-serif text-xl font-bold text-navy mb-4">Interior Renderings</h4>
                            <InteriorGallery images={model.interiorImages} modelName={model.name} />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredModels.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground mb-4">No models match your current filters.</p>
                    <Button
                      onClick={resetFilters}
                      variant="outline"
                      className="border-burgundy text-burgundy bg-transparent"
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {selectedModel && (
        <FloorPlanViewer
          modelName={selectedModel.name}
          floorPlans={selectedModel.floorPlans}
          elevations={selectedModel.elevations}
          open={viewerOpen}
          onOpenChange={setViewerOpen}
        />
      )}

      <Footer />
    </main>
  )
}
