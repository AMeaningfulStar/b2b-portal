import AboutOverviewSection from '@/components/about/about-overview-section'

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold text-[#003d82]">회사소개</p>
          <h1 className="text-4xl leading-snug font-bold tracking-tight text-gray-900 md:text-5xl">
            기업에서 사용하지 않게 된 자재를
            <br />더 효율적이고 신뢰 있게 정리합니다
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 break-keep text-gray-600 md:text-lg">
            전자·전기 계열 불용 자재를 중심으로 회로기판, 전자부품, 귀금속 및 희귀금속, 수지류 등 다양한 자재를 기업
            환경에 맞춰 안전하고 체계적으로 처리합니다.
          </p>
        </div>
      </section>

      <AboutOverviewSection />
    </>
  )
}
