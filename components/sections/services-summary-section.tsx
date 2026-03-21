'use client'

import Link from 'next/link'
import { Cpu, HardDrive, Shield, Truck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const services = [
  {
    icon: Cpu,
    title: '전자·전기 불용 자재 처리',
    description: '기업에서 사용하지 않게 된 전자·전기 계열 자재를 정리하고 체계적으로 처리합니다.',
    tags: ['불용 자재', '자산 정리'],
  },
  {
    icon: HardDrive,
    title: '회로기판 및 전자 스크랩 처리',
    description: 'PCB, 전자부품, 각종 전자 스크랩 자재를 품목에 맞게 분류하고 처리합니다.',
    tags: ['PCB', '전자 스크랩'],
  },
  {
    icon: Shield,
    title: '귀금속 및 희귀금속 회수',
    description: '전자부품 및 산업 자재에 포함된 귀금속·희귀금속을 선별하여 자원 가치를 검토합니다.',
    tags: ['귀금속', '희귀금속'],
  },
  {
    icon: Truck,
    title: '현장 수거 및 맞춤 처리',
    description: '기업 일정과 현장 상황에 맞춰 방문 수거 및 맞춤형 처리 서비스를 제공합니다.',
    tags: ['현장 수거', '맞춤 서비스'],
  },
]

export default function ServicesSummarySection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="services"
      ref={ref}
      className={`min-h-screen border-t border-gray-100 bg-white px-4 py-20 transition-[opacity,transform] duration-700 lg:py-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-[#003d82]">사업분야</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl leading-snug">
              기업 불용 자재 처리 서비스를
              <br />
              한눈에 확인해보세요
            </h2>
            <p className="mt-4 text-base leading-7 break-keep text-gray-600 md:text-lg">
              전자·전기 계열 불용 자재부터 회로기판, 전자 스크랩, 귀금속 및 희귀금속, 현장 수거까지 기업 환경에 맞는
              처리 서비스를 제공합니다.
            </p>
          </div>

          <Button
            variant="outline"
            className="w-fit border-[#003d82] text-[#003d82] hover:bg-[#003d82] hover:text-white"
          >
            <Link href="/services">사업분야 자세히 보기</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#003d82]/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#003d82]/10 text-[#003d82]">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{service.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" className="border-[#003d82] text-[#003d82] hover:bg-[#003d82] hover:text-white">
            <Link href="/services">사업분야 자세히 보기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
