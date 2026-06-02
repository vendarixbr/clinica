import { HandHeart, LockKeyhole, GraduationCap, House } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'
import { DecorRings } from '@/components/decor-rings'

const VALUES = [
  {
    icon: HandHeart,
    title: 'Humanização',
    desc: 'Cada pessoa é acolhida com empatia e atenção genuína.',
  },
  {
    icon: LockKeyhole,
    title: 'Privacidade',
    desc: 'Sigilo e discrição em todas as etapas do cuidado.',
  },
  {
    icon: GraduationCap,
    title: 'Profissionalismo',
    desc: 'Atendimento técnico e ético em cada consulta.',
  },
  {
    icon: House,
    title: 'Acolhimento',
    desc: 'Um ambiente seguro onde você se sente em casa.',
  },
]

export function Sobre() {
  return (
    <section id="sobre" className="bg-cream-gradient tx tx-noise relative overflow-hidden py-20 lg:py-28">
      <DecorRings corner="bottom-right" variant="grid" opacity={0.1} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <SectionLabel>Sobre o Núcleo</SectionLabel>
          <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.2] text-ink text-balance">
            Um espaço pensado para o{' '}
            <span className="font-bold italic text-gold">cuidado genuíno</span>
          </h2>
          <p className="mt-6 text-[0.95rem] leading-[1.8] text-muted-text md:text-base md:leading-[1.85]">
            O Núcleo LV nasceu do desejo de unir a saúde mental e a saúde da
            mulher em um só lugar, com escuta atenta e olhar individualizado.
            Acreditamos que cuidar vai além de tratar — é acolher histórias,
            respeitar tempos e oferecer presença em cada fase da vida.
          </p>
          <p className="mt-4 text-[0.95rem] leading-[1.8] text-muted-text md:text-base md:leading-[1.85]">
            Cada detalhe do nosso ambiente foi pensado para transmitir
            tranquilidade, segurança e confiança, criando uma experiência de
            cuidado verdadeiramente humana.
          </p>
        </FadeIn>

        <FadeIn delay={120} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-card-gradient tx-card flex min-h-[150px] flex-col rounded-xl border border-gold/20 border-t-[3px] border-t-gold p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,45,45,0.1)]"
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                <value.icon className="h-[26px] w-[26px] text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-serif text-[clamp(1.2rem,2vw,1.6rem)] font-semibold leading-[1.3] text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-[0.875rem] leading-[1.75] text-muted-text md:text-[0.9rem]">
                {value.desc}
              </p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
