// Work/Project data types
export interface WorkProject {
  id: string
  title: string
  slug: string
  year: number
  category: 'Corrugated' | 'Folding Carton' | 'Rigid Box' | 'Display'
  industryTags: string[]
  thumbnail: string
  heroImage: string
  summary: string
  description: string
  services: string[]
  results: { metric: string; value: string }[]
  clientName?: string
}

// Categories for filtering
export const CATEGORIES = ['Corrugated', 'Folding Carton', 'Rigid Box', 'Display'] as const

// Industry tags for filtering
export const INDUSTRY_TAGS = [
  'Beverage',
  'Beauty',
  'Electronics',
  'Food',
  'CPG',
  'Medical',
  'Fashion',
  'Spirits',
  'Wellness',
] as const

// Mock work projects data
export const workProjects: WorkProject[] = [
  {
    id: '1',
    title: 'Luxe Spirits Collection',
    slug: 'luxe-spirits-collection',
    year: 2024,
    category: 'Rigid Box',
    industryTags: ['Spirits', 'Beverage'],
    thumbnail: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=1600&q=80',
    summary: 'Premium rigid packaging for an artisanal whiskey brand, featuring magnetic closure and embossed detailing.',
    description: 'We partnered with a boutique distillery to create packaging that reflects the craftsmanship of their aged whiskey collection. The solution combines traditional box-making techniques with modern structural innovation.',
    services: ['Structural Design', 'Material Selection', 'Prototyping', 'Production Management'],
    results: [
      { metric: 'Shelf Impact', value: '+340%' },
      { metric: 'Unboxing Experience Score', value: '9.4/10' },
      { metric: 'Production Time', value: '6 weeks' },
    ],
    clientName: 'Whiskey Heritage Co.',
  },
  {
    id: '2',
    title: 'Botanical Beauty Suite',
    slug: 'botanical-beauty-suite',
    year: 2024,
    category: 'Folding Carton',
    industryTags: ['Beauty', 'Wellness'],
    thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&q=80',
    summary: 'Sustainable folding carton system for a clean beauty brand, using FSC-certified materials and soy-based inks.',
    description: 'This project challenged us to balance luxury aesthetics with environmental responsibility. We developed a modular packaging system that reduces material waste while maintaining premium shelf presence.',
    services: ['Sustainable Materials Consulting', 'Structural Design', 'Color Management', 'Vendor Coordination'],
    results: [
      { metric: 'Material Reduction', value: '28%' },
      { metric: 'Carbon Footprint', value: '-45%' },
      { metric: 'Retail Adoption', value: '120 stores' },
    ],
    clientName: 'Verde Botanicals',
  },
  {
    id: '3',
    title: 'Tech Flagship Unboxing',
    slug: 'tech-flagship-unboxing',
    year: 2024,
    category: 'Corrugated',
    industryTags: ['Electronics', 'CPG'],
    thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&q=80',
    summary: 'E-commerce packaging solution for a premium headphone brand, optimized for shipping durability and unboxing theater.',
    description: 'Created an innovative corrugated solution that protects delicate electronics during transit while delivering an Apple-caliber unboxing experience at home.',
    services: ['E-commerce Optimization', 'Drop Test Engineering', 'Structural Design', 'Fulfillment Integration'],
    results: [
      { metric: 'Damage Rate', value: '0.3%' },
      { metric: 'Unboxing Videos', value: '2.4M views' },
      { metric: 'Return Rate', value: '-62%' },
    ],
    clientName: 'SoundCraft Audio',
  },
  {
    id: '4',
    title: 'Artisan Chocolate Display',
    slug: 'artisan-chocolate-display',
    year: 2023,
    category: 'Display',
    industryTags: ['Food', 'CPG'],
    thumbnail: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=1600&q=80',
    summary: 'Retail display system for a artisan chocolate maker, featuring modular components and seasonal flexibility.',
    description: 'Designed a versatile point-of-sale display system that adapts to seasonal collections while maintaining brand consistency across 500+ retail locations.',
    services: ['Retail Strategy', 'Display Engineering', 'Assembly Optimization', 'Seasonal Variants'],
    results: [
      { metric: 'Sales Lift', value: '+89%' },
      { metric: 'Assembly Time', value: '3 minutes' },
      { metric: 'Retail Partners', value: '500+' },
    ],
    clientName: 'Maison Cacao',
  },
  {
    id: '5',
    title: 'Medical Device Packaging',
    slug: 'medical-device-packaging',
    year: 2023,
    category: 'Corrugated',
    industryTags: ['Medical'],
    thumbnail: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1600&q=80',
    summary: 'Compliant packaging solution for diagnostic medical devices, meeting FDA and ISO requirements.',
    description: 'Engineered a sterile barrier packaging system that meets stringent regulatory requirements while streamlining the end-user experience for healthcare professionals.',
    services: ['Regulatory Compliance', 'Sterile Barrier Design', 'Validation Testing', 'Documentation'],
    results: [
      { metric: 'FDA Approval', value: 'First Pass' },
      { metric: 'Shelf Life', value: '5 years' },
      { metric: 'Cost Reduction', value: '22%' },
    ],
    clientName: 'MedTech Diagnostics',
  },
  {
    id: '6',
    title: 'Fashion House Gift Box',
    slug: 'fashion-house-gift-box',
    year: 2023,
    category: 'Rigid Box',
    industryTags: ['Fashion', 'Beauty'],
    thumbnail: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&q=80',
    summary: 'Signature gift packaging for a luxury fashion house, featuring hand-finished details and custom hardware.',
    description: 'Created an iconic gift box that has become synonymous with the brands luxury positioning. Each box features custom ribbon pulls, magnetic closures, and hand-applied finishing.',
    services: ['Luxury Finishing', 'Hardware Sourcing', 'Hand Assembly', 'Quality Control'],
    results: [
      { metric: 'Brand Recognition', value: '+156%' },
      { metric: 'Gift Sales', value: '+78%' },
      { metric: 'Social Mentions', value: '45K+' },
    ],
    clientName: 'House of Laurent',
  },
  {
    id: '7',
    title: 'Cold Brew Coffee Shipper',
    slug: 'cold-brew-coffee-shipper',
    year: 2023,
    category: 'Corrugated',
    industryTags: ['Beverage', 'Food'],
    thumbnail: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1600&q=80',
    summary: 'Temperature-controlled shipping solution for a premium cold brew subscription service.',
    description: 'Developed an insulated shipping system that maintains product temperature for 48+ hours, enabling nationwide distribution without cold chain logistics.',
    services: ['Thermal Engineering', 'Subscription Optimization', 'Cost Analysis', 'Supply Chain'],
    results: [
      { metric: 'Temperature Hold', value: '48+ hours' },
      { metric: 'Shipping Cost', value: '-34%' },
      { metric: 'Subscriber Growth', value: '+245%' },
    ],
    clientName: 'Ritual Roasters',
  },
  {
    id: '8',
    title: 'Skincare Discovery Kit',
    slug: 'skincare-discovery-kit',
    year: 2024,
    category: 'Folding Carton',
    industryTags: ['Beauty', 'Wellness'],
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&q=80',
    summary: 'Multi-product sample kit packaging with innovative insert design for optimal product presentation.',
    description: 'Designed a discovery kit that showcases 8 products in a compact footprint, using a die-cut insert system that eliminates the need for plastic trays.',
    services: ['Insert Engineering', 'Sample Kit Design', 'Sustainability Audit', 'Production Scaling'],
    results: [
      { metric: 'Conversion Rate', value: '+67%' },
      { metric: 'Plastic Eliminated', value: '100%' },
      { metric: 'Unit Cost', value: '-18%' },
    ],
    clientName: 'Glow Theory',
  },
  {
    id: '9',
    title: 'Wine Club Mailer',
    slug: 'wine-club-mailer',
    year: 2024,
    category: 'Corrugated',
    industryTags: ['Beverage', 'Spirits'],
    thumbnail: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80',
    summary: 'Six-bottle wine shipper with integrated pulp inserts and climate-aware design for DTC fulfillment.',
    description: 'Created a protective shipping solution for a premium wine club that safely transports bottles across varying climate zones while reinforcing brand prestige.',
    services: ['Climate Testing', 'Pulp Insert Design', 'Fulfillment Workflow', 'Brand Integration'],
    results: [
      { metric: 'Breakage Rate', value: '0.1%' },
      { metric: 'Member Satisfaction', value: '4.9/5' },
      { metric: 'Shipping Damage Claims', value: '-94%' },
    ],
    clientName: 'Valley Vintners Club',
  },
  {
    id: '10',
    title: 'Premium Pet Food Display',
    slug: 'premium-pet-food-display',
    year: 2023,
    category: 'Display',
    industryTags: ['CPG', 'Food'],
    thumbnail: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1600&q=80',
    summary: 'Freestanding retail display for a premium pet food brand, engineered for high-traffic retail environments.',
    description: 'Developed a durable display solution capable of holding 200+ pounds of product while maintaining visual appeal throughout a 12-week retail cycle.',
    services: ['Load Engineering', 'Retail Placement Strategy', 'Assembly Simplification', 'Durability Testing'],
    results: [
      { metric: 'Load Capacity', value: '200+ lbs' },
      { metric: 'In-Store Lifespan', value: '12 weeks' },
      { metric: 'Sales per Display', value: '+112%' },
    ],
    clientName: 'Noble Paws',
  },
]

// Sort options
export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'az', label: 'A-Z' },
  { value: 'za', label: 'Z-A' },
] as const

export type SortOption = typeof SORT_OPTIONS[number]['value']
