import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { SectionLabel } from '@/components/section-label'

interface SectionHeadingProps {
  label: string
  title: ReactNode
  subtitle?: string
  center?: boolean
  dark?: boolean
  className?: string
}

export function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(center && 'mx-auto max-w-2xl text-center', className)}>
      <SectionLabel center={center}>{label}</SectionLabel>
      <h2
        className={cn(
          'mt-3 font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.2] text-balance',
          dark ? 'text-cream' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base leading-[1.85]',
            dark ? 'text-cream/70' : 'text-muted-text',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
