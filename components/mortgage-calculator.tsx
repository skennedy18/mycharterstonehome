"use client"

import { useState } from "react"
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
    <div
      className="p-6 rounded-sm space-y-6"
      style={{ backgroundColor: "var(--color-bg-alt)", border: "1px solid var(--color-border)" }}
    >
      <h3 className="text-[12px] uppercase tracking-[0.08em] font-medium" style={{ color: "var(--color-text)" }}>
        Mortgage Calculator
      </h3>

      <div className="space-y-2">
        <Label className="text-[12px] uppercase tracking-[0.05em]" style={{ color: "var(--color-text-muted)" }}>
          Home Price
        </Label>
        <input
          type="number"
          value={homePrice}
          onChange={(e) => setHomePrice(Number(e.target.value))}
          className="w-full text-sm font-light"
          style={{
            border: "none",
            borderBottom: "1px solid var(--color-border)",
            borderRadius: 0,
            background: "transparent",
            padding: "8px 0",
            color: "var(--color-text)",
            outline: "none",
          }}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-[12px] uppercase tracking-[0.05em]" style={{ color: "var(--color-text-muted)" }}>
          Down Payment: {downPayment}%
        </Label>
        <Slider
          min={0}
          max={50}
          step={1}
          value={[downPayment]}
          onValueChange={(value) => setDownPayment(value[0])}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-[12px] uppercase tracking-[0.05em]" style={{ color: "var(--color-text-muted)" }}>
          Interest Rate: {interestRate}%
        </Label>
        <Slider
          min={3}
          max={10}
          step={0.1}
          value={[interestRate]}
          onValueChange={(value) => setInterestRate(value[0])}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-[12px] uppercase tracking-[0.05em]" style={{ color: "var(--color-text-muted)" }}>
          Loan Term: {loanTerm} years
        </Label>
        <Slider
          min={10}
          max={30}
          step={5}
          value={[loanTerm]}
          onValueChange={(value) => setLoanTerm(value[0])}
          className="w-full"
        />
      </div>

      <div className="pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
        <p className="text-[12px] uppercase tracking-[0.05em] mb-2" style={{ color: "var(--color-text-muted)" }}>
          Estimated Monthly Payment
        </p>
        <p className="font-serif text-[2rem]" style={{ color: "var(--color-primary)" }}>
          ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </p>
        <p className="text-[11px] mt-2" style={{ color: "var(--color-text-muted)" }}>
          *Estimate does not include taxes, insurance, or HOA fees
        </p>
      </div>
    </div>
  )
}
