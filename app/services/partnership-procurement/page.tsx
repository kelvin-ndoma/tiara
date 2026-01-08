import Link from 'next/link'
import Image from 'next/image'
import { FiUsers, FiTarget, FiDollarSign, FiSearch, FiCheckCircle, FiArrowRight, FiBookOpen, FiMessageSquare } from 'react-icons/fi'

export default function PartnershipProcurementPage() {
  const services = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: 'Partnership Strategy & Positioning',
      description: 'Develop comprehensive partnership strategies aligned with your business objectives and brand values.'
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: 'Sponsorship Package Development',
      description: 'Create compelling sponsorship offerings that deliver value to both your brand and partners.'
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Brand Prospect Identification',
      description: 'Identify and research potential partners that align with your brand and strategic goals.'
    },
    {
      icon: <FiSearch className="w-6 h-6" />,
      title: 'Outreach Strategy & Pitch Consulting',
      description: 'Develop effective outreach strategies and compelling pitch materials to secure partnerships.'
    },
    {
      icon: <FiMessageSquare className="w-6 h-6" />,
      title: 'Negotiation Guidance',
      description: 'Expert guidance through partnership negotiations to secure favorable terms and conditions.'
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Ongoing Partnership Consulting',
      description: 'Continuous support to nurture and grow successful long-term partnerships.'
    }
  ]

  const outcomes = [
    'Clear partnership offerings and value propositions',
    'Stronger pitches and positioning in the market',
    'Aligned brand collaborations that drive mutual value',
    'New revenue opportunities through strategic partnerships',
    'Long-term partnership strategy for sustainable growth',
    'Reduced time and resources spent on partnership development'
  ]

  const partnershipTypes = [
    {
      title: 'Brand Sponsorships',
      description: 'Strategic brand alignment and exposure opportunities'
    },
    {
      title: 'Co-Marketing Partnerships',
      description: 'Collaborative marketing initiatives that expand reach'
    },
    {
      title: 'Strategic Alliances',
      description: 'Long-term collaborations for shared business objectives'
    },
    {
      title: 'Event Partnerships',
      description: 'Sponsorship and collaboration opportunities for events'
    },
    {
      title: 'Content Collaborations',
      description: 'Joint content creation and distribution partnerships'
    },
    {
      title: 'Affiliate Programs',
      description: 'Performance-based partnership structures'
    }
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-white z-0" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-tertiary/20 to-secondary/20 rounded-full -translate-y-32 translate-x-32" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
              <FiUsers className="w-4 h-4 text-tertiary mr-2" />
              <span className="text-sm font-medium text-gray-700">Partnership Procurement Service</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Partnership</span>{' '}
              <span className="gradient-text">Procurement</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              We help brands identify, structure, and secure aligned partnerships that create mutual value. 
              From strategy to execution, we support clients in building partnership ecosystems that are intentional, profitable, and sustainable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-tertiary to-secondary text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                Explore Partnerships
              </Link>
              <Link
                href="/services"
                className="bg-white border-2 border-gray-200 text-primary px-8 py-4 rounded-lg font-bold hover:border-tertiary hover:shadow-md transition-all duration-300 text-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551836026-d5c2e7b4d4b4?auto=format&fit=crop&w=800&q=80"
                  alt="Partnership meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-tr from-accent to-tertiary rounded-2xl -z-10"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Building Strategic Alliances</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-4">
                  In today&apos;s interconnected business landscape, strategic partnerships are no longer optional—they&apos;re essential for growth, innovation, and market expansion. The right partnerships can amplify your reach, enhance your offerings, and create new revenue streams.
                </p>
                <p className="text-gray-600 mb-4">
                  We specialize in moving beyond transactional relationships to build meaningful, strategic alliances. Our approach focuses on identifying partners who share your values, complement your strengths, and contribute to mutual growth.
                </p>
                <p className="text-gray-600">
                  From initial strategy through negotiation and ongoing management, we ensure every partnership delivers maximum value while aligning with your brand&apos;s long-term vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 lg:py-24 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Partnership Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive partnership development and management services to build your brand&apos;s ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-tertiary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-tertiary">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Partnerships We Develop</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help brands build diverse partnership portfolios tailored to specific business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:border-tertiary hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Who It's For */}
      <section className="py-16 lg:py-24 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Expected Outcomes</h3>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-tertiary to-secondary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <FiCheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-tertiary to-secondary rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Who Benefits Most</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></div>
                  <span>Brands looking to expand market reach through strategic alliances</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></div>
                  <span>Event organizers seeking sponsorship and partnership opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></div>
                  <span>Startups needing established partners to accelerate growth</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></div>
                  <span>Established companies entering new markets or product categories</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/80 mb-4">Typical engagement duration: 3-6 months</p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-tertiary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Discuss Partnership Needs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Our Partnership Development Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden lg:block absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-tertiary via-secondary to-accent"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {[
                  { number: '01', title: 'Discovery', desc: 'Understand business goals and partnership objectives', icon: <FiBookOpen /> },
                  { number: '02', title: 'Strategy', desc: 'Develop partnership framework and target criteria', icon: <FiTarget /> },
                  { number: '03', title: 'Identification', desc: 'Research and identify ideal partner prospects', icon: <FiSearch /> },
                  { number: '04', title: 'Outreach', desc: 'Develop and execute targeted outreach strategy', icon: <FiMessageSquare /> },
                  { number: '05', title: 'Management', desc: 'Negotiate terms and establish partnership structure', icon: <FiUsers /> },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-tertiary hover:shadow-lg transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-tertiary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-dark to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Build Your Partnership Ecosystem?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s identify and secure the strategic partnerships that will drive your brand&apos;s growth and expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Start Partnership Discussion
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <span>Compare All Services</span>
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}