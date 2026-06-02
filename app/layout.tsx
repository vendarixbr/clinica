import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsappButton } from '@/components/whatsapp-button'
import { PageTransition } from '@/components/page-transition'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Núcleo LV — Saúde Mental & Saúde da Mulher | Nova Serrana, MG',
  description:
    'Núcleo LV é uma clínica em Nova Serrana, MG, dedicada à saúde mental e à saúde da mulher. Atendimento humanizado em psiquiatria e ginecologia. Agende sua consulta.',
  keywords: [
    'saúde mental',
    'saúde da mulher',
    'psiquiatra Nova Serrana',
    'ginecologista Nova Serrana',
    'Núcleo LV',
  ],
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#f5f0ea',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${montserrat.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsappButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
