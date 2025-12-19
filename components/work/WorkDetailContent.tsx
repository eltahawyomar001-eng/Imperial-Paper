'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { WorkProject, workProjects } from '@/data/work'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

interface WorkDetailContentProps {
  project: WorkProject
}

export default function WorkDetailContent({ project }: WorkDetailContentProps) {
  // Get related projects (same category, excluding current)
  const relatedProjects = workProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Back button */}
        <div className="absolute top-28 left-0 right-0">
          <div className="container">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Work
            </Link>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white mb-4">
                {project.category}
              </span>
              <h1 className="text-display-lg md:text-display-xl font-medium text-white mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                {project.summary}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="heading-lg mb-6">Overview</h2>
                <p className="text-body-lg mb-8">{project.description}</p>
              </ScrollReveal>

              {/* Results */}
              <ScrollReveal delay={0.1}>
                <h3 className="heading-md mb-6">Results</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card p-6 text-center"
                    >
                      <div className="text-display-sm font-medium text-accent mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-primary-500">{result.metric}</div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={0.2}>
                <div className="glass-card p-6 sticky top-28">
                  {/* Project details */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-muted mb-2">Year</h4>
                      <p className="text-primary-900 font-medium">{project.year}</p>
                    </div>

                    <div>
                      <h4 className="text-muted mb-2">Category</h4>
                      <p className="text-primary-900 font-medium">{project.category}</p>
                    </div>

                    <div>
                      <h4 className="text-muted mb-2">Industry</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.industryTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="divider" />

                    <div>
                      <h4 className="text-muted mb-3">Services Provided</h4>
                      <ul className="space-y-2">
                        {project.services.map((service) => (
                          <li key={service} className="flex items-start gap-2 text-sm">
                            <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="divider" />

                    <Link href="/contact" className="btn-primary w-full justify-center">
                      Start a Similar Project
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section bg-primary-50">
          <div className="container">
            <ScrollReveal>
              <h2 className="heading-lg mb-8">Related Projects</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((relatedProject) => (
                <ScrollReveal key={relatedProject.id}>
                  <Link href={`/work/${relatedProject.slug}`}>
                    <motion.article
                      className="group relative bg-white rounded-2xl overflow-hidden shadow-card"
                      whileHover={{ y: -4 }}
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={relatedProject.thumbnail}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="heading-sm group-hover:text-accent transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-muted mt-2">{relatedProject.category}</p>
                      </div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
