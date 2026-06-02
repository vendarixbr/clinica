import { MapPin, Phone, Navigation } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { SectionHeading } from '@/components/section-heading'
import { CopyButton } from '@/components/copy-button'
import { WhatsAppLogo } from '@/components/whatsapp-logo'
import { DecorRings } from '@/components/decor-rings'
import {
  ADDRESS,
  CEP,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  MAPS_EMBED,
  MAPS_DIRECTIONS,
} from '@/lib/site'

export function Localizacao() {
  return (
    <section id="localizacao" className="bg-cream-gradient relative overflow-hidden py-20 lg:py-28">
      <DecorRings corner="top-right" variant="circle" opacity={0.16} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading label="Onde estamos" title="Localização" />
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Info */}
          <FadeIn className="flex flex-col gap-4">
            <div className="bg-card-gradient flex items-start gap-4 rounded-lg border border-gold/20 border-l-[3px] border-l-gold px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                <MapPin className="h-5 w-5 text-gold" strokeWidth={1.6} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold leading-[1.3] text-ink">
                    Endereço
                  </h3>
                  <CopyButton value={`${ADDRESS} - CEP: ${CEP}`} label="endereço" />
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-text">
                  {ADDRESS}
                  <br />
                  CEP: {CEP}
                </p>
              </div>
            </div>

            <div className="bg-card-gradient flex items-start gap-4 rounded-lg border border-gold/20 border-l-[3px] border-l-gold px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                <Phone className="h-5 w-5 text-gold" strokeWidth={1.6} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold leading-[1.3] text-ink">
                    Telefone
                  </h3>
                  <CopyButton value={PHONE_DISPLAY} label="telefone" />
                </div>
                <a
                  href={PHONE_TEL}
                  className="mt-1 inline-block cursor-pointer text-sm text-muted-text transition-colors hover:text-gold"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="bg-card-gradient flex items-start gap-4 rounded-lg border border-gold/20 border-l-[3px] border-l-gold px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                <WhatsAppLogo className="h-5 w-5 text-gold" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold leading-[1.3] text-ink">
                    WhatsApp
                  </h3>
                  <CopyButton value={PHONE_DISPLAY} label="WhatsApp" />
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block cursor-pointer text-sm text-muted-text transition-colors hover:text-gold"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse-ring btn-shine bg-gold-gradient mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.06em] text-primary-foreground shadow-[0_4px_16px_rgba(201,169,110,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,169,110,0.4)] sm:w-fit sm:justify-start"
            >
              <Navigation className="h-4 w-4" strokeWidth={2} />
              Como Chegar
            </a>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={120}>
            <div className="overflow-hidden rounded-2xl border-2 border-gold/50 p-1.5 shadow-[0_8px_32px_rgba(201,169,110,0.18)] ring-1 ring-gold/10">
              <div className="overflow-hidden rounded-xl border border-gold/20">
              <iframe
                title="Mapa da localização do Núcleo LV"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full lg:h-full lg:min-h-[420px]"
              />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
