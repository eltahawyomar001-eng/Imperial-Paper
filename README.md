<div align="center">

# Imperial Paper

### Premium Structural Packaging Design

A production-quality demo website for a luxury packaging design firm based in Los Angeles.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

[Live Demo](#) · [Report Bug](https://github.com/eltahawyomar001-eng/Imperial-Paper/issues) · [Request Feature](https://github.com/eltahawyomar001-eng/Imperial-Paper/issues)

</div>

---

## Overview

This project demonstrates a production-quality marketing website with:

- **8 Responsive Pages** — Home, Work Gallery, Work Detail, Capabilities, About, Contact, Structural Library, Legal
- **Advanced Filtering** — Multi-select filters, search, and sort with animated transitions
- **Accessibility-First** — Keyboard navigation, ARIA labels, proper focus management
- **Premium Animations** — Page transitions, scroll reveals, micro-interactions
- **Responsive Design** — Mobile-first approach with fluid typography and layouts
- **Client-First CSS** — Consistent naming convention for maintainability

<br/>

## Screenshots

| Home | Work Gallery | Structural Library |
|:----:|:------------:|:------------------:|
| Hero with animated stats | Filtering with LayoutGroup | Keyboard-accessible tabs |

<br/>

## Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/eltahawyomar001-eng/Imperial-Paper.git

# Navigate to directory
cd Imperial-Paper

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles & Client-First utilities
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── template.tsx         # Page transition wrapper
│   ├── page.tsx             # Home page
│   ├── work/
│   │   ├── page.tsx         # Work gallery with filtering
│   │   └── [slug]/
│   │       └── page.tsx     # Work detail page
│   ├── capabilities/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── structural-library/
│   │   └── page.tsx         # Tabbed structural specs
│   └── legal/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky header with mobile menu
│   │   └── Footer.tsx       # Site footer
│   ├── ui/
│   │   ├── Button.tsx       # Button variants
│   │   ├── FilterChip.tsx   # Filter components
│   │   ├── GlassPanel.tsx   # Glassmorphism container
│   │   ├── ScrollReveal.tsx # Scroll-triggered animations
│   │   └── Tabs.tsx         # Accessible tabbed interface
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── FeaturedWork.tsx
│   │   ├── CapabilitiesPreview.tsx
│   │   └── CTASection.tsx
│   └── work/
│       ├── WorkCard.tsx
│       └── WorkDetailContent.tsx
├── data/                     # Mock CMS data
│   ├── work.ts              # Project data
│   ├── structural-library.ts # Structural types & specs
│   └── navigation.ts        # Site config & nav
├── docs/
│   └── client-first.md      # CSS naming convention docs
├── tailwind.config.ts       # Design tokens
├── tsconfig.json
└── package.json
```

## Key Features

### Work Gallery Filtering

The `/work` page implements a robust filtering system:

- **Category filters**: Single-select pills (All, Retail Packaging, E-commerce, etc.)
- **Industry tags**: Multi-select chips with visual feedback
- **Search**: Real-time text search across titles and summaries
- **Sorting**: Newest/Oldest toggle
- **Active filters**: Pill display with clear functionality
- **Empty state**: Helpful message when no results match
- **Animated transitions**: Framer Motion LayoutGroup for smooth reordering

### Structural Library

The `/structural-library` page features:

- **Keyboard-accessible tabs**: Arrow key navigation, Enter/Space activation
- **5 structural types**: RSC, RETT, Die Cut, Auto Lock, Mailer
- **Technical specs table**: Material, board weight, print methods, etc.
- **SVG diagrams**: Custom technical illustrations
- **Download CTA**: Spec sheet download buttons

### Design System

Built with TailwindCSS extended with custom tokens:

- **Colors**: Primary (warm grays), Accent (gold), semantic colors
- **Typography**: Display, heading, body, and label scales
- **Shadows**: Glass, glow, and elevated variants
- **Animations**: Fade, slide, scale, and stagger presets

See `docs/client-first.md` for the full naming convention documentation.

### Accessibility

- Keyboard navigation throughout
- Proper heading hierarchy
- Focus-visible states
- ARIA labels and roles
- Reduced motion support
- Color contrast compliance

## Technologies

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| TailwindCSS | Utility-first styling |
| Framer Motion | Animations and transitions |
| clsx | Conditional class names |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization

### Updating Content

All mock content is centralized in the `/data` directory:

- **Projects**: Edit `data/work.ts` to add/modify portfolio items
- **Structural types**: Update `data/structural-library.ts`
- **Navigation & site info**: Modify `data/navigation.ts`

### Styling

1. **Design tokens**: Modify `tailwind.config.ts` for colors, typography, etc.
2. **Global styles**: Update `app/globals.css` for Client-First utilities
3. **Component styles**: Each component uses Tailwind utilities

### Adding Pages

1. Create a new folder in `/app` with a `page.tsx` file
2. Add navigation link in `data/navigation.ts`
3. Page transitions are automatic via `template.tsx`

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

<br/>

## Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<br/>

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.

<br/>

---

<div align="center">

**[Imperial Paper](https://github.com/eltahawyomar001-eng/Imperial-Paper)** · Built with care in Los Angeles

</div>
