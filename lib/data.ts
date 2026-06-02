import {
  Brain,
  Heart,
  Activity,
  CloudRain,
  Repeat,
  Pill,
  HeartPulse,
  Baby,
  Flower2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

export interface ServiceItem {
  icon: LucideIcon
  title: string
  desc: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface Testimonial {
  quote: string
  name: string
}

export interface Specialty {
  slug: string
  icon: LucideIcon
  title: string
  doctorName: string
  doctorSlug: string
  doctorRole: string
  shortDescription: string
  summaryItems: string[]
  intro: string
  services: ServiceItem[]
  faq: FaqItem[]
}

export interface Doctor {
  slug: string
  name: string
  firstName: string
  initials: string
  photo: string
  photoPosition?: string
  photoScale?: number
  role: string
  crm: string
  tags: string[]
  shortBio: string
  fullBio: string[]
  areas: ServiceItem[]
  testimonials: Testimonial[]
}

export const SPECIALTIES: Specialty[] = [
  {
    slug: 'saude-mental',
    icon: Brain,
    title: 'Saúde Mental',
    doctorName: 'Dr. Vinicius Pacheco',
    doctorSlug: 'dr-vinicius-pacheco',
    doctorRole: 'Psiquiatra',
    shortDescription:
      'Cuidado psiquiátrico humanizado, com escuta atenta e tratamento individualizado. Acompanhamos cada paciente com respeito ao seu tempo, oferecendo um espaço seguro para falar sobre o que sente e construir caminhos de bem-estar.',
    summaryItems: [
      'Psiquiatria geral',
      'Transtornos de ansiedade e humor',
      'Depressão e burnout',
      'Acompanhamento psiquiátrico contínuo',
      'Prescrição e manejo medicamentoso',
    ],
    intro:
      'A saúde mental é parte essencial de uma vida plena. No Núcleo LV, o cuidado psiquiátrico vai além do diagnóstico: priorizamos o acolhimento, a escuta ativa e um plano de tratamento construído junto com você. Cada consulta respeita a sua história, o seu ritmo e a sua individualidade, sempre com sigilo absoluto.',
    services: [
      {
        icon: Brain,
        title: 'Psiquiatria Geral',
        desc: 'Avaliação completa e acompanhamento para diferentes condições de saúde mental.',
      },
      {
        icon: Activity,
        title: 'Transtornos de Ansiedade',
        desc: 'Manejo de ansiedade generalizada, pânico e fobias com abordagem individualizada.',
      },
      {
        icon: CloudRain,
        title: 'Depressão e Burnout',
        desc: 'Diagnóstico e tratamento de quadros depressivos e esgotamento profissional.',
      },
      {
        icon: Repeat,
        title: 'Transtorno Bipolar',
        desc: 'Estabilização do humor e acompanhamento contínuo para qualidade de vida.',
      },
      {
        icon: HeartPulse,
        title: 'Acompanhamento Contínuo',
        desc: 'Consultas de seguimento para ajustar o tratamento e monitorar a evolução.',
      },
      {
        icon: Pill,
        title: 'Prescrição Medicamentosa',
        desc: 'Manejo responsável de medicamentos, com revisões periódicas e segurança.',
      },
    ],
    faq: [
      {
        q: 'Como funciona a primeira consulta?',
        a: 'A primeira consulta é um momento de escuta. Conversamos sobre a sua história, suas queixas e seus objetivos, sem pressa. A partir daí, construímos juntos um plano de cuidado individualizado.',
      },
      {
        q: 'Preciso de encaminhamento?',
        a: 'Não é necessário encaminhamento para marcar uma consulta. Você pode agendar diretamente pelo WhatsApp.',
      },
      {
        q: 'Qual a diferença entre psiquiatra e psicólogo?',
        a: 'O psiquiatra é médico e pode diagnosticar transtornos e prescrever medicamentos quando necessário. O psicólogo conduz a psicoterapia. Os dois trabalhos são complementares e podem ser realizados em conjunto.',
      },
      {
        q: 'O tratamento é sigiloso?',
        a: 'Sim. Todo atendimento é protegido por sigilo médico. Tudo o que é compartilhado em consulta permanece confidencial.',
      },
    ],
  },
  {
    slug: 'saude-da-mulher',
    icon: Heart,
    title: 'Saúde da Mulher',
    doctorName: 'Dra. Lara Ganem',
    doctorSlug: 'dra-lara-ganem',
    doctorRole: 'Ginecologista',
    shortDescription:
      'Cuidado ginecológico integral em todas as fases da vida da mulher. Da adolescência à menopausa, oferecemos um atendimento próximo, respeitoso e atento ao bem-estar físico e emocional.',
    summaryItems: [
      'Ginecologia geral',
      'Saúde hormonal e menopausa',
      'Acompanhamento pré-natal',
      'Saúde íntima e bem-estar feminino',
      'Prevenção e rastreamento oncológico',
    ],
    intro:
      'A saúde da mulher é cuidada de forma integral no Núcleo LV. Entendemos que cada fase da vida traz necessidades diferentes, e por isso oferecemos um acompanhamento próximo, baseado em confiança e respeito. Nosso objetivo é que você se sinta segura, ouvida e bem cuidada em cada consulta.',
    services: [
      {
        icon: Stethoscope,
        title: 'Ginecologia Geral',
        desc: 'Consultas de rotina, exames e orientação para a saúde feminina em todas as idades.',
      },
      {
        icon: Sparkles,
        title: 'Saúde Hormonal e Menopausa',
        desc: 'Avaliação e manejo de alterações hormonais, com cuidado durante a menopausa.',
      },
      {
        icon: Baby,
        title: 'Acompanhamento Pré-Natal',
        desc: 'Cuidado atento à gestante e ao bebê durante toda a gravidez.',
      },
      {
        icon: Flower2,
        title: 'Saúde Íntima',
        desc: 'Diagnóstico e tratamento de questões íntimas com acolhimento e discrição.',
      },
      {
        icon: ShieldCheck,
        title: 'Prevenção Oncológica',
        desc: 'Rastreamento e prevenção de cânceres ginecológicos e de mama.',
      },
      {
        icon: HeartPulse,
        title: 'Bem-Estar Feminino',
        desc: 'Orientação completa para uma vida saudável e equilibrada em cada fase.',
      },
    ],
    faq: [
      {
        q: 'A partir de que idade devo consultar uma ginecologista?',
        a: 'A primeira consulta costuma acontecer no início da adolescência ou quando surgem dúvidas sobre o corpo e a saúde feminina. O acompanhamento regular é recomendado ao longo de toda a vida adulta.',
      },
      {
        q: 'Com que frequência devo fazer o preventivo?',
        a: 'De modo geral, o exame preventivo é recomendado anualmente, mas a frequência ideal é definida individualmente com base no seu histórico e nas suas necessidades.',
      },
      {
        q: 'O que é acompanhamento hormonal?',
        a: 'É o cuidado voltado ao equilíbrio dos hormônios femininos, importante em fases como a adolescência, o período reprodutivo, a gestação e a menopausa.',
      },
      {
        q: 'Vocês atendem gestantes?',
        a: 'Sim. Oferecemos acompanhamento pré-natal completo, com atenção ao bem-estar da gestante e do bebê durante toda a gravidez.',
      },
    ],
  },
]

export const DOCTORS: Doctor[] = [
  {
    slug: 'dr-vinicius-pacheco',
    name: 'Dr. Vinicius Pacheco',
    firstName: 'Dr. Vinicius',
    initials: 'VP',
    photo: '/dr-vinicius-pacheco.png',
    role: 'Psiquiatra',
    crm: 'CRM-MG',
    tags: ['Psiquiatria', 'Saúde Mental', 'Ansiedade', 'Depressão'],
    shortBio:
      'Especialista em saúde mental com foco em acolhimento humanizado e tratamento individualizado para cada paciente.',
    fullBio: [
      'Dr. Vinicius Pacheco é psiquiatra dedicado ao cuidado integral da saúde mental. Sua prática é guiada pela escuta atenta, pelo respeito ao tempo de cada pessoa e pela construção de planos de tratamento individualizados.',
      'Com formação sólida em psiquiatria e experiência no manejo de transtornos de ansiedade, humor e quadros de esgotamento, atua sempre com base em evidências científicas e em uma abordagem profundamente humana.',
      'No Núcleo LV, Dr. Vinicius oferece um espaço seguro e acolhedor, onde cada paciente é visto em sua totalidade — com sigilo, empatia e compromisso com o bem-estar a longo prazo.',
    ],
    areas: [
      { icon: Brain, title: 'Psiquiatria Geral', desc: 'Avaliação e acompanhamento de diferentes condições de saúde mental.' },
      { icon: Activity, title: 'Ansiedade e Pânico', desc: 'Tratamento individualizado para transtornos de ansiedade e crises de pânico.' },
      { icon: CloudRain, title: 'Depressão', desc: 'Diagnóstico cuidadoso e acompanhamento de quadros depressivos.' },
      { icon: HeartPulse, title: 'Burnout', desc: 'Cuidado para o esgotamento profissional e recuperação do equilíbrio.' },
      { icon: Repeat, title: 'Transtorno Bipolar', desc: 'Estabilização do humor e acompanhamento contínuo.' },
      { icon: Pill, title: 'Acompanhamento Medicamentoso', desc: 'Manejo responsável e seguro de medicações, com revisões periódicas.' },
    ],
    testimonials: [
      { quote: 'Encontrei no Dr. Vinicius uma escuta que me fez sentir realmente compreendida.', name: 'Mariana' },
      { quote: 'O acompanhamento mudou a forma como eu lido com a ansiedade. Sou muito grata.', name: 'Patrícia' },
      { quote: 'Profissional atencioso e humano. Me senti segura desde a primeira consulta.', name: 'Renata' },
    ],
  },
  {
    slug: 'dra-lara-ganem',
    name: 'Dra. Lara Ganem',
    firstName: 'Dra. Lara',
    initials: 'LG',
    photo: '/dra-lara-ganem.png',
    photoPosition: '50% 25%',
    photoScale: 1.3,
    role: 'Ginecologista',
    crm: 'CRM-MG',
    tags: ['Ginecologia', 'Saúde da Mulher', 'Pré-Natal', 'Saúde Hormonal'],
    shortBio:
      'Dedicada à saúde integral da mulher, com atendimento cuidadoso e próximo em todas as fases da vida.',
    fullBio: [
      'Dra. Lara Ganem é ginecologista comprometida com a saúde integral da mulher. Seu atendimento é marcado pela proximidade, pelo respeito e pela atenção ao bem-estar físico e emocional de cada paciente.',
      'Com experiência em ginecologia geral, saúde hormonal, acompanhamento pré-natal e prevenção, Dra. Lara acredita que cada fase da vida da mulher merece um cuidado específico e acolhedor.',
      'No Núcleo LV, ela oferece um ambiente seguro e discreto, onde a paciente se sente à vontade para falar sobre sua saúde com confiança e tranquilidade.',
    ],
    areas: [
      { icon: Stethoscope, title: 'Ginecologia Geral', desc: 'Consultas de rotina, exames e orientação em todas as idades.' },
      { icon: Sparkles, title: 'Saúde Hormonal', desc: 'Avaliação e manejo do equilíbrio hormonal feminino.' },
      { icon: Baby, title: 'Pré-Natal', desc: 'Acompanhamento atento à gestante e ao bebê durante a gravidez.' },
      { icon: Flower2, title: 'Saúde Íntima', desc: 'Cuidado discreto e acolhedor para questões íntimas.' },
      { icon: HeartPulse, title: 'Menopausa', desc: 'Acompanhamento e cuidado durante a transição da menopausa.' },
      { icon: ShieldCheck, title: 'Prevenção Oncológica', desc: 'Rastreamento e prevenção de cânceres ginecológicos e de mama.' },
    ],
    testimonials: [
      { quote: 'A Dra. Lara me acompanhou em toda a gestação com um cuidado incrível.', name: 'Beatriz' },
      { quote: 'Me senti acolhida e respeitada em cada consulta. Recomendo de olhos fechados.', name: 'Camila' },
      { quote: 'Finalmente uma ginecologista que escuta e explica tudo com carinho.', name: 'Letícia' },
    ],
  },
]

export function getSpecialty(slug: string) {
  return SPECIALTIES.find((s) => s.slug === slug)
}

export function getDoctor(slug: string) {
  return DOCTORS.find((d) => d.slug === slug)
}
