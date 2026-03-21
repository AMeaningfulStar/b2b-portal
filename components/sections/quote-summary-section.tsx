'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, PhoneCall } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function QuoteSummarySection() {
  const { ref, isVisible } = useScrollAnimation()

  const [form, setForm] = useState({
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleQuickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // TODO:
    // 빠른 문의 API 연결 또는 문의 페이지로 값 전달
    console.log('빠른 문의', form)
    alert('빠른 문의 기능은 추후 연동 예정입니다.')
  }

  return (
    <section
      id="quote"
      ref={ref}
      className={`bg-gray-50 px-4 py-20 transition-[opacity,transform] duration-700 lg:py-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-[#0f172a]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left */}
            <div className="px-6 py-12 text-white md:px-10 lg:px-12 lg:py-14">
              <p className="mb-3 text-sm font-semibold text-blue-300">문의하기</p>

              <h2 className="text-3xl leading-tight font-bold md:text-4xl">
                처리 가능 여부부터
                <br />
                빠르게 안내드립니다
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                전자·전기 계열 불용 자재, 회로기판, 전자 스크랩, 귀금속 및 희귀금속, 수지류, 현장 수거 관련 내용을
                남겨주시면 담당자가 확인 후 안내드립니다.
              </p>

              <div className="mt-8 space-y-3 text-sm text-slate-300">
                <p>• 사진이나 자재 목록만 있어도 문의 가능합니다.</p>
                <p>• 정확한 수량을 모르셔도 괜찮습니다.</p>
                <p>• 처리 가능 여부가 애매한 품목도 편하게 문의해 주세요.</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="bg-white text-[#003d82] hover:bg-gray-100">
                  <Link href="/quote" className="inline-flex items-center gap-2">
                    불용 자재 문의하기
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="tel:02-0000-0000" className="inline-flex items-center gap-2">
                    <PhoneCall className="h-4 w-4" />
                    전화 상담하기
                  </a>
                </Button>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white px-6 py-10 md:px-10 lg:px-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">빠른 문의</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">간단한 연락처와 문의 내용만 남겨주셔도 됩니다.</p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-900">
                    연락처
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    required
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-900">
                    문의 내용
                  </label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="예: PCB 기판, 전자부품, 컴퓨터 등 / 대략적인 수량 또는 지역을 함께 적어주세요"
                    rows={5}
                    required
                    className="resize-none border-gray-300"
                  />
                </div>

                <Button type="submit" className="h-12 w-full bg-[#003d82] text-white hover:bg-[#002a5c]">
                  빠른 문의 남기기
                </Button>
              </form>

              <p className="mt-4 text-xs leading-5 text-gray-500">
                접수된 문의는 담당자 확인 후 순차적으로 연락드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
