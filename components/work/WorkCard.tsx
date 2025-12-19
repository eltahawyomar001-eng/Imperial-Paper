'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { WorkProject } from '@/data/work'

interface WorkCardProps {
  project: WorkProject
}

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <Link href={`/work/${project.slug}`}>
      <motion.article
        className="group relative bg-white rounded-2xl border border-primary-100 shadow-card overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-primary-700">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="heading-sm group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <span className="text-muted shrink-0">{project.year}</span>
          </div>
          
          <p className="text-body text-sm line-clamp-2 mb-4">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.industryTags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs text-primary-500 bg-primary-50 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover arrow indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <div className="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
