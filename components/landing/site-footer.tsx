import { Mail, MapPin, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-base font-bold text-white">(브랜드명)</h3>
            <div className="space-y-2 text-sm">
              <p>상호: (주)브랜드명</p>
              <p>대표: 홍길동</p>
              <p>사업자번호: 000-00-00000</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">연락처</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>02-0000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>서울특별시 강남구 테헤란로 000</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">상담 시간</h3>
            <div className="space-y-2 text-sm">
              <p>평일: 09:00 - 18:00</p>
              <p>주말 및 공휴일: 휴무</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p>&copy; 2026 (브랜드명). All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-white">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
