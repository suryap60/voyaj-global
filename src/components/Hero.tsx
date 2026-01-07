'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [chatMessage, setChatMessage] = useState('')
  const [typedText, setTypedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  
  const fullText = "The intelligent travel marketplace that understands you better than you understand your own travel desires."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTypingComplete(true)
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-luxury-gold/10 rounded-full animate-pulse blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full animate-pulse blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/10 rounded-full animate-pulse blur-3xl" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen py-20">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            
            {/* AI Badge with animation */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3 animate-pulse"></div>
                <span className="text-white text-sm font-medium">✨ Agentic AI Powered</span>
              </div>
            </div>
            
            {/* Animated Headline */}
            <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-5xl lg:text-6xl font-light text-white leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">Redefining</span>
                <br />
                <span className="inline-block hover:scale-105 transition-transform duration-300">Travel</span>
                <br />
                <span className="text-luxury-gold font-normal inline-block hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-luxury-gold to-yellow-400 bg-clip-text text-transparent">
                  Discovery
                </span>
              </h1>
            </div>
            
            {/* Animated Subtitle */}
            <div className="max-w-lg animate-slide-up" style={{animationDelay: '0.4s'}}>
              <p className="text-lg text-white/80 leading-relaxed">
                {typedText}
                {!isTypingComplete && <span className="animate-pulse text-luxury-gold">|</span>}
              </p>
            </div>

            {/* Animated CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <button className="bg-luxury-gold hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                Start Planning
              </button>
              <button className="border border-white/40 text-white hover:bg-white hover:text-primary-800 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                Watch Demo
              </button>
            </div>

            {/* Animated Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 text-white/60 text-sm pt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center hover:text-white/80 transition-colors duration-300">
                <svg className="w-4 h-4 text-luxury-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                50,000+ Travelers
              </div>
              <div className="flex items-center hover:text-white/80 transition-colors duration-300">
                <svg className="w-4 h-4 text-luxury-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9/5 Rating
              </div>
              <div className="flex items-center hover:text-white/80 transition-colors duration-300">
                <svg className="w-4 h-4 text-luxury-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Trusted
              </div>
            </div>
          </div>

          {/* Right Column - Animated AI Chat */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="w-full max-w-sm">
              {/* Chat Container with hover animation */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
                {/* Animated Header */}
                <div className="flex items-center mb-6">
                  <div className="relative mr-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Voyaj Agent</div>
                    <div className="text-sm text-gray-500">Online</div>
                  </div>
                  <div className="w-8 h-8 luxury-gradient rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                    AI
                  </div>
                </div>
                
                {/* Animated Messages */}
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200 animate-slide-up" style={{animationDelay: '0.5s'}}>
                    <p className="text-sm text-gray-800">Hotel booked: Kyoto Ryokan with garden view</p>
                  </div>
                  
                  <div className="bg-primary-50 rounded-lg p-3 hover:bg-primary-100 transition-colors duration-200 animate-slide-up" style={{animationDelay: '0.7s'}}>
                    <p className="text-sm text-primary-800">✨ "Perfect match for your taste - Osaka Food Tour"</p>
                  </div>

                  <div className="bg-luxury-gold/10 rounded-lg p-3 flex items-center justify-between hover:bg-luxury-gold/20 transition-colors duration-200 animate-slide-up" style={{animationDelay: '0.9s'}}>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Maldives Package</p>
                      <p className="text-xs text-gray-600">From $1,200/night</p>
                    </div>
                    <button className="bg-luxury-gold text-black px-3 py-1 rounded text-xs font-medium hover:bg-yellow-500 transition-all duration-200 hover:scale-105">
                      View
                    </button>
                  </div>
                </div>
                
                {/* Animated Input */}
                <div className="relative animate-slide-up" style={{animationDelay: '1.1s'}}>
                  <input
                    type="text"
                    placeholder="Where would you like to go?"
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                  />
                  <button className="absolute right-2 top-2 p-2 luxury-gradient text-white rounded-md hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/50 hover:text-white/70 transition-colors duration-300">
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}