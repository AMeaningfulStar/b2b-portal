"use client"

import { Button } from "@components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet"
import { Menu, MessageCircle, Phone } from "lucide-react"
import { useEffect, useState } from "react"

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Security", href: "#security" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">GC</span>
          </div>
          <span
            className={`text-lg font-bold transition-colors ${
              scrolled ? "text-foreground" : "text-card-foreground"
            }`}
          >
            GreenCore Tech
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === item.href.replace("#", "")
                  ? "text-accent"
                  : scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <a href="tel:+8210-0000-0000">
              <Phone className="mr-1.5 h-4 w-4" />
              Call
            </a>
          </Button>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#contact">
              <MessageCircle className="mr-1.5 h-4 w-4" />
              Get Quote
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-card">
            <div className="flex flex-col gap-6 pt-8">
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      activeSection === item.href.replace("#", "")
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-2 px-3">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+8210-0000-0000">
                    <Phone className="mr-1.5 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    <MessageCircle className="mr-1.5 h-4 w-4" />
                    Get Quote
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
