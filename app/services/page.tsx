import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import { FiTarget, FiUsers, FiCalendar } from 'react-icons/fi'

export default function ServicesPage() {
  const services = [
    {
      title: 'Brand Strategy',
      description: 'We help brands define who they are, what they stand for, and how they show up in the world. Our brand strategy work creates clarity, alignment, and direction.',
      features: [
        'Brand positioning and messaging',
        'Audience and customer insight development',
        'Value proposition refinement',
        'Go-to-market and campaign strategy',
        'Strategic planning and consulting'
      ],
      href: '/services/brand-strategy',
      icon: <FiTarget className="w-6 h-6 text-white" />
    },
    {
      title: 'Partnership Procurement',
      description: 'We help brands identify, structure, and secure aligned partnerships that create mutual value. From strategy to execution, we support clients in building intentional partnership ecosystems.',
      features: [
        'Partnership strategy and positioning',
        'Sponsorship package development',
        'Brand prospect identification',
        'Outreach strategy and pitch consulting',
        'Negotiation guidance and ongoing consulting'
      ],
      href: '/services/partnership-procurement',
      icon: <FiUsers className="w-6 h-6 text-white" />
    },
    {
      title: 'Event Design & Customer Experience',
      description: 'We design and execute experiences that connect brand, audience, and purpose. From concept to execution, we manage creative, operational, and experiential details.',
      features: [
        'Event vision and creative direction',
        'Experience design and programming strategy',
        'Vendor sourcing and coordination',
        'Guest journey mapping and optimization',
        'On-site execution and post-event insights'
      ],
      href: '/services/event-design',
      icon: <FiCalendar className="w-6 h-6 text-white" />
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Three core pillars designed to help brands translate vision into influence and impact. Each service can stand alone or work together for comprehensive partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How Services Work Together */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">How Our Services Work Together</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Stand Alone</h3>
                  <p className="text-gray-600 text-sm">
                    Engage with one service pillar for focused expertise in your specific area of need.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Combined Approach</h3>
                  <p className="text-gray-600 text-sm">
                    Integrate multiple services for a comprehensive strategy-to-execution partnership.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Full Partnership</h3>
                  <p className="text-gray-600 text-sm">
                    Work with us as your long-term strategic partner across all aspects of brand growth.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Whether you need strategic direction, partnership development, or experience execution—or all three—we tailor our approach to your specific goals and timeline.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Discuss Your Needs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Our Process Across All Services</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                'Discovery & Alignment',
                'Strategy & Planning',
                'Development & Design',
                'Execution & Support',
                'Evaluation & Evolution'
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-bold">{step}</h3>
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-4 h-0.5 bg-gray-200 transform translate-x-2 -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Every engagement follows our proven process, ensuring clarity, alignment, and measurable results at every stage.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-black font-medium hover:text-black/80 transition-colors"
              >
                <span>Learn more about our approach</span>
                <div className="ml-2 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-black text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Build with Intention?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you&apos;re looking for strategic clarity, partnership opportunities, or unforgettable experiences—we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Start a Conversation
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}