'use client'

import { useState } from 'react'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock, Sparkles, Calendar, Star, Award, Heart } from 'lucide-react'

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleFormSuccess = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const faqItems = [
    {
      question: 'When should I start planning my 2026 event?',
      answer: 'For weddings, we recommend booking 12-18 months in advance. For corporate events, 6-12 months is ideal. Contact us now to secure your preferred 2026 dates.'
    },
    {
      question: 'What is included in your event planning services?',
      answer: 'Our comprehensive services include creative design, vendor coordination, timeline management, budget planning, and on-site execution to ensure a seamless experience.'
    },
    {
      question: 'Do you handle events outside of New York?',
      answer: 'Absolutely! We coordinate events nationwide and internationally. While based in New York, we travel to create exceptional celebrations wherever they may be.'
    },
    {
      question: 'What makes Tiara Events different?',
      answer: 'We combine artistic vision with meticulous execution. Our team focuses on creating personalized, memorable experiences that reflect your unique story and style.'
    }
  ]

  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'hello@tiaaraevents.com',
      description: 'For detailed inquiries and proposals',
      link: 'mailto:hello@tiaaraevents.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '(555) 123-4567',
      description: 'Available during office hours',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: '123 Event Street, Suite 100',
      description: 'New York, NY 10001',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Office Hours',
      details: 'Monday - Friday: 9AM - 6PM',
      description: 'Saturday: 10AM - 4PM',
      link: null
    }
  ]

  return (
    <div className="pt-24"> {/* Added pt-24 for header spacing */}
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-primary-300/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-primary-300/20 rotate-45" />
        </div>

        <div className="relative section-padding">
          <div className="container-custom text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">2026 Planning Now Open</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Create <span className="text-primary-300">Magic</span> Together
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Share your vision with us, and let's design an extraordinary celebration that will be remembered for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {showSuccess && (
        <div className="container-custom mt-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Thank You!</h3>
                <p className="text-green-700">
                  Your inquiry has been submitted successfully. We'll get back to you within 24 hours to discuss your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information Sidebar */}
            <div className="space-y-8">
              {/* Contact Details Cards */}
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div 
                    key={index}
                    className={`group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      detail.link ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => detail.link && window.open(detail.link, '_blank')}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl group-hover:scale-110 transition-transform">
                        <div className="text-primary-600">
                          {detail.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{detail.title}</h3>
                        <p className="text-gray-900 font-medium mb-1">{detail.details}</p>
                        <p className="text-gray-600 text-sm">{detail.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary-600" />
                  Why Choose Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                    <div>
                      <div className="font-medium text-gray-900">Personalized Approach</div>
                      <div className="text-gray-600 text-sm">Every event is uniquely tailored to your vision</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                    <div>
                      <div className="font-medium text-gray-900">Expert Coordination</div>
                      <div className="text-gray-600 text-sm">Seamless execution from concept to completion</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                    <div>
                      <div className="font-medium text-gray-900">Premium Partnerships</div>
                      <div className="text-gray-600 text-sm">Access to exclusive venues and vendors</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Commitment</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Timely Response</div>
                      <div className="text-gray-600 text-sm">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Dedicated Support</div>
                      <div className="text-gray-600 text-sm">Personal coordinator assigned</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-purple-600 fill-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Proven Excellence</div>
                      <div className="text-gray-600 text-sm">250+ successful events</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Form Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">Start Your Journey</h2>
                  <p className="text-primary-100">
                    Share details about your vision, and we'll create a personalized plan to bring it to life.
                  </p>
                </div>

                {/* Form Content */}
                <div className="p-8">
                  <ContactForm onSuccess={handleFormSuccess} />
                </div>

                {/* Form Footer */}
                <div className="border-t border-gray-100 p-8 bg-gray-50">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">What Happens Next?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-primary-600 font-bold">1</span>
                        </div>
                        <div className="font-medium text-gray-900">Initial Consultation</div>
                        <div className="text-gray-600 text-sm">We'll schedule a call to discuss your vision</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-primary-600 font-bold">2</span>
                        </div>
                        <div className="font-medium text-gray-900">Personalized Proposal</div>
                        <div className="text-gray-600 text-sm">We'll create a custom plan for your event</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-primary-600 font-bold">3</span>
                        </div>
                        <div className="font-medium text-gray-900">Begin Planning</div>
                        <div className="text-gray-600 text-sm">We'll bring your vision to life together</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-5 py-2.5 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Common Questions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-primary-600">Questions</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Everything you need to know about working with Tiara Events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-primary-600 font-bold">{index + 1}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary-50 to-purple-50 px-8 py-6 rounded-2xl border border-primary-200">
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-gray-600">
                  We're here to help! Contact us directly for personalized assistance.
                </p>
              </div>
              <a 
                href="tel:+15551234567" 
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your <span className="text-primary-400">2026 Celebration</span>?
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Take the first step toward creating the event of your dreams. Our team is ready to transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="group px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-6 h-6" />
                <span>Submit Your Inquiry</span>
              </a>
              <a 
                href="tel:+15551234567" 
                className="group px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}