'use client'

import { Camera, FileCheck, Scale, Search, Truck, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: '문의 접수',
    description: '전화 또는 온라인 문의를 통해 처리하고자 하는 불용 자재의 종류와 기본 정보를 접수합니다.',
  },
  {
    icon: Camera,
    number: '02',
    title: '품목 확인 및 상담',
    description: '사진이나 자재 목록을 바탕으로 처리 가능 품목을 확인하고, 담당자가 진행 방향을 안내해드립니다.',
  },
  {
    icon: ClipboardCheck,
    number: '03',
    title: '일정 협의',
    description: '수거 물량과 현장 상황을 확인한 뒤, 방문 일정과 수거 진행 방법을 협의합니다.',
  },
  {
    icon: Truck,
    number: '04',
    title: '현장 수거',
    description: '협의된 일정에 맞춰 현장을 방문하여 불용 자재를 안전하게 수거합니다.',
  },
  {
    icon: Scale,
    number: '05',
    title: '분류 및 처리',
    description: '수거된 자재는 품목별로 분류한 뒤 적절한 절차에 따라 체계적으로 처리합니다.',
  },
  {
    icon: FileCheck,
    number: '06',
    title: '처리 완료 안내',
    description: '처리 완료 후 진행 내용을 안내드리며, 필요한 경우 관련 확인 내용도 함께 전달해드립니다.',
  },
]

const banners = [
  { label: '기업 맞춤 상담', desc: 'Custom Consultation' },
  { label: '안전한 현장 수거', desc: 'Safe Collection' },
  { label: '체계적인 자재 처리', desc: 'Systematic Handling' },
]

export default function ProcessTimelineSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-primary mb-3 text-sm font-semibold tracking-widest uppercase">Process</p>
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            간단하고 체계적인 처리 절차
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-base leading-relaxed">
            문의 접수부터 현장 수거, 자재 분류 및 처리까지 모든 과정을 체계적으로 진행하여 기업의 불용 자재 정리를
            지원합니다.
          </p>
        </div>

        <div className="relative">
          <div className="from-primary/50 via-primary/20 absolute top-0 left-8 hidden h-full w-px bg-gradient-to-b to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-start gap-6 md:items-center md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div
                    className={`border-border bg-card hover:border-primary/30 inline-flex rounded-xl border p-6 transition-all md:max-w-md ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-lg md:hidden">
                        <step.icon className="h-6 w-6" />
                      </div>

                      <div>
                        <span className="text-primary mb-2 block text-xs font-bold tracking-wider uppercase">
                          Step {step.number}
                        </span>
                        <h3 className="text-card-foreground mb-2 text-lg font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-background bg-card text-primary relative z-10 hidden h-16 w-16 items-center justify-center rounded-full border-4 md:flex">
                  <step.icon className="h-6 w-6" />
                </div>

                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="border-primary/20 bg-primary/5 mt-16 grid grid-cols-1 gap-4 rounded-2xl border p-6 sm:grid-cols-3 md:p-8">
          {banners.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <span className="text-foreground text-base font-semibold">{item.label}</span>
              <span className="text-muted-foreground text-xs">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
