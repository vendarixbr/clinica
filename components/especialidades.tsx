import Link from 'next/link'
import { Brain, HeartPulse, Heart, CheckCircle2, ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { SectionHeading } from '@/components/section-heading'
import { DecorRings } from '@/components/decor-rings'

const SPECIALTIES = [
  {
    icon: HeartPulse,
    watermark: Brain,
    title: 'Saúde Mental',
    doctor: 'Dr. Vinicius Pacheco',
    role: 'Psiquiatra',
    href: '/especialidades/saude-mental',
    items: [
      'Psiquiatria geral',
      'Transtornos de ansiedade e humor',
      'Depressão e burnout',
      'Acompanhamento psiquiátrico contínuo',
      'Prescrição e manejo medicamentoso',
    ],
  },
  {
    icon: HeartPulse,
    watermark: Heart,
    title: 'Saúde da Mulher',
    doctor: 'Dra. Lara Ganem',
    role: 'Ginecologista',
    href: '/especialidades/saude-da-mulher',
    items: [
      'Ginecologia geral',
      'Saúde hormonal e menopausa',
      'Acompanhamento pré-natal',
      'Saúde íntima e bem-estar feminino',
      'Prevenção e rastreamento oncológico',
    ],
  },
]

export function Especialidades() {
  return (
    <section id="especialidades" className="bg-cream-gradient tx tx-diagonal relative overflow-hidden py-20 lg:py-28">
      <DecorRings corner="top-left" variant="arcs" opacity={0.18} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            label="O que oferecemos"
            title="Nossas Especialidades"
            subtitle="Atendimento especializado com foco no cuidado integral da saúde mental e da mulher"
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {SPECIALTIES.map((spec, i) => {
            const HeaderIcon = i === 0 ? Brain : HeartPulse
            const Watermark = spec.watermark
            return (
              <FadeIn key={spec.title} delay={i * 120}>
                <article className="glass-card tx-card group relative h-full overflow-hidden rounded-2xl border border-gold/20 border-t-[3px] border-t-gold p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06),0_2px_8px_rgba(201,169,110,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(45,45,45,0.12)] lg:p-10">
                  {/* Watermark icon */}
                  <Watermark
                    className="pointer-events-none absolute -bottom-3 -right-3 z-0 h-[120px] w-[120px] text-gold opacity-[0.04]"
                    strokeWidth={1}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                        <HeaderIcon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-serif text-[clamp(1.3rem,2vw,1.6rem)] font-semibold leading-[1.3] text-ink">
                          {spec.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-text">
                          {spec.doctor} — {spec.role}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-7 space-y-2.5">
                      {spec.items.map((item, idx) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
                          style={{ transitionDelay: `${idx * 40}ms` }}
                        >
                          <CheckCircle2
                            className="mt-1 h-4 w-4 shrink-0 text-gold"
                            strokeWidth={1.5}
                          />
                          <span className="text-[0.9rem] leading-[1.8] text-ink">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={spec.href}
                      className="btn-shine bg-gold-gradient group/link mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[0.06em] text-primary-foreground shadow-[0_4px_16px_rgba(201,169,110,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,169,110,0.4)]"
                    >
                      Saiba Mais
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                        strokeWidth={2}
                      />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
