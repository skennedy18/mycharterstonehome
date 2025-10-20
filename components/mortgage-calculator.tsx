"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(500000)
  const [downPayment, setDownPayment] = useState(20)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)

  const calculateMonthlyPayment = () => {
    const principal = homePrice - (homePrice * downPayment) / 100
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    return monthlyPayment
  }

  const monthlyPayment = calculateMonthlyPayment()

  return (
    <Card className="bg-gradient-to-br from-burgundy to-navy text-white">
      <CardHeader>
        <CardTitle className="font-serif text-2xl">Mortgage Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Home Price */}
        <div className="space-y-2">
          <Label className="text-white/90">Home Price</Label>
          <Input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="bg-white/10 border-white/20 text-white"
          />
        </div>

        {/* Down Payment */}
        <div className="space-y-2">
          <Label className="text-white/90">Down Payment: {downPayment}%</Label>
          <Slider
            min={0}
            max={50}
            step={1}
            value={[downPayment]}
            onValueChange={(value) => setDownPayment(value[0])}
            className="w-full"
          />
        </div>

        {/* Interest Rate */}
        <div className="space-y-2">
          <Label className="text-white/90">Interest Rate: {interestRate}%</Label>
          <Slider
            min={3}
            max={10}
            step={0.1}
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
            className="w-full"
          />
        </div>

        {/* Loan Term */}
        <div className="space-y-2">
          <Label className="text-white/90">Loan Term: {loanTerm} years</Label>
          <Slider
            min={10}
            max={30}
            step={5}
            value={[loanTerm]}
            onValueChange={(value) => setLoanTerm(value[0])}
            className="w-full"
          />
        </div>

        {/* Result */}
        <div className="pt-4 border-t border-white/20">
          <p className="text-sm text-white/80 mb-2">Estimated Monthly Payment</p>
          <p className="text-4xl font-bold font-serif">
            ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <p className="text-xs text-white/60 mt-2">*Estimate does not include taxes, insurance, or HOA fees</p>
        </div>
      </CardContent>
    </Card>
  )
}
