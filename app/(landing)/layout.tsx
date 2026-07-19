import type { ReactNode } from 'react'

import { FloatingButton } from '@/components/landing/floating-button'
import { HashScrollHandler } from '@/components/landing/hash-scroll-handler'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'

interface LandingLayoutProps {
  children: ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteHeader />
      <HashScrollHandler />
      <main className="pt-14">{children}</main>
      <SiteFooter />
      <FloatingButton />
    </div>
  )
}
