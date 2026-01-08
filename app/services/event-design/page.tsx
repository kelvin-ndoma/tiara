import Link from 'next/link'
import Image from 'next/image'
import { FiCalendar, FiUsers, FiMap, FiVideo, FiMusic, FiCoffee, FiCheckCircle, FiArrowRight } from 'react-icons/fi'

export default function EventDesignPage() {
  const services = [
    {
      category: 'Strategy & Concept',
      items: [
        {
          icon: <FiCalendar className="w-5 h-5" />,
          title: 'Event Vision & Creative Direction',
          description: 'Develop the overall creative concept and strategic direction for your event.'
        },
        {
          icon: <FiMap className="w-5 h-5" />,
          title: 'Experience Design',
          description: 'Design immersive attendee experiences from arrival to departure.'
        },
        {
          icon: <FiUsers className="w-5 h-5" />,
          title: 'Programming Strategy',
          description: 'Create engaging programming that aligns with event objectives and audience interests.'
        },
        {
          icon: <FiMap className="w-5 h-5" />,
          title: 'Audience Journey Mapping',
          description: 'Map every touchpoint of the attendee journey for optimal engagement.'
        }
      ]
    },
    {
      category: 'Design & Production',
      items: [
        {
          icon: <FiVideo className="w-5 h-5" />,
          title: 'Event Design & Aesthetics',
          description: 'Design visual identity, decor, and overall aesthetic for your event.'
        },
        {
          icon: <FiUsers className="w-5 h-5" />,
          title: 'Vendor Sourcing & Coordination',
          description: 'Identify and manage relationships with production vendors and partners.'
        },
        {
          icon: <FiCalendar className="w-5 h-5" />,
          title: 'Production Timelines',
          description: 'Develop and manage comprehensive production schedules and timelines.'
        },
        {
          icon: <FiMusic className="w-5 h-5" />,
          title: 'Run of Show Development',
          description: 'Create detailed event flow and timing documents for seamless execution.'
        }
      ]
    },
    {
      category: 'Customer Experience',
      items: [
        {
          icon: <FiUsers className="w-5 h-5" />,
          title: 'Guest Journey Mapping',
          description: 'Design every touchpoint of the guest experience for maximum impact.'
        },
        {
          icon: <FiMap className="w-5 h-5" />,
          title: 'Touchpoint Design',
          description: 'Design specific interaction points that create memorable moments.'
        },
        {
          icon: <FiCoffee className="w-5 h-5" />,
          title: 'Brand Integration',
          description: 'Seamlessly integrate brand messaging and values throughout the event.'
        },
        {
          icon: <FiCalendar className="w-5 h-5" />,
          title: 'Post-Event Insights',
          description: 'Gather and analyze data to measure success and inform future events.'
        }
      ]
    }
  ]

  const eventTypes = [
    'Corporate Conferences & Meetings',
    'Product Launches & Reveals',
    'Brand Experiences & Pop-ups',
    'Gala Dinners & Award Ceremonies',
    'Networking Events & Mixers',
    'Cultural & Community Events',
    'VIP Experiences & Retreats',
    'Hybrid & Virtual Events'
  ]

  const outcomes = [
    'Cohesive, intentional brand experiences',
    'Elevated brand perception and memorability',
    'Seamless event execution with attention to detail',
    'Memorable guest journeys that drive engagement',
    'Stronger brand-audience connections',
    'Measurable ROI through data-driven insights'
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-white z-0" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-tertiary/10 to-accent/10 rounded-full translate-x-64 translate-y-64" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
              <FiCalendar className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm font-medium text-gray-700">Event Design Service</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Event Design</span>{' '}
              <span className="gradient-text">& Customer Experience</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              We design and execute experiences that connect brand, audience, and purpose. 
              From concept to execution, we manage the creative, operational, and experiential details that bring events to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-accent to-secondary text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                Design Your Event
              </Link>
              <Link
                href="/services"
                className="bg-white border-2 border-gray-200 text-primary px-8 py-4 rounded-lg font-bold hover:border-accent hover:shadow-md transition-all duration-300 text-center"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Creating Memorable Experiences</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-4">
                  In an age of digital saturation, live experiences have become the ultimate platform for meaningful brand connections. 
                  We design events that don&apos;t just happen—they create lasting impressions, foster community, and drive business objectives.
                </p>
                <p className="text-gray-600 mb-4">
                  Our approach combines strategic thinking with creative excellence and operational precision. 
                  We view every event as a storytelling opportunity, where every detail—from invitation design to post-event follow-up—contributes to a cohesive narrative.
                </p>
                <p className="text-gray-600">
                  Whether you&apos;re launching a product, building community, or celebrating milestones, we ensure your event delivers on both emotional impact and tangible results.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1492684223066-e9e1a9e1b9a1?auto=format&fit=crop&w=800&q=80"
                  alt="Event experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-secondary to-accent rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">End-to-End Event Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive event design and production services from initial concept through post-event analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-accent">
                      {category.category === 'Strategy & Concept' && <FiCalendar className="w-6 h-6" />}
                      {category.category === 'Design & Production' && <FiVideo className="w-6 h-6" />}
                      {category.category === 'Customer Experience' && <FiUsers className="w-6 h-6" />}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-accent pl-4">
                      <div className="flex items-start mb-2">
                        <div className="text-accent mr-3 mt-0.5">{item.icon}</div>
                        <h4 className="font-bold">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Events We Design & Produce</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to large-scale productions, we design experiences across all event formats.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {eventTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 hover:border-accent hover:shadow-md transition-all duration-300 text-center">
                  <p className="font-medium text-sm">{type}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Don&apos;t see your specific event type listed? We customize our approach for any unique event need.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-accent to-secondary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Discuss Your Event Vision
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Process */}
      <section className="py-16 lg:py-24 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Event Outcomes</h2>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <FiCheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent to-secondary rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Event Design Process</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">Phase 1: Discovery & Strategy (2-4 weeks)</h4>
                  <p className="text-white/80">Define objectives, target audience, and creative direction</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Phase 2: Design & Planning (4-8 weeks)</h4>
                  <p className="text-white/80">Develop creative concepts, design elements, and production plans</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Phase 3: Production & Execution (Variable)</h4>
                  <p className="text-white/80">Coordinate vendors, manage logistics, and execute the event</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Phase 4: Post-Event & Analysis (1-2 weeks)</h4>
                  <p className="text-white/80">Gather feedback, analyze results, and provide insights for future events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/Portfolio Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Experience Design Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <FiUsers className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Audience-Centric Design</h3>
              <p className="text-gray-600">
                Every decision is made through the lens of the attendee experience, ensuring maximum engagement and satisfaction.
              </p>
            </div>
            
            <div className="bg-light rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-tertiary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <FiMap className="w-6 h-6 text-tertiary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Journey Mapping</h3>
              <p className="text-gray-600">
                We design cohesive experiences where every touchpoint contributes to a unified brand story and attendee journey.
              </p>
            </div>
            
            <div className="bg-light rounded-2xl p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6">
                <FiCheckCircle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Operational Excellence</h3>
              <p className="text-gray-600">
                Behind every great experience is flawless execution. We manage all details so you can focus on your objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-dark to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Create Unforgettable Experiences?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s design an event that not only meets your objectives but exceeds expectations and creates lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Start Event Planning
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <span>View Service Comparison</span>
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}