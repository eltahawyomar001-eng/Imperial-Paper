'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems } from '@/data/navigation'
import clsx from 'clsx'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-primary-100 shadow-subtle'
          : 'bg-transparent'
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-lg">IP</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-medium text-primary-900">Imperial Paper</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      'relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200',
                      isActive
                        ? 'text-primary-900'
                        : 'text-primary-500 hover:text-primary-900'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary-100 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary text-sm">
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 -mr-2 text-primary-900"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current origin-left"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-full h-0.5 bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current origin-left"
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 bg-white/95 backdrop-blur-xl lg:hidden z-40"
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="container py-8"
            >
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={clsx(
                          'block px-4 py-3 text-xl font-medium rounded-xl transition-colors',
                          isActive
                            ? 'bg-primary-100 text-primary-900'
                            : 'text-primary-600 hover:bg-primary-50 hover:text-primary-900'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 pt-8 border-t border-primary-100"
              >
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-base"
                >
                  Start a Project
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
