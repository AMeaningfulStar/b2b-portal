import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function QuoteSummarySection() {
  return (
    <section id="quote" className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm md:px-10">
        <p className="mb-2 text-sm font-semibold text-[#003d82]">견적문의</p>
        <h2 className="text-3xl font-bold text-gray-900">처리 품목과 물량을 알려주시면 빠르게 안내드립니다</h2>
        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
          기업 자산 처리, 전자스크랩 매입, 저장매체 폐기 등 문의 내용을 남겨주시면 담당자가 검토 후 연락드립니다.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="bg-[#003d82] text-white hover:bg-[#002a5c]">
            <Link href="/quote">견적문의 페이지로 이동</Link>
          </Button>

          <Button asChild variant="outline">
            <a href="tel:02-0000-0000">전화로 상담하기</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
