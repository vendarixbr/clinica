'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

type ContactFormProps = {
  title?: string
  subtitle?: string
  showMessage?: boolean
}

export function ContactForm({
  title = 'Receba um retorno',
  subtitle = 'Preencha e entramos em contato.',
  showMessage = false,
}: ContactFormProps) {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const linhas = [
      'Olá! Gostaria de receber um retorno para agendar uma consulta.',
      '',
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      email ? `E-mail: ${email}` : null,
      showMessage && mensagem ? `Mensagem: ${mensagem}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(linhas)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="rounded-3xl border border-gold/15 bg-cream p-7 shadow-[0_8px_48px_rgba(0,0,0,0.4)] sm:p-9">
      <h3 className="font-serif text-2xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-1.5 text-sm text-charcoal/55">{subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cf-nome"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-charcoal/60"
          >
            Nome*
          </label>
          <input
            id="cf-nome"
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome completo"
            className="rounded-xl border border-charcoal/15 bg-cream/60 px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-200 placeholder:text-charcoal/40 focus:border-gold focus:bg-cream"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="cf-telefone"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-charcoal/60"
          >
            Telefone*
          </label>
          <input
            id="cf-telefone"
            type="tel"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(37) 99999-9999"
            className="rounded-xl border border-charcoal/15 bg-cream/60 px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-200 placeholder:text-charcoal/40 focus:border-gold focus:bg-cream"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="cf-email"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-charcoal/60"
          >
            E-mail
          </label>
          <input
            id="cf-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
            className="rounded-xl border border-charcoal/15 bg-cream/60 px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-200 placeholder:text-charcoal/40 focus:border-gold focus:bg-cream"
          />
        </div>

        {showMessage && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="cf-mensagem"
              className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-charcoal/60"
            >
              Mensagem
            </label>
            <textarea
              id="cf-mensagem"
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Como podemos ajudar você?"
              className="resize-none rounded-xl border border-charcoal/15 bg-cream/60 px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-200 placeholder:text-charcoal/40 focus:border-gold focus:bg-cream"
            />
          </div>
        )}

        <button
          type="submit"
          className="btn-shine bg-gold-gradient mt-1 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_4px_16px_rgba(201,169,110,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(201,169,110,0.45)]"
        >
                Quero um retorno
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </button>

        <p className="text-center text-xs italic text-charcoal/45">
          Seus dados são tratados com sigilo.
        </p>
      </form>
    </div>
  )
}
