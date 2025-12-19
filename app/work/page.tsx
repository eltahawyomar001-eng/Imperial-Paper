'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { workProjects, CATEGORIES, INDUSTRY_TAGS, SORT_OPTIONS, SortOption } from '@/data/work'
import WorkCard from '@/components/work/WorkCard'
import FilterChip, { MultiSelectChip, ActiveFilters } from '@/components/ui/FilterChip'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export default function WorkPage() {
  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [showFilters, setShowFilters] = useState(false)

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let result = [...workProjects]

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Filter by industry tags
    if (selectedTags.length > 0) {
      result = result.filter((p) =>
        selectedTags.some((tag) => p.industryTags.includes(tag))
      )
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.summary.toLowerCase().includes(query)
      )
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => b.year - a.year)
        break
      case 'oldest':
        result.sort((a, b) => a.year - b.year)
        break
      case 'az':
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'za':
        result.sort((a, b) => b.title.localeCompare(a.title))
        break
    }

    return result
  }, [selectedCategory, selectedTags, searchQuery, sortBy])

  // Active filters for display
  const activeFilters = useMemo(() => {
    const filters: { type: string; value: string }[] = []
    if (selectedCategory) {
      filters.push({ type: 'category', value: selectedCategory })
    }
    selectedTags.forEach((tag) => {
      filters.push({ type: 'tag', value: tag })
    })
    return filters
  }, [selectedCategory, selectedTags])

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  // Remove single filter
  const removeFilter = (type: string, value: string) => {
    if (type === 'category') {
      setSelectedCategory(null)
    } else if (type === 'tag') {
      setSelectedTags((prev) => prev.filter((t) => t !== value))
    }
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory(null)
    setSelectedTags([])
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-sm">
        <div className="container">
          <ScrollReveal>
            <span className="text-label mb-2 block">Our Work</span>
            <h1 className="heading-display mb-4">
              Projects that define categories
            </h1>
            <p className="text-body-lg max-w-2xl">
              Explore our portfolio of structural packaging solutions across industries. 
              Each project represents a unique challenge solved with precision and creativity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-y border-primary-100 bg-white/50 backdrop-blur-sm sticky top-20 z-30">
        <div className="container">
          {/* Search and mobile filter toggle */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-12"
              />
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="input appearance-none pr-10 cursor-pointer"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-400 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden btn-secondary"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
              {activeFilters.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-accent text-white text-xs rounded-full">
                  {activeFilters.length}
                </span>
              )}
            </button>
          </div>

          {/* Category filters - always visible on desktop */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block space-y-4`}>
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="All"
                isActive={selectedCategory === null}
                onClick={() => setSelectedCategory(null)}
                count={workProjects.length}
              />
              {CATEGORIES.map((category) => (
                <FilterChip
                  key={category}
                  label={category}
                  isActive={selectedCategory === category}
                  onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                  count={workProjects.filter((p) => p.category === category).length}
                />
              ))}
            </div>

            {/* Industry tags */}
            <div>
              <span className="text-muted mb-2 block">Industry:</span>
              <div className="flex flex-wrap gap-2">
                {INDUSTRY_TAGS.map((tag) => (
                  <MultiSelectChip
                    key={tag}
                    label={tag}
                    isSelected={selectedTags.includes(tag)}
                    onToggle={() => toggleTag(tag)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Active filters */}
          <AnimatePresence>
            {activeFilters.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-primary-100"
              >
                <ActiveFilters
                  filters={activeFilters}
                  onRemove={removeFilter}
                  onClearAll={clearAllFilters}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          {/* Results count */}
          <div className="mb-8">
            <p className="text-muted">
              Showing {filteredProjects.length} of {workProjects.length} projects
            </p>
          </div>

          {/* Grid */}
          <LayoutGroup>
            <motion.div layout className="grid-work">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <h3 className="heading-md mb-2">No projects found</h3>
              <p className="text-body max-w-md mx-auto mb-6">
                We could not find any projects matching your current filters. 
                Try adjusting your search or clearing some filters.
              </p>
              <button onClick={clearAllFilters} className="btn-secondary">
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
