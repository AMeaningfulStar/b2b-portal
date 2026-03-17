import "@styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: '브랜드명 | B2B 기업 홈페이지',
    template: '%s | 브랜드명',
  },
  description:
    '기업 맞춤형 솔루션과 전문 서비스를 제공하는 B2B 기업 홈페이지입니다. 사업 소개, 주요 서비스, 문의 정보를 한눈에 확인할 수 있습니다.',
  keywords: [
    'B2B',
    '기업 홈페이지',
    '기업 서비스',
    '비즈니스 솔루션',
    '브랜드명',
  ],
  openGraph: {
    title: '브랜드명 | B2B 기업 홈페이지',
    description:
      '기업 맞춤형 솔루션과 전문 서비스를 제공하는 B2B 기업 홈페이지입니다.',
    url: '/',
    siteName: '브랜드명',
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://example.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
