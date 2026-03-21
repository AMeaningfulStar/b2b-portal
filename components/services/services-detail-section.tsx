import { ArrowRight, CheckCircle2, Cpu, HardDrive, Shield, Truck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Cpu,
    category: 'Electronic Materials',
    title: '전자·전기 불용 자재 처리',
    description:
      '기업에서 사용하지 않게 된 전자·전기 계열 자재를 정리하고 처리하여 자산 관리와 공간 효율을 지원합니다.',
    image: '/images/electronic-waste-processing.png',
    items: ['전자부품', '전기·전자 자재', '통신기기', '컴퓨터', '가전제품'],
    points: ['기업 내 장기 보관 자재 정리 가능', '품목 특성에 맞는 처리 진행', '현장 상황에 맞춘 유연한 대응'],
  },
  {
    icon: HardDrive,
    category: 'PCB & Scrap',
    title: '회로기판 및 전자 스크랩 처리',
    description: 'PCB, 전자부품, 각종 전자 스크랩 자재를 분류하고 체계적으로 처리하여 자원 재활용을 지원합니다.',
    image: '/images/pcb-scrap.png',
    items: ['PCB', 'FPCB', '전자 스크랩', 'IC 부품', '혼합 전자 자재'],
    points: [
      '회로기판 및 스크랩 자재 분류 대응',
      '품목 확인 후 처리 가능 여부 안내',
      '기업 물량과 현장 조건에 맞는 진행',
    ],
  },
  {
    icon: Shield,
    category: 'Metal Recovery',
    title: '귀금속 및 희귀금속 회수',
    description: '전자부품 및 산업 자재에 포함된 귀금속과 희귀금속을 선별하여 자원 가치를 검토하고 회수합니다.',
    image: '/images/precious-metal-recovery.png',
    items: ['귀금속 포함 자재', '희귀금속 포함 자재', '금속 혼합 자재', '산업 부품'],
    points: ['금속 자원 특성을 고려한 검토', '자재 가치 확인 후 진행 가능', '산업 자재 기반 맞춤 대응'],
  },
  {
    icon: Truck,
    category: 'On-site Collection',
    title: '현장 수거 및 맞춤 처리',
    description:
      '기업 환경에 맞춘 방문 수거 서비스를 통해 불용 자재를 안전하게 수거하고 맞춤형 처리 서비스를 제공합니다.',
    image: '/images/on-site-collection.png',
    items: ['현장 방문 수거', '일정 조율', '대량 자재 대응', '기업 맞춤 진행'],
    points: ['방문 일정 협의 후 수거 진행', '현장 상황에 맞춘 대응 가능', '여러 품목 동시 문의 가능'],
  },
]

export default function ServicesDetailSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-[#003d82]">Services</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            기업 환경에 맞는 불용 자재 처리 서비스를 제공합니다
          </h2>
          <p className="mt-4 text-base leading-7 break-keep text-gray-600 md:text-lg">
            엠티리사이텍은 전자·전기 계열 불용 자재를 중심으로 회로기판, 전자 스크랩, 귀금속 및 희귀금속, 현장 수거까지
            다양한 처리 서비스를 지원합니다.
          </p>
        </div>

        <div className="space-y-10">
          {services.map((service, index) => (
            <div key={service.title} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative min-h-70 lg:min-h-105">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>

                <div className="p-8 md:p-10 lg:p-12">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#003d82]/10 text-[#003d82]">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-[#003d82] uppercase">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-gray-900 md:text-3xl">{service.title}</h3>

                  <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>

                  <div className="mt-8">
                    <p className="text-sm font-semibold text-gray-900">주요 품목</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold text-gray-900">이런 경우에 적합합니다</p>
                    <ul className="mt-4 space-y-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#003d82]" />
                          <span className="text-sm leading-6 text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button className="bg-[#003d82] text-white hover:bg-[#002a5c]">
                      <Link href="/quote" className="inline-flex items-center gap-2">
                        문의하기
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-[#0f172a] px-6 py-10 text-white md:px-10 md:py-12">
          <p className="text-sm font-semibold text-blue-300">문의 안내</p>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            처리 가능 여부가 애매한 품목도
            <br />
            편하게 문의해 주세요
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            품목명이나 수량이 정확하지 않더라도 괜찮습니다. 자재 사진이나 보관 상태를 함께 알려주시면 확인 후
            안내드리겠습니다.
          </p>

          <div className="mt-8">
            <Button className="bg-white text-[#003d82] hover:bg-gray-100">
              <Link href="/quote">불용 자재 문의하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
