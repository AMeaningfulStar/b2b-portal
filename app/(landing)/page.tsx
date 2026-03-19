import HeroSection from '@/components/sections/hero-section'
import ProcessSummarySection from '@/components/sections/process-summary-section'
import QuoteSummarySection from '@/components/sections/quote-summary-section'
import SecuritySummarySection from '@/components/sections/security-summary-section'
import ServicesSummarySection from '@/components/sections/services-summary-section'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ServicesSummarySection />
      <ProcessSummarySection />
      <SecuritySummarySection />
      <QuoteSummarySection />
    </>
  )
}
