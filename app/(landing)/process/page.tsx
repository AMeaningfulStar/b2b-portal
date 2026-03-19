import ProcessTimelineSection from '@/components/process/process-timeline-section'

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold text-[#003d82]">처리절차</p>
          <h1 className="text-4xl leading-snug font-bold tracking-tight text-gray-900 md:text-5xl">
            문의부터 처리 완료까지
            <br />
            명확한 절차로 진행합니다
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 break-keep text-gray-600 md:text-lg">
            기업 자산 처리와 전자스크랩 매입, 저장매체 보안 파기까지 접수, 검토, 수거, 처리, 결과 안내의 순서로
            안정적으로 진행합니다.
          </p>
        </div>
      </section>

      <ProcessTimelineSection />
    </>
  )
}
