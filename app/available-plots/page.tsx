"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PlotMap } from "@/components/plot-map"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function AvailablePlotsPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-20">
        <section className="bg-gradient-to-r from-burgundy to-navy text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Available Plots</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Choose your perfect homesite at Pecan Villas. Each plot offers unique features and stunning views.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <PlotMap />
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-burgundy to-navy text-white">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Choose Your Plot?</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Our team is here to help you select the perfect homesite and answer any questions about available
                    plots.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-white text-burgundy hover:bg-white/90">
                      <Link href="/contact">
                        <Mail className="h-5 w-5 mr-2" />
                        Contact Us
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 bg-transparent"
                    >
                      <Link href="tel:+18477575571">
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
