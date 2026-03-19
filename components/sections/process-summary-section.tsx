'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const steps = [
  { title: '문의 접수', description: '처리 품목과 물량, 일정을 확인합니다.' },
  { title: '검토 및 견적', description: '현장 조건과 자산 상태를 검토해 견적을 제공합니다.' },
  { title: '수거 및 처리', description: '보안 기준에 맞춰 안전하게 수거 및 처리합니다.' },
  { title: '결과 보고', description: '처리 결과와 필요한 증빙 자료를 안내합니다.' },
]

export default function ProcessSummarySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="process"
      ref={ref}
      className={`flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20 transition-[opacity,transform] duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-[#003d82]">처리절차</p>
            <h2 className="text-3xl font-bold text-gray-900">복잡하지 않게, 명확한 절차로 진행합니다</h2>
          </div>

          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/process">전체 절차 보기</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#003d82]">STEP {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button asChild variant="outline">
            <Link href="/process">전체 절차 보기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
