export const navigationSections = [
  { id: 'home', label: '홈', href: '/#home' },
  { id: 'about', label: '회사소개', href: '/#about' },
  { id: 'services', label: '사업분야', href: '/#services' },
  { id: 'process', label: '처리절차', href: '/#process' },
  { id: 'security', label: '보안관리', href: '/#security' },
  { id: 'quote', label: '견적문의', href: '/#quote' },
] as const

export type NavigationSectionId = (typeof navigationSections)[number]['id']
