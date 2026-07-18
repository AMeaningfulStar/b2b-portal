'use client'

import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { navigationSections, type NavigationSectionId } from '@/components/landing/section-navigation'

const headerHeight = 56

export function useSectionNavigation() {
  const pathname = usePathname()
  const [currentSection, setCurrentSection] = useState<NavigationSectionId>('home')

  useEffect(() => {
    if (pathname !== '/') return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + headerHeight + window.innerHeight / 3
      let currentSection: NavigationSectionId = 'home'

      for (const section of navigationSections) {
        const element = document.getElementById(section.id)

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id
        }
      }

      setCurrentSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [pathname])

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: NavigationSectionId) => {
    if (pathname !== '/') return

    const element = document.getElementById(sectionId)
    if (!element) return

    event.preventDefault()
    window.history.replaceState(null, '', `/#${sectionId}`)
    window.scrollTo({
      top: element.offsetTop - headerHeight,
      behavior: 'smooth',
    })
  }

  return { activeSection: pathname === '/' ? currentSection : null, handleSectionClick }
}
