import Link from 'next/link'
import Image from 'next/image'
import ServiceCard from '@/components/ServiceCard'
import ProcessSteps from '@/components/ProcessSteps'
import { FiTarget, FiUsers, FiCalendar, FiTrendingUp, FiHeart, FiShield, FiZap, FiChevronRight, FiArrowRight, FiCheck } from 'react-icons/fi'

export default function Home() {
  const services = [
    {
      title: 'Brand Strategy',
      description: 'Clarify your message, define your positioning, and build a strategic foundation for growth.',
      features: [
        'Brand positioning & messaging',
        'Audience insight development',
        'Go-to-market strategy',
        'Strategic planning & consulting'
      ],
      href: '/services/brand-strategy',
      icon: <FiTarget className="w-6 h-6 text-white" />,
      cta: 'Explore Brand Strategy'
    },
    {
      title: 'Partnership Procurement',
      description: 'Identify, structure, and secure aligned partnerships that create mutual value and revenue.',
      features: [
        'Partnership strategy & positioning',
        'Sponsorship package development',
        'Prospect identification & outreach',
        'Negotiation guidance & consulting'
      ],
      href: '/services/partnership-procurement',
      icon: <FiUsers className="w-6 h-6 text-white" />,
      cta: 'Explore Partnerships'
    },
    {
      title: 'Event Design & Customer Experience',
      description: 'Design and execute experiences that connect brand, audience, and purpose.',
      features: [
        'Event vision & creative direction',
        'Experience design & programming',
        'Vendor sourcing & coordination',
        'Guest journey mapping & optimization'
      ],
      href: '/services/event-design',
      icon: <FiCalendar className="w-6 h-6 text-white" />,
      cta: 'Explore Events & CX'
    },
  ]

  const valueProps = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Strategy-First',
      description: 'Every engagement begins with clear strategic thinking and planning before execution.',
      color: 'from-secondary to-tertiary'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Culture-Forward',
      description: 'We understand cultural trends and leverage them for brand relevance and growth.',
      color: 'from-tertiary to-secondary'
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Execution-Minded',
      description: 'We bridge vision and logistics to ensure ideas actually work in the real world.',
      color: 'from-accent to-secondary'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Partnership-Driven',
      description: 'We build ecosystems that generate revenue, alignment, and mutual growth.',
      color: 'from-secondary to-accent'
    }
  ]

  const idealClients = [
    'Founders & entrepreneurs',
    'Growing brands',
    'Experience-led companies',
    'Creative-led organizations',
    'Cultural platforms',
    'Event producers'
  ]

  const values = [
    {
      icon: '✨',
      title: 'Clarity over chaos',
      description: 'Clear, actionable strategies that provide direction and focus'
    },
    {
      icon: '🎯',
      title: 'Strategy before execution',
      description: 'Thoughtful strategic planning precedes every great execution'
    },
    {
      icon: '🤝',
      title: 'Relationships over transactions',
      description: 'Building lasting partnerships based on mutual value and trust'
    },
    {
      icon: '🌱',
      title: 'Culture as a growth driver',
      description: 'Leveraging cultural trends to create relevant, impactful work'
    },
    {
      icon: '⚡',
      title: 'Intention in every detail',
      description: 'Deliberate choices from big picture strategy to execution details'
    }
  ]

  const testimonials = [
    {
      quote: "Tiara transformed our brand positioning and helped us secure key partnerships that doubled our revenue in 6 months.",
      author: "Alex Chen",
      role: "CEO, CultureHaus",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The event experience designed by Pulse Strategy was unforgettable. Every detail was intentional and impactful.",
      author: "Maya Rodriguez",
      role: "Head of Marketing, BloomTech",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w-150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Working with Pulse gave us the strategic clarity we needed to scale. Their approach is both creative and disciplined.",
      author: "James Wilson",
      role: "Founder, Artisan Collective",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
            alt="Modern workspace with strategy planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-dark/70" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/30 to-transparent rounded-full -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/20 to-transparent rounded-full -translate-x-1/4 translate-y-1/4" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent mr-2 animate-pulse"></div>
              <span className="text-white text-sm font-medium">Strategy • Partnerships • Experiences</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Built with{' '}
              <span className="gradient-text relative">
                Intention
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl animate-slide-up animation-delay-200">
              We help brands clarify their vision, build aligned partnerships, and design experiences that create cultural and commercial impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-secondary to-tertiary text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center flex items-center justify-center"
              >
                <span>Start a Conversation</span>
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-center flex items-center justify-center"
              >
                <span>Explore Our Services</span>
                <FiChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-secondary to-accent rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-primary via-dark to-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-sm text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$10M+</div>
              <div className="text-sm text-gray-300">Partnership Value</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm text-gray-300">Brands Transformed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">∞</div>
              <div className="text-sm text-gray-300">Intentional Moments</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition - Enhanced */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Where Strategy Meets <span className="gradient-text">Creative Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We operate at the intersection of strategy, creativity, and execution to deliver measurable impact that moves culture and drives growth.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-secondary font-bold hover:text-secondary/80 transition-colors group"
              >
                <span>Our Philosophy</span>
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration and strategy session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl -z-10"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div 
                key={index} 
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${prop.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {prop.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services - Enhanced */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-light to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-secondary/10 to-tertiary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-secondary">What We Do</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Core Services</h2>
            <p className="text-lg text-gray-600">
              Each service can stand alone or work together as part of a comprehensive engagement designed for maximum impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center bg-gradient-to-r from-secondary to-tertiary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>View All Services</span>
              <FiChevronRight className="ml-2 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Process - Enhanced */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Collaborative Process</h2>
            <p className="text-lg text-gray-600">
              A strategic, intentional approach that ensures every engagement delivers maximum impact.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      

      {/* 6. Ideal Clients - Enhanced */}
      <section className="py-20 lg:py-28 bg-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary">Perfect Match</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Who We Work With</h2>
              <p className="text-lg text-gray-600 mb-8">
                We partner with visionary leaders and organizations ready to grow with intention, purpose, and strategic clarity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {idealClients.map((client, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FiCheck className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-primary transition-colors">{client}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-secondary to-tertiary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Let&apos;s Build Together</span>
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
                  alt="Collaborative team meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-tr from-tertiary/20 to-accent/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Values - Enhanced */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Guiding Principles</h2>
            <p className="text-lg text-gray-600">
              The core beliefs that shape every decision, partnership, and outcome.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-secondary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Founder - Enhanced */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-white to-tertiary/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
                  alt="Tiara Womack - Founder"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-gradient-to-tr from-tertiary/20 to-accent/20 rounded-3xl -z-10"></div>
              
              {/* Founder badge */}
              <div className="absolute -bottom-4 left-8 bg-gradient-to-r from-secondary to-tertiary text-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-bold">Tiara Womack</span>
                <span className="text-white/80 ml-2">• Founder & CEO</span>
              </div>
            </div>
            
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">Leadership</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">
                Meet the Mind Behind the Mission
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-gray-700 text-lg">
                  <strong className="text-primary">Tiara Womack</strong> is a brand strategist, partnerships consultant, and experience architect who blends marketing, PR, and large-scale event production with strategic precision.
                </p>
                <p className="text-gray-700 text-lg">
                  With a rare ability to manage both the big picture and intricate details, Tiara leads end-to-end projects across brand strategy, partnerships, and live experiences—blending structure, intuition, creativity, and discipline.
                </p>
                <p className="text-gray-700 text-lg">
                  She founded Pulse Strategy Group to help brands achieve clarity, alignment, and cultural relevance that goes far beyond simple visibility.
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center bg-gradient-to-r from-secondary to-tertiary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Learn More About Tiara</span>
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-bold hover:bg-secondary/5 transition-all duration-300"
                >
                  <span>Schedule Introduction</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA - Enhanced */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
            alt="Abstract gradient background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-primary/90 to-dark/90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/30 to-transparent rounded-full -translate-y-48 translate-x-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/30 to-transparent rounded-full -translate-x-48 translate-y-48" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <span className="text-white font-medium">Ready to Begin?</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Build With <span className="gradient-text">Intention</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's clarify your vision, strengthen your strategy, and create experiences that move people and drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-accent to-secondary text-white px-10 py-5 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center"
              >
                <span>Inquire to Work Together</span>
                <FiArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-lg flex items-center justify-center"
              >
                <span>Explore All Services</span>
                <FiChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <p className="text-gray-400 mt-10 text-sm">
              Schedule your complimentary discovery call • No obligation • 30-minute consultation
            </p>
          </div>
        </div>
      </section>
    </>
  )
}