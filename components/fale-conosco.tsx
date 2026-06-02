import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'
import { WhatsAppLogo } from '@/components/whatsapp-logo'
import { ContactForm } from '@/components/contact-form'
import { DecorRings } from '@/components/decor-rings'
import { WHATSAPP_URL } from '@/lib/site'

export function FaleConosco() {
  return (
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
      {/* Decorative concentric golden rings — bottom-left */}
      <DecorRings
        corner="bottom-left"
        opacity={0.22}
        sizeClassName="h-[320px] w-[320px] lg:h-[400px] lg:w-[400px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Left — pitch */}
        <FadeIn className="lg:max-w-[420px]">
          <SectionLabel className="text-gold">Vamos conversar</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.1] text-cream text-balance sm:text-5xl">
            Sua saúde merece{' '}
            <span className="font-bold italic text-gold">atenção especializada</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
            Deixe seu contato e nossa equipe retorna em poucas horas para
            agendar sua consulta — ou fale agora mesmo no WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse-ring btn-shine bg-gold-gradient mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.06em] text-primary-foreground shadow-[0_4px_16px_rgba(201,169,110,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(201,169,110,0.45)]"
          >
            <WhatsAppLogo className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
        </FadeIn>

        {/* Right — form card */}
        <FadeIn delay={120}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  )
}
