import type { ReactNode } from 'react'
import { FadeIn } from '@/components/fade-in'

interface PageHeroProps {
  label: string
  title: ReactNode
  subtitle?: string
  /** When a Breadcrumb already provides header clearance above this hero. */
  compact?: boolean
}

export function PageHero({ label, title, subtitle, compact }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-beige pb-16 lg:pb-20 ${
        compact ? 'pt-12 lg:pt-16' : 'pt-32 lg:pt-40'
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(60rem 30rem at 80% -10%, rgba(201,169,110,0.18), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <FadeIn>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {label}
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-text sm:text-lg">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
