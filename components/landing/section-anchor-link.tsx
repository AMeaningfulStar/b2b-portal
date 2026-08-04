'use client'

import type { ComponentProps, MouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { NavigationSectionId } from '@/components/landing/section-navigation'

interface SectionAnchorLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  sectionId: NavigationSectionId
}

const headerHeight = 56

export function SectionAnchorLink({ sectionId, onClick, ...props }: SectionAnchorLinkProps) {
  const pathname = usePathname()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || pathname !== '/') return

    const element = document.getElementById(sectionId)
    if (!element) return

    event.preventDefault()
    window.history.replaceState(null, '', `/#${sectionId}`)
    window.scrollTo({
      top: element.offsetTop - headerHeight,
      behavior: 'smooth',
    })
  }

  return <Link {...props} href={`/#${sectionId}`} onClick={handleClick} />
}
