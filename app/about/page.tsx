import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Tiara Johnson',
      role: 'Founder & Lead Planner',
      bio: 'With over 10 years of experience in event management, Tiara brings creativity and precision to every event.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?w=400&h=400&fit=crop',
    },
    {
      name: 'Alex Morgan',
      role: 'Venue Coordinator',
      bio: 'Specializes in venue selection and logistics, ensuring every location is perfectly suited for your event.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Maria Garcia',
      role: 'Design Director',
      bio: 'Creates stunning visual concepts that transform spaces into memorable experiences.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w-400&h=400&fit=crop',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Creating Unforgettable Moments Since 2012
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                At Tiara Events Management, we believe that every event tells a story. 
                Our mission is to bring your vision to life with meticulous planning, 
                creative design, and flawless execution.
              </p>
              <Link href="/contact" className="btn-primary">
                Start Your Journey With Us
              </Link>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"
                alt="Tiara Events Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                Founded in 2012 by Tiara Johnson, what started as a passion for creating 
                beautiful celebrations has grown into a full-service event management company 
                serving clients across the country.
              </p>
              <p className="text-gray-600 mb-6">
                We've had the privilege of planning everything from intimate garden weddings 
                to large-scale corporate conferences, each with the same dedication to 
                excellence and attention to detail.
              </p>
              <p className="text-gray-600">
                Our philosophy is simple: every event should be as unique as the people 
                celebrating it. We work closely with our clients to understand their vision, 
                then bring it to life with creativity, professionalism, and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section within About Page */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">hello@tiaaraevents.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">123 Event Street, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}