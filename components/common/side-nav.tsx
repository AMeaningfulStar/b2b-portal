'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: '홈' },
  { id: 'services', label: '사업분야' },
  { id: 'process', label: '처리절차' },
  { id: 'security', label: '보안관리' },
  { id: 'quote', label: '견적문의' },
]

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 80
      const scrollPosition = window.scrollY + headerOffset + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const headerOffset = 40
    const elementTop = element.getBoundingClientRect().top + window.scrollY
    const targetTop = elementTop - headerOffset

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    })
  }

  return (
    <nav className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 bg-transparent px-3 lg:flex">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center"
          aria-label={section.label}
        >
          <span
            className={`absolute right-8 rounded bg-gray-900 px-2 py-1 text-xs font-medium whitespace-nowrap text-white transition-all duration-300 ${
              activeSection === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            {section.label}
          </span>

          <span
            className={`block rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'h-3.5 w-3.5 bg-[#003d82] shadow-md ring-2 ring-[#003d82]/30'
                : 'h-2.5 w-2.5 bg-gray-300 group-hover:bg-gray-500'
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
