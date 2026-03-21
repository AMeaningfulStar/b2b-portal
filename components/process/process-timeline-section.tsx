'use client'

import Link from 'next/link'
import { Camera, FileCheck, Scale, Search, Truck, ClipboardCheck, CheckCircle2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: Search,
    number: '01',
    title: '문의 접수',
    description: '전화 또는 온라인 문의를 통해 자재 종류와 기본 정보를 남겨주세요.',
  },
  {
    icon: Camera,
    number: '02',
    title: '품목 확인 및 상담',
    description: '사진이나 목록을 보내주시면 처리 가능 여부를 안내드립니다.',
  },
  {
    icon: ClipboardCheck,
    number: '03',
    title: '일정 협의',
    description: '물량과 현장 상황에 맞춰 방문 일정과 진행 방식을 협의합니다.',
  },
  {
    icon: Truck,
    number: '04',
    title: '현장 수거',
    description: '협의된 일정에 맞춰 현장을 방문하여 안전하게 수거합니다.',
  },
  {
    icon: Scale,
    number: '05',
    title: '분류 및 처리',
    description: '수거된 자재를 품목별로 분류하여 체계적으로 처리합니다.',
  },
  {
    icon: FileCheck,
    number: '06',
    title: '처리 완료 안내',
    description: '처리 완료 후 진행 내용을 안내드립니다.',
  },
]

const tips = ['자재 사진 또는 목록', '대략적인 수량', '보관 장소', '희망 일정']

export default function ProcessDetailSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold text-[#003d82] uppercase">Process</p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">간단하고 체계적인 처리 절차</h2>
          <p className="mt-4 text-gray-600">문의부터 처리 완료까지, 단계별로 명확하게 진행됩니다.</p>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col gap-6 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="mb-3 text-sm font-bold text-[#003d82]">STEP {step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-gray-600">{step.description}</p>
                </div>
              </div>

              <div className="hidden items-center justify-center md:flex">
                <step.icon className="h-10 w-10 text-[#003d82]" />
              </div>

              <div className="hidden flex-1 md:block" />
            </div>
          ))}
        </div>

        {/* 준비 자료 안내 */}
        <div className="mt-16 rounded-2xl bg-gray-50 p-8">
          <h3 className="text-xl font-bold text-gray-900">문의 시 준비하시면 좋습니다</h3>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {tips.map((tip) => (
              <li key={tip} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#003d82]" />
                <span className="text-sm text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[#0f172a] p-10 text-center text-white">
          <h3 className="text-2xl font-bold">처리 가능 여부가 애매해도 괜찮습니다</h3>
          <p className="mt-4 text-gray-300">사진이나 간단한 설명만 남겨주셔도 확인 후 안내드립니다.</p>

          <div className="mt-6">
            <Button className="bg-white text-[#003d82] hover:bg-gray-100">
              <Link href="/quote">불용 자재 문의하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
