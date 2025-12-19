'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { STRUCTURAL_TABS, structuralTypes } from '@/data/structural-library'
import Tabs, { TabPanel } from '@/components/ui/Tabs'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

// SVG diagrams for each structural type
const diagrams: Record<string, React.FC<{ className?: string }>> = {
  rsc: ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* RSC box diagram */}
      <rect x="40" y="60" width="120" height="80" rx="2" />
      <line x1="40" y1="60" x2="60" y2="40" />
      <line x1="160" y1="60" x2="140" y2="40" />
      <line x1="60" y1="40" x2="140" y2="40" />
      <line x1="40" y1="140" x2="60" y2="160" />
      <line x1="160" y1="140" x2="140" y2="160" />
      <line x1="60" y1="160" x2="140" y2="160" />
      {/* Flaps */}
      <path d="M40 100 L20 100 L20 80 L40 60" strokeDasharray="4 2" />
      <path d="M160 100 L180 100 L180 80 L160 60" strokeDasharray="4 2" />
    </svg>
  ),
  rett: ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* RETT carton diagram */}
      <rect x="50" y="50" width="100" height="130" rx="2" />
      <line x1="50" y1="80" x2="150" y2="80" />
      <path d="M50 50 Q75 30 100 50 Q125 30 150 50" />
      <line x1="75" y1="80" x2="75" y2="50" strokeDasharray="4 2" />
      <line x1="125" y1="80" x2="125" y2="50" strokeDasharray="4 2" />
    </svg>
  ),
  'die-cut': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Die cut mailer diagram */}
      <rect x="30" y="60" width="140" height="100" rx="4" />
      <path d="M30 60 L100 30 L170 60" strokeDasharray="4 2" />
      <circle cx="50" cy="80" r="3" fill="currentColor" />
      <circle cx="150" cy="80" r="3" fill="currentColor" />
      <line x1="30" y1="130" x2="170" y2="130" strokeDasharray="4 2" />
    </svg>
  ),
  'auto-lock': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Auto lock bottom diagram */}
      <rect x="50" y="40" width="100" height="120" rx="2" />
      {/* Auto-lock tabs at bottom */}
      <path d="M50 160 L50 180 L75 170 L75 160" />
      <path d="M150 160 L150 180 L125 170 L125 160" />
      <path d="M75 160 L75 175 L100 185 L125 175 L125 160" strokeDasharray="4 2" />
      <line x1="50" y1="70" x2="150" y2="70" />
    </svg>
  ),
  mailer: ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* E-commerce mailer diagram */}
      <rect x="30" y="70" width="140" height="80" rx="4" />
      <path d="M30 70 L100 50 L170 70" />
      <line x1="30" y1="100" x2="170" y2="100" strokeDasharray="4 2" />
      {/* Adhesive strip */}
      <rect x="30" y="55" width="140" height="15" fill="currentColor" opacity="0.2" />
    </svg>
  ),
}

export default function StructuralLibraryPage() {
  const [activeTab, setActiveTab] = useState(STRUCTURAL_TABS[0].id)
  const currentType = structuralTypes[activeTab]

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-sm">
        <div className="container">
          <ScrollReveal>
            <span className="text-label mb-2 block">Resources</span>
            <h1 className="heading-display mb-4">
              Structural Library
            </h1>
            <p className="text-body-lg max-w-2xl">
              Explore our library of packaging structures. Each design has been optimized 
              for performance, cost, and sustainability. Use these as starting points for 
              your next project.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-sm bg-primary-50">
        <div className="container">
          <Tabs
            tabs={STRUCTURAL_TABS.map((tab) => ({
              id: tab.id,
              label: tab.label,
              fullName: tab.fullName,
            }))}
            activeTab={activeTab}
            onChange={setActiveTab}
          >
            {STRUCTURAL_TABS.map((tab) => {
              const structType = structuralTypes[tab.id]
              const DiagramComponent = diagrams[tab.id] || diagrams.rsc

              return (
                <TabPanel key={tab.id} id={tab.id} isActive={activeTab === tab.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Diagram */}
                    <div className="lg:col-span-1">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="glass-card p-8 aspect-square flex items-center justify-center"
                      >
                        <DiagramComponent className="w-full h-full max-w-[200px] text-primary-400" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <h2 className="heading-lg mb-2">{structType.name}</h2>
                        <span className="text-accent font-medium">{structType.shortCode}</span>
                        <p className="text-body-lg mt-4 mb-8">{structType.description}</p>

                        {/* Specs Table */}
                        <div className="glass-card overflow-hidden mb-8">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-primary-200">
                                <th className="text-left px-6 py-4 text-sm font-medium text-primary-500">
                                  Specification
                                </th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-primary-500">
                                  Details
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.entries(structType.specs).map(([key, value], index) => (
                                <tr
                                  key={key}
                                  className={index !== Object.entries(structType.specs).length - 1 ? 'border-b border-primary-100' : ''}
                                >
                                  <td className="px-6 py-4 text-sm text-primary-600 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </td>
                                  <td className="px-6 py-4 text-sm font-medium text-primary-900">
                                    {value}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Applications */}
                        <div className="mb-8">
                          <h3 className="heading-sm mb-4">Common Applications</h3>
                          <div className="flex flex-wrap gap-2">
                            {structType.applications.map((app) => (
                              <span
                                key={app}
                                className="px-3 py-1.5 text-sm bg-primary-100 text-primary-700 rounded-full"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                          <button className="btn-primary">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Spec Sheet
                          </button>
                          <Link href="/contact" className="btn-secondary">
                            Request a Quote
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </TabPanel>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="heading-xl mb-4">Need something custom?</h2>
              <p className="text-body-lg">
                Our structural library covers common packaging types, but every product 
                is unique. Let us design a custom solution tailored to your specific needs.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Custom Design',
                description: 'Work directly with our structural engineers to create a unique packaging solution.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
              },
              {
                title: 'Prototyping',
                description: 'Rapid prototypes delivered to your door within days for validation and testing.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                ),
              },
              {
                title: 'Consultation',
                description: 'Schedule a call to discuss your packaging challenges and explore options.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <motion.div
                  className="glass-card p-6 h-full text-center"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-900 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h3 className="heading-sm mb-2">{item.title}</h3>
                  <p className="text-body text-sm">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3} className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
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
