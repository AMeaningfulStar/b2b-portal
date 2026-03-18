import { Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Electronic Components', href: '#services' },
    { label: 'Scrap & PCB Purchase', href: '#services' },
    { label: 'Data Destruction', href: '#services' },
    { label: 'IT Equipment Buyback', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#hero' },
    { label: 'Our Process', href: '#process' },
    { label: 'Certifications', href: '#security' },
    { label: 'Portfolio', href: '#portfolio' },
  ],
  Support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Get a Quote', href: '#contact' },
    { label: 'Location', href: '#location' },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-primary py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-accent flex h-9 w-9 items-center justify-center rounded-lg">
                <span className="text-accent-foreground text-sm font-bold">GC</span>
              </div>
              <span className="text-primary-foreground text-lg font-bold">GreenCore Tech</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm text-sm leading-relaxed">
              Korea&apos;s trusted partner for electronic scrap purchasing, PCB recycling, and certified data
              destruction. Serving corporations nationwide with security, compliance, and environmental responsibility.
            </p>
            <div className="flex flex-col gap-3">
              <div className="text-primary-foreground/70 flex items-center gap-2 text-sm">
                <Phone className="text-accent h-4 w-4" />
                02-1234-5678
              </div>
              <div className="text-primary-foreground/70 flex items-center gap-2 text-sm">
                <Mail className="text-accent h-4 w-4" />
                info@greencore.co.kr
              </div>
              <div className="text-primary-foreground/70 flex items-center gap-2 text-sm">
                <MapPin className="text-accent h-4 w-4" />
                Incheon Free Economic Zone, Korea
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-primary-foreground mb-4 text-sm font-semibold tracking-widest uppercase">{title}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-primary-foreground/10 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-primary-foreground/50 text-xs">
            &copy; {new Date().getFullYear()} GreenCore Tech. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-primary-foreground/50 hover:text-accent text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-accent text-xs">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
