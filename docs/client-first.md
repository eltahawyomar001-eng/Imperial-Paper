# Client-First CSS Naming Convention

This project uses a custom CSS naming convention inspired by [Finsweet's Client-First](https://www.finsweet.com/client-first) methodology, adapted for TailwindCSS utility classes with a custom utility layer.

## Philosophy

Client-First prioritizes:

1. **Readability**: Class names describe what they do, not how they look
2. **Consistency**: Predictable patterns across the codebase
3. **Maintainability**: Easy to update and extend
4. **Scalability**: Works for small and large projects

## Naming Categories

### Layout Classes

Structural containers that establish page sections and spacing.

| Class | Purpose | CSS Output |
|-------|---------|------------|
| `.section` | Full-width section with vertical padding | `py-24 md:py-32` |
| `.section-sm` | Smaller section padding | `py-16 md:py-24` |
| `.container` | Max-width centered container | `max-width: 1200px; margin: 0 auto; padding: 0 1.5rem` |

**Usage:**
```tsx
<section className="section">
  <div className="container">
    {/* Content */}
  </div>
</section>
```

### Typography Classes

Text styling that maintains consistent hierarchy.

| Class | Purpose | Size |
|-------|---------|------|
| `.heading-display` | Hero headlines | 4xl to 7xl responsive |
| `.heading-xl` | Page section titles | 3xl to 5xl responsive |
| `.heading-lg` | Major section headers | 2xl to 3xl responsive |
| `.heading-md` | Subsection headers | xl to 2xl responsive |
| `.heading-sm` | Card titles, small headers | lg to xl responsive |
| `.text-body` | Default body text | base size, muted color |
| `.text-body-lg` | Lead paragraphs | lg to xl responsive |
| `.text-muted` | Secondary/helper text | Reduced opacity |
| `.text-label` | Overline labels | xs, uppercase, tracking |

**Usage:**
```tsx
<span className="text-label">Services</span>
<h2 className="heading-xl">What We Do</h2>
<p className="text-body">Description text...</p>
```

### Button Classes

Interactive button variants with consistent hover/focus states.

| Class | Purpose | Style |
|-------|---------|-------|
| `.btn-primary` | Primary CTA | Dark bg, light text |
| `.btn-secondary` | Secondary action | Outline style |
| `.btn-ghost` | Subtle action | Transparent bg |
| `.btn-accent` | Highlight action | Gold accent color |

**Common modifiers:**
- All buttons include `px-6 py-3` padding
- Focus-visible ring for accessibility
- Smooth transitions
- Icon support with flex gap

**Usage:**
```tsx
<button className="btn-primary">
  Get Started
  <ArrowIcon />
</button>
```

### Glass Classes

Glassmorphism effects for modern, layered UI.

| Class | Purpose | Effect |
|-------|---------|--------|
| `.glass-panel` | Large containers | Blur, transparency, border |
| `.glass-card` | Smaller cards | Lighter blur, hover states |
| `.glass-card-hover` | Interactive cards | Lift effect on hover |

**CSS Properties:**
```css
.glass-panel {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}
```

**Usage:**
```tsx
<div className="glass-card p-6">
  <h3 className="heading-sm">Card Title</h3>
  <p className="text-body">Content...</p>
</div>
```

### Chip Classes

Filter and tag components.

| Class | Purpose | State |
|-------|---------|-------|
| `.chip` | Base chip style | Neutral, rounded-full |
| `.chip-active` | Selected state | Dark bg, light text |

**Usage:**
```tsx
<button className={clsx('chip', isActive && 'chip-active')}>
  Category Name
</button>
```

### Card Classes

Consistent card styling with hover interactions.

| Class | Purpose | Effect |
|-------|---------|--------|
| `.card` | Base card | Background, rounded, shadow |
| `.card-hover` | Interactive card | Scale and lift on hover |

**Usage:**
```tsx
<div className="card card-hover">
  <img src="..." alt="..." />
  <div className="p-6">
    <h3 className="heading-sm">Title</h3>
  </div>
</div>
```

### Form Classes

Form input styling.

| Class | Purpose | State |
|-------|---------|-------|
| `.input` | Text inputs, textareas | Border, focus ring |
| `.input-error` | Error state | Red border |

**Usage:**
```tsx
<input 
  className={clsx('input', error && 'input-error')} 
  type="text"
/>
```

## Color System

Colors are defined in `tailwind.config.ts` and follow a numbered scale:

### Primary (Warm Grays)
- `primary-50` to `primary-950`
- Used for: backgrounds, text, borders

### Accent (Gold)
- `accent` / `accent-dark` / `accent-light`
- Used for: CTAs, highlights, interactive elements

### Semantic Colors
- `success`: Green tones
- `error`: Red tones
- `warning`: Amber tones

## Animation Classes

Defined in Tailwind config for consistent motion.

| Animation | Duration | Use Case |
|-----------|----------|----------|
| `animate-fade-in` | 0.6s | Page transitions |
| `animate-slide-up` | 0.6s | Scroll reveals |
| `animate-scale-in` | 0.4s | Modal/overlay entry |
| `animate-stagger` | Varies | List item reveals |

**Timing Functions:**
- `ease-out-expo`: Fast start, gradual end
- `ease-in-out-expo`: Smooth both ends

## Component Patterns

### Scroll Reveal

Use the `ScrollReveal` component for consistent entrance animations:

```tsx
import { ScrollReveal } from '@/components/ui/ScrollReveal'

<ScrollReveal delay={0.2}>
  <h2 className="heading-xl">Title</h2>
</ScrollReveal>
```

### Staggered Lists

For animated list items:

```tsx
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

<StaggerContainer>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card data={item} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

## Best Practices

### DO:

✅ Use utility classes for one-off styling
```tsx
<div className="glass-card p-6 md:p-8">
```

✅ Combine custom utilities with Tailwind
```tsx
<h2 className="heading-xl text-center mb-8">
```

✅ Use responsive modifiers
```tsx
<div className="section-sm md:section">
```

✅ Leverage component abstraction for repeated patterns
```tsx
<Button variant="primary" size="lg">
```

### DON'T:

❌ Create new custom classes for single-use styling
```css
/* Avoid this */
.special-card-on-about-page { ... }
```

❌ Override custom utilities with inline styles
```tsx
/* Avoid this */
<div className="glass-card" style={{ background: 'red' }}>
```

❌ Nest utilities unnecessarily
```css
/* Avoid this */
.card .heading-sm { ... }
```

## Extending the System

### Adding a New Utility

1. Add to `app/globals.css` in the `@layer utilities` block:

```css
@layer utilities {
  .new-utility {
    @apply /* Tailwind classes */;
  }
}
```

2. Document in this file

### Adding Color Tokens

1. Update `tailwind.config.ts`:

```ts
colors: {
  newcolor: {
    50: '#...',
    // ... full scale
  }
}
```

2. Use in components: `bg-newcolor-500`

## File Reference

| File | Contains |
|------|----------|
| `app/globals.css` | All custom utility classes |
| `tailwind.config.ts` | Design tokens (colors, typography, shadows) |
| `components/ui/*.tsx` | Reusable UI components |

---

For questions or suggestions, open an issue or submit a PR.
