// Structural Library data types
export interface StructuralType {
  id: string
  name: string
  shortCode: string
  description: string
  specs: {
    material: string
    strength: string
    assembly: string
    costTier: string
    leadTime: string
    minOrderQty: string
    sustainability: string
  }
  applications: string[]
  diagram: string // SVG placeholder identifier
}

export const STRUCTURAL_TABS = [
  { id: 'rsc', label: 'RSC', fullName: 'Regular Slotted Container' },
  { id: 'rett', label: 'RETT', fullName: 'Reverse End Tuck Top' },
  { id: 'die-cut', label: 'Die Cut', fullName: 'Die Cut Mailer' },
  { id: 'auto-lock', label: 'Auto Lock', fullName: 'Auto Lock Bottom' },
  { id: 'mailer', label: 'Mailer', fullName: 'E-Commerce Mailer' },
] as const

export const structuralTypes: Record<string, StructuralType> = {
  rsc: {
    id: 'rsc',
    name: 'Regular Slotted Container',
    shortCode: 'RSC',
    description: 'The most common box style in the industry. All flaps are the same length and meet at the center of the box. Highly efficient for shipping and storage.',
    specs: {
      material: 'B-Flute, C-Flute, BC-Flute Corrugated',
      strength: 'ECT 32 - ECT 71',
      assembly: 'Manual tape closure, 15-30 seconds',
      costTier: 'Economy',
      leadTime: '5-7 business days',
      minOrderQty: '250 units',
      sustainability: 'Recyclable, FSC options available',
    },
    applications: [
      'General shipping',
      'E-commerce fulfillment',
      'Warehouse storage',
      'Bulk product packaging',
    ],
    diagram: 'rsc',
  },
  rett: {
    id: 'rett',
    name: 'Reverse End Tuck Top',
    shortCode: 'RETT',
    description: 'A retail-ready carton style where the top flap tucks into the back of the box. Provides a clean front-facing presentation and easy opening.',
    specs: {
      material: '18pt - 24pt SBS, Kraft',
      strength: 'Caliper dependent',
      assembly: 'Pre-glued, 5-10 seconds',
      costTier: 'Mid-range',
      leadTime: '10-14 business days',
      minOrderQty: '500 units',
      sustainability: 'Recyclable, PCW options available',
    },
    applications: [
      'Retail shelf display',
      'Beauty and cosmetics',
      'Food packaging',
      'Health supplements',
    ],
    diagram: 'rett',
  },
  'die-cut': {
    id: 'die-cut',
    name: 'Die Cut Mailer',
    shortCode: 'DCM',
    description: 'Custom die-cut corrugated mailers designed for maximum protection and unboxing experience. Ideal for e-commerce brands seeking differentiation.',
    specs: {
      material: 'E-Flute, B-Flute Corrugated',
      strength: 'ECT 32 - ECT 44',
      assembly: 'Self-locking tabs, 10-20 seconds',
      costTier: 'Mid-range to Premium',
      leadTime: '12-18 business days',
      minOrderQty: '500 units',
      sustainability: 'Plastic-free, recyclable',
    },
    applications: [
      'Subscription boxes',
      'Direct-to-consumer',
      'Gift packaging',
      'Premium e-commerce',
    ],
    diagram: 'die-cut',
  },
  'auto-lock': {
    id: 'auto-lock',
    name: 'Auto Lock Bottom',
    shortCode: 'ALB',
    description: 'Cartons with a pre-glued bottom that automatically locks into place when opened. Significantly reduces packing time in fulfillment operations.',
    specs: {
      material: '18pt - 28pt SBS, Kraft, Corrugated',
      strength: 'Medium to high load capacity',
      assembly: 'Auto-locks on opening, 3-5 seconds',
      costTier: 'Premium',
      leadTime: '14-21 business days',
      minOrderQty: '1,000 units',
      sustainability: 'Recyclable, FSC certified options',
    },
    applications: [
      'High-volume fulfillment',
      'Food service',
      'Retail packaging',
      'Assembly line packing',
    ],
    diagram: 'auto-lock',
  },
  mailer: {
    id: 'mailer',
    name: 'E-Commerce Mailer',
    shortCode: 'ECM',
    description: 'Designed specifically for the demands of e-commerce shipping. Combines protection, presentation, and sustainability in one solution.',
    specs: {
      material: 'B-Flute, E-Flute White/Kraft',
      strength: 'ECT 32 - ECT 48',
      assembly: 'Peel & seal adhesive, 5 seconds',
      costTier: 'Mid-range',
      leadTime: '7-10 business days',
      minOrderQty: '250 units',
      sustainability: 'Curbside recyclable, no plastic tape',
    },
    applications: [
      'Apparel shipping',
      'Books and media',
      'Flat products',
      'Lightweight goods',
    ],
    diagram: 'mailer',
  },
}

// Capabilities/Services data
export interface Capability {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export const capabilities: Capability[] = [
  {
    id: 'structural-design',
    title: 'Structural Design',
    description: 'Engineering packaging solutions that balance form, function, and feasibility. Our structural designers create innovative designs optimized for your product, brand, and supply chain.',
    features: [
      'CAD design and 3D modeling',
      'Prototype development',
      'Material optimization',
      'Cost engineering',
    ],
    icon: 'cube',
  },
  {
    id: 'material-consulting',
    title: 'Material Consulting',
    description: 'Expert guidance on substrate selection, from sustainable paperboard to high-performance corrugated. We source globally to find the perfect material for your application.',
    features: [
      'Sustainability assessments',
      'Performance testing',
      'Global sourcing',
      'Cost-benefit analysis',
    ],
    icon: 'layers',
  },
  {
    id: 'prototyping',
    title: 'Rapid Prototyping',
    description: 'From concept to physical sample in days, not weeks. Our in-house prototyping lab uses cutting-edge technology to bring designs to life quickly and accurately.',
    features: [
      'Digital cutting systems',
      'White samples and mock-ups',
      'Graphic proofs',
      'Assembly validation',
    ],
    icon: 'scissors',
  },
  {
    id: 'production',
    title: 'Production Management',
    description: 'End-to-end production oversight ensuring quality, timeline, and cost targets are met. We manage vendor relationships so you can focus on your business.',
    features: [
      'Vendor qualification',
      'Quality assurance',
      'Timeline management',
      'Cost negotiation',
    ],
    icon: 'factory',
  },
  {
    id: 'sustainability',
    title: 'Sustainability Strategy',
    description: 'Helping brands meet their environmental commitments without compromising on quality or experience. We design for recyclability, reduction, and responsibility.',
    features: [
      'Life cycle assessment',
      'Certification guidance',
      'Material alternatives',
      'Waste reduction',
    ],
    icon: 'leaf',
  },
  {
    id: 'fulfillment',
    title: 'Fulfillment Integration',
    description: 'Packaging engineered for the realities of modern fulfillment. We optimize for pack time, shipping costs, and the complete customer journey.',
    features: [
      'Pack time optimization',
      'Dimensional weight analysis',
      'Automation compatibility',
      'Unboxing experience design',
    ],
    icon: 'truck',
  },
]

// Company values for About page
export interface Value {
  title: string
  description: string
}

export const companyValues: Value[] = [
  {
    title: 'Precision',
    description: 'Every millimeter matters. We obsess over the details that separate good packaging from exceptional packaging.',
  },
  {
    title: 'Partnership',
    description: 'We embed ourselves in your team, understanding your challenges as our own. Your success is our metric.',
  },
  {
    title: 'Progress',
    description: 'The packaging industry evolves constantly. We stay ahead, bringing emerging materials and methods to our clients.',
  },
  {
    title: 'Purpose',
    description: 'Sustainability is not a feature, it is a responsibility. We design with the full lifecycle in mind.',
  },
]

// Team members for About page
export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Marcus Chen',
    role: 'Founder & Principal',
    bio: 'Two decades of structural packaging experience across luxury, CPG, and e-commerce. Former head of packaging innovation at a Fortune 100.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Sarah Okonkwo',
    role: 'Director of Design',
    bio: 'Award-winning structural designer with a background in industrial design. Leads our creative team in pushing the boundaries of what packaging can be.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'David Park',
    role: 'Head of Production',
    bio: 'Manufacturing expert who has overseen production of over 100 million units. Ensures our designs translate flawlessly to the production floor.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Sustainability Lead',
    bio: 'Environmental scientist turned packaging consultant. Helps clients navigate the complex landscape of sustainable materials and certifications.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  },
]

// Stats for About page
export const companyStats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '200M+', label: 'Units Produced' },
  { value: '40+', label: 'Industry Awards' },
]
