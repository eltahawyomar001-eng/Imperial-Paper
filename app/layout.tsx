import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Imperial Paper | Premium Structural Packaging Design',
  description: 'Los Angeles-based structural packaging design firm specializing in luxury corrugated, folding carton, and rigid box solutions for premium brands.',
  keywords: ['structural packaging', 'packaging design', 'corrugated', 'folding carton', 'rigid box', 'luxury packaging', 'Los Angeles'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
