import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { FeaturedModels } from "@/components/featured-models"
import { LifestyleShowcase } from "@/components/lifestyle-showcase"
import { AmenitiesCarousel } from "@/components/amenities-carousel"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <FeaturedModels />
      <LifestyleShowcase />
      <AmenitiesCarousel />
      <Footer />
    </main>
  )
}
