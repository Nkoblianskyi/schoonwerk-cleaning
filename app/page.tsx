import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { InteractiveFactsSection } from "@/components/interactive-facts-section"
import { AboutSection } from "@/components/about-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TipsSection } from "@/components/tips-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <InteractiveFactsSection />
        <AboutSection />
        <AdvantagesSection />
        <TestimonialsSection />
        <TipsSection />
      </main>
      <Footer />
    </div>
  )
}
