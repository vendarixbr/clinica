import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DoctorDetail } from '@/components/doctor-detail'
import { getDoctor } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Dr. Vinicius Pacheco — Psiquiatra | Núcleo LV',
  description:
    'Conheça o Dr. Vinicius Pacheco, psiquiatra do Núcleo LV em Nova Serrana, MG. Cuidado humanizado em ansiedade, depressão, burnout e transtorno bipolar.',
}

export default function DrViniciusPage() {
  const doctor = getDoctor('dr-vinicius-pacheco')
  if (!doctor) notFound()
  return <DoctorDetail doctor={doctor} />
}
