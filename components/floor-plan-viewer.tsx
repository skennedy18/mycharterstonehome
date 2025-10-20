"use client"

import { useState, useRef, type MouseEvent } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ZoomIn, ZoomOut, Download, Maximize2 } from "lucide-react"
import Image from "next/image"

interface FloorPlan {
  name: string
  image: string
  type: string
}

interface FloorPlanViewerProps {
  modelName: string
  floorPlans: FloorPlan[]
  elevations: string[]
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FloorPlanViewer({ modelName, floorPlans, elevations, open, onOpenChange }: FloorPlanViewerProps) {
  const [zoom, setZoom] = useState(100)
  const [activeTab, setActiveTab] = useState("floor-plans")
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 50))
  const handleReset = () => {
    setZoom(100)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (zoom > 100) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    }
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging && zoom > 100) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-serif text-2xl text-navy">{modelName} - Floor Plans & Elevations</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-hidden flex flex-col">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <div className="px-6 border-b">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="floor-plans">Floor Plans</TabsTrigger>
                <TabsTrigger value="elevations">Elevations</TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-auto p-6">
              <TabsContent value="floor-plans" className="mt-0 space-y-6">
                {floorPlans.map((plan, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{plan.name}</h3>
                      <Badge variant="outline">{plan.type}</Badge>
                    </div>
                    <div
                      ref={containerRef}
                      className="relative bg-gray-100 rounded-lg overflow-hidden"
                      style={{
                        cursor: zoom > 100 ? (isDragging ? "grabbing" : "grab") : "default",
                      }}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className="overflow-hidden"
                        style={{
                          maxHeight: "600px",
                        }}
                      >
                        <Image
                          src={plan.image || "/placeholder.svg"}
                          alt={plan.name}
                          width={1200}
                          height={800}
                          className="w-full h-auto select-none"
                          style={{
                            transform: `scale(${zoom / 100}) translate(${position.x / (zoom / 100)}px, ${position.y / (zoom / 100)}px)`,
                            transformOrigin: "top left",
                            transition: isDragging ? "none" : "transform 0.2s",
                          }}
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="elevations" className="mt-0 space-y-6">
                {elevations.map((elevation, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-lg">Elevation {String.fromCharCode(65 + index)}</h3>
                    <div
                      ref={containerRef}
                      className="relative bg-gray-100 rounded-lg overflow-hidden"
                      style={{
                        cursor: zoom > 100 ? (isDragging ? "grabbing" : "grab") : "default",
                      }}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className="overflow-hidden"
                        style={{
                          maxHeight: "600px",
                        }}
                      >
                        <Image
                          src={elevation || "/placeholder.svg"}
                          alt={`Elevation ${String.fromCharCode(65 + index)}`}
                          width={1200}
                          height={600}
                          className="w-full h-auto select-none"
                          style={{
                            transform: `scale(${zoom / 100}) translate(${position.x / (zoom / 100)}px, ${position.y / (zoom / 100)}px)`,
                            transformOrigin: "top left",
                            transition: isDragging ? "none" : "transform 0.2s",
                          }}
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </div>
          </Tabs>

          <div className="border-t p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleZoomOut} disabled={zoom <= 50}>
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium min-w-[60px] text-center">{zoom}%</span>
                <Button variant="outline" size="sm" onClick={handleZoomIn} disabled={zoom >= 200}>
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <Maximize2 className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
              <Button className="bg-burgundy hover:bg-burgundy/90 text-white">
                <Download className="h-4 w-4 mr-2" />
                Download All Plans
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
