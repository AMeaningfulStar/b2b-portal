'use client'

import Link from 'next/link'

import { navigationSections } from '@/components/landing/section-navigation'
import { useSectionNavigation } from '@/hooks/use-section-navigation'

export default function SideNav() {
  const { activeSection, handleSectionClick } = useSectionNavigation()

  return (
    <nav
      aria-label="섹션 바로가기"
      className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 bg-transparent px-3 lg:flex"
    >
      {navigationSections.map((section) => (
        <Link
          key={section.id}
          href={section.href}
          onClick={(event) => handleSectionClick(event, section.id)}
          className="group relative flex items-center rounded-full focus-visible:ring-2 focus-visible:ring-[#003d82] focus-visible:ring-offset-4 focus-visible:outline-none"
          aria-label={section.label}
          aria-current={activeSection === section.id ? 'location' : undefined}
        >
          <span
            className={`absolute right-8 rounded bg-gray-900 px-2 py-1 text-xs font-medium whitespace-nowrap text-white transition-all duration-300 ${
              activeSection === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            {section.label}
          </span>

          <span
            aria-hidden="true"
            className={`block rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'h-3.5 w-3.5 bg-[#003d82] shadow-md ring-2 ring-[#003d82]/30'
                : 'h-2.5 w-2.5 bg-gray-300 group-hover:bg-gray-500'
            }`}
          />
        </Link>
      ))}
    </nav>
  )
}
