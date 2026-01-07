'use client'

import { useState, useEffect, useRef } from 'react'

interface Message {
  id: string
  type: 'bot' | 'user'
  content: string
  timestamp: Date
  options?: string[]
  isTyping?: boolean
}

interface ChatFlow {
  [key: string]: {
    message: string
    options?: string[]
    responses: { [key: string]: string }
  }
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [currentFlow, setCurrentFlow] = useState('welcome')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const chatFlow: ChatFlow = {
    welcome: {
      message: "Hey there! ✈️ Ready to discover your next extraordinary travel experience? I'm your Voyaj AI agent, and I specialize in creating unforgettable luxury journeys.",
      options: ["I'm just exploring", "Yes, help me plan!", "Tell me about Voyaj", "Show me destinations"],
      responses: {
        "I'm just exploring": "browsing",
        "Yes, help me plan!": "planning",
        "Tell me about Voyaj": "about",
        "Show me destinations": "destinations"
      }
    },
    browsing: {
      message: "No problem! I'm here when you're ready. What interests you most?",
      options: ["Luxury destinations", "Adventure trips", "Cultural experiences", "Wellness retreats"],
      responses: {
        "Luxury destinations": "luxury",
        "Adventure trips": "adventure", 
        "Cultural experiences": "culture",
        "Wellness retreats": "wellness"
      }
    },
    planning: {
      message: "Awesome! What kind of travel experience are you looking for?",
      options: ["Romantic getaway", "Family vacation", "Solo adventure", "Business + leisure"],
      responses: {
        "Romantic getaway": "romantic",
        "Family vacation": "family",
        "Solo adventure": "solo",
        "Business + leisure": "business"
      }
    },
    about: {
      message: "Voyaj is the world's first Agentic AI travel marketplace! We understand your preferences and create personalized experiences. What would you like to know?",
      options: ["How does AI help?", "What makes you different?", "Pricing info", "Start planning"],
      responses: {
        "How does AI help?": "ai_help",
        "What makes you different?": "different",
        "Pricing info": "pricing",
        "Start planning": "planning"
      }
    },
    luxury: {
      message: "Perfect choice! ✨ I have some incredible luxury destinations. Where would you like to go?",
      options: ["Maldives overwater villas", "Swiss Alpine retreats", "Japanese ryokans", "African safari lodges"],
      responses: {
        "Maldives overwater villas": "maldives",
        "Swiss Alpine retreats": "swiss",
        "Japanese ryokans": "japan",
        "African safari lodges": "safari"
      }
    },
    romantic: {
      message: "How romantic! 💕 I know the perfect spots for couples. What's your vibe?",
      options: ["Tropical paradise", "European charm", "Mountain hideaway", "City sophistication"],
      responses: {
        "Tropical paradise": "tropical",
        "European charm": "europe",
        "Mountain hideaway": "mountain",
        "City sophistication": "city"
      }
    },
    maldives: {
      message: "Excellent choice! 🏝️ I found an exclusive overwater villa at Conrad Maldives Rangali Island. Private butler, underwater restaurant access, and sunset views. From $1,200/night. Shall I check availability?",
      options: ["Yes, check availability", "Show me alternatives", "Tell me more details", "Different destination"],
      responses: {
        "Yes, check availability": "booking",
        "Show me alternatives": "alternatives",
        "Tell me more details": "details",
        "Different destination": "luxury"
      }
    },
    ai_help: {
      message: "Our AI analyzes 2.5M+ data points including your preferences, weather, local events, and pricing to create perfect matches. It learns from each interaction to improve recommendations! 🤖",
      options: ["That's impressive!", "How accurate is it?", "Privacy concerns?", "Start planning"],
      responses: {
        "That's impressive!": "impressed",
        "How accurate is it?": "accuracy",
        "Privacy concerns?": "privacy",
        "Start planning": "planning"
      }
    },
    booking: {
      message: "🎉 Great! I'm checking real-time availability at Conrad Maldives... Found it! 3 nights available next month. Total: $3,600 including transfers and breakfast. Ready to book?",
      options: ["Book it now!", "Add activities", "Payment options", "Need to think"],
      responses: {
        "Book it now!": "confirm_booking",
        "Add activities": "activities",
        "Payment options": "payment",
        "Need to think": "follow_up"
      }
    },
    confirm_booking: {
      message: "🌟 Fantastic! Your Maldives dream vacation is confirmed! I'll send you a detailed itinerary and our 24/7 concierge contact. Welcome to the Voyaj family!",
      options: ["Thank you!", "Add travel insurance", "Contact concierge", "Plan another trip"],
      responses: {
        "Thank you!": "welcome",
        "Add travel insurance": "insurance",
        "Contact concierge": "concierge",
        "Plan another trip": "planning"
      }
    },
    destinations: {
      message: "Perfect! 🌍 I have access to the world's most exclusive destinations. What type of experience calls to you?",
      options: ["Tropical paradise", "European elegance", "Asian adventures", "African safaris", "Mountain retreats"],
      responses: {
        "Tropical paradise": "tropical_new",
        "European elegance": "europe_new",
        "Asian adventures": "asia_new",
        "African safaris": "safari_new",
        "Mountain retreats": "mountain_new"
      }
    },
    tropical_new: {
      message: "Excellent choice! 🏝️ I'm thinking Maldives overwater villas, Bora Bora lagoons, or Seychelles private islands. When are you planning to travel?",
      options: ["Next 3 months", "6 months ahead", "Planning for next year", "Show me prices"],
      responses: {
        "Next 3 months": "booking_soon",
        "6 months ahead": "advance_planning",
        "Planning for next year": "future_planning",
        "Show me prices": "pricing_info"
      }
    },
    europe_new: {
      message: "Magnifique! 🇪🇺 From Santorini's cliff-side suites to Swiss Alpine chalets, or perhaps a luxury river cruise? What draws you to Europe?",
      options: ["Romance & wine", "History & culture", "Luxury shopping", "Mountain adventures"],
      responses: {
        "Romance & wine": "romantic_europe",
        "History & culture": "cultural_europe",
        "Luxury shopping": "shopping_europe",
        "Mountain adventures": "alpine_europe"
      }
    },
    asia_new: {
      message: "Incredible choice! 🏯 Japan's ryokans, Thailand's private resorts, or Singapore's luxury hotels? Asia offers unmatched hospitality and experiences.",
      options: ["Japanese culture", "Thai beaches", "Singapore luxury", "Bali retreats"],
      responses: {
        "Japanese culture": "japan_culture",
        "Thai beaches": "thailand_beach",
        "Singapore luxury": "singapore_luxury",
        "Bali retreats": "bali_wellness"
      }
    },
    pricing_info: {
      message: "💎 Our luxury packages start from $1,200/night for tropical destinations. This includes premium accommodations, private transfers, and concierge services. Shall I show you specific options?",
      options: ["Yes, show options", "What's included?", "Payment plans?", "Compare destinations"],
      responses: {
        "Yes, show options": "show_packages",
        "What's included?": "package_details",
        "Payment plans?": "payment_options",
        "Compare destinations": "destination_compare"
      }
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(chatFlow.welcome.message, chatFlow.welcome.options)
      }, 500)
    }
  }, [isOpen])

  // Gemini API Integration with fallback responses
  const callGeminiAPI = async (userMessage: string): Promise<string> => {
    try {
      setIsLoading(true)
      
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          context: `You are Voyaj AI, the world's first Agentic Travel Assistant. You are sophisticated, knowledgeable, and passionate about luxury travel experiences.

PERSONALITY:
- Enthusiastic but professional
- Knowledgeable about global destinations
- Focus on luxury and unique experiences
- Personalized recommendations
- Concise responses (2-3 sentences max)

CAPABILITIES:
- 450+ airline partnerships
- 18,000+ active routes
- Luxury accommodations worldwide
- Cultural experiences and hidden gems
- Real-time pricing and availability

RESPONSE STYLE:
- Always include relevant emojis
- Offer specific suggestions when possible
- Ask follow-up questions to personalize
- Mention unique features (overwater villas, private jets, exclusive access)
- Keep responses engaging and actionable

USER MESSAGE: "${userMessage}"

Respond as Voyaj AI would, focusing on travel planning and luxury experiences.`
        }),
      })

      if (!response.ok) {
        // If API is not configured, use intelligent fallback responses
        return getIntelligentFallback(userMessage)
      }

      const data = await response.json()
      return data.response || getIntelligentFallback(userMessage)
    } catch (error) {
      console.error('Gemini API error:', error)
      return getIntelligentFallback(userMessage)
    } finally {
      setIsLoading(false)
    }
  }

  // Intelligent fallback responses when API is not available
  const getIntelligentFallback = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return "I'd love to help you find the perfect trip within your budget! Our packages start from $1,200 for luxury destinations. Would you like me to show you some options?"
    }
    
    if (message.includes('destination') || message.includes('where') || message.includes('place')) {
      return "Exciting! I have amazing destinations in mind. Are you thinking tropical paradise, European charm, mountain adventures, or cultural experiences? ✈️"
    }
    
    if (message.includes('hotel') || message.includes('stay') || message.includes('accommodation')) {
      return "I specialize in luxury accommodations! From overwater villas in Maldives to Swiss Alpine chalets. What type of experience are you looking for? 🏨"
    }
    
    if (message.includes('flight') || message.includes('airline')) {
      return "I work with 450+ airlines worldwide to find you the best routes! Business class, first class, or premium economy - what's your preference? ✈️"
    }
    
    if (message.includes('food') || message.includes('restaurant') || message.includes('dining')) {
      return "Culinary adventures are my specialty! I remember your taste preferences and find similar experiences worldwide. What cuisine interests you most? 🍽️"
    }
    
    if (message.includes('family') || message.includes('kids') || message.includes('children')) {
      return "Family trips are wonderful! I can suggest kid-friendly luxury resorts, educational tours, and activities that everyone will love. How many travelers? 👨‍👩‍👧‍👦"
    }
    
    if (message.includes('romantic') || message.includes('honeymoon') || message.includes('couple')) {
      return "How romantic! I know the most intimate destinations - private beaches, candlelit dinners, couples spas. When are you planning to travel? 💕"
    }
    
    if (message.includes('adventure') || message.includes('activity') || message.includes('experience')) {
      return "Adventure awaits! Safari in Africa, skiing in Alps, diving in Maldives, or cultural immersion in Japan? What gets your heart racing? 🏔️"
    }
    
    if (message.includes('when') || message.includes('time') || message.includes('season')) {
      return "Timing is everything! I consider weather, local events, and seasonal pricing to find your perfect travel window. What time of year works best for you? 📅"
    }
    
    // Default intelligent response
    return "That's a great question! As your Voyaj AI assistant, I'm here to create your perfect travel experience. Let me connect you with our travel specialists who can provide detailed assistance. What specific aspect of travel planning can I help you with? 🌟"
  }

  const addBotMessage = (content: string, options?: string[]) => {
    setIsTyping(true)
    
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content,
        timestamp: new Date(),
        options
      }
      setMessages(prev => [...prev, newMessage])
      setIsTyping(false)
    }, 1000 + content.length * 20)
  }

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleOptionClick = (option: string) => {
    addUserMessage(option)
    
    const currentFlowData = chatFlow[currentFlow]
    const nextFlow = currentFlowData.responses[option]
    
    if (nextFlow && chatFlow[nextFlow]) {
      setCurrentFlow(nextFlow)
      setTimeout(() => {
        addBotMessage(chatFlow[nextFlow].message, chatFlow[nextFlow].options)
      }, 800)
    } else {
      setTimeout(() => {
        addBotMessage("That's interesting! Let me connect you with a human agent for more personalized assistance. 😊", ["Contact agent", "Start over"])
      }, 800)
    }
  }

  const handleSendMessage = async () => {
    if (currentInput.trim()) {
      const userMessage = currentInput
      addUserMessage(userMessage)
      setCurrentInput('')
      
      // Use Gemini API for free text responses
      setIsTyping(true)
      const aiResponse = await callGeminiAPI(userMessage)
      
      // Generate contextual options based on user message
      const contextualOptions = getContextualOptions(userMessage.toLowerCase())
      
      setTimeout(() => {
        addBotMessage(aiResponse, contextualOptions)
        setIsTyping(false)
      }, 1000)
    }
  }

  // Generate contextual options based on user input
  const getContextualOptions = (message: string): string[] => {
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return ["Show me packages", "Payment options", "What's included?", "Compare prices"]
    }
    
    if (message.includes('destination') || message.includes('where')) {
      return ["Show destinations", "Tropical paradise", "European elegance", "Asian adventures"]
    }
    
    if (message.includes('hotel') || message.includes('stay')) {
      return ["Luxury resorts", "Overwater villas", "City hotels", "Mountain lodges"]
    }
    
    if (message.includes('flight') || message.includes('airline')) {
      return ["Business class", "First class", "Private jet", "Multi-city routes"]
    }
    
    if (message.includes('family') || message.includes('kids')) {
      return ["Family resorts", "Kid activities", "Educational tours", "Multi-generation trips"]
    }
    
    if (message.includes('romantic') || message.includes('honeymoon')) {
      return ["Romantic destinations", "Couples experiences", "Private dining", "Spa packages"]
    }
    
    if (message.includes('adventure') || message.includes('activity')) {
      return ["Safari adventures", "Water sports", "Mountain activities", "Cultural tours"]
    }
    
    // Default options
    return ["Tell me more", "Show me options", "Book consultation", "Start over"]
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Responsive Chat Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
            isOpen 
              ? 'bg-gray-600 hover:bg-gray-700' 
              : 'luxury-gradient hover:scale-110'
          }`}
        >
          {isOpen ? (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
        
        {/* Notification badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        )}
      </div>

      {/* Responsive Chat Window with improved mobile experience */}
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40 sm:hidden" onClick={() => setIsOpen(false)}></div>
          
          <div className={`fixed z-50 ${
            // Mobile: Full screen with safe area
            'inset-0 sm:inset-auto ' +
            // Tablet & Desktop: Positioned bottom-right
            'sm:bottom-20 sm:right-4 md:bottom-24 md:right-6 ' +
            // Responsive sizing
            'w-full h-full sm:w-80 md:w-96 sm:h-[500px] md:h-[600px] ' +
            // Styling
            'bg-white rounded-none sm:rounded-2xl shadow-2xl border-0 sm:border sm:border-gray-200 flex flex-col overflow-hidden'
          }`}>
            {/* Header with mobile improvements */}
            <div className="luxury-gradient p-4 text-white safe-area-top">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                      V
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full flex items-center justify-center text-xs sm:text-sm">
                      AI
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">Voyaj Agent</div>
                    <div className="text-xs sm:text-sm opacity-90 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Agent reply within seconds
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages with improved mobile scrolling */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50 scrollbar-hide overscroll-contain">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 sm:py-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-primary-800 text-white'
                      : 'bg-white text-gray-800 shadow-sm border'
                  }`}>
                    {message.type === 'bot' && (
                      <div className="flex items-center mb-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 luxury-gradient rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                          AI
                        </div>
                        <span className="text-xs text-gray-500">Voyaj Agent</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    
                    {/* Options with improved mobile touch targets */}
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left px-3 py-3 text-sm bg-primary-50 hover:bg-primary-100 active:bg-primary-200 text-primary-800 rounded-lg transition-colors border border-primary-200 touch-manipulation"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {(isTyping || isLoading) && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 shadow-sm border px-3 sm:px-4 py-2 sm:py-3 rounded-2xl">
                    <div className="flex items-center">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 luxury-gradient rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                        AI
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input with mobile keyboard support */}
            <div className="p-3 sm:p-4 border-t bg-white safe-area-bottom">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 px-3 sm:px-4 py-3 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm touch-manipulation"
                  disabled={isLoading}
                  autoComplete="off"
                  autoCapitalize="sentences"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!currentInput.trim() || isLoading}
                  className="w-10 h-10 sm:w-10 sm:h-10 luxury-gradient rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-transform touch-manipulation"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-xs text-gray-500">
                  Chat 💬 by Voyaj AI {isLoading && '• Processing...'}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}