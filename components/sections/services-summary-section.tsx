import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function ServicesSummarySection() {
  const services = ['PCB·FPCB·IC 기판 전문 매입', '전산장비 자산 평가 및 처리', '저장매체 보안파쇄 및 폐기']

  return (
    <section
      id="services"
      className="flex min-h-screen items-center justify-center border-t border-gray-100 bg-white px-4 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-[#003d82]">사업분야</p>
            <h2 className="text-3xl font-bold text-gray-900">핵심 서비스를 빠르게 확인하세요</h2>
            <p className="mt-3 text-gray-600">
              전자스크랩 매입부터 전산자산 처리, 보안폐기까지 기업 맞춤형으로 대응합니다.
            </p>
          </div>

          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/services">자세히 보기</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                기업 자산 처리 흐름에 맞춰 안전하고 신속하게 대응합니다.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button asChild variant="outline">
            <Link href="/services">자세히 보기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
