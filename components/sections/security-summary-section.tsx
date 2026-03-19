export default function SecuritySummarySection() {
  const items = ['저장매체 보안파쇄 대응', '기업 자산 처리 기준 준수', '민감 정보 보호 중심 처리']

  return (
    <section id="security" className="flex min-h-screen items-center justify-center bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#0f172a] px-6 py-12 text-white md:px-10">
        <p className="mb-2 text-sm font-semibold text-blue-300">보안관리</p>
        <h2 className="text-3xl leading-tight font-bold">신뢰할 수 있는 보안 기준으로 처리합니다</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          전산장비와 저장매체는 단순 폐기가 아니라 보안 기준이 중요한 자산입니다. 처리 과정 전반에서 기업의 정보 보호와
          책임 있는 자산 관리를 우선합니다.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
