import Image from 'next/image'
import Link from 'next/link'
import { Stethoscope, ArrowRight } from 'lucide-react'
import { WhatsAppLogo } from '@/components/whatsapp-logo'
import { Breadcrumb } from '@/components/breadcrumb'
import { PageHero } from '@/components/page-hero'
import { ServiceGrid } from '@/components/service-grid'
import { FaqSection } from '@/components/faq-section'
import { CtaBanner } from '@/components/cta-banner'
import { FadeIn } from '@/components/fade-in'
import { WHATSAPP_URL } from '@/lib/site'
import type { Doctor, Specialty } from '@/lib/data'

export function SpecialtyDetail({
  specialty,
  doctor,
}: {
  specialty: Specialty
  doctor: Doctor
}) {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: 'Início', href: '/' },
          { label: 'Especialidades', href: '/especialidades' },
          { label: specialty.title },
        ]}
      />

      <PageHero
        compact
        label={specialty.doctorRole}
        title={
          <>
            {specialty.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="italic text-gold">
              {specialty.title.split(' ').slice(-1)}
            </span>
          </>
        }
        subtitle={specialty.shortDescription}
      />

      {/* About */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Nossa abordagem
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl">
              Cuidado próximo, ético e individualizado
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-text">
              {specialty.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      <ServiceGrid
        label="O que oferecemos"
        title="Serviços e tratamentos"
        subtitle="Atendimento completo e individualizado para cada necessidade."
        items={specialty.services}
      />

      {/* Doctor card */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <FadeIn>
            <article className="grid gap-8 overflow-hidden rounded-2xl border border-beige-border bg-card sm:grid-cols-[0.8fr_1.2fr]">
              <div className="relative aspect-square overflow-hidden bg-beige sm:aspect-auto sm:min-h-[20rem]">
                <Image
                  src={doctor.photo}
                  alt={`Retrato de ${doctor.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover object-top"
                />
                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream shadow-sm">
                  <Stethoscope className="h-5 w-5 text-gold" strokeWidth={1.6} />
                </span>
              </div>
              <div className="p-7 sm:py-9 sm:pr-9">
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold">
                  {doctor.role} | {doctor.crm}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-text">
                  {doctor.shortBio}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-pulse-ring inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
                  >
                    <WhatsAppLogo className="h-4 w-4" />
                    {`Agendar com ${doctor.firstName}`}
                  </a>
                  <Link
                    href={`/equipe/${doctor.slug}`}
                    className="group/link inline-flex cursor-pointer items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
                  >
                    Ver Perfil
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                      strokeWidth={2}
                    />
                  </Link>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <FaqSection items={specialty.faq} />

      <CtaBanner
        title={`Agende sua consulta com ${doctor.firstName}`}
        subtitle="Dê o primeiro passo para cuidar de você. O agendamento é simples e rápido pelo WhatsApp."
        buttonLabel={`Agendar com ${doctor.firstName}`}
      />
    </main>
  )
}
