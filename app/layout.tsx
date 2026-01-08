import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pulse Strategy Group | Brand Strategy, Partnerships & Experiences',
  description: 'Helping brands translate vision into influence and impact through strategic brand positioning, partnership procurement, and end-to-end event design.',
  keywords: 'brand strategy, partnerships, event design, experience architecture, brand positioning, sponsorship, customer experience',
  authors: [{ name: 'Tiara Womack' }],
  openGraph: {
    type: 'website',
    url: 'https://pulsestrategygroup.com',
    title: 'Pulse Strategy Group',
    description: 'Strategy. Partnerships. Experiences — built with intention.',
    images: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=630&fit=crop'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pulse Strategy Group',
    description: 'Helping brands translate vision into influence and impact',
    images: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=600&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // REMOVE viewport from here
}

// ADD this separate viewport export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}