# AGENTS.md

## Scope / 적용 범위

This file applies to the entire repository. Do not create more specific `AGENTS.md` files unless a future task explicitly requires directory-specific instructions.

이 파일은 저장소 전체에 적용됩니다. 향후 작업에서 디렉터리별 지침을 명시적으로 요구하지 않는 한 하위 `AGENTS.md` 파일을 추가하지 마세요.

## Project Overview / 프로젝트 개요

This repository contains a Korean-language B2B corporate website for electronic scrap, unused business assets, material collection, and secure disposal. The public site provides a landing page and separate About, Services, Process, and Quote pages. The admin route is currently a placeholder.

이 저장소는 전자 스크랩, 기업 불용 자산, 자재 수거 및 보안 폐기를 다루는 한국어 B2B 기업 웹사이트입니다. 공개 사이트는 랜딩 페이지와 회사소개, 사업분야, 처리절차, 견적문의 페이지로 구성됩니다. 관리자 라우트는 현재 임시 상태입니다.

## Technology Stack / 기술 스택

- Use Next.js 16 App Router, React 19, and TypeScript in strict mode.
  Next.js 16 App Router, React 19, TypeScript strict mode를 사용합니다.
- Use Tailwind CSS 4 for styling and follow the existing shadcn-style component conventions.
  스타일링에는 Tailwind CSS 4를 사용하고 기존 shadcn 스타일 컴포넌트 관례를 따릅니다.
- Reuse the existing Base UI and Radix UI primitives. Do not migrate or replace one library with the other unless the task explicitly requires it.
  기존 Base UI와 Radix UI primitive를 재사용합니다. 작업에서 명시적으로 요구하지 않는 한 두 라이브러리를 서로 교체하거나 마이그레이션하지 마세요.
- Use Lucide for interface icons, `next-themes` for theme behavior, and the existing Vercel Analytics integration.
  인터페이스 아이콘은 Lucide를 사용하며, 테마 동작은 `next-themes`, 분석은 기존 Vercel Analytics 연동을 유지합니다.

## Package Manager and Commands / 패키지 매니저와 명령어

Use Bun for dependency management and project commands because `bun.lock` is the committed lockfile.

커밋된 잠금파일이 `bun.lock`이므로 의존성 관리와 프로젝트 명령에는 Bun을 사용합니다.

- Development: `bun run dev`
  개발 서버: `bun run dev`
- Production build: `bun run build`
  프로덕션 빌드: `bun run build`
- Production server: `bun run start`
  프로덕션 서버: `bun run start`
- Lint check: `bun run lint`
  린트 검사: `bun run lint`
- Format check: `bun run format:check`
  포맷 검사: `bun run format:check`

Do not create `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, or `bun.lockb`. Do not switch package managers unless explicitly requested.

`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`를 생성하지 마세요. 명시적인 요청이 없는 한 패키지 매니저를 변경하지 마세요.

## Repository Structure / 저장소 구조

- `app/` owns routes, layouts, route-level metadata, and page composition.
  `app/`은 라우트, 레이아웃, 라우트 수준 메타데이터와 페이지 조합을 담당합니다.
- `app/(landing)/` contains the public routes that share the landing header, footer, and floating controls.
  `app/(landing)/`은 랜딩 헤더, 푸터, 플로팅 컨트롤을 공유하는 공개 라우트를 포함합니다.
- `app/(admin)/` contains admin routes and is currently incomplete.
  `app/(admin)/`은 관리자 라우트를 포함하며 현재 미완성 상태입니다.
- `components/ui/` contains reusable UI primitives.
  `components/ui/`에는 재사용 가능한 UI primitive를 둡니다.
- `components/sections/` contains sections used by the home landing page.
  `components/sections/`에는 홈 랜딩 페이지에서 사용하는 섹션을 둡니다.
- `components/<domain>/` contains domain-specific page sections, such as `about`, `services`, `process`, and `quote`.
  `components/<domain>/`에는 `about`, `services`, `process`, `quote` 등 도메인별 페이지 섹션을 둡니다.
- `components/landing/` contains shared landing-site chrome such as the header, footer, and floating button.
  `components/landing/`에는 헤더, 푸터, 플로팅 버튼 등 랜딩 사이트 공통 요소를 둡니다.
- `hooks/` contains reusable client-side hooks, `lib/` contains shared utilities, and `styles/globals.css` contains global styles and theme variables.
  `hooks/`에는 재사용 가능한 클라이언트 훅, `lib/`에는 공통 유틸리티, `styles/globals.css`에는 전역 스타일과 테마 변수를 둡니다.
- `public/` contains static assets.
  `public/`에는 정적 에셋을 둡니다.

Keep route files focused on routing, metadata, and composition. Put substantial page UI in the appropriate component directory.

라우트 파일은 라우팅, 메타데이터, 컴포넌트 조합에 집중하도록 유지하세요. 규모가 있는 페이지 UI는 적절한 컴포넌트 디렉터리에 배치하세요.

## Next.js Architecture / Next.js 아키텍처

App Router components are Server Components by default. Do not add `'use client'` automatically.

App Router 컴포넌트는 기본적으로 Server Component입니다. 습관적으로 `'use client'`를 추가하지 마세요.

Add `'use client'` only when a component directly requires React state or effects, event handlers, browser APIs such as `window`, `document`, or `IntersectionObserver`, or client-only hooks such as `usePathname`.

컴포넌트가 React 상태나 effect, 이벤트 핸들러, `window`, `document`, `IntersectionObserver` 같은 브라우저 API 또는 `usePathname` 같은 클라이언트 전용 훅을 직접 필요로 할 때만 `'use client'`를 추가하세요.

Keep client boundaries as small as practical. Do not convert an entire page or layout into a Client Component only because one nested element is interactive.

클라이언트 경계는 가능한 한 작게 유지하세요. 하위 요소 하나가 인터랙티브하다는 이유만으로 페이지나 레이아웃 전체를 Client Component로 전환하지 마세요.

Keep global metadata, fonts, theme setup, and Analytics in `app/layout.tsx`. Remember that route groups such as `(landing)` and `(admin)` organize files but do not appear in URLs.

전역 메타데이터, 폰트, 테마 설정과 Analytics는 `app/layout.tsx`에서 유지하세요. `(landing)`, `(admin)` 같은 라우트 그룹은 파일을 구성하기 위한 것이며 URL에는 나타나지 않습니다.

Use `next/link` for internal navigation and `next/image` for site images unless there is a clear technical reason not to.

명확한 기술적 이유가 없는 한 내부 이동에는 `next/link`, 사이트 이미지에는 `next/image`를 사용하세요.

## Components and Imports / 컴포넌트와 import

Before creating a new UI primitive, check `components/ui/` for an existing Button, Input, Textarea, Checkbox, Select, Dialog, Sheet, or related component.

새 UI primitive를 만들기 전에 `components/ui/`에 Button, Input, Textarea, Checkbox, Select, Dialog, Sheet 또는 관련 컴포넌트가 있는지 확인하세요.

Use the `@/` alias for internal imports instead of deep relative paths.

내부 import에는 깊은 상대 경로 대신 `@/` 별칭을 사용하세요.

Use `cn()` from `@/lib/utils` when composing conditional Tailwind classes, especially in reusable UI primitives.

조건부 Tailwind 클래스를 조합할 때, 특히 재사용 가능한 UI primitive에서는 `@/lib/utils`의 `cn()`을 사용하세요.

Prefer explicit prop interfaces or types for non-trivial components. Maintain TypeScript strict-mode compatibility and do not introduce avoidable `any` types.

단순하지 않은 컴포넌트에는 명시적인 props interface 또는 type을 우선 사용하세요. TypeScript strict mode 호환성을 유지하고 불필요한 `any`를 추가하지 마세요.

## Styling and Responsive UI / 스타일과 반응형 UI

Use Tailwind CSS utilities for component styling and follow the surrounding component's visual language.

컴포넌트 스타일에는 Tailwind CSS 유틸리티를 사용하고 주변 컴포넌트의 시각적 언어를 따르세요.

Use the existing responsive conventions, primarily the `md`, `lg`, and `xl` breakpoints. Verify that changes work on both mobile and desktop layouts.

주로 `md`, `lg`, `xl` breakpoint를 사용하는 기존 반응형 관례를 따르세요. 변경 사항이 모바일과 데스크톱 레이아웃에서 모두 동작하는지 확인하세요.

Use `break-keep` where appropriate for Korean headings and long Korean copy.

한국어 제목과 긴 한국어 문구에는 필요한 경우 `break-keep`을 사용하세요.

The public pages primarily use white and gray surfaces, brand blue `#003d82`, and dark navy `#0f172a`. Follow the local pattern unless the task includes a deliberate design-system change.

공개 페이지는 주로 흰색과 회색 표면, 브랜드 파란색 `#003d82`, 짙은 남색 `#0f172a`를 사용합니다. 작업이 의도적인 디자인 시스템 변경을 포함하지 않는 한 해당 영역의 기존 패턴을 따르세요.

Theme variables live in `styles/globals.css`. Avoid unrelated global-token changes while modifying a local component.

테마 변수는 `styles/globals.css`에 있습니다. 로컬 컴포넌트를 수정하면서 관련 없는 전역 토큰을 변경하지 마세요.

Do not manually reorder Tailwind classes. Prettier with `prettier-plugin-tailwindcss` handles class ordering.

Tailwind 클래스 순서를 수동으로 정리하지 마세요. 클래스 정렬은 `prettier-plugin-tailwindcss`가 포함된 Prettier가 처리합니다.

## Accessibility and Localization / 접근성과 현지화

The user-facing site language is Korean. Write visible copy, form labels, validation messages, accessibility labels, and image alt text in natural Korean unless the task specifies another language.

사용자 노출 사이트 언어는 한국어입니다. 작업에서 다른 언어를 지정하지 않는 한 화면 문구, 폼 라벨, 검증 메시지, 접근성 라벨과 이미지 대체 텍스트는 자연스러운 한국어로 작성하세요.

Preserve semantic HTML and keyboard accessibility. Icon-only buttons require an `aria-label`, form controls require associated labels, and images require meaningful alt text.

시맨틱 HTML과 키보드 접근성을 유지하세요. 아이콘 전용 버튼에는 `aria-label`, 폼 컨트롤에는 연결된 라벨, 이미지에는 의미 있는 대체 텍스트가 필요합니다.

Preserve visible focus styles and do not remove accessibility attributes without an equivalent replacement.

보이는 포커스 스타일을 유지하고 동등한 대체 수단 없이 접근성 속성을 제거하지 마세요.

## Known Placeholders / 확인된 임시 값

The following values are placeholders and must not be treated as verified production information:

다음 값들은 임시 값이며 검증된 운영 정보로 취급하면 안 됩니다.

- Company and brand names
  회사명과 브랜드명
- Telephone number, email address, street address, representative name, and business registration number
  전화번호, 이메일 주소, 사업장 주소, 대표자명과 사업자등록번호
- Production domain and metadata URL
  운영 도메인과 메타데이터 URL
- Privacy-policy and terms-of-service links
  개인정보처리방침과 이용약관 링크
- Placeholder and sample images
  임시 이미지와 샘플 이미지

Do not invent or replace these values unless verified information is provided in the task or an authoritative project source.

작업 요청이나 신뢰할 수 있는 프로젝트 자료에서 검증된 정보가 제공되지 않는 한 이러한 값을 임의로 만들거나 교체하지 마세요.

## Forms and Incomplete Integrations / 폼과 미완성 연동

The quote forms are currently UI-only prototypes. The quick form uses browser-side placeholder behavior, and the detailed quote form does not persist or transmit submissions.

견적문의 폼은 현재 UI 전용 프로토타입입니다. 빠른 문의 폼은 브라우저 측 임시 동작만 사용하며 상세 견적 폼도 제출 내용을 저장하거나 전송하지 않습니다.

Do not claim that a submission was stored, emailed, or received unless a real submission path has been implemented and verified.

실제 제출 경로가 구현되고 검증되지 않은 상태에서 문의 내용이 저장, 이메일 전송 또는 접수되었다고 표현하지 마세요.

Do not add a database, email provider, external API, authentication system, Server Action, or Route Handler unless the task explicitly includes that integration.

작업에 해당 연동이 명시적으로 포함되지 않는 한 데이터베이스, 이메일 제공자, 외부 API, 인증 시스템, Server Action 또는 Route Handler를 추가하지 마세요.

When implementing a real submission flow, include validation, loading, success, and error states. Never log personal or inquiry data to the browser console.

실제 제출 흐름을 구현할 때는 검증, 로딩, 성공, 오류 상태를 포함하세요. 개인정보나 문의 데이터를 브라우저 콘솔에 기록하지 마세요.

The admin route is incomplete. Do not infer authentication, authorization, dashboard behavior, or data models that have not been specified.

관리자 라우트는 미완성 상태입니다. 명시되지 않은 인증, 권한, 대시보드 동작 또는 데이터 모델을 추정해서 구현하지 마세요.

## Code Style / 코드 스타일

Follow the repository Prettier configuration:

저장소의 Prettier 설정을 따르세요.

- No semicolons
  세미콜론을 사용하지 않습니다.
- Single quotes for JavaScript and TypeScript strings
  JavaScript와 TypeScript 문자열에는 작은따옴표를 사용합니다.
- Trailing commas where supported
  지원되는 위치에는 후행 쉼표를 사용합니다.
- Two-space indentation
  들여쓰기는 공백 2칸을 사용합니다.
- 120-character print width
  출력 너비는 120자를 기준으로 합니다.

Do not edit generated files such as `next-env.d.ts` or files under `.next/`.

`next-env.d.ts` 또는 `.next/` 아래 파일 같은 생성 파일을 직접 수정하지 마세요.

## Validation / 검증

Run checks appropriate to the change. At minimum, run `bun run lint` and `bun run format:check` for source changes. Run `bun run build` for route, configuration, dependency, Server/Client boundary, or other production-impacting changes.

변경 범위에 적절한 검사를 실행하세요. 소스 변경에는 최소한 `bun run lint`와 `bun run format:check`를 실행합니다. 라우트, 설정, 의존성, Server/Client 경계 또는 기타 운영에 영향을 주는 변경에는 `bun run build`를 실행하세요.

There is currently no automated test framework or test script. Do not claim that tests passed unless tests exist and were actually executed.

현재 자동화 테스트 프레임워크나 테스트 스크립트가 없습니다. 테스트가 실제로 존재하고 실행된 경우가 아니라면 테스트를 통과했다고 말하지 마세요.

For UI changes, verify the affected route at mobile and desktop widths and check for browser console errors.

UI 변경 시 영향을 받는 라우트를 모바일과 데스크톱 너비에서 확인하고 브라우저 콘솔 오류를 점검하세요.

Check before running repository-wide rewrite commands such as `bun run lint:fix` or `bun run format`. Prefer non-writing checks first and keep automatic edits within the requested scope.

`bun run lint:fix` 또는 `bun run format`처럼 저장소 전체를 다시 쓰는 명령을 실행하기 전에 변경 범위를 확인하세요. 먼저 파일을 수정하지 않는 검사를 수행하고 자동 수정은 요청 범위 안으로 제한하세요.

## Change Scope and Safety / 변경 범위와 안전

Preserve unrelated user changes and keep edits focused on the requested task.

관련 없는 사용자 변경을 보존하고 요청된 작업에만 변경을 집중하세요.

Do not perform broad refactors, dependency upgrades, design-system migrations, placeholder replacement, or backend integration unless explicitly requested.

명시적인 요청이 없는 한 광범위한 리팩터링, 의존성 업그레이드, 디자인 시스템 마이그레이션, 임시 값 교체 또는 백엔드 연동을 수행하지 마세요.

Before changing shared files such as `app/layout.tsx`, `styles/globals.css`, `components/ui/*`, or `next.config.ts`, evaluate the effect on all routes and components that consume them.

`app/layout.tsx`, `styles/globals.css`, `components/ui/*`, `next.config.ts` 같은 공유 파일을 변경하기 전에 이를 사용하는 모든 라우트와 컴포넌트에 미치는 영향을 확인하세요.

Do not overwrite, revert, stage, or commit existing user changes unless the task explicitly authorizes that action.

작업에서 해당 동작을 명시적으로 허용하지 않는 한 기존 사용자 변경을 덮어쓰거나 되돌리거나 스테이징하거나 커밋하지 마세요.
