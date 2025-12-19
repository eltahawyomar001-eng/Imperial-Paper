'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/data/navigation'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface FormData {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const projectTypes = [
  'Corrugated packaging',
  'Folding carton',
  'Rigid box',
  'Display & POP',
  'E-commerce packaging',
  'Other',
]

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Not sure yet',
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (at least 20 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy email')
    }
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-sm">
        <div className="container">
          <ScrollReveal>
            <span className="text-label mb-2 block">Contact</span>
            <h1 className="heading-display mb-4">
              Let us start a conversation
            </h1>
            <p className="text-body-lg max-w-2xl">
              Whether you have a specific project in mind or are just exploring possibilities, 
              we would love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-sm">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="glass-card p-8 md:p-10">
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', delay: 0.2 }}
                          className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
                        >
                          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                        <h2 className="heading-lg mb-4">Message sent successfully</h2>
                        <p className="text-body max-w-md mx-auto mb-8">
                          Thank you for reaching out. We typically respond within one business day. 
                          We look forward to discussing your project.
                        </p>
                        <button
                          onClick={() => {
                            setIsSuccess(false)
                            setFormData({
                              name: '',
                              email: '',
                              company: '',
                              projectType: '',
                              budget: '',
                              message: '',
                            })
                          }}
                          className="btn-secondary"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Name */}
                          <div>
                            <label htmlFor="name" className="label">
                              Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`input ${errors.name ? 'input-error' : ''}`}
                              placeholder="Your name"
                            />
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="error-text"
                              >
                                {errors.name}
                              </motion.p>
                            )}
                          </div>

                          {/* Email */}
                          <div>
                            <label htmlFor="email" className="label">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`input ${errors.email ? 'input-error' : ''}`}
                              placeholder="you@company.com"
                            />
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="error-text"
                              >
                                {errors.email}
                              </motion.p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Company */}
                          <div>
                            <label htmlFor="company" className="label">
                              Company
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="input"
                              placeholder="Your company"
                            />
                          </div>

                          {/* Project Type */}
                          <div>
                            <label htmlFor="projectType" className="label">
                              Project type
                            </label>
                            <select
                              id="projectType"
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className="input cursor-pointer"
                            >
                              <option value="">Select a type</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Budget */}
                        <div>
                          <label htmlFor="budget" className="label">
                            Estimated budget
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="input cursor-pointer"
                          >
                            <option value="">Select a range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="label">
                            Tell us about your project <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className={`textarea ${errors.message ? 'input-error' : ''}`}
                            placeholder="Describe your packaging needs, timeline, and any specific requirements..."
                          />
                          {errors.message && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="error-text"
                            >
                              {errors.message}
                            </motion.p>
                          )}
                        </div>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary w-full sm:w-auto"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send message
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </>
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={0.1}>
                <div className="sticky top-28 space-y-8">
                  {/* Email */}
                  <div className="glass-card p-6">
                    <h3 className="heading-sm mb-4">Email us directly</h3>
                    <button
                      onClick={copyEmail}
                      className="group flex items-center gap-3 text-primary-900 hover:text-accent transition-colors"
                    >
                      <span className="font-medium">{siteConfig.email}</span>
                      <span className={`text-sm ${copySuccess ? 'text-green-600' : 'text-primary-400 group-hover:text-accent'}`}>
                        {copySuccess ? 'Copied!' : 'Copy'}
                      </span>
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="glass-card p-6">
                    <h3 className="heading-sm mb-4">Call us</h3>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="font-medium text-primary-900 hover:text-accent transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-muted mt-2">Mon-Fri, 9am-6pm PT</p>
                  </div>

                  {/* Address */}
                  <div className="glass-card p-6">
                    <h3 className="heading-sm mb-4">Visit our studio</h3>
                    <address className="not-italic text-primary-700">
                      {siteConfig.address}
                    </address>
                    <p className="text-muted mt-2">By appointment only</p>
                  </div>

                  {/* Social */}
                  <div className="glass-card p-6">
                    <h3 className="heading-sm mb-4">Follow us</h3>
                    <div className="flex gap-3">
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center hover:bg-primary-200 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center hover:bg-primary-200 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
