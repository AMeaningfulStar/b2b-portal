'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      className="fixed right-8 bottom-8 z-40 h-12 w-12 rounded bg-[#003d82] p-0 text-white hover:bg-[#002a5c]"
      size="icon"
      aria-label="맨 위로 이동"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
