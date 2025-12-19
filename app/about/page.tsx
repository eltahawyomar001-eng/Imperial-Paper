'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { companyValues, teamMembers, companyStats } from '@/data/structural-library'
import { siteConfig } from '@/data/navigation'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-sm">
        <div className="container">
          <ScrollReveal>
            <span className="text-label mb-2 block">About Us</span>
            <h1 className="heading-display mb-4">
              Engineering elegance since 2009
            </h1>
            <p className="text-body-lg max-w-2xl">
              Imperial Paper is a Los Angeles-based structural packaging design firm 
              specializing in premium corrugated, folding carton, and rigid box solutions 
              for brands that demand excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-primary-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Imperial Paper studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="heading-xl mb-6">Our Story</h2>
              <div className="space-y-4 text-body">
                <p>
                  Imperial Paper was founded in 2009 with a simple belief: packaging is not 
                  just a container, it is a brand ambassador. Every box, carton, and mailer 
                  is an opportunity to create a moment of connection between a brand and its customer.
                </p>
                <p>
                  What started as a two-person operation in a downtown LA loft has grown into 
                  a team of 25 structural designers, engineers, and packaging specialists. 
                  We have helped hundreds of brands transform their packaging from an afterthought 
                  into a competitive advantage.
                </p>
                <p>
                  Today, we work with clients ranging from emerging DTC brands to Fortune 500 
                  companies, united by a shared commitment to packaging that performs, protects, 
                  and inspires.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-primary-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {companyStats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="text-center">
                  <div className="text-display-md md:text-display-lg font-medium text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-400 text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-label mb-2 block">Our Values</span>
              <h2 className="heading-xl mb-4">
                What guides us
              </h2>
              <p className="text-body-lg">
                The principles that shape every decision we make and every 
                package we create.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyValues.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  className="glass-card p-8 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="heading-md mb-3">{value.title}</h3>
                  <p className="text-body">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-primary-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-label mb-2 block">Our Team</span>
              <h2 className="heading-xl mb-4">
                The people behind the packages
              </h2>
              <p className="text-body-lg">
                A team of structural designers, engineers, and packaging specialists 
                united by a passion for precision.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  className="group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="heading-sm">{member.name}</h3>
                  <p className="text-accent text-sm mb-2">{member.role}</p>
                  <p className="text-body text-sm">{member.bio}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Location Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="text-label mb-2 block">Our Home</span>
              <h2 className="heading-xl mb-6">
                Rooted in Los Angeles
              </h2>
              <p className="text-body-lg mb-6">
                Our studio is located in the heart of the Arts District, surrounded by 
                the creative energy that defines LA. We are close to manufacturers, 
                suppliers, and the brands we serve.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-primary-900">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary-900 hover:text-accent transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary-100">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Los Angeles skyline"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-900">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-display-md md:text-display-lg font-medium text-white mb-6">
              Let us build something together
            </h2>
            <p className="text-lg text-primary-300 mb-8 max-w-xl mx-auto">
              We would love to learn about your brand and explore how exceptional 
              packaging can drive your success.
            </p>
            <Link href="/contact" className="btn-accent">
              Get in touch
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
