import Image from 'next/image'
import { Star } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { SectionHeading } from '@/components/section-heading'
import { DecorRings } from '@/components/decor-rings'

const TESTIMONIALS = [
  {
    quote:
      'Encontrei no Núcleo LV um lugar onde me sinto verdadeiramente acolhida. O Dr. Vinicius tem uma escuta incrível e o tratamento transformou minha qualidade de vida.',
    name: 'Ana Carolina Mendes',
    descriptor: 'Paciente em Saúde Mental · Nova Serrana, MG',
    photo: '/depoimento-ana.png',
  },
  {
    quote:
      'A Dra. Lara é excepcional. Cuidadosa, atenciosa e muito competente. Me sinto segura em cada consulta e sei que estou em boas mãos.',
    name: 'Fernanda Oliveira',
    descriptor: 'Paciente em Saúde da Mulher · Nova Serrana, MG',
    photo: '/depoimento-fernanda.png',
  },
  {
    quote:
      'O acompanhamento com o Dr. Vinicius mudou minha rotina. Me senti ouvido e respeitado em cada consulta, sem julgamentos. Recomendo de olhos fechados.',
    name: 'Felipe Calixto',
    descriptor: 'Paciente em Saúde Mental · Nova Serrana, MG',
    photo: '/depoimento-felipe.png',
  },
]

export function Depoimentos() {
  return (
    <section className="bg-cream-gradient tx tx-diagonal-rev relative overflow-hidden py-20 lg:py-28">
      <DecorRings corner="bottom-left" variant="lines" opacity={0.16} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading label="Quem confia em nós" title="Depoimentos" />
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 150}>
              <figure
                className="bg-card-gradient-soft tx-card flex h-full flex-col rounded-2xl border-b-[3px] border-b-gold p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,45,45,0.1)]"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(186,117,23,0.15)',
                  borderBottom: '3px solid #BA7517',
                }}
              >
                {/* Quote mark */}
                <span
                  className="block font-serif text-[64px] font-bold leading-[0.6]"
                  style={{ color: '#BA7517', opacity: 0.5 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="mb-4 flex gap-1" aria-label="Avaliação 5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      style={{ width: '18px', height: '18px', fill: '#BA7517', color: '#BA7517' }}
                      strokeWidth={0}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote
                  className="flex-1 font-sans italic text-ink text-pretty"
                  style={{ fontSize: '15px', lineHeight: 1.7 }}
                >
                  {t.quote}
                </blockquote>

                <hr
                  className="my-4"
                  style={{ borderTop: '1px solid rgba(186,117,23,0.1)', borderBottom: 'none' }}
                />

                <figcaption className="flex items-center gap-3">
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-gold/35">
                    <Image
                      src={t.photo || '/placeholder.svg'}
                      alt={`Foto de ${t.name}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[0.9rem] font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="text-[0.78rem] font-normal text-muted-text">
                      {t.descriptor}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
