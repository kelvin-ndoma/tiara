import Hero from '@/components/Hero'
import Services from '@/components/Services'
import { Star, Award, Users, ArrowRight, Calendar, Sparkles, Heart, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Static metadata for SEO
export const metadata = {
  title: 'Tiara Events | Premium Event Planning & Design for 2026 Celebrations',
  description: 'Award-winning event management in New York. Specializing in weddings, corporate events, and milestone celebrations with booking now available for 2026.',
  keywords: '2026 event planning, luxury wedding planner, corporate event management, New York celebrations, premium event design',
}

export default function Home() {
  const testimonials = [
    {
      name: 'Sarah & James Hamilton',
      role: 'Wedding Celebration',
      event: 'The Plaza Hotel, June 2023',
      quote: 'Tiara transformed our vision into a celebration that exceeded every expectation. The attention to detail was remarkable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?w=300&q=80&fit=crop&crop=face',
      imageAlt: 'Sarah and James Hamilton, wedding clients',
      highlight: true
    },
    {
      name: 'TechVision Inc.',
      role: 'Annual Corporate Gala',
      event: 'Gotham Hall, November 2023',
      quote: 'Our most successful corporate event yet. The team executed flawlessly from concept to completion.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80&fit=crop&crop=face',
      imageAlt: 'Michael Chen, corporate client representative',
      highlight: false
    },
    {
      name: 'The Rodriguez Family',
      role: 'Milestone Birthday',
      event: 'Private Estate, March 2024',
      quote: 'A celebration we will cherish forever. Every detail reflected our family perfectly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80&fit=crop&crop=face',
      imageAlt: 'Emily Rodriguez, birthday celebration host',
      highlight: false
    },
  ]

  const featuredEvents = [
    {
      title: 'Elegant Garden Wedding',
      description: 'An intimate celebration surrounded by lush gardens and romantic lighting',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80&fit=crop',
      alt: 'Beautiful garden wedding with floral arches and elegant decor',
      category: 'Wedding',
      year: '2024',
      venue: 'Private Estate, Hudson Valley'
    },
    {
      title: 'Modern Corporate Summit',
      description: 'A sophisticated business gathering with innovative design elements',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80&fit=crop',
      alt: 'Modern corporate event setup with sleek design and lighting',
      category: 'Corporate',
      year: '2023',
      venue: 'Tribeca Rooftop, NYC'
    },
    {
      title: 'Luxury Anniversary Gala',
      description: 'A glamorous celebration honoring 50 years of marriage',
      image: 'https://images.unsplash.com/photo-1519677100203-4f3c1f0d2d7e?w=800&q=80&fit=crop',
      alt: 'Elegant anniversary celebration with golden decor and crystal accents',
      category: 'Celebration',
      year: '2024',
      venue: 'The Rainbow Room'
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Vision Discovery',
      description: 'We begin by understanding your vision, preferences, and goals for your celebration.',
      icon: <Heart className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Creative Design',
      description: 'Our team crafts a customized design concept that reflects your unique style.',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Meticulous Planning',
      description: 'Every detail is carefully planned and coordinated for seamless execution.',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Flawless Execution',
      description: 'On the day, our team ensures everything runs smoothly so you can simply enjoy.',
      icon: <CheckCircle className="w-6 h-6" />
    },
  ]

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Featured Events Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-5 py-2.5 rounded-full mb-6">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">Signature Celebrations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recent <span className="text-primary-600">Masterpieces</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Each event tells a unique story, crafted with passion and precision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredEvents.map((event, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Event Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                        {event.category}
                      </div>
                      <div className="px-3 py-1 bg-primary-500/90 backdrop-blur-sm rounded-full text-sm font-medium">
                        {event.year}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-white/90 text-sm mb-3">{event.description}</p>
                    <div className="text-white/70 text-xs flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                      {event.venue}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 hover:scale-105"
            >
              <span>View Our Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-5 py-2.5 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Create <span className="text-primary-600">Magic</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              A seamless journey from concept to celebration, ensuring every detail reflects your vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-8">
                    <div className="p-3 bg-primary-50 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform">
                      <div className="text-primary-600">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Connecting Line (Desktop Only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-400/30 to-primary-400/10 group-hover:from-primary-400/60 group-hover:to-primary-400/30 transition-all duration-300"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-5 py-2.5 rounded-full mb-6">
              <Star className="w-5 h-5 fill-primary-600 text-primary-600" />
              <span className="font-semibold">Client Experiences</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stories of <span className="text-primary-600">Joy</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Hear from clients who entrusted us with their most important celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl ${
                  testimonial.highlight 
                    ? 'bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200' 
                    : 'bg-white border border-gray-100'
                } p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Highlight Badge */}
                {testimonial.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold rounded-full">
                    Featured Review
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.imageAlt}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    {testimonial.highlight && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full border-2 border-white flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-primary-600 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.event}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 italic mb-8 relative">
                  <span className="absolute -top-3 -left-2 text-4xl text-primary-200 opacity-50">"</span>
                  {testimonial.quote}
                  <span className="absolute -bottom-4 -right-2 text-4xl text-primary-200 opacity-50">"</span>
                </p>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 font-medium">
                      Verified Celebration
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-primary-50 rounded-full group-hover:bg-primary-100 transition-colors">
                      <Heart className="w-4 h-4 text-primary-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">250+</div>
                <div className="text-gray-600">Events Celebrated</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Awards Received</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - 2026 Focus */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80&fit=crop"
            alt="Elegant event celebration background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-primary-900/80" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400/10 to-purple-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400/5 to-primary-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">2026 Planning Now Open</span>
              <Clock className="w-4 h-4 animate-pulse" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Your <span className="text-primary-400">Dream Celebration</span><br />
              Awaits in 2026
            </h2>
            
            <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Begin planning the celebration you've always imagined. With premium dates filling quickly 
              for 2026, now is the perfect time to start your journey toward an unforgettable experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative px-12 py-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Sparkles className="relative w-6 h-6" />
                <span className="relative">Secure Your 2026 Date</span>
                <ArrowRight className="relative w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                href="/about"
                className="group px-10 py-6 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Meet Our Team</span>
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
                </div>
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700/50">
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary-400" />
                  <span className="font-medium">Award-Winning Excellence</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-gray-600"></div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary-400" />
                  <span className="font-medium">Dedicated Planning Team</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-gray-600"></div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span className="font-medium">Flexible 2026 Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}