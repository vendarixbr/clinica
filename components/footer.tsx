import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, MapPin, Phone, ChevronRight } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { WhatsAppLogo } from '@/components/whatsapp-logo'
import {
  ADDRESS,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  MAPS_DIRECTIONS,
} from '@/lib/site'

const SOCIALS = [
  { label: 'Instagram', href: INSTAGRAM_URL, icon: Instagram },
  { label: 'Facebook', href: FACEBOOK_URL, icon: Facebook },
  { label: 'WhatsApp', href: WHATSAPP_URL, icon: WhatsAppLogo },
]

export function Footer() {
  return (
    <footer className="bg-footer-gradient text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        {/* Logo */}
        <div>
          <Image
            src="/logo-nucleo-lv-gold.png"
            alt="Núcleo LV - Saúde Mental & Saúde da Mulher"
            width={1298}
            height={454}
            sizes="(max-width: 768px) 220px, 260px"
            className="h-auto w-52 sm:w-60"
          />
          <p className="mt-4 font-serif text-base italic text-gold">
            Saúde Mental &amp; Saúde da Mulher
          </p>
          <div className="my-5 h-px w-12 bg-gold/60" aria-hidden="true" />
          <p className="max-w-xs text-[0.85rem] leading-relaxed text-cream/55">
            Cuidado humanizado em saúde mental e saúde da mulher, com escuta
            atenta e olhar individualizado.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gold/50 text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                <social.icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <nav aria-label="Navegação do rodapé">
          <SectionLabel>Navegação</SectionLabel>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex cursor-pointer items-center gap-2 text-sm text-cream/55 transition-colors duration-200 hover:text-cream"
                >
                  <ChevronRight
                    className="h-4 w-4 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-[3px]"
                    strokeWidth={2}
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato */}
        <div>
          <SectionLabel>Contato</SectionLabel>
          <div className="mt-6 space-y-4">
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-cream/50 transition-colors duration-200 hover:text-cream"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
              {ADDRESS}
            </a>
            <a
              href={PHONE_TEL}
              className="flex cursor-pointer items-center gap-3 text-sm text-cream/50 transition-colors duration-200 hover:text-cream"
            >
              <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-3 text-sm text-cream/50 transition-colors duration-200 hover:text-cream"
            >
              <WhatsAppLogo className="h-4 w-4 shrink-0 text-gold" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/[0.12]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-5 py-6 sm:flex-row sm:justify-between sm:px-8">
          <p className="text-xs text-cream/35">
            © {new Date().getFullYear()} Núcleo LV. Todos os direitos reservados.
          </p>
          <p className="font-serif text-sm italic text-cream/35">
            Saúde Mental &amp; Saúde da Mulher
          </p>
        </div>
      </div>
    </footer>
  )
}
