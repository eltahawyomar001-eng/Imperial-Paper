import Link from 'next/link'
import Image from 'next/image'
import { workProjects } from '@/data/work'
import { capabilities } from '@/data/structural-library'
import HeroSection from '@/components/home/HeroSection'
import FeaturedWork from '@/components/home/FeaturedWork'
import CapabilitiesPreview from '@/components/home/CapabilitiesPreview'
import CTASection from '@/components/home/CTASection'
import StatsSection from '@/components/home/StatsSection'

export default function HomePage() {
  const featuredProjects = workProjects.slice(0, 3)

  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedWork projects={featuredProjects} />
      <CapabilitiesPreview capabilities={capabilities.slice(0, 4)} />
      <CTASection />
    </>
  )
}
