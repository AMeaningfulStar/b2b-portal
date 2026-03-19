import QuoteFormSection from '@/components/quote/quote-form-section'

export default function QuotePage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold text-[#003d82]">문의하기</p>

          <h1 className="text-4xl leading-snug font-bold tracking-tight break-keep text-gray-900 md:text-5xl">
            기업 불용 자재, 어떻게 처리해야 할지 고민되시나요?
            <br />
            간단히 남겨주시면 안내드립니다
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 break-keep text-gray-600 md:text-lg">
            전자·전기 자재부터 회로기판, 전자부품, 금속 및 수지류까지 기업에서 발생하는 다양한 불용 자재를 상황에 맞게
            정리하고 처리할 수 있도록 도와드립니다.
          </p>
        </div>
      </section>

      <QuoteFormSection />
    </>
  )
}
