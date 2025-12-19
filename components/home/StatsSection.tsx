'use client'

import { motion } from 'framer-motion'
import { companyStats } from '@/data/structural-library'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

export default function StatsSection() {
  return (
    <section className="section-sm bg-primary-900 text-white">
      <div className="container">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {companyStats.map((stat, index) => (
            <StaggerItem key={index} className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-display-md md:text-display-lg font-medium text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-400 text-sm">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
