'use client'

import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const menuItems = [
  { label: '홈', href: '#home' },
  { label: '회사소개', href: '#about' },
  { label: '사업분야', href: '#services' },
  { label: '처리절차', href: '#process' },
  { label: '견적문의', href: '#quote' },
]

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="text-lg font-bold tracking-tight text-gray-900">
              (브랜드명)
            </a>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center space-x-3 md:flex">
            <Button
              variant="outline"
              size="sm"
              className="text-sm"
              onClick={() => {
                window.location.href = 'tel:02-0000-0000'
              }}
            >
              <Phone className="mr-1 h-4 w-4" />
              02-0000-0000
            </Button>

            <Button
              size="sm"
              className="bg-[#003d82] text-sm text-white hover:bg-[#002a5c]"
              onClick={() => {
                document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              견적문의
            </Button>
          </div>

          <button
            type="button"
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="모바일 메뉴 열기"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="flex flex-col space-y-2 border-t border-gray-200 pt-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.location.href = 'tel:02-0000-0000'
                  }}
                >
                  <Phone className="mr-1 h-4 w-4" />
                  02-0000-0000
                </Button>

                <Button
                  size="sm"
                  className="bg-[#003d82] text-white hover:bg-[#002a5c]"
                  onClick={() => {
                    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
                    setIsMenuOpen(false)
                  }}
                >
                  견적문의
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
