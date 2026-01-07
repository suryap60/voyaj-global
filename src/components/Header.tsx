'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="content-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              <svg className="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gradient' : 'text-white'
            }`}>
              Voyaj
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-primary-800' 
                : 'text-white/90 hover:text-white'
            }`}>
              Features
            </a>
            <a href="#how-it-works" className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-primary-800' 
                : 'text-white/90 hover:text-white'
            }`}>
              How It Works
            </a>
            <a href="#pricing" className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-primary-800' 
                : 'text-white/90 hover:text-white'
            }`}>
              Pricing
            </a>
            <a href="#about" className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-primary-800' 
                : 'text-white/90 hover:text-white'
            }`}>
              About
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-primary-800 hover:text-primary-700' 
                : 'text-white/90 hover:text-white'
            }`}>
              Sign In
            </button>
            <button className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              isScrolled 
                ? 'bg-primary-800 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl' 
                : 'bg-white text-primary-800 hover:bg-gray-100 shadow-lg hover:shadow-xl'
            }`}>
              Start Planning
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-800' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-300 ${
              isScrolled 
                ? 'bg-white border-gray-100' 
                : 'bg-white/95 backdrop-blur-sm border-white/20'
            }`}>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-primary-800">
                Features
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-primary-800">
                How It Works
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-primary-800">
                Pricing
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-800">
                About
              </a>
              <div className="px-3 py-2 space-y-2">
                <button className="w-full text-left text-primary-800 font-medium">
                  Sign In
                </button>
                <button className="w-full bg-primary-800 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                  Start Planning
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}