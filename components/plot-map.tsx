"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Plot {
  id: number
  available: boolean
  address: string
  lotSize: string
}

interface PlotPosition {
  x: string
  y: string
  section: string
  mapImage: number
}

export function PlotMap() {
  const [plots] = useState<Plot[]>([
    { id: 1, available: true, address: "3531 Middlewood Circle", lotSize: "0.44 AC" },
    { id: 2, available: true, address: "3550 Middlewood Circle", lotSize: "0.48 AC" },
    { id: 3, available: true, address: "3586 Middlewood Circle", lotSize: "0.44 AC" },
    { id: 4, available: true, address: "3604 Hazelwood Circle", lotSize: "0.52 AC" },
    { id: 5, available: true, address: "3950 East Landings North", lotSize: "1.50 AC" },
    { id: 6, available: true, address: "3983 East Landings North", lotSize: "1.56 AC" },
    { id: 7, available: true, address: "3532 Middlewood Circle", lotSize: "0.44 AC" },
    { id: 8, available: true, address: "3985 East Landings North", lotSize: "1.49 AC" },
    { id: 9, available: true, address: "3551 Middlewood Circle", lotSize: "0.48 AC" },
    { id: 10, available: true, address: "3561 Middlewood Circle", lotSize: "0.48 AC" },
    { id: 11, available: true, address: "3586 Hazelwood Circle", lotSize: "0.44 AC" },
    { id: 12, available: true, address: "3580 Hazelwood Circle", lotSize: "0.44 AC" },
    { id: 13, available: true, address: "3526 Middlewood Circle", lotSize: "0.44 AC" },
    { id: 14, available: true, address: "3902 East Landings North", lotSize: "1.61 AC" },
    { id: 15, available: true, address: "3593 Middlewood Circle", lotSize: "0.44 AC" },
    { id: 16, available: true, address: "3587 Middlewood Circle", lotSize: "0.44 AC" },
    { id: 17, available: true, address: "3568 Hazelwood Circle", lotSize: "0.49 AC" },
    { id: 18, available: true, address: "3560 Hazelwood Circle", lotSize: "0.49 AC" },
    { id: 19, available: true, address: "3519 Hazelwood Circle", lotSize: "0.44 AC" },
    { id: 20, available: true, address: "3515 Middlewood Circle", lotSize: "0.49 AC" },
    { id: 21, available: true, address: "3516 Middlewood Circle", lotSize: "0.49 AC" },
    { id: 22, available: true, address: "3514 Middlewood Circle", lotSize: "0.49 AC" },
    { id: 23, available: true, address: "3513 Middlewood Circle", lotSize: "0.49 AC" },
    { id: 24, available: true, address: "3903 East Landings North", lotSize: "1.73 AC" },
    { id: 25, available: true, address: "3518 Hazelwood Circle", lotSize: "0.44 AC" },
    { id: 26, available: true, address: "3512 Middlewood Circle", lotSize: "0.49 AC" },
    { id: 27, available: true, address: "3511 Middlewood Circle", lotSize: "0.49 AC" },
    { id: 28, available: true, address: "3510 Middlewood Circle", lotSize: "0.58 AC" },
    { id: 29, available: true, address: "3548 Village Road", lotSize: "0.51 AC" },
    { id: 30, available: true, address: "3550 Village Road", lotSize: "0.48 AC" },
  ])

  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const plotPositions: Record<number, PlotPosition> = {
    1: { x: "66.8%", y: "37.0%", section: "Orchard 15A-15B", mapImage: 1 },
    2: { x: "63.4%", y: "37.0%", section: "Orchard 15A-15B", mapImage: 1 },
    3: { x: "59.8%", y: "36.7%", section: "Orchard 15A-15B", mapImage: 1 },
    4: { x: "21.0%", y: "77.2%", section: "Orchard 15A-15B", mapImage: 1 },
    7: { x: "21.7%", y: "41.0%", section: "Orchard 15A-15B", mapImage: 1 },
    11: { x: "54.7%", y: "46.3%", section: "Orchard 15A-15B", mapImage: 1 },
    12: { x: "58.2%", y: "45.7%", section: "Orchard 15A-15B", mapImage: 1 },
    13: { x: "85.6%", y: "23.2%", section: "Orchard 15A-15B", mapImage: 1 },
    15: { x: "60.0%", y: "17.4%", section: "Orchard 15A-15B", mapImage: 1 },
    16: { x: "70.2%", y: "62.6%", section: "Orchard 15A-15B", mapImage: 1 },
    17: { x: "67.3%", y: "68.5%", section: "Orchard 15A-15B", mapImage: 1 },
    18: { x: "64.8%", y: "74.5%", section: "Orchard 15A-15B", mapImage: 1 },
    19: { x: "61.9%", y: "79.2%", section: "Orchard 15A-15B", mapImage: 1 },
    25: { x: "59.4%", y: "85.9%", section: "Orchard 15A-15B", mapImage: 1 },
    9: { x: "46.7%", y: "41.3%", section: "Orchard 15A-15B", mapImage: 2 },
    10: { x: "53.3%", y: "49.7%", section: "Orchard 15A-15B", mapImage: 2 },
    20: { x: "72.8%", y: "39.0%", section: "Orchard 15A-15B", mapImage: 2 },
    21: { x: "69.7%", y: "46.0%", section: "Orchard 15A-15B", mapImage: 2 },
    22: { x: "67.5%", y: "51.6%", section: "Orchard 15A-15B", mapImage: 2 },
    23: { x: "63.9%", y: "58.8%", section: "Orchard 15A-15B", mapImage: 2 },
    26: { x: "61.6%", y: "64.7%", section: "Orchard 15A-15B", mapImage: 2 },
    27: { x: "58.8%", y: "70.6%", section: "Orchard 15A-15B", mapImage: 2 },
    28: { x: "56.6%", y: "78.0%", section: "Orchard 15A-15B", mapImage: 2 },
    29: { x: "34.0%", y: "27.3%", section: "Orchard 15A-15B", mapImage: 2 },
    30: { x: "42.4%", y: "37.3%", section: "Orchard 15A-15B", mapImage: 2 },
    5: { x: "49.2%", y: "53.1%", section: "East Landings", mapImage: 3 },
    6: { x: "37.1%", y: "54.7%", section: "East Landings", mapImage: 3 },
    8: { x: "77.2%", y: "47.9%", section: "East Landings", mapImage: 3 },
    14: { x: "30.8%", y: "27.9%", section: "East Landings", mapImage: 3 },
    24: { x: "72.8%", y: "46.9%", section: "East Landings", mapImage: 3 },
  }

  const handlePlotClick = (plotId: number) => {
    const plot = plots.find((p) => p.id === plotId)
    if (plot) {
      setSelectedPlot(plot)
      setIsDialogOpen(true)
    }
  }

  const availableCount = plots.filter((p) => p.available).length

  const plotsByMap = {
    1: [1, 2, 3, 4, 7, 11, 12, 13, 15, 16, 17, 18, 19, 25],
    2: [9, 10, 20, 21, 22, 23, 26, 27, 28, 29, 30],
    3: [5, 6, 8, 14, 24],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-3xl font-bold text-navy mb-2">Available Plots</h2>
          <p className="text-muted-foreground">{availableCount} of 30 plots available</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="text-sm">Available</span>
        </div>
      </div>

      <div className="space-y-8">
        {/* Map 1 - Orchard 15A-15B (First Section) */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-navy">Orchard Section - 15A-15B (Part 1)</CardTitle>
            <p className="text-sm text-muted-foreground">Middlewood Circle & Hazelwood Circle</p>
          </CardHeader>
          <CardContent>
            <div className="relative w-full aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/plat-maps/orchard-15a-15b-part1.png"
                alt="Orchard Section 15A-15B Part 1 Plat Map"
                fill
                className="object-contain plot-map-image"
              />
              {plotsByMap[1].map((plotId) => {
                const plot = plots.find((p) => p.id === plotId)
                const pos = plotPositions[plotId]
                if (!plot || !pos) return null

                return (
                  <button
                    key={plotId}
                    onClick={() => handlePlotClick(plotId)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all z-10 cursor-pointer hover:scale-110"
                    style={{ left: pos.x, top: pos.y }}
                    title={`Plot ${plotId} - ${plot.address}`}
                  >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg border-2 border-white bg-green-500 hover:bg-green-600">
                      {plotId}
                    </div>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Map 2 - Orchard 15A-15B (Second Section) */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-navy">Orchard Section - 15A-15B (Part 2)</CardTitle>
            <p className="text-sm text-muted-foreground">Middlewood Circle, Village Road & Plantation Boulevard</p>
          </CardHeader>
          <CardContent>
            <div className="relative w-full aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/plat-maps/orchard-15a-15b-part2.png"
                alt="Orchard Section 15A-15B Part 2 Plat Map"
                fill
                className="object-contain plot-map-image"
              />
              {plotsByMap[2].map((plotId) => {
                const plot = plots.find((p) => p.id === plotId)
                const pos = plotPositions[plotId]
                if (!plot || !pos) return null

                return (
                  <button
                    key={plotId}
                    onClick={() => handlePlotClick(plotId)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all z-10 cursor-pointer hover:scale-110"
                    style={{ left: pos.x, top: pos.y }}
                    title={`Plot ${plotId} - ${plot.address}`}
                  >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg border-2 border-white bg-green-500 hover:bg-green-600">
                      {plotId}
                    </div>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Map 3 - East Landings */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-navy">East Landings Section</CardTitle>
            <p className="text-sm text-muted-foreground">East Landings North</p>
          </CardHeader>
          <CardContent>
            <div className="relative w-full aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/plat-maps/east-landings.png"
                alt="East Landings Plat Map"
                fill
                className="object-contain plot-map-image"
              />
              {plotsByMap[3].map((plotId) => {
                const plot = plots.find((p) => p.id === plotId)
                const pos = plotPositions[plotId]
                if (!plot || !pos) return null

                return (
                  <button
                    key={plotId}
                    onClick={() => handlePlotClick(plotId)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all z-10 cursor-pointer hover:scale-110"
                    style={{ left: pos.x, top: pos.y }}
                    title={`Plot ${plotId} - ${plot.address}`}
                  >
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg border-2 border-white bg-green-500 hover:bg-green-600">
                      {plotId}
                    </div>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-navy">Plot #{selectedPlot?.id}</DialogTitle>
            <DialogDescription className="text-base space-y-2 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-burgundy mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{selectedPlot?.address}</p>
                  <p className="text-sm text-muted-foreground">Granbury, TX 76049</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Lot Size:</span> {selectedPlot?.lotSize}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Section:</span>{" "}
                  {selectedPlot && plotPositions[selectedPlot.id]?.section}
                </p>
              </div>
              <div className="pt-2">
                <Badge className="bg-green-500 text-white">Available</Badge>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 pt-4">
            <Button className="flex-1 bg-burgundy hover:bg-burgundy/90" asChild>
              <a href="tel:+18477575571">Call Us</a>
            </Button>
            <Button className="flex-1 bg-transparent" variant="outline" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
