import Link from 'next/link'
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-secondary to-tertiary flex items-center justify-center rounded-lg">
                  <span className="text-white font-bold text-xl">PSG</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Pulse Strategy Group</h2>
                  <div className="flex items-center space-x-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <p className="text-gray-300 text-sm ml-1">Strategy • Partnerships • Experiences</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Helping brands translate vision into influence and impact through strategic brand positioning, 
                partnership procurement, and end-to-end event design.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors p-2 hover:bg-white/10 rounded-lg">
                  <FiFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors p-2 hover:bg-white/10 rounded-lg">
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors p-2 hover:bg-white/10 rounded-lg">
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors p-2 hover:bg-white/10 rounded-lg">
                  <FiInstagram className="w-5 h-5" />
                </a>
                <a href="mailto:tiara@pulsestrategygroup.com" className="text-gray-300 hover:text-secondary transition-colors p-2 hover:bg-white/10 rounded-lg">
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-secondary to-tertiary rounded-full mr-2"></div>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-200">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-tertiary to-accent rounded-full mr-2"></div>
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiMail className="w-4 h-4 text-gray-400 mr-3 mt-0.5" />
                  <a href="mailto:tiara@pulsestrategygroup.com" className="text-gray-300 hover:text-white transition-colors">
                    tiara@pulsestrategygroup.com
                  </a>
                </li>
                <li className="flex items-start">
                  <FiPhone className="w-4 h-4 text-gray-400 mr-3 mt-0.5" />
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start">
                  <FiMapPin className="w-4 h-4 text-gray-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Atlanta, GA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Pulse Strategy Group. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer