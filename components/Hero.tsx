'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Calendar, CheckCircle, Star } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      
      {/* Elegant Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80&fit=crop"
          alt="Elegant event venue with beautiful lighting and floral arrangements"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
          quality={90}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-primary-50/40"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div>
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-primary-100 px-6 py-3 rounded-full mb-8 shadow-lg">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full blur" aria-hidden="true" />
                  <Sparkles className="relative w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <span className="text-primary-700 font-semibold tracking-wide">
                  Now Booking 2026 Events
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Crafting
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-purple-500 bg-clip-text text-transparent">
                    Timeless Celebrations
                  </span>
                  <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-primary-400/40 via-primary-500/60 to-purple-500/40 rounded-full blur-sm" aria-hidden="true" />
                </span>
              </h1>

              {/* Subtitle with 2026 Focus */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As New York's premier event designers, we transform visions into extraordinary experiences. 
                Plan your 2026 celebration with our award-winning team dedicated to perfection in every detail.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: <CheckCircle className="w-5 h-5" />, text: 'Custom Event Design Tailored to Your Vision' },
                  { icon: <Calendar className="w-5 h-5" />, text: 'Priority Booking for 2026 Celebrations' },
                  { icon: <Star className="w-5 h-5" />, text: 'Award-Winning Creative Direction' },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                      <div className="text-primary-600">
                        {benefit.icon}
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <div className="mb-12">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
                  aria-label="Begin planning your 2026 event with Tiara Events"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Begin Your 2026 Journey</span>
                  <ArrowRight className="relative w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column - Featured Event Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop"
                    alt="Luxury wedding celebration with elegant table settings and floral arrangements"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Featured Event</div>
                        <div className="font-bold text-gray-900">The Hamilton Wedding</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      "Tiara transformed our vision into a celebration we'll cherish forever."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-400/20 to-purple-400/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-primary-400/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-gradient-to-b from-primary-400/20 via-primary-400/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}