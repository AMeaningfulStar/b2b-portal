import HeroSection from '@/components/sections/hero-section'
import ContactSection from '@/components/sections/contact-section'
import FaqSection from '@/components/sections/faq-section'
import LocationSection from '@/components/sections/location-section'
import ProcessSection from '@/components/sections/process-section'
import PortfolioSection from '@/components/sections/portfolio-section'
import SecuritySection from '@/components/sections/security-section'
import ServicesSection from '@/components/sections/services-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <SecuritySection />
      <PortfolioSection />
      <FaqSection />
      <ContactSection />
      <LocationSection />
    </main>
  )
}
