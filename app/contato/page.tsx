import type { Metadata } from 'next'
import { MapPin, Phone, Clock } from 'lucide-react'
import { WhatsAppLogo } from '@/components/whatsapp-logo'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'
import { ContactForm } from '@/components/contact-form'
import {
  ADDRESS,
  CEP,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  MAPS_EMBED,
} from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contato | Núcleo LV',
  description:
    'Entre em contato com o Núcleo LV em Nova Serrana, MG. Agende sua consulta pelo WhatsApp ou telefone (37) 99942-1929.',
}

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: [ADDRESS, `CEP: ${CEP}`],
  },
  {
    icon: Phone,
    title: 'Telefone',
    href: PHONE_TEL,
    lines: [PHONE_DISPLAY],
  },
  {
    icon: WhatsAppLogo,
    title: 'WhatsApp',
    href: WHATSAPP_URL,
    external: true,
    lines: [PHONE_DISPLAY],
  },
  {
    icon: Clock,
    title: 'Horário de atendimento',
    lines: ['A definir — agende pelo WhatsApp'],
  },
]

export default function ContatoPage() {
  return (
    <main>
      <PageHero
        label="Fale conosco"
        title={
          <>
            Entre em <span className="italic text-gold">contato</span>
          </>
        }
        subtitle="Estamos prontas para acolher você. Escolha o canal de sua preferência."
      />

      {/* Info + form */}
      <section className="bg-footer-gradient tx tx-dark relative overflow-hidden py-20 lg:py-[120px]">
        {/* Warm gold glow accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-gold/15 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        {/* Decorative thin golden semicircle — bottom-left */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-[300px] w-[300px] lg:h-[340px] lg:w-[340px]"
          viewBox="0 0 200 200"
          fill="none"
          style={{ opacity: 0.12 }}
        >
          <circle cx="100" cy="100" r="96" stroke="#BA7517" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="66" stroke="#BA7517" strokeWidth="1.5" />
        </svg>

        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Left — contact details */}
          <FadeIn className="lg:max-w-[440px]">
            <SectionLabel className="text-gold">Canais de atendimento</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.1] text-cream text-balance sm:text-[2.75rem]">
              Estamos por perto para{' '}
              <span className="font-bold italic text-gold">cuidar de você</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              Escolha o canal de sua preferência ou preencha o formulário ao
              lado — nossa equipe retorna em poucas horas.
            </p>

            <ul className="mt-10 flex flex-col gap-6">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-cream/5">
                    <item.icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-cream">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="mt-1 inline-block cursor-pointer text-sm leading-relaxed text-cream/65 transition-colors hover:text-gold"
                      >
                        {item.lines[0]}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-relaxed text-cream/65">
                        {item.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse-ring btn-shine bg-gold-gradient mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.06em] text-primary-foreground shadow-[0_4px_16px_rgba(201,169,110,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(201,169,110,0.45)]"
            >
              <WhatsAppLogo className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={120}>
            <ContactForm
              title="Envie uma mensagem"
              subtitle="Preencha os campos abaixo e entraremos em contato."
              showMessage
            />
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-xl border border-border shadow-[0_16px_40px_rgba(45,45,45,0.08)]">
              <iframe
                title="Mapa da localização do Núcleo LV"
                src={MAPS_EMBED}
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full sm:h-[450px]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        title="Pronta para dar o primeiro passo?"
        subtitle="Agende sua consulta pelo WhatsApp e cuide de você."
        buttonLabel="Agendar pelo WhatsApp"
      />
    </main>
  )
}
