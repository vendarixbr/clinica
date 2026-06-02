import { Hero } from '@/components/hero'
import { Sobre } from '@/components/sobre'
import { Especialidades } from '@/components/especialidades'
import { Equipe } from '@/components/equipe'
import { WhyChoose } from '@/components/why-choose'
import { Depoimentos } from '@/components/depoimentos'
import { Localizacao } from '@/components/localizacao'
import { FaleConosco } from '@/components/fale-conosco'

export default function Page() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Especialidades />
      <Equipe />
      <WhyChoose />
      <Depoimentos />
      <Localizacao />
      <FaleConosco />
    </main>
  )
}
