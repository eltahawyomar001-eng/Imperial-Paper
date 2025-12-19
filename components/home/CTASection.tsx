'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export default function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-primary-900 px-8 py-16 md:px-16 md:py-24">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-display-md md:text-display-lg font-medium text-white mb-6">
                Ready to elevate your packaging?
              </h2>
              <p className="text-lg text-primary-300 mb-10 max-w-xl mx-auto">
                Let us help you create structural packaging that protects your product, 
                delights your customers, and strengthens your brand.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-accent">
                  Start a conversation
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
                <Link
                  href="/work"
                  className="btn px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 border border-white/20"
                >
                  Browse our work
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
