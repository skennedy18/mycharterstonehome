"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ModelFiltersProps {
  priceRange: number[]
  setPriceRange: (range: number[]) => void
  sqftRange: number[]
  setSqftRange: (range: number[]) => void
  bedrooms: string
  setBedrooms: (value: string) => void
  lotType: string
  setLotType: (value: string) => void
  onReset: () => void
}

export function ModelFilters({
  priceRange,
  setPriceRange,
  sqftRange,
  setSqftRange,
  bedrooms,
  setBedrooms,
  lotType,
  setLotType,
  onReset,
}: ModelFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl font-bold text-navy">Filter Models</h3>
        <Button variant="ghost" size="sm" onClick={onReset} className="text-burgundy hover:text-burgundy/80">
          Reset All
        </Button>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">
          Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
        </Label>
        <Slider
          min={400000}
          max={1000000}
          step={25000}
          value={priceRange}
          onValueChange={setPriceRange}
          className="w-full"
        />
      </div>

      {/* Square Footage */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">
          Square Footage: {sqftRange[0].toLocaleString()} - {sqftRange[1].toLocaleString()} sq ft
        </Label>
        <Slider min={2000} max={6000} step={100} value={sqftRange} onValueChange={setSqftRange} className="w-full" />
      </div>

      {/* Bedrooms */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Bedrooms</Label>
        <Select value={bedrooms} onValueChange={setBedrooms}>
          <SelectTrigger>
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
            <SelectItem value="5">5+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Lot Type */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Lot Type</Label>
        <Select value={lotType} onValueChange={setLotType}>
          <SelectTrigger>
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="golf">Golf Course</SelectItem>
            <SelectItem value="lake">Lake View</SelectItem>
            <SelectItem value="aviation">Aviation/Hangar</SelectItem>
            <SelectItem value="standard">Standard</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
