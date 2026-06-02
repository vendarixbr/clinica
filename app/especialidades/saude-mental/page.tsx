import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SpecialtyDetail } from '@/components/specialty-detail'
import { getSpecialty, getDoctor } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Saúde Mental | Núcleo LV',
  description:
    'Cuidado psiquiátrico humanizado no Núcleo LV com o Dr. Vinicius Pacheco: ansiedade, depressão, burnout, transtorno bipolar e acompanhamento contínuo.',
}

export default function SaudeMentalPage() {
  const specialty = getSpecialty('saude-mental')
  const doctor = getDoctor('dr-vinicius-pacheco')
  if (!specialty || !doctor) notFound()
  return <SpecialtyDetail specialty={specialty} doctor={doctor} />
}
