import { cn } from '@/lib/utils'

type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type Variant = 'rings' | 'circle' | 'grid' | 'dots' | 'lines' | 'arcs'

const CORNER_CLASSES: Record<Corner, string> = {
  'top-left': '-left-40 -top-40',
  'top-right': '-right-40 -top-40',
  'bottom-left': '-bottom-40 -left-40',
  'bottom-right': '-bottom-40 -right-40',
}

const GOLD = '#BA7517'

/** Fine-line decorative motifs, all in the same thin golden aesthetic. */
function Motif({ variant }: { variant: Variant }) {
  switch (variant) {
    case 'circle':
      return <circle cx="100" cy="100" r="96" stroke={GOLD} strokeWidth="1" />

    case 'arcs':
      return (
        <>
          {[50, 95, 140].map((r) => (
            <path
              key={r}
              d={`M ${r} 0 A ${r} ${r} 0 0 1 0 ${r}`}
              stroke={GOLD}
              strokeWidth="1"
            />
          ))}
        </>
      )

    case 'grid':
      return (
        <>
          {[33, 66, 100, 133, 166].map((p) => (
            <line
              key={`v${p}`}
              x1={p}
              y1="0"
              x2={p}
              y2="200"
              stroke={GOLD}
              strokeWidth="0.8"
            />
          ))}
          {[33, 66, 100, 133, 166].map((p) => (
            <line
              key={`h${p}`}
              x1="0"
              y1={p}
              x2="200"
              y2={p}
              stroke={GOLD}
              strokeWidth="0.8"
            />
          ))}
        </>
      )

    case 'dots':
      return (
        <>
          {[20, 50, 80, 110, 140, 170].flatMap((cx) =>
            [20, 50, 80, 110, 140, 170].map((cy) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" fill={GOLD} />
            )),
          )}
        </>
      )

    case 'lines':
      return (
        <>
          {[40, 80, 120, 160, 200, 240].map((k) => (
            <line
              key={k}
              x1="0"
              y1={k}
              x2={k}
              y2="0"
              stroke={GOLD}
              strokeWidth="0.9"
            />
          ))}
        </>
      )

    case 'rings':
    default:
      return (
        <>
          <circle cx="100" cy="100" r="96" stroke={GOLD} strokeWidth="1" />
          <circle cx="100" cy="100" r="68" stroke={GOLD} strokeWidth="1" />
        </>
      )
  }
}

interface DecorRingsProps {
  /** Which corner of the parent the motif peeks out from. */
  corner?: Corner
  /** Which fine-line motif to render. */
  variant?: Variant
  /** Outer opacity of the decoration (0–1). */
  opacity?: number
  /** Tailwind size classes for responsive control. */
  sizeClassName?: string
  className?: string
}

/**
 * Decorative fine-line golden motif used across sections.
 * Purely decorative — only a sliver shows since it's offset off-screen.
 * The parent must be `relative overflow-hidden`.
 */
export function DecorRings({
  corner = 'top-left',
  variant = 'rings',
  opacity = 0.18,
  sizeClassName = 'h-[360px] w-[360px] lg:h-[460px] lg:w-[460px]',
  className,
}: DecorRingsProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute',
        CORNER_CLASSES[corner],
        sizeClassName,
        className,
      )}
      style={{ opacity }}
      viewBox="0 0 200 200"
      fill="none"
    >
      <Motif variant={variant} />
    </svg>
  )
}
