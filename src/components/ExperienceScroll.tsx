'use client'

import { useRef } from 'react'
import Image from 'next/image'

export default function ExperienceScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      id: 1,
      title: "Private Jet to Maldives",
      category: "Luxury Transport",
      duration: "8 hours",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&crop=center",
      price: "$15,000",
      description: "Skip commercial flights with our private jet service"
    },
    {
      id: 2,
      title: "Michelin Star Food Tour",
      category: "Culinary Experience",
      duration: "3 days",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center",
      price: "$2,800",
      description: "Exclusive access to world-renowned restaurants"
    },
    {
      id: 3,
      title: "Safari & Conservation",
      category: "Wildlife Adventure",
      duration: "7 days",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop&crop=center",
      price: "$4,500",
      description: "Luxury safari with conservation impact"
    },
    {
      id: 4,
      title: "Yacht Charter Mediterranean",
      category: "Marine Luxury",
      duration: "10 days",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
      price: "$25,000",
      description: "Private yacht with crew through Greek islands"
    },
    {
      id: 5,
      title: "Helicopter Wine Tour",
      category: "Aerial Experience",
      duration: "1 day",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
      price: "$1,200",
      description: "Napa Valley from above with tastings"
    },
    {
      id: 6,
      title: "Arctic Aurora Expedition",
      category: "Natural Wonder",
      duration: "5 days",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=300&fit=crop&crop=center",
      price: "$6,800",
      description: "Northern lights in luxury glass igloos"
    },
    {
      id: 7,
      title: "Private Museum Tours",
      category: "Cultural Immersion",
      duration: "2 days",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
      price: "$1,800",
      description: "After-hours access to world's greatest museums"
    },
    {
      id: 8,
      title: "Wellness Retreat Bali",
      category: "Health & Wellness",
      duration: "14 days",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
      price: "$3,200",
      description: "Holistic healing in tropical paradise"
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exclusive Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Unlock access to extraordinary experiences that money can't usually buy. Our network opens doors to the impossible.
            </p>
          </div>
          
          {/* Scroll Controls */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm">
                      {experience.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-800 text-white text-sm rounded-full font-medium">
                      {experience.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-800 transition-colors">
                      {experience.title}
                    </h3>
                    <span className="text-2xl font-bold text-primary-800">
                      {experience.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {experience.duration}
                    </div>
                    
                    <button className="text-primary-800 hover:text-primary-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="md:hidden mt-6 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Swipe to explore more experiences
          </p>
        </div>

        {/* AI Recommendation Box */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
              ✨
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Personalized Experience Matching
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Based on your travel profile, we recommend the <strong>Arctic Aurora Expedition</strong> and 
                <strong> Private Museum Tours</strong>. These align with your preference for unique, 
                culturally enriching experiences with a touch of adventure.
              </p>
              <button className="btn-primary">
                Get My Personalized Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}