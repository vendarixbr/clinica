import { FadeIn } from '@/components/fade-in'
import { SectionHeading } from '@/components/section-heading'
import type { ServiceItem } from '@/lib/data'

interface ServiceGridProps {
  label: string
  title: string
  subtitle?: string
  items: ServiceItem[]
}

export function ServiceGrid({ label, title, subtitle, items }: ServiceGridProps) {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading label={label} title={title} subtitle={subtitle} />
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={(i % 3) * 100}>
              <article className="h-full rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,45,45,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                  <item.icon className="h-6 w-6 text-gold" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-text">
                  {item.desc}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
