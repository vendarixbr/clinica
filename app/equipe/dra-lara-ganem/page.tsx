import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DoctorDetail } from '@/components/doctor-detail'
import { getDoctor } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Dra. Lara Ganem — Ginecologista | Núcleo LV',
  description:
    'Conheça a Dra. Lara Ganem, ginecologista do Núcleo LV em Nova Serrana, MG. Cuidado integral da mulher: saúde hormonal, pré-natal e prevenção.',
}

export default function DraLaraPage() {
  const doctor = getDoctor('dra-lara-ganem')
  if (!doctor) notFound()
  return <DoctorDetail doctor={doctor} />
}
