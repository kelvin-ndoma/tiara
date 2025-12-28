'use client'

import { useState } from 'react'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleFormSuccess = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create Magic Together
          </h1>
          <p className="text-xl text-primary-100">
            Share your vision with us, and we'll bring it to life
          </p>
        </div>
      </section>

      {showSuccess && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mx-4 mt-8">
          <div className="container-custom">
            <p className="text-green-700 font-medium">
              ✅ Thank you! Your inquiry has been submitted. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below with details about your event, and we'll contact you 
                  to discuss how we can make it unforgettable.
                </p>
              </div>
              <ContactForm onSuccess={handleFormSuccess} />
            </div>
            
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:hello@tiaaraevents.com" className="text-primary-600 hover:text-primary-700">
                        hello@tiaaraevents.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:+15551234567" className="text-primary-600 hover:text-primary-700">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-gray-600">
                        123 Event Street, Suite 100<br />
                        New York, NY 10001
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <div className="font-medium">Office Hours</div>
                      <div className="text-gray-600">
                        Mon-Fri: 9AM - 6PM<br />
                        Sat: 10AM - 4PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">How soon should I book?</h4>
                    <p className="text-sm text-gray-600">We recommend booking 6-12 months in advance for weddings, 3-6 months for other events.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">What's included in your services?</h4>
                    <p className="text-sm text-gray-600">Full planning, design, vendor coordination, day-of coordination, and post-event follow-up.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Do you offer virtual event planning?</h4>
                    <p className="text-sm text-gray-600">Yes! We specialize in both in-person and virtual/hybrid events.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us Here</h2>
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <div className="h-96 rounded-lg overflow-hidden">
              {/* For a real implementation, use Google Maps or Mapbox */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive map would appear here</p>
                  <p className="text-sm text-gray-500 mt-2">123 Event Street, New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}