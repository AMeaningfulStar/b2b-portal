const coreValues = [
  {
    title: '전문성',
    description: '전자·전기 계열 불용 자재의 특성을 이해하고 품목에 맞는 방식으로 처리합니다.',
  },
  {
    title: '신뢰성',
    description: '문의부터 수거, 분류, 처리까지 각 과정을 명확하게 안내하며 책임감 있게 대응합니다.',
  },
  {
    title: '현장 대응력',
    description: '기업의 일정과 현장 상황에 맞춰 방문 수거와 자재 처리 과정을 유연하게 지원합니다.',
  },
]

const operatingStandards = [
  '처리 품목에 맞는 사전 확인 및 상담',
  '현장 상황을 고려한 방문 수거 대응',
  '자재별 분류 및 체계적인 처리 진행',
  '처리 완료 후 안내 및 신뢰 있는 대응',
]

export default function AboutSummarySection() {
  return (
    <section id="about" className="scroll-mt-14 border-t border-gray-100 bg-gray-50 px-4 py-20 break-keep lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#003d82]">회사소개</p>
            <h2 className="text-3xl leading-snug font-bold tracking-tight text-gray-900 md:text-4xl">
              기업 불용 자재 처리를
              <br />더 체계적이고 신뢰할 수 있게 만듭니다
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg">
              기업에서 사용하지 않게 된 전자·전기 계열 자재는 품목의 특성과 처리 방식에 따라 체계적인 검토와 대응이
              필요한 자산입니다.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
              전자부품, 회로기판, 전자 스크랩, 귀금속 및 희귀금속, 수지류 등 다양한 불용 자재를 대상으로 상담부터 수거,
              분류, 처리까지 안정적으로 지원합니다.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold text-[#003d82]">운영 기준</p>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-gray-700">
              {operatingStandards.map((standard) => (
                <li key={standard} className="flex gap-3">
                  <span aria-hidden="true" className="font-semibold text-[#003d82]">
                    •
                  </span>
                  <span>{standard}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {coreValues.map((value) => (
            <div key={value.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
