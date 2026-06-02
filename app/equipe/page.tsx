import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Stethoscope, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { FadeIn } from '@/components/fade-in'
import { DOCTORS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Equipe | Núcleo LV',
  description:
    'Conheça os especialistas do Núcleo LV: Dr. Vinicius Pacheco (Psiquiatria) e Dra. Lara Ganem (Ginecologia), dedicados ao seu cuidado.',
}

export default function EquipePage() {
  return (
    <main>
      <PageHero
        label="Nossa Equipe"
        title={
          <>
            Profissionais dedicados ao seu{' '}
            <span className="italic text-gold">cuidado</span>
          </>
        }
        subtitle="Conheça os especialistas que fazem parte do Núcleo LV."
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:gap-8">
          {DOCTORS.map((doctor, i) => (
            <FadeIn key={doctor.slug} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(45,45,45,0.1)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                  <Image
                    src={doctor.photo}
                    alt={`Retrato de ${doctor.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream shadow-sm">
                    <Stethoscope className="h-5 w-5 text-gold" strokeWidth={1.6} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-serif text-2xl font-semibold text-ink">
                    {doctor.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold">
                    {doctor.role} | {doctor.crm}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-text">
                    {doctor.shortBio}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {doctor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/equipe/${doctor.slug}`}
                    className="group/link mt-7 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
                  >
                    Ver Perfil Completo
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                      strokeWidth={2}
                    />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Pronta para cuidar de você?"
        subtitle="Agende sua consulta com um de nossos especialistas pelo WhatsApp."
      />
    </main>
  )
}
