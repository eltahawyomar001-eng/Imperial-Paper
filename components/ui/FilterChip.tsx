'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

interface FilterChipProps {
  label: string
  isActive?: boolean
  onClick: () => void
  count?: number
}

export default function FilterChip({
  label,
  isActive = false,
  onClick,
  count,
}: FilterChipProps) {
  return (
    <motion.button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full',
        'transition-colors duration-200 cursor-pointer',
        'border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        isActive
          ? 'bg-primary-900 text-white border-primary-900 hover:bg-primary-800'
          : 'border-primary-200 text-primary-600 bg-white/60 backdrop-blur-sm hover:bg-primary-100 hover:border-primary-300'
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={clsx(
            'text-xs px-1.5 py-0.5 rounded-full',
            isActive ? 'bg-white/20' : 'bg-primary-100'
          )}
        >
          {count}
        </span>
      )}
    </motion.button>
  )
}

// Multi-select chip for industry tags
interface MultiSelectChipProps {
  label: string
  isSelected: boolean
  onToggle: () => void
}

export function MultiSelectChip({
  label,
  isSelected,
  onToggle,
}: MultiSelectChipProps) {
  return (
    <motion.button
      onClick={onToggle}
      className={clsx(
        'inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg',
        'transition-colors duration-200 cursor-pointer',
        'border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        isSelected
          ? 'bg-accent/10 text-accent border-accent/30'
          : 'border-primary-200 text-primary-500 bg-white/40 hover:bg-primary-50 hover:border-primary-300'
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isSelected && (
        <motion.svg
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </motion.svg>
      )}
      <span>{label}</span>
    </motion.button>
  )
}

// Active filters display
interface ActiveFiltersProps {
  filters: { type: string; value: string }[]
  onRemove: (type: string, value: string) => void
  onClearAll: () => void
}

export function ActiveFilters({
  filters,
  onRemove,
  onClearAll,
}: ActiveFiltersProps) {
  if (filters.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-wrap items-center gap-2"
    >
      <span className="text-sm text-primary-500">Active filters:</span>
      {filters.map((filter) => (
        <motion.button
          key={`${filter.type}-${filter.value}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => onRemove(filter.type, filter.value)}
          className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-full hover:bg-primary-200 transition-colors"
        >
          <span>{filter.value}</span>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      ))}
      <button
        onClick={onClearAll}
        className="text-sm text-primary-500 hover:text-primary-700 underline underline-offset-2 transition-colors"
      >
        Clear all
      </button>
    </motion.div>
  )
}
