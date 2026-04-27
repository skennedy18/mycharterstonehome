"use client"

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
    <div
      className="p-6 rounded-sm space-y-6"
      style={{ backgroundColor: "var(--color-bg-alt)", border: "1px solid var(--color-border)" }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[12px] uppercase tracking-[0.08em] font-medium" style={{ color: "var(--color-text)" }}>
          Filter Models
        </h3>
        <button
          onClick={onReset}
          className="text-[12px] uppercase tracking-[0.05em] underline underline-offset-4 transition-colors duration-300"
          style={{ color: "var(--color-primary)" }}
        >
          Reset
        </button>
      </div>

      <div className="space-y-3">
        <Label className="text-[12px] uppercase tracking-[0.05em]" style={{ color: "var(--color-text-muted)" }}>
          Price: ${priceRange[0].toLocaleString()} – ${priceRange[1].toLocaleString()}
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

      <div className="space-y-3">
        <Label className="text-[12px] uppercase tracking-[0.05em]" style={{ color: "var(--color-text-muted)" }}>
          Size: {sqftRange[0].toLocaleString()} – {sqftRange[1].toLocaleString()} sq ft
        </Label>
        <Slider min={2000} max={6000} step={100} value={sqftRange} onValueChange={setSqftRange} className="w-full" />
      </div>

      <div className="space-y-2">
        <Label className="text-[12px] uppercase tracking-[0.05em]" style={{ color: "var(--color-text-muted)" }}>
          Bedrooms
        </Label>
        <Select value={bedrooms} onValueChange={setBedrooms}>
          <SelectTrigger className="rounded-sm" style={{ border: "1px solid var(--color-border)" }}>
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

      <div className="space-y-2">
        <Label className="text-[12px] uppercase tracking-[0.05em]" style={{ color: "var(--color-text-muted)" }}>
          Lot Type
        </Label>
        <Select value={lotType} onValueChange={setLotType}>
          <SelectTrigger className="rounded-sm" style={{ border: "1px solid var(--color-border)" }}>
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="golf">Golf Course</SelectItem>
            <SelectItem value="lake">Lake View</SelectItem>
            <SelectItem value="aviation">Aviation / Hangar</SelectItem>
            <SelectItem value="standard">Standard</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
