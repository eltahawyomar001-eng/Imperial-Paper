'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
  variant?: 'light' | 'dark'
  hover?: boolean
  as?: 'div' | 'article' | 'section'
}

export default function GlassPanel({
  children,
  className,
  variant = 'light',
  hover = false,
  as = 'div',
}: GlassPanelProps) {
  const Component = motion[as]

  const variants = {
    light: 'bg-white/60 backdrop-blur-xl border-white/30',
    dark: 'bg-primary-900/80 backdrop-blur-xl border-white/10 text-white',
  }

  return (
    <Component
      className={clsx(
        'relative rounded-2xl border shadow-glass overflow-hidden',
        variants[variant],
        hover && 'transition-all duration-300 hover:bg-white/80 hover:shadow-elevated hover:-translate-y-1',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </Component>
  )
}

// GlassCard with image support
interface GlassCardProps {
  children: ReactNode
  className?: string
  image?: string
  imageAlt?: string
  aspectRatio?: 'video' | 'square' | 'portrait'
  href?: string
}

export function GlassCard({
  children,
  className,
  image,
  imageAlt = '',
  aspectRatio = 'video',
  href,
}: GlassCardProps) {
  const aspectRatios = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  }

  const content = (
    <motion.div
      className={clsx(
        'group relative bg-white rounded-2xl border border-primary-100 shadow-card overflow-hidden',
        'transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:border-primary-200',
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {image && (
        <div className={clsx('relative overflow-hidden', aspectRatios[aspectRatio])}>
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-5 md:p-6">{children}</div>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    )
  }

  return content
}
