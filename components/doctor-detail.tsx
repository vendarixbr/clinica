import Image from 'next/image'
import { Stethoscope, Quote } from 'lucide-react'
import { WhatsAppLogo } from '@/components/whatsapp-logo'
import { Breadcrumb } from '@/components/breadcrumb'
import { ServiceGrid } from '@/components/service-grid'
import { CtaBanner } from '@/components/cta-banner'
import { FadeIn } from '@/components/fade-in'
import { SectionHeading } from '@/components/section-heading'
import { WHATSAPP_URL } from '@/lib/site'
import type { Doctor } from '@/lib/data'

export function DoctorDetail({ doctor }: { doctor: Doctor }) {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: 'Início', href: '/' },
          { label: 'Equipe', href: '/equipe' },
          { label: doctor.name },
        ]}
      />

      {/* Hero */}
      <section className="bg-beige pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <FadeIn>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-beige shadow-[0_24px_60px_rgba(45,45,45,0.12)]">
              <Image
                src={doctor.photo}
                alt={`Retrato de ${doctor.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                style={{
                  objectPosition: doctor.photoPosition ?? '50% 0%',
                  transform: doctor.photoScale ? `scale(${doctor.photoScale})` : undefined,
                }}
                className="object-cover"
              />
              <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream shadow-sm">
                <Stethoscope className="h-6 w-6 text-gold" strokeWidth={1.6} />
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {doctor.role} | {doctor.crm}
            </span>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-ink text-balance sm:text-5xl">
              {doctor.name}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-text">
              {doctor.shortBio}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {doctor.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted-text"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse-ring mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-gold-dark hover:shadow-md"
            >
              <WhatsAppLogo className="h-5 w-5" />
              Agendar Consulta
            </a>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Sobre
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl">
              {`Sobre ${doctor.firstName}`}
            </h2>
            <div className="mt-6 space-y-4">
              {doctor.fullBio.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <ServiceGrid
        label="Áreas de atuação"
        title="Onde posso ajudar você"
        items={doctor.areas}
      />

      {/* Testimonials */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <SectionHeading label="Quem confia" title="Depoimentos" />
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
            {doctor.testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 120}>
                <figure className="flex h-full flex-col rounded-xl border border-beige-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,45,45,0.08)]">
                  <Quote className="h-9 w-9 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 font-serif text-xl italic leading-relaxed text-ink text-pretty">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-semibold uppercase tracking-wide text-gold">
                    — {t.name}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Agende sua consulta com ${doctor.firstName}`}
        subtitle="O agendamento é simples e rápido pelo WhatsApp. Será um prazer cuidar de você."
        buttonLabel={`Agendar com ${doctor.firstName}`}
      />
    </main>
  )
}
