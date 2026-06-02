import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { SectionHeading } from '@/components/section-heading'
import { DecorRings } from '@/components/decor-rings'

const TEAM = [
  {
    name: 'Dr. Vinicius Pacheco',
    photo: '/dr-vinicius-pacheco.png',
    objectPosition: '50% 18%',
    scale: 1,
    specialty: 'Psiquiatra · CRM-MG',
    bio: 'Especialista em saúde mental com foco em acolhimento humanizado e tratamento individualizado.',
    tags: ['Psiquiatria', 'Saúde Mental', 'Ansiedade', 'Depressão'],
    href: '/equipe/dr-vinicius-pacheco',
  },
  {
    name: 'Dra. Lara Ganem',
    photo: '/dra-lara-ganem.png',
    objectPosition: '50% 30%',
    scale: 1.35,
    specialty: 'Ginecologista · CRM-MG',
    bio: 'Dedicada à saúde integral da mulher, com atendimento cuidadoso em todas as fases da vida.',
    tags: ['Ginecologia', 'Saúde da Mulher', 'Pré-Natal', 'Hormonal'],
    href: '/equipe/dra-lara-ganem',
  },
]

export function Equipe() {
  return (
    <section id="equipe" className="bg-cream-gradient tx tx-dots relative overflow-hidden py-20 lg:py-28">
      <DecorRings corner="top-right" variant="dots" opacity={0.14} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            label="Quem cuida de você"
            title="Nossa Equipe"
            subtitle="Profissionais dedicados ao seu cuidado"
          />
        </FadeIn>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:gap-8">
          {TEAM.map((member, i) => (
            <FadeIn key={member.name} delay={i * 150}>
              <article className="tx-card group h-full overflow-hidden rounded-2xl border border-gold/20 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(45,45,45,0.12)]">
                {/* Photo with a floating specialty badge */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={`Retrato de ${member.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    style={{
                      objectPosition: member.objectPosition,
                      transform: `scale(${member.scale})`,
                    }}
                    className="object-cover transition-transform duration-500 group-hover:brightness-[1.02]"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-gold/30 bg-cream/85 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-gold-dark shadow-sm backdrop-blur-sm">
                    {member.specialty.split('·')[0].trim()}
                  </span>
                </div>

                {/* Body */}
                <div className="bg-card-gradient-soft border-t-0 p-6">
                  <div className="border-b border-gold/15 pb-4">
                    <h3 className="font-serif text-[clamp(1.3rem,2vw,1.55rem)] font-semibold leading-[1.25] text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-gold-dark">
                      <span className="h-px w-5 bg-gold/50" aria-hidden="true" />
                      {member.specialty}
                    </p>
                  </div>

                  <p className="mt-4 text-[0.875rem] leading-[1.75] text-muted-text md:text-[0.9rem]">
                    {member.bio}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gold/25 bg-gold/[0.12] px-2.5 py-1 text-[0.7rem] font-medium text-gold-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={member.href}
                    className="group/link mt-5 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
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
      </div>
    </section>
  )
}
