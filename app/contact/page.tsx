import ContactForm from '@/components/ContactForm'
import { FiMail, FiPhone, FiMapPin, FiClock, FiCalendar, FiMessageSquare, FiChevronRight, FiArrowRight, FiCheck, FiStar, FiZap } from 'react-icons/fi'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: "Email",
      details: "tiara@pulsestrategygroup.com",
      href: "mailto:tiara@pulsestrategygroup.com",
      description: "For detailed inquiries and proposals",
      color: "from-secondary to-tertiary"
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Phone",
      details: "+1 (470) 123-4567",
      href: "tel:+14701234567",
      description: "Available Monday-Friday, 9am-5pm EST",
      color: "from-tertiary to-accent"
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: "Location",
      details: "Atlanta, GA",
      href: null,
      description: "Serving clients nationwide & globally",
      color: "from-accent to-secondary"
    },
    {
      icon: <FiClock className="w-5 h-5" />,
      title: "Response Time",
      details: "24-48 hours",
      href: null,
      description: "Initial response guaranteed",
      color: "from-secondary to-accent"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Inquiry",
      description: "Submit your inquiry through the form or email"
    },
    {
      step: "02",
      title: "Discovery Call",
      description: "30-minute conversation to understand your needs"
    },
    {
      step: "03",
      title: "Strategy Session",
      description: "Deep dive into goals, challenges, and opportunities"
    },
    {
      step: "04",
      title: "Custom Proposal",
      description: "Tailored strategy and investment overview"
    }
  ]

  const faqs = [
    {
      q: 'What happens after I submit my inquiry?',
      a: 'Tiara will personally review your submission and respond within 24-48 hours to schedule a discovery call. You\'ll also receive an automatic confirmation email with more information about our process.'
    },
    {
      q: 'Do you work with startups and small businesses?',
      a: 'Yes! We work with businesses at all stages, from startups to established brands. What matters most is your commitment to intentional growth and strategic partnership.'
    },
    {
      q: 'What is your typical project timeline?',
      a: 'Timelines vary based on project scope and complexity. Brand strategy engagements typically take 4-8 weeks, while larger event productions can span 3-6 months. We\'ll provide a detailed timeline during our discovery call.'
    },
    {
      q: 'Do you offer retainer agreements?',
      a: 'Yes, we offer both project-based and retainer engagements. Many clients prefer retainer agreements for ongoing strategic partnership and support.'
    },
    {
      q: 'What industries do you specialize in?',
      a: 'We have experience across multiple industries including technology, fashion, arts & culture, entertainment, hospitality, and professional services. Our approach is adaptable to any industry.'
    },
    {
      q: 'What is your typical investment range?',
      a: 'Projects start at $5,000 for strategy workshops and can range up to $50,000+ for comprehensive partnership programs. We provide transparent pricing during the proposal stage.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-primary/90 to-dark/95" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/30 to-transparent rounded-full -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/30 to-transparent rounded-full -translate-x-1/4 translate-y-1/4" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <FiMessageSquare className="w-4 h-4 text-accent mr-2" />
              <span className="text-white text-sm font-medium">Let's Connect</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Build Something <span className="gradient-text">Intentional</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Ready to clarify your strategy, strengthen your partnerships, or design experiences with purpose? Start the conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="group bg-gradient-to-r from-accent to-secondary text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <span>Send a Message</span>
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#process"
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <span>Our Process</span>
                <FiChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Multiple ways to connect, one consistent commitment to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="block text-gray-700 hover:text-primary transition-colors mb-1 font-medium"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-700 mb-1 font-medium">{info.details}</p>
                )}
                <p className="text-gray-500 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div id="process" className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Engagement Process</h2>
              <p className="text-lg text-gray-600">
                A clear, intentional approach to ensure we're the right fit for your needs.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center">
                      {/* Step number */}
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-tertiary rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white font-bold text-lg">{step.step}</div>
                      </div>
                      
                      {/* Step content */}
                      <div className="px-2">
                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/5 to-tertiary/5 rounded-full -translate-y-8 translate-x-8" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-secondary/5 rounded-full -translate-x-6 translate-y-6" />
                
                <div className="relative">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary to-tertiary rounded-lg flex items-center justify-center mr-4">
                      <FiMessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold">Send Us a Message</h2>
                      <p className="text-gray-600">
                        Fill out the form below and Tiara will personally respond within 24-48 hours.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info & What to Expect */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center group">
                      <div className="w-10 h-10 bg-gradient-to-r from-secondary/10 to-tertiary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FiMail className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Preferred Contact</p>
                        <a 
                          href="mailto:tiara@pulsestrategygroup.com" 
                          className="text-gray-600 hover:text-primary transition-colors font-medium"
                        >
                          tiara@pulsestrategygroup.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center group">
                      <div className="w-10 h-10 bg-gradient-to-r from-tertiary/10 to-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FiCalendar className="w-5 h-5 text-tertiary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Schedule Directly</p>
                        <a 
                          href="https://calendly.com/pulsestrategy" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary transition-colors font-medium"
                        >
                          Book a Discovery Call
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="mt-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-lg mb-6 flex items-center">
                    <FiStar className="w-5 h-5 text-accent mr-2" />
                    What to Expect
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Initial response within 48 hours",
                      "Discovery call to discuss your needs",
                      "Preliminary strategy discussion",
                      "Custom proposal tailored to your goals",
                      "Clear next steps and timeline"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-50 to-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-tertiary" />
                        </div>
                        <span className="text-gray-700 group-hover:text-primary transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal Client */}
                <div className="mt-8 bg-gradient-to-br from-primary to-dark text-white rounded-2xl p-8">
                  <h4 className="font-bold text-lg mb-4 flex items-center">
                    <FiZap className="w-5 h-5 text-accent mr-2" />
                    Perfect Fit If You...
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FiCheck className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Value strategic clarity and intentional growth</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Are ready to invest in long-term impact</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Want a true partnership, not just a vendor</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Believe in the power of great experiences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-light to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Common questions about working with Pulse Strategy Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-secondary/10 to-tertiary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-tertiary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-lg group-hover:text-primary transition-colors">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-dark via-primary to-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <FiMessageSquare className="w-5 h-5 text-accent mr-2" />
              <span className="font-medium">Let's Start Building</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Make an <span className="gradient-text">Impact</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you're ready to begin or just exploring possibilities, we're here to help you think through your next strategic move.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:tiara@pulsestrategygroup.com"
                className="group bg-gradient-to-r from-accent to-secondary text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center"
              >
                <span>Email Directly</span>
                <FiArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="https://calendly.com/pulsestrategy"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-lg flex items-center justify-center"
              >
                <span>Schedule a Call</span>
                <FiCalendar className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            
            <p className="text-gray-400 mt-10 text-sm">
              All inquiries receive a personal response from Tiara within 48 hours • No obligation consultation
            </p>
          </div>
        </div>
      </section>
    </>
  )
}