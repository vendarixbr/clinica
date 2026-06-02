import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SpecialtyDetail } from '@/components/specialty-detail'
import { getSpecialty, getDoctor } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Saúde da Mulher | Núcleo LV',
  description:
    'Cuidado ginecológico integral no Núcleo LV com a Dra. Lara Ganem: ginecologia geral, saúde hormonal, pré-natal, saúde íntima e prevenção oncológica.',
}

export default function SaudeDaMulherPage() {
  const specialty = getSpecialty('saude-da-mulher')
  const doctor = getDoctor('dra-lara-ganem')
  if (!specialty || !doctor) notFound()
  return <SpecialtyDetail specialty={specialty} doctor={doctor} />
}
