import { HandHeart, LockKeyhole, GraduationCap, House } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'

const REASONS = [
  {
    icon: HandHeart,
    title: 'Atendimento Humanizado',
    desc: 'Escuta ativa e empatia em cada etapa do seu cuidado.',
  },
  {
    icon: LockKeyhole,
    title: 'Alta Privacidade',
    desc: 'Sigilo absoluto e um ambiente discreto e seguro.',
  },
  {
    icon: GraduationCap,
    title: 'Equipe Qualificada',
    desc: 'Profissionais experientes e dedicados ao seu bem-estar.',
  },
  {
    icon: House,
    title: 'Ambiente Acolhedor',
    desc: 'Espaço elegante e tranquilo, pensado para o conforto.',
  },
]

export function WhyChoose() {
  return (
    <section className="bg-dark-gradient tx tx-dark border-t border-gold/25 py-[70px] lg:py-[100px]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:items-start lg:gap-16">
        {/* Left — editorial text block */}
        <FadeIn>
          <SectionLabel>Por que nos escolher</SectionLabel>
          <h2 className="mt-4 font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.2] text-cream text-balance">
            Cuidado que vai além do{' '}
            <span className="font-bold italic text-gold">esperado</span>
          </h2>
          <div className="my-6 h-px w-12 bg-gold" aria-hidden="true" />
          <p className="max-w-md text-[0.95rem] font-normal leading-[1.8] text-cream/55 text-pretty md:text-base">
            Cada detalhe foi pensado para que você se sinta acolhido(a) e seguro(a)
            desde o primeiro contato. Aqui, você não é um número — é uma pessoa.
          </p>
        </FadeIn>

        {/* Right — 2×2 card grid */}
        <div className="grid grid-cols-2 gap-4">
          {REASONS.map((reason, i) => (
            <FadeIn
              key={reason.title}
              delay={i * 100}
              className="tx-card group rounded-xl border border-gold/15 bg-gold/[0.05] px-5 py-6 transition-colors duration-300 hover:border-gold/30 hover:bg-gold/[0.09]"
            >
              <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.12]">
                <reason.icon className="h-[18px] w-[18px] text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="mb-1.5 text-[0.95rem] font-semibold text-cream">
                {reason.title}
              </h3>
              <p className="text-[0.85rem] font-normal leading-[1.7] text-cream/50 text-pretty">
                {reason.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
