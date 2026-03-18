'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`flex min-h-screen items-center justify-center transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">B2B Portal</h1>
        <p className="text-lg text-gray-600">비즈니스를 위한 효율적인 관리 시스템</p>
      </div>
    </section>
  )
}
