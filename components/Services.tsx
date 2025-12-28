'use client'

import { Heart, Briefcase, Cake, Music, Globe, Camera, Sparkles, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Wedding Design & Planning',
      description: 'Complete wedding coordination from initial concept to your memorable day. We handle every detail to create your perfect celebration.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80&fit=crop',
      alt: 'Elegant wedding ceremony with beautiful floral arrangements',
      color: 'from-pink-400 to-rose-500',
      category: '2026 Priority Booking'
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Corporate Event Excellence',
      description: 'Professional event management for conferences, product launches, and corporate galas that impress and inspire.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&fit=crop',
      alt: 'Modern corporate event with professional setup',
      color: 'from-blue-400 to-cyan-500',
      category: 'Year-Round Service'
    },
    {
      icon: <Cake className="w-10 h-10" />,
      title: 'Milestone Celebrations',
      description: 'Birthdays, anniversaries, and special moments transformed into unforgettable experiences with personalized themes.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80&fit=crop',
      alt: 'Colorful birthday party celebration with decorations',
      color: 'from-purple-400 to-violet-500',
      category: 'Popular for 2026'
    },
    {
      icon: <Music className="w-10 h-10" />,
      title: 'Elegant Social Galas',
      description: 'Sophisticated gatherings, fundraisers, and social events designed to create lasting impressions and connections.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80&fit=crop',
      alt: 'Elegant gala event with beautiful lighting and decor',
      color: 'from-green-400 to-emerald-500',
      category: 'Premium Service'
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Virtual & Hybrid Events',
      description: 'Seamless online and hybrid event solutions that engage audiences and deliver impactful experiences anywhere.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&fit=crop',
      alt: 'Virtual event production with multiple screens',
      color: 'from-indigo-400 to-blue-500',
      category: 'Modern Solution'
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: 'Creative Event Design',
      description: 'Innovative concepts and visual storytelling that transform spaces into immersive, memorable environments.',
      image: 'https://images.unsplash.com/photo-1519677100203-4f3c1f0d2d7e?w=600&q=80&fit=crop',
      alt: 'Creative event design with stunning decor elements',
      color: 'from-amber-400 to-orange-500',
      category: 'Artistic Vision'
    },
  ]

  return (
    <section 
      id="services" 
      className="section-padding bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-5 py-2.5 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Our Signature Services</span>
          </div>
          <h2 
            id="services-heading" 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive <span className="text-primary-600">Event Excellence</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we offer complete event solutions 
            designed to bring your vision to life with precision and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Category Tag */}
                <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  service.category.includes('2026') 
                    ? 'bg-white/95 backdrop-blur-sm text-primary-700 border border-primary-200'
                    : 'bg-gray-900/80 backdrop-blur-sm text-white'
                }`}>
                  {service.category}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group/cta"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Summary */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80&fit=crop"
                  alt="Team of event planners designing an elegant celebration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Your Vision, Our Expertise
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Tiara Events, we believe every celebration should be as unique as the people 
                it honors. Our team combines creative vision with meticulous execution to deliver 
                seamless, memorable events that exceed expectations.
              </p>
              <div className="space-y-4">
                {[
                  'Personalized event design and planning',
                  'Extensive vendor network and partnerships',
                  'Detailed timeline and budget management',
                  'On-site coordination and execution'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold mt-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                <span>Schedule Your Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}