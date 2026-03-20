const coreValues = [
  {
    title: '전문성',
    description:
      '전자·전기 계열 불용 자재의 특성을 이해하고, 품목에 맞는 방식으로 체계적인 처리 과정을 진행합니다.',
  },
  {
    title: '신뢰성',
    description:
      '문의부터 수거, 분류, 처리까지 각 과정을 명확하게 안내하며 책임감 있게 대응합니다.',
  },
  {
    title: '현장 대응력',
    description:
      '기업의 일정과 현장 상황에 맞춰 방문 수거와 자재 처리 과정을 유연하고 안정적으로 지원합니다.',
  },
]

export default function AboutOverviewSection() {
  return (
    <section className="bg-white px-4 py-20 break-keep">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl leading-tight">
              기업 불용 자재 처리를
              <br />
              더 체계적이고 신뢰할 수 있게 만듭니다
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg">
              기업에서 사용하지 않게 된 전자·전기 계열 자재는 단순히 정리해야 할 물품이 아니라,
              품목의 특성과 처리 방식에 따라 체계적인 검토와 대응이 필요한 자산입니다.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
              저희는 전자부품, 회로기판, 전자 스크랩, 귀금속 및 희귀금속, 수지류 등
              다양한 불용 자재를 대상으로 상담, 수거, 분류, 처리까지 전 과정을 안정적으로
              지원하며 기업이 보다 효율적으로 자재를 정리할 수 있도록 돕고 있습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <p className="text-sm font-semibold text-[#003d82]">운영 기준</p>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-gray-700">
              <li>• 처리 품목에 맞는 사전 확인 및 상담</li>
              <li>• 현장 상황을 고려한 방문 수거 대응</li>
              <li>• 자재별 분류 및 체계적인 처리 진행</li>
              <li>• 처리 완료 후 안내 및 신뢰 있는 대응</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold text-[#003d82]">핵심 가치</p>
            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
              신뢰할 수 있는 기준으로 자재를 처리합니다
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h4 className="text-xl font-semibold text-gray-900">{value.title}</h4>
                <p className="mt-4 text-sm leading-6 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl bg-[#0f172a] px-6 py-10 text-white md:px-10">
          <p className="text-sm font-semibold text-blue-300">서비스 철학</p>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl">
            단순한 수거를 넘어
            <br />
            끝까지 신뢰할 수 있는 처리를 지향합니다
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            불용 자재 처리는 단순히 수거만으로 끝나는 일이 아니라,
            품목 확인, 일정 조율, 현장 대응, 분류 및 처리까지 이어지는 과정입니다.
            저희는 각 단계를 분명하게 안내하고, 기업이 안심하고 맡길 수 있는 처리 경험을
            제공하는 것을 가장 중요한 기준으로 생각합니다.
          </p>
        </div>
      </div>
    </section>
  )
}