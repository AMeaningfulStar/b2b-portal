'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [inquiryType, setInquiryType] = useState('')

  const inquiryTypeOptions = [
    { value: 'electronic-materials', label: '전자·전기 불용 자재' },
    { value: 'pcb-scrap', label: '회로기판 및 전자 스크랩' },
    { value: 'precious-metal', label: '귀금속 및 희귀금속' },
    { value: 'resin', label: '수지류 및 기타 자재' },
    { value: 'collection', label: '현장 수거 문의' },
    { value: 'other', label: '기타' },
  ]

  const selectedInquiryTypeLabel = inquiryTypeOptions.find((option) => option.value === inquiryType)?.label

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleInquiryTypeChange = (value: string | null) => {
    setInquiryType(value ?? '')
  }

  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">불용 자재 처리 문의</h2>
            <p className="text-base text-gray-600">
              처리하실 자재 정보를 남겨주시면 담당자가 확인 후 안내드리겠습니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-semibold text-gray-900">
                  업체명 *
                </Label>
                <Input id="company" placeholder="업체명을 입력해주세요" required className="border-gray-300" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold text-gray-900">
                  담당자명 *
                </Label>
                <Input id="name" placeholder="담당자명을 입력해주세요" required className="border-gray-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-900">
                  연락처 *
                </Label>
                <Input id="phone" type="tel" placeholder="010-0000-0000" required className="border-gray-300" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-900">
                  이메일
                </Label>
                <Input id="email" type="email" placeholder="email@example.com" className="border-gray-300" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="region" className="text-sm font-semibold text-gray-900">
                지역 *
              </Label>
              <Input id="region" placeholder="예: 서울시 강남구" required className="border-gray-300" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-900">문의 유형 *</Label>
              <Select value={inquiryType} onValueChange={handleInquiryTypeChange} required>
                <SelectTrigger className="w-full border-gray-300">
                  <SelectValue placeholder="문의 유형을 선택해주세요">{selectedInquiryTypeLabel}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {inquiryTypeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="items" className="text-sm font-semibold text-gray-900">
                품목 및 내용 *
              </Label>
              <Textarea
                id="items"
                placeholder="예: PCB 기판, 전자부품, 컴퓨터, 통신기기, 수지류 등 / 대략적인 수량 또는 보관 상태를 함께 적어주세요"
                rows={5}
                required
                className="resize-none border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="schedule" className="text-sm font-semibold text-gray-900">
                희망 방문 일정
              </Label>
              <Input id="schedule" type="date" className="border-gray-300" />
            </div>

            <div className="flex items-start space-x-2 pt-4">
              <Checkbox id="privacy" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
              <Label htmlFor="privacy" className="cursor-pointer text-sm leading-relaxed text-gray-600">
                개인정보 수집 및 이용에 동의합니다. (필수)
              </Label>
            </div>

            <Button type="submit" className="h-12 w-full bg-[#003d82] text-white hover:bg-[#002a5c]" disabled={!agreed}>
              <Send className="mr-2 h-5 w-5" />
              문의 접수하기
            </Button>
          </form>

          <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>문의 접수 완료</DialogTitle>
                <DialogDescription className="space-y-4">
                  <p>문의가 정상적으로 접수되었습니다.</p>
                  <p>담당자가 내용을 확인한 후 순차적으로 안내드리겠습니다.</p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
