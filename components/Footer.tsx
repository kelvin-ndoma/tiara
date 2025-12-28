import Link from 'next/link'
import { Calendar, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Tiara Events</span>
                <div className="text-primary-400 text-sm font-medium">Since 2012</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating extraordinary events with passion, creativity, and meticulous attention to detail.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Event Focus */}
          <div>
            <h3 className="text-lg font-semibold mb-6">2026 Planning</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Wedding Consultations</li>
              <li className="hover:text-white transition-colors cursor-pointer">Corporate Event Planning</li>
              <li className="hover:text-white transition-colors cursor-pointer">Milestone Celebrations</li>
              <li className="hover:text-white transition-colors cursor-pointer">Venue Selection Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Event Street<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:hello@tiaaraevents.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@tiaaraevents.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="text-primary-400 text-sm font-semibold">
                Now Accepting 2026 Bookings
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; {currentYear} Tiara Events Management. All rights reserved.</p>
              <p className="text-sm mt-1">Crafting timeless celebrations since 2012</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
              <div className="text-primary-400 font-medium">2026 Planning</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}