import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { FadeIn } from '@/components/fade-in'
import { SPECIALTIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Especialidades | Núcleo LV',
  description:
    'Conheça em detalhes as especialidades do Núcleo LV: saúde mental com o Dr. Vinicius Pacheco e saúde da mulher com a Dra. Lara Ganem.',
}

export default function EspecialidadesPage() {
  return (
    <main>
      <PageHero
        label="Nossas Especialidades"
        title={
          <>
            Cuidado especializado em cada área da sua{' '}
            <span className="italic text-gold">saúde</span>
          </>
        }
        subtitle="Conheça em detalhes os tratamentos e serviços oferecidos pelo Núcleo LV."
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:gap-8">
          {SPECIALTIES.map((spec, i) => (
            <FadeIn key={spec.slug} delay={i * 120}>
              <article className="flex h-full flex-col rounded-xl border border-border border-t-4 border-t-gold bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(45,45,45,0.1)] lg:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream">
                    <spec.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-ink">
                      {spec.title}
                    </h2>
                    <p className="text-sm font-medium text-muted-text">
                      {spec.doctorName} — {spec.doctorRole}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-text">
                  {spec.shortDescription}
                </p>

                <ul className="mt-6 space-y-3">
                  {spec.summaryItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={2} />
                      <span className="text-sm leading-relaxed text-ink">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/especialidades/${spec.slug}`}
                  className="group/link mt-8 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
                >
                  Saiba Mais
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    strokeWidth={2}
                  />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Pronta para cuidar de você?"
        subtitle="Agende sua consulta pelo WhatsApp e dê o primeiro passo com quem cuida com profundidade e delicadeza."
      />
    </main>
  )
}
