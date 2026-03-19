'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Cpu, HardDrive, Server, Shield } from 'lucide-react'

const services = [
  {
    icon: Cpu,
    category: 'Electronic Materials',
    title: '전자·전기 불용 자재 처리',
    description:
      '기업에서 사용하지 않게 된 전자·전기 계열 자재를 정리 및 처리하여 효율적인 자산 관리와 공간 확보를 지원합니다.',
    tags: ['불용 자재', '자산 정리'],
    image: '/images/electronic-waste-processing.png',
  },
  {
    icon: HardDrive,
    category: 'PCB & Scrap',
    title: '회로기판 및 전자 스크랩 처리',
    description:
      'PCB, 전자부품, 각종 전자 스크랩 자재를 체계적으로 분류하고 안전하게 처리하여 자원 재활용을 지원합니다.',
    tags: ['PCB', '전자 스크랩'],
    image: '/images/pcb-scrap.png',
  },
  {
    icon: Shield,
    category: 'Metal Recovery',
    title: '귀금속 및 희귀금속 회수',
    description:
      '전자부품 및 산업 자재에 포함된 귀금속 및 희귀금속을 선별하여 효율적으로 회수하고 자원 가치를 극대화합니다.',
    tags: ['귀금속', '희귀금속'],
    image: '/images/precious-metal-recovery.png',
  },
  {
    icon: Server,
    category: 'On-site Collection',
    title: '현장 수거 및 맞춤 처리',
    description:
      '기업 환경에 맞춘 방문 수거 서비스를 통해 불용 자재를 안전하게 수거하고 맞춤형 처리 서비스를 제공합니다.',
    tags: ['현장 수거', '맞춤 서비스'],
    image: '/images/on-site-collection.png',
  },
]

export default function ServicesDetailSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    const scrollAmount = 400

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-primary mb-3 text-sm font-semibold tracking-widest uppercase">Product</p>
            <h2 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">서비스</h2>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="border-border bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-all"
              aria-label="왼쪽으로 이동"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => scroll('right')}
              className="border-border bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-all"
              aria-label="오른쪽으로 이동"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-6 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group border-border bg-card relative min-w-75 shrink-0 overflow-hidden rounded-2xl border md:min-w-87.5"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="from-card absolute inset-0 bg-linear-to-t to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-card-foreground mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
