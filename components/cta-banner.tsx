import { FadeIn } from '@/components/fade-in'
import { WhatsAppLogo } from '@/components/whatsapp-logo'
import { WHATSAPP_URL } from '@/lib/site'

interface CtaBannerProps {
  title: string
  subtitle?: string
  buttonLabel?: string
}

export function CtaBanner({
  title,
  subtitle,
  buttonLabel = 'Agendar Consulta',
}: CtaBannerProps) {
  return (
    <section className="bg-charcoal py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl font-bold leading-tight text-cream text-balance sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/70">
              {subtitle}
            </p>
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse-ring mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
          >
            <WhatsAppLogo className="h-5 w-5" />
            {buttonLabel}
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
