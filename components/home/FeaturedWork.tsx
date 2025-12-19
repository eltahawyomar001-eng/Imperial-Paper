'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { WorkProject } from '@/data/work'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'
import WorkCard from '@/components/work/WorkCard'

interface FeaturedWorkProps {
  projects: WorkProject[]
}

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
  return (
    <section className="section">
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <ScrollReveal>
            <span className="text-label mb-2 block">Selected Work</span>
            <h2 className="heading-xl">
              Packaging that performs
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              href="/work"
              className="btn-secondary group"
            >
              View all projects
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Projects grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <WorkCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
