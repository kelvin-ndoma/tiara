import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tiara Events Management | Premium Event Planning & Wedding Coordination in New York',
  description: 'Professional event management services in New York. Specializing in wedding planning, corporate events, birthday celebrations, and social galas since 2012.',
  keywords: 'event planning New York, wedding planner NYC, corporate events, birthday parties, event management, party planning, celebration coordination',
  authors: [{ name: 'Tiara Johnson' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tiaaraevents.com',
    title: 'Tiara Events Management | Premium Event Planning',
    description: 'Professional event planning and management services in New York',
    siteName: 'Tiara Events Management',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Tiara Events Management - Elegant Event Setup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiara Events Management',
    description: 'Professional event planning and management services in New York',
    images: ['https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=630&fit=crop'],
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
}

// Structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EventPlanningBusiness",
  "name": "Tiara Events Management",
  "image": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=630&fit=crop",
  "description": "Professional event management and planning services in New York",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Event Street, Suite 100",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "url": "https://tiaaraevents.com",
  "telephone": "+1-555-123-4567",
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$$",
  "sameAs": [
    "https://facebook.com/tiaaraevents",
    "https://instagram.com/tiaaraevents",
    "https://linkedin.com/company/tiaaraevents"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}