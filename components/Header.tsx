'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Calendar, Sparkles } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/90 backdrop-blur-sm py-3'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <Calendar className="relative w-9 h-9 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                Tiara Events
              </span>
              <span className="text-xs text-primary-600 font-medium tracking-wide uppercase">
                Premium Event Management
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-5 py-2.5 text-gray-700 hover:text-primary-600 transition-colors font-medium group/nav"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity" />
                {index < navItems.length - 1 && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-4 bg-gray-200" />
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-primary-200 hover:scale-105 transition-all duration-300 flex items-center gap-2 group/cta"
            >
              <Sparkles className="w-4 h-4 group-hover/cta:rotate-12 transition-transform" />
              Book Now
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover/cta:opacity-100 transition-opacity -z-10" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'rotate-45' : '-translate-y-2'
              }`} />
              <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                isMenuOpen ? '-rotate-45' : 'translate-y-2'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group/mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium text-gray-700 group-hover/mobile:text-primary-600 transition-colors">
                    {item.label}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/mobile:bg-primary-400 transition-colors" />
                  </div>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                href="/contact"
                className="block mt-4 p-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Book Consultation
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}