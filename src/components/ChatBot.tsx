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
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const chatFlow: ChatFlow = {
    welcome: {
      message: "Hey there! 👋 Are you ready to plan your next dream vacation?",
      options: ["I'm just browsing", "Yes, I need help planning!", "Tell me about Voyaj"],
      responses: {
        "I'm just browsing": "browsing",
        "Yes, I need help planning!": "planning",
        "Tell me about Voyaj": "about"
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
      // Initial welcome message
      setTimeout(() => {
        addBotMessage(chatFlow.welcome.message, chatFlow.welcome.options)
      }, 500)
    }
  }, [isOpen])

  const addBotMessage = (content: string, options?: string[]) => {
    setIsTyping(true)
    
    // Simulate typing delay
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
    }, 1000 + content.length * 20) // Dynamic typing speed based on message length
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
      // Fallback response
      setTimeout(() => {
        addBotMessage("That's interesting! Let me connect you with a human agent for more personalized assistance. 😊", ["Contact agent", "Start over"])
      }, 800)
    }
  }

  const handleSendMessage = () => {
    if (currentInput.trim()) {
      addUserMessage(currentInput)
      setCurrentInput('')
      
      // Simple AI response for free text
      setTimeout(() => {
        addBotMessage("I understand! Let me find the best options for you. Would you like me to connect you with a specialist?", ["Yes, connect me", "Show me options", "Start over"])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
            isOpen 
              ? 'bg-gray-600 hover:bg-gray-700' 
              : 'luxury-gradient hover:scale-110'
          }`}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
        
        {/* Notification badge */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="luxury-gradient p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    V
                  </div>
                  <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-sm">
                    AI
                  </div>
                </div>
                <div>
                  <div className="font-bold">Voyaj Agent</div>
                  <div className="text-sm opacity-90 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Agent reply within seconds
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-hide">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-primary-800 text-white'
                    : 'bg-white text-gray-800 shadow-sm border'
                }`}>
                  {message.type === 'bot' && (
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 luxury-gradient rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                        AI
                      </div>
                      <span className="text-xs text-gray-500">Voyaj Agent</span>
                    </div>
                  )}
                  <p className="text-sm">{message.content}</p>
                  
                  {/* Options */}
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left px-3 py-2 text-sm bg-primary-50 hover:bg-primary-100 text-primary-800 rounded-lg transition-colors border border-primary-200"
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
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 shadow-sm border px-4 py-2 rounded-2xl">
                  <div className="flex items-center">
                    <div className="w-6 h-6 luxury-gradient rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
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

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!currentInput.trim()}
                className="w-10 h-10 luxury-gradient rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-xs text-gray-500">Chat 💬 by Voyaj AI</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}