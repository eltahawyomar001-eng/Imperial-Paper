'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary-200/30 to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-label">Premium Structural Packaging Design</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display mb-6"
          >
            Engineering elegance into every{' '}
            <span className="text-accent">fold</span>,{' '}
            <span className="text-accent">crease</span>, and{' '}
            <span className="text-accent">corner</span>.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg max-w-2xl mb-10"
          >
            Imperial Paper is a Los Angeles-based structural packaging design firm. 
            We create premium corrugated, folding carton, and rigid box solutions 
            for brands that demand excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/work" className="btn-primary">
              View Our Work
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-primary-400"
          >
            <span className="text-body-xs">Scroll to explore</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero image/decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[60vh] hidden xl:block"
      >
        <div className="relative w-full h-full">
          {/* Decorative boxes */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-20 w-48 h-48 glass-card shadow-elevated"
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-1/3 right-40 w-56 h-40 glass-card shadow-elevated"
          />
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 0.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-20 right-12 w-44 h-52 glass-card shadow-elevated bg-primary-900/5"
          />
        </div>
      </motion.div>
    </section>
  )
}
