'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const destinations = [
    {
      id: 1,
      title: "Maldives Overwater Villa",
      location: "Maldives",
      price: "From $1,200/night",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      description: "Luxury overwater bungalows with crystal clear waters"
    },
    {
      id: 2,
      title: "Kyoto Traditional Ryokan",
      location: "Japan",
      price: "From $450/night",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop&crop=center",
      description: "Authentic Japanese experience with garden views"
    },
    {
      id: 3,
      title: "Santorini Cliff Resort",
      location: "Greece",
      price: "From $800/night",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop&crop=center",
      description: "Breathtaking sunset views over the Aegean Sea"
    },
    {
      id: 4,
      title: "Swiss Alpine Chalet",
      location: "Switzerland",
      price: "From $650/night",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Mountain retreat with panoramic Alpine views"
    },
    {
      id: 5,
      title: "Bali Jungle Villa",
      location: "Indonesia",
      price: "From $380/night",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop&crop=center",
      description: "Tropical paradise surrounded by lush rainforest"
    },
    {
      id: 6,
      title: "Dubai Desert Resort",
      location: "UAE",
      price: "From $950/night",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&crop=center",
      description: "Luxury desert experience with modern amenities"
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(timer)
  }, [destinations.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? destinations.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === destinations.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section className="py-20 bg-gray-50 full-width">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Curated Luxury Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover handpicked accommodations that redefine luxury travel. Each destination is carefully selected by our local experts for authenticity and excellence.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {destinations.map((destination, index) => (
                <div key={destination.id} className="w-full flex-shrink-0 relative">
                  <div className="relative h-96 md:h-[500px]">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="max-w-2xl">
                        <div className="flex items-center mb-2">
                          <span className="px-3 py-1 bg-primary-800 rounded-full text-sm font-medium mr-3">
                            ✨ AI Curated
                          </span>
                          <span className="text-luxury-gold font-semibold">{destination.price}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{destination.title}</h3>
                        <p className="text-lg opacity-90 mb-2">{destination.location}</p>
                        <p className="text-white/80">{destination.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary-800 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((destination, index) => (
            <button
              key={destination.id}
              onClick={() => goToSlide(index)}
              className={`relative group overflow-hidden rounded-xl transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-4 ring-primary-800 scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              <div className="aspect-square relative">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-medium truncate">{destination.location}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* AI Insight */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              AI
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Curation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI analyzes over 2.5 million data points including weather patterns, local events, seasonal pricing, 
                and traveler preferences to curate these exclusive destinations. Each recommendation is personalized 
                based on your travel history and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}