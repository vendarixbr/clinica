'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/site'

function isActive(pathname: string, href: string) {
  if (href.includes('#')) return false
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/[0.88] shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      {/* Thin continuous golden gradient line at the bottom edge when scrolled */}
      {scrolled && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.35) 18%, rgba(201,169,110,1) 50%, rgba(201,169,110,0.35) 82%, transparent 100%)',
          }}
        />
      )}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center"
          aria-label="Núcleo LV - Início"
        >
          <Image
            src="/logo-nucleo-lv-v4.png"
            alt="Núcleo LV - Saúde Mental & Saúde da Mulher"
            width={1265}
            height={452}
            priority
            sizes="(max-width: 640px) 160px, 200px"
            className={cn(
              'w-auto origin-left transition-all duration-300 group-hover:opacity-90',
              scrolled
                ? 'h-10 drop-shadow-[0_2px_8px_rgba(201,169,110,0.35)] sm:h-12'
                : 'h-9 sm:h-11',
            )}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'group/nav relative cursor-pointer text-sm font-medium tracking-[0.04em] transition-colors duration-200 hover:text-gold',
                  active ? 'text-gold' : 'text-ink',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-[250ms] ease-out group-hover/nav:scale-x-100',
                    active ? 'scale-x-100' : 'scale-x-0',
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse-ring btn-shine bg-gold-gradient hidden cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.06em] text-primary-foreground shadow-[0_4px_16px_rgba(201,169,110,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,169,110,0.45)] sm:inline-block"
          >
            Agendar Consulta
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:text-gold lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-cream/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Navegação mobile">
          {NAV_LINKS.map((link, idx) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={active ? 'page' : undefined}
                style={{ transitionDelay: open ? `${idx * 60}ms` : '0ms' }}
                className={cn(
                  'cursor-pointer border-b border-border/60 py-3 text-[1.1rem] font-medium transition-all duration-300 last:border-0 hover:text-gold',
                  open ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0',
                  active ? 'text-gold' : 'text-ink',
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="cta-pulse-ring btn-shine bg-gold-gradient mt-4 cursor-pointer rounded-full px-5 py-3 text-center text-sm font-semibold tracking-[0.06em] text-primary-foreground shadow-[0_4px_16px_rgba(201,169,110,0.35)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(201,169,110,0.45)]"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  )
}
