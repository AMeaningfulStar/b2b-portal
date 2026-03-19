import ServicesDetailSection from '@/components/services/services-detail-section'

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-gray-100 bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl leading-snug font-bold tracking-tight text-gray-900 md:text-5xl">
            기업 불용 자재를 가치 있게 정리하는
            <br />
            전문 처리 서비스를 제공합니다
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 break-keep text-gray-600 md:text-lg">
            사용하지 않게 된 전자·전기 자재를 체계적으로 정리하고, 회로기판, 전자부품, 금속 및 수지류까지 안전하게
            처리하여 기업의 자산 관리와 공간 효율을 동시에 지원합니다.
          </p>
        </div>
      </section>

      <ServicesDetailSection />
    </>
  )
}
