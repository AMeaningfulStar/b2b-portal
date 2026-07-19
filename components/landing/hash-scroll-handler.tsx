'use client'

import { useEffect } from 'react'

import { navigationSections } from '@/components/landing/section-navigation'

const headerHeight = 56
const sectionTransitionDuration = 700

export function HashScrollHandler() {
  useEffect(() => {
    const scrollToHash = () => {
      const sectionId = window.location.hash.slice(1)
      const isKnownSection = navigationSections.some((section) => section.id === sectionId)
      if (!isKnownSection) return

      const element = document.getElementById(sectionId)
      if (!element) return

      window.scrollTo({ top: element.offsetTop - headerHeight })
    }

    const frameId = window.requestAnimationFrame(scrollToHash)
    const timeoutId = window.setTimeout(scrollToHash, sectionTransitionDuration)
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  return null
}
