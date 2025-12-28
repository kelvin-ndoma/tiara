import { Mail, Phone, MapPin, Clock, Sparkles, Users, Award, Heart } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Tiara Johnson',
      role: 'Founder & Lead Planner',
      bio: 'With over 10 years of experience in event management, Tiara brings creativity and precision to every event.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?w=400&h=400&fit=crop&crop=face',
      specialty: 'Creative Vision & Strategy'
    },
    {
      name: 'Alex Morgan',
      role: 'Venue Coordinator',
      bio: 'Specializes in venue selection and logistics, ensuring every location is perfectly suited for your event.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      specialty: 'Logistics & Operations'
    },
    {
      name: 'Maria Garcia',
      role: 'Design Director',
      bio: 'Creates stunning visual concepts that transform spaces into memorable experiences.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      specialty: 'Design & Styling'
    },
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion-Driven',
      description: 'We pour our hearts into every event, treating each celebration as if it were our own.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We settle for nothing less than perfection in every detail, from concept to execution.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Partnership',
      description: 'We work collaboratively with you, ensuring your vision guides every decision.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We constantly explore new ideas and trends to create fresh, memorable experiences.'
    },
  ]

  return (
    <div className="pt-24"> {/* Added pt-24 to push content down */}
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-primary-100 px-5 py-2.5 rounded-full mb-6 shadow-lg">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full blur" />
                  <Sparkles className="relative w-4 h-4 text-white" />
                </div>
                <span className="text-primary-700 font-semibold tracking-wide">
                  Our Story Since 2012
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Creating <span className="text-primary-600">Unforgettable</span><br />
                Moments Together
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Tiara Events Management, we believe that every event tells a unique story. 
                Our mission is to bring your vision to life with meticulous planning, 
                creative design, and flawless execution that exceeds expectations.
              </p>
              <Link href="/contact" className="btn-primary group">
                <span>Start Your Journey With Us</span>
                <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"
                alt="Tiara Events team collaborating on event design"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary-600">Journey</span>
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                From a passionate vision to New York's premier event management service
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1519677100203-4f3c1f0d2d7e?w=600&q=80&fit=crop"
                    alt="Elegant event setup showcasing our work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Where It All Began</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2012 by Tiara Johnson, what started as a passion for creating 
                    beautiful celebrations has grown into a full-service event management company 
                    serving discerning clients across the country.
                  </p>
                  <p>
                    We've had the privilege of planning everything from intimate garden weddings 
                    to large-scale corporate conferences, each with the same dedication to 
                    excellence and attention to detail that defines our brand.
                  </p>
                  <p>
                    Our philosophy is simple: every event should be as unique as the people 
                    celebrating it. We work closely with our clients to understand their vision, 
                    then bring it to life with creativity, professionalism, and care that 
                    transforms dreams into reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-600">Core Values</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              The principles that guide every decision we make and every event we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-5 py-2.5 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Meet Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-primary-600">Minds</span> Behind the Magic
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              A dedicated team of creative professionals committed to making your vision a reality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-primary-600 font-semibold mb-3">{member.role}</div>
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full inline-block mb-4">
                    {member.specialty}
                  </div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section within About Page */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's <span className="text-primary-600">Connect</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Ready to begin planning your celebration? We're here to bring your vision to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="p-3 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:hello@tiaaraevents.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                        hello@tiaaraevents.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="p-3 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+15551234567" className="text-gray-600 hover:text-primary-600 transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="p-3 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">123 Event Street, Suite 100<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="p-3 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Personalized event consultation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Comprehensive planning services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Extensive vendor network</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>On-site event coordination</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Journey</h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss your vision.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create <span className="text-primary-400">Magic</span> Together?
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
              Let's transform your vision into an unforgettable celebration that reflects your unique story.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              <span>Begin Your Planning Journey</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}