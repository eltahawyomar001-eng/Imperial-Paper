'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { capabilities } from '@/data/structural-library'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

// Icon components (same as CapabilitiesPreview)
const icons: Record<string, React.FC<{ className?: string }>> = {
  cube: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  layers: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  ),
  scissors: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
    </svg>
  ),
  factory: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  leaf: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  truck: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
}

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-sm">
        <div className="container">
          <ScrollReveal>
            <span className="text-label mb-2 block">Capabilities</span>
            <h1 className="heading-display mb-4">
              Full-spectrum packaging expertise
            </h1>
            <p className="text-body-lg max-w-2xl">
              From initial concept through production, we provide comprehensive 
              structural packaging services for brands that demand excellence at every step.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section bg-primary-50">
        <div className="container">
          <StaggerContainer className="space-y-8">
            {capabilities.map((capability, index) => {
              const IconComponent = icons[capability.icon] || icons.cube
              const isEven = index % 2 === 0

              return (
                <StaggerItem key={capability.id}>
                  <motion.div
                    id={capability.id}
                    className="glass-card p-8 md:p-12"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={isEven ? '' : 'lg:order-2'}>
                        <div className="w-16 h-16 rounded-2xl bg-primary-900 flex items-center justify-center mb-6">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="heading-lg mb-4">{capability.title}</h2>
                        <p className="text-body-lg mb-6">{capability.description}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {capability.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-primary-700">
                              <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`${isEven ? '' : 'lg:order-1'} hidden lg:block`}>
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200/50 flex items-center justify-center">
                          <IconComponent className="w-32 h-32 text-primary-300" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-label mb-2 block">Our Process</span>
              <h2 className="heading-xl mb-4">
                From concept to production
              </h2>
              <p className="text-body-lg">
                A proven methodology refined over 15 years and hundreds of projects.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We learn about your product, brand, and goals through collaborative workshops.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team develops structural concepts, material specs, and detailed CAD drawings.',
              },
              {
                step: '03',
                title: 'Prototype',
                description: 'Physical samples are produced in our lab for validation and refinement.',
              },
              {
                step: '04',
                title: 'Production',
                description: 'We manage the entire manufacturing process from vendor selection to delivery.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.1}>
                <div className="relative p-6 h-full">
                  <div className="text-display-lg font-medium text-primary-100 mb-4">
                    {item.step}
                  </div>
                  <h3 className="heading-md mb-2">{item.title}</h3>
                  <p className="text-body text-sm">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-200" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-900">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-display-md md:text-display-lg font-medium text-white mb-6">
              Ready to discuss your project?
            </h2>
            <p className="text-lg text-primary-300 mb-8 max-w-xl mx-auto">
              Every great package starts with a conversation. Let us learn about 
              your product and show you what is possible.
            </p>
            <Link href="/contact" className="btn-accent">
              Start a conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
