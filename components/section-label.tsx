import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  center?: boolean
  className?: string
}

/**
 * Small uppercase label with a gold line prefix, used above section titles.
 */
export function SectionLabel({ children, center = false, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold',
        center && 'justify-center',
        className,
      )}
    >
      <span className="section-label-line h-px bg-gold" aria-hidden="true" />
      {children}
    </span>
  )
}
