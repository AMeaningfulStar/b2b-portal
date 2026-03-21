'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const steps = [
  {
    number: '01',
    title: '문의 접수',
    description: '전화 또는 온라인 문의로 자재 정보를 남겨주세요.',
  },
  {
    number: '02',
    title: '품목 확인',
    description: '사진 또는 목록을 통해 처리 가능 여부를 안내드립니다.',
  },
  {
    number: '03',
    title: '일정 협의',
    description: '수거 일정과 진행 방법을 협의합니다.',
  },
  {
    number: '04',
    title: '현장 수거',
    description: '협의된 일정에 맞춰 안전하게 수거합니다.',
  },
  {
    number: '05',
    title: '분류 및 처리',
    description: '자재를 분류 후 체계적으로 처리합니다.',
  },
]

export default function ProcessSummarySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="process"
      ref={ref}
      className={`flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold text-[#003d82]">처리절차</p>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">문의부터 수거까지 명확한 절차로 진행합니다</h2>
            <p className="mt-4 text-base text-gray-600">
              복잡한 과정 없이, 기업 상황에 맞춰 간단하고 체계적으로 진행됩니다.
            </p>
          </div>

          <Button
            variant="outline"
            className="w-fit border-[#003d82] text-[#003d82] hover:bg-[#003d82] hover:text-white"
          >
            <Link href="/process">전체 절차 보기</Link>
          </Button>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-2xl font-bold text-[#003d82]">{step.number}</div>
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10 text-center text-sm text-gray-600">
          자재 사진이나 목록만 보내주셔도 빠르게 안내드립니다.
        </div>
      </div>
    </section>
  )
}
