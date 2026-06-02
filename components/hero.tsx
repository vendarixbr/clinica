import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'
import { DecorRings } from '@/components/decor-rings'

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-cream-gradient tx tx-noise relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:min-h-[78vh] lg:items-center lg:pb-16 lg:pt-24"
    >
      {/* Decorative concentric golden rings */}
      <DecorRings corner="top-left" opacity={0.2} />
      <DecorRings
        corner="bottom-right"
        opacity={0.18}
        sizeClassName="h-[400px] w-[400px] lg:h-[520px] lg:w-[520px]"
      />

      {/* Floating gradient orbs */}
      <div
        className="orb animate-float-slow left-[-6rem] top-[6rem] h-[500px] w-[500px]"
        style={{
          background:
            'radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="orb animate-float-slower bottom-[-4rem] right-[-4rem] h-[400px] w-[400px]"
        style={{
          background:
            'radial-gradient(circle, rgba(210,185,150,0.14) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <FadeIn className="order-1">
          <SectionLabel>Núcleo LV — Nova Serrana, MG</SectionLabel>
          <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.2vw,4.5rem)] font-bold leading-[1.15] text-ink text-balance lg:text-[clamp(3.5rem,4.5vw,4.5rem)]">
            <span>Cuidado com</span>{' '}
            <span className="font-bold italic text-gold">profundidade</span>{' '}
            <span>e delicadeza</span>
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-[1.8] text-foreground/70 md:leading-[1.85]">
            Oferecemos um espaço seguro e acolhedor para cuidar da sua saúde
            mental e da saúde da mulher, com atenção individualizada e escuta
            ativa.
          </p>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse-ring btn-shine bg-gold-gradient cursor-pointer rounded-full px-7 py-3.5 text-center text-sm font-semibold tracking-[0.06em] text-primary-foreground shadow-[0_4px_16px_rgba(201,169,110,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(201,169,110,0.45)]"
            >
              Agendar Consulta
            </a>
            <a
              href="#sobre"
              className="cursor-pointer rounded-full border-[1.5px] border-gold px-7 py-3.5 text-center text-sm font-semibold tracking-[0.06em] text-gold transition-all duration-300 hover:bg-gold/[0.08]"
            >
              Conheça o Núcleo
            </a>
          </div>
        </FadeIn>

        {/* Image */}
        <FadeIn className="order-2" delay={120}>
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.10),0_4px_20px_rgba(201,169,110,0.12)] lg:max-w-none">
            <Image
              src="/equipe-nucleo-lv.png"
              alt="Equipe da clínica Núcleo LV na recepção, em frente à parede com o logotipo da clínica"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {/* Subtle vignette to blend with the cream background */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_0_60px_18px_rgba(242,233,220,0.45)]"
              aria-hidden="true"
            />
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold"
      >
        <ChevronDown
          className="animate-chevron-bounce h-6 w-6"
          strokeWidth={1.6}
        />
      </a>
    </section>
  )
}
