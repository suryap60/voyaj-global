'use client'

import { useState, useEffect } from 'react'

export default function LiveGlobalPulse() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [currentInsight, setCurrentInsight] = useState(0)

  const liveInsights = [
    {
      location: "Tokyo, Japan",
      status: "Peak Season",
      trend: "↗️ 23% increase in bookings",
      temperature: "18°C",
      events: "Cherry Blossom Festival"
    },
    {
      location: "Paris, France",
      status: "Optimal Time",
      trend: "↘️ 15% price drop",
      temperature: "22°C",
      events: "Fashion Week"
    },
    {
      location: "Bali, Indonesia",
      status: "Rising Demand",
      trend: "↗️ 31% surge in interest",
      temperature: "28°C",
      events: "Dry Season"
    },
    {
      location: "Dubai, UAE",
      status: "Best Value",
      trend: "↘️ 18% cost reduction",
      temperature: "26°C",
      events: "Shopping Festival"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % liveInsights.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [liveInsights.length])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true)
      setTimeout(() => {
        setIsSearching(false)
      }, 2000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></div>
                INTELLIGENCE STREAM
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Live Global
                <br />
                <span className="text-primary-800">Pulse</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Real-time travel advisories and destination intelligence, verified by multiple sources and curated by agentic AI.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
              <input
                type="text"
                placeholder="Search destination (e.g. 'Dubai status')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-6 py-4 pr-16 border-2 border-gray-200 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              />
              <button
                onClick={handleSearch}
                disabled={!searchQuery.trim()}
                className="absolute right-3 top-3 p-2 bg-primary-800 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Live Data Points */}
            <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">LIVE DATA</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">2.5M+</div>
                <div className="text-sm text-gray-600">Data Points/Hour</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">DESTINATIONS</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">450+</div>
                <div className="text-sm text-gray-600">Cities Monitored</div>
              </div>
            </div>
          </div>

          {/* Right Column - Live Pulse Interface */}
          <div className="flex justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="relative w-full max-w-md">
              {/* Dashed border container */}
              <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 bg-gray-50/50 backdrop-blur-sm">
                
                {/* Status Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {isSearching ? (
                  /* Searching State */
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Analyzing Signal</h3>
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Scanning thousands of data points to provide a comprehensive travel report.
                    </p>
                  </div>
                ) : (
                  /* Default State */
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Awaiting Signal</h3>
                    <p className="text-gray-600 text-sm mb-6">
                      Enter a destination to activate the Global Pulse. Our AI will scan thousands of data points to provide a comprehensive travel report.
                    </p>

                    {/* Live Insight Preview */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 transition-all duration-500">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">{liveInsights[currentInsight].location}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          liveInsights[currentInsight].status === 'Peak Season' ? 'bg-red-100 text-red-700' :
                          liveInsights[currentInsight].status === 'Optimal Time' ? 'bg-green-100 text-green-700' :
                          liveInsights[currentInsight].status === 'Rising Demand' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {liveInsights[currentInsight].status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>{liveInsights[currentInsight].trend}</div>
                        <div className="flex justify-between">
                          <span>{liveInsights[currentInsight].temperature}</span>
                          <span>{liveInsights[currentInsight].events}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pulse Animation */}
              <div className="absolute -inset-4 rounded-3xl border border-primary-200 animate-ping opacity-20"></div>
              <div className="absolute -inset-2 rounded-3xl border border-primary-300 animate-ping opacity-30" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-800 mb-2">Real-time</div>
            <div className="text-sm text-gray-600">Data Updates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-800 mb-2">Multi-source</div>
            <div className="text-sm text-gray-600">Verification</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-800 mb-2">AI Curated</div>
            <div className="text-sm text-gray-600">Intelligence</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-800 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  )
}