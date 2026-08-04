import SideNav from '@/components/common/side-nav'
import AboutSummarySection from '@/components/sections/about-summary-section'
import HeroSection from '@/components/sections/hero-section'
import ProcessSummarySection from '@/components/sections/process-summary-section'
import QuoteFormSection from '@/components/quote/quote-form-section'
import SecuritySummarySection from '@/components/sections/security-summary-section'
import ServicesSummarySection from '@/components/sections/services-summary-section'

export default function LandingPage() {
  return (
    <>
      <SideNav />

      <HeroSection />
      <AboutSummarySection />
      <ServicesSummarySection />
      <ProcessSummarySection />
      <SecuritySummarySection />
      <QuoteFormSection />
    </>
  )
}
