export const WHATSAPP_URL = 'https://wa.me/5537999421929'
export const INSTAGRAM_URL = 'https://instagram.com/nucleolv'
export const FACEBOOK_URL = 'https://facebook.com/nucleolv'
export const PHONE_DISPLAY = '(37) 99942-1929'
export const PHONE_TEL = 'tel:+5537999421929'

export const ADDRESS = 'R. Cornélio Benfica - Jardim do Lago, Nova Serrana - MG'
export const CEP = '35522-024'
export const MAPS_QUERY = 'R. Cornélio Benfica, Jardim do Lago, Nova Serrana - MG'
export const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAPS_QUERY,
)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY,
)}&output=embed`

export const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Especialidades', href: '/especialidades' },
  { label: 'Equipe', href: '/equipe' },
  { label: 'Localização', href: '/#localizacao' },
  { label: 'Contato', href: '/contato' },
] as const
