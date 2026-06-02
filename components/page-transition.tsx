'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

/**
 * Fades + lifts page content into view on every route change.
 * Keyed by pathname so the animation re-runs on navigation.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  )
}
