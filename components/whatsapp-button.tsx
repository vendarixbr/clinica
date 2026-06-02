import { WhatsAppLogo } from '@/components/whatsapp-logo'
import { WHATSAPP_URL } from '@/lib/site'

export function WhatsappButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group fixed bottom-5 right-4 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-[1.08] sm:bottom-7 sm:right-7"
    >
      <span
        className="wa-pulse-ring pointer-events-none absolute -inset-1 rounded-full border-[1.5px] border-[rgba(37,211,102,0.5)]"
        aria-hidden="true"
      />
      <WhatsAppLogo className="relative h-7 w-7" />
    </a>
  )
}
