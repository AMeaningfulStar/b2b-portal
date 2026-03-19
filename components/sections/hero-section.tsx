'use client'

import { FileText, Phone } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function HeroSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation()

  return (
    <section id="home" className="relative bg-white">
      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            ref={leftRef}
            className={`space-y-8 transition-all duration-700 ${
              leftVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl leading-tight font-bold tracking-tight text-gray-900 md:text-5xl">
                전자스크랩 · 전산자산
                <br />
                보안폐기 전문 기업
              </h1>

              <div className="space-y-2 text-base leading-relaxed text-gray-600">
                <p>PCB·FPCB·IC 기판 전문 매입 및 분류</p>
                <p>전산장비 자산 평가 및 처리</p>
                <p>저장매체 보안파쇄 (천공·파쇄·디가우징)</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-[#003d82] text-white hover:bg-[#002a5c]"
                onClick={() => {
                  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <FileText className="mr-2 h-5 w-5" />
                견적문의
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-300"
                onClick={() => {
                  window.location.href = 'tel:02-0000-0000'
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                전화상담
              </Button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">서비스 지역:</span> 수도권 전지역 우선 / 조건에 따라 전국
                출장
              </p>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`relative transition-all delay-300 duration-700 ${
              rightVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-2xl">
              <Image src="https://placehold.co/400x300/png" alt="전자부품 수거 현장" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
