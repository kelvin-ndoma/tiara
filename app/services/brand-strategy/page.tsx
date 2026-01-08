import Link from 'next/link'
import Image from 'next/image'
import { FiTarget, FiMessageSquare, FiUsers, FiTrendingUp, FiCheckCircle, FiArrowRight } from 'react-icons/fi'

export default function BrandStrategyPage() {
  const services = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: 'Brand Positioning & Messaging',
      description: 'Define your unique market position and craft compelling messaging that resonates with your audience.'
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Audience & Customer Insight Development',
      description: 'Deep dive into your target audience to understand their needs, behaviors, and motivations.'
    },
    {
      icon: <FiMessageSquare className="w-6 h-6" />,
      title: 'Value Proposition Refinement',
      description: 'Articulate your unique value in a way that differentiates you from competitors.'
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: 'Go-to-Market Strategy',
      description: 'Develop comprehensive plans to successfully launch products or enter new markets.'
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: 'Campaign & Launch Strategy',
      description: 'Create integrated campaign strategies that drive awareness and conversion.'
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: 'Strategic Planning & Consulting',
      description: 'Ongoing strategic guidance to help navigate business challenges and opportunities.'
    }
  ]

  const outcomes = [
    'Clear brand direction and positioning',
    'Stronger storytelling and messaging',
    'Consistent brand voice across all touchpoints',
    'Strategic foundation for sustainable growth',
    'Improved customer understanding and targeting',
    'Competitive differentiation in the market'
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Brand Audit',
      description: 'Comprehensive analysis of current brand positioning, messaging, and market presence.'
    },
    {
      number: '02',
      title: 'Market Research',
      description: 'In-depth research on competitors, audience, and industry trends.'
    },
    {
      number: '03',
      title: 'Strategy Development',
      description: 'Crafting tailored brand strategy based on insights and business objectives.'
    },
    {
      number: '04',
      title: 'Implementation Roadmap',
      description: 'Detailed action plan for executing the brand strategy across the organization.'
    }
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white z-0" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/20 to-tertiary/20 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-secondary/10 rounded-full -translate-x-64 translate-y-64" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
              <FiTarget className="w-4 h-4 text-secondary mr-2" />
              <span className="text-sm font-medium text-gray-700">Brand Strategy Service</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Brand</span>{' '}
              <span className="gradient-text">Strategy</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              We help brands define who they are, what they stand for, and how they show up in the world. 
              Our brand strategy work creates clarity, alignment, and direction that informs marketing, partnerships, and experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-secondary to-tertiary text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                Start Your Strategy
              </Link>
              <Link
                href="/services"
                className="bg-white border-2 border-gray-200 text-primary px-8 py-4 rounded-lg font-bold hover:border-secondary hover:shadow-md transition-all duration-300 text-center"
              >
                Explore All Services
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
              <h2 className="text-3xl font-bold mb-6">Strategic Foundation for Growth</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-4">
                  In today&apos;s crowded marketplace, a strong brand strategy isn&apos;t just nice to have—it&apos;s essential for survival and growth. Your brand strategy is the foundation upon which all marketing, partnerships, and experiences are built.
                </p>
                <p className="text-gray-600 mb-4">
                  We work with you to uncover your brand&apos;s true north: what you stand for, who you serve, and how you create value. This clarity becomes the guiding light for every business decision, ensuring consistency and impact across all touchpoints.
                </p>
                <p className="text-gray-600">
                  Our approach combines rigorous analysis with creative insight, resulting in strategies that are both deeply strategic and highly actionable.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Brand strategy session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-accent to-secondary rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 lg:py-24 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What&apos;s Included</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive brand strategy services tailored to your specific needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/10 to-tertiary/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-secondary">
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

      {/* Outcomes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expected Outcomes</h2>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <FiCheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary to-tertiary rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Who This Is For</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></div>
                  <span>Founders launching new brands or repositioning existing ones</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></div>
                  <span>Growing businesses experiencing brand inconsistency</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></div>
                  <span>Companies entering new markets or facing increased competition</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></div>
                  <span>Organizations undergoing merger, acquisition, or major transformation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-light">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Our Brand Strategy Process</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our 4-phase process ensures thorough discovery, strategic alignment, and actionable outcomes that drive real business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-dark to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Define Your Brand&apos;s Future?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s work together to build a brand strategy that provides clarity, direction, and a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Start Your Strategy
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <span>Explore All Services</span>
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}