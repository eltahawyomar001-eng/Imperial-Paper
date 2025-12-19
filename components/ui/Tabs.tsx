'use client'

import { useState, useRef, useEffect, ReactNode, KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

interface Tab {
  id: string
  label: string
  fullName?: string
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (tabId: string) => void
  children: ReactNode
  className?: string
}

export default function Tabs({
  tabs,
  activeTab,
  onChange,
  children,
  className,
}: TabsProps) {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

  // Update underline position
  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab)
    const activeTabEl = tabsRef.current[activeIndex]
    if (activeTabEl) {
      setUnderlineStyle({
        left: activeTabEl.offsetLeft,
        width: activeTabEl.offsetWidth,
      })
    }
  }, [activeTab, tabs])

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const tabCount = tabs.length
    let newIndex = index

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        newIndex = index === 0 ? tabCount - 1 : index - 1
        break
      case 'ArrowRight':
        e.preventDefault()
        newIndex = index === tabCount - 1 ? 0 : index + 1
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = tabCount - 1
        break
      default:
        return
    }

    onChange(tabs[newIndex].id)
    tabsRef.current[newIndex]?.focus()
  }

  return (
    <div className={className}>
      {/* Tab List */}
      <div className="relative border-b border-primary-200">
        <div
          role="tablist"
          aria-label="Content tabs"
          className="flex gap-1 overflow-x-auto pb-px scrollbar-hide"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => { tabsRef.current[index] = el }}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              onClick={() => onChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={clsx(
                'relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-t-lg',
                activeTab === tab.id
                  ? 'text-primary-900'
                  : 'text-primary-500 hover:text-primary-700'
              )}
            >
              <span className="relative z-10">{tab.label}</span>
              {tab.fullName && (
                <span className="hidden md:inline text-primary-400 ml-2">
                  {tab.fullName}
                </span>
              )}
            </button>
          ))}
        </div>
        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 h-0.5 bg-accent"
          animate={{ left: underlineStyle.left, width: underlineStyle.width }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </div>

      {/* Tab Panels */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Tab Panel component
interface TabPanelProps {
  id: string
  isActive: boolean
  children: ReactNode
}

export function TabPanel({ id, isActive, children }: TabPanelProps) {
  if (!isActive) return null

  return (
    <motion.div
      role="tabpanel"
      id={`tabpanel-${id}`}
      aria-labelledby={`tab-${id}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
