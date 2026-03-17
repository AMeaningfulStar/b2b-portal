import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Electronic Components", href: "#services" },
    { label: "Scrap & PCB Purchase", href: "#services" },
    { label: "Data Destruction", href: "#services" },
    { label: "IT Equipment Buyback", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#hero" },
    { label: "Our Process", href: "#process" },
    { label: "Certifications", href: "#security" },
    { label: "Portfolio", href: "#portfolio" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
    { label: "Get a Quote", href: "#contact" },
    { label: "Location", href: "#location" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-primary py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-bold text-accent-foreground">GC</span>
              </div>
              <span
                className="text-lg font-bold text-primary-foreground"
              >
                GreenCore Tech
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Korea&apos;s trusted partner for electronic scrap purchasing, PCB
              recycling, and certified data destruction. Serving corporations
              nationwide with security, compliance, and environmental
              responsibility.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-accent" />
                02-1234-5678
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-accent" />
                info@greencore.co.kr
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-accent" />
                Incheon Free Economic Zone, Korea
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground">
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} GreenCore Tech. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
