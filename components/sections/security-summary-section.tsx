'use client'

import Link from 'next/link'
import { ShieldCheck, ClipboardCheck, Truck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const items = [
  {
    icon: ClipboardCheck,
    title: '명확한 처리 절차 안내',
    description: '문의부터 수거, 처리까지 각 단계를 안내하여 혼선 없이 진행합니다.',
  },
  {
    icon: Truck,
    title: '현장 상황에 맞춘 안전한 수거',
    description: '기업 환경과 일정에 맞춰 무리 없이 안정적으로 수거를 진행합니다.',
  },
  {
    icon: ShieldCheck,
    title: '책임 있는 자재 분류 및 처리',
    description: '수거된 자재는 품목별로 분류하여 체계적인 기준으로 처리합니다.',
  },
]

export default function TrustSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="security"
      ref={ref}
      className={`flex min-h-screen items-center justify-center px-4 py-20 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        {/* 메인 박스 */}
        <div className="rounded-3xl bg-[#0f172a] px-6 py-12 text-white md:px-12">
          {/* Header */}
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold text-blue-300">TRUST & SAFETY</p>
            <h2 className="text-3xl leading-tight font-bold md:text-4xl">
              맡겨도 되는 이유,
              <br />
              처리 기준이 다릅니다
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              단순 수거가 아닌, 자재 확인부터 수거, 처리까지 전 과정을 책임 있게 진행합니다.
            </p>
          </div>

          {/* 카드 */}
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <item.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-300">처리 가능 여부가 애매해도 괜찮습니다. 편하게 문의 주세요.</p>

            <Button className="bg-white text-[#003d82] hover:bg-gray-100">
              <Link href="/quote">문의하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
