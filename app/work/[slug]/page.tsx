import { notFound } from 'next/navigation'
import { workProjects } from '@/data/work'
import WorkDetailContent from '@/components/work/WorkDetailContent'

interface WorkDetailPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return workProjects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: WorkDetailPageProps) {
  const project = workProjects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found | Imperial Paper',
    }
  }

  return {
    title: `${project.title} | Imperial Paper`,
    description: project.summary,
  }
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const project = workProjects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <WorkDetailContent project={project} />
}
