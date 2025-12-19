// Navigation data
export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Structural Library', href: '/structural-library' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// Site metadata
export const siteConfig = {
  name: 'Imperial Paper',
  tagline: 'Premium Structural Packaging Design',
  description: 'Los Angeles-based structural packaging design firm specializing in luxury corrugated, folding carton, and rigid box solutions.',
  location: 'Los Angeles, California',
  email: 'studio@imperialpaper.co',
  phone: '+1 (213) 555-0147',
  address: '1847 Industrial Avenue, Suite 400, Los Angeles, CA 90021',
  social: {
    linkedin: 'https://linkedin.com/company/imperial-paper',
    instagram: 'https://instagram.com/imperialpaper',
  },
}

// Footer links
export const footerLinks = {
  services: [
    { label: 'Structural Design', href: '/capabilities#structural-design' },
    { label: 'Prototyping', href: '/capabilities#prototyping' },
    { label: 'Production', href: '/capabilities#production' },
    { label: 'Sustainability', href: '/capabilities#sustainability' },
  ],
  resources: [
    { label: 'Structural Library', href: '/structural-library' },
    { label: 'Our Work', href: '/work' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal' },
    { label: 'Terms of Service', href: '/legal' },
  ],
}
