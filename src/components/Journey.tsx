export default function Journey() {
  const journeySteps = [
    {
      phase: "1",
      title: "Discovery Phase",
      features: [
        {
          title: "Conversational Planning",
          description: "Natural dialogue to define your dream trip."
        },
        {
          title: "Intelligent Matching",
          description: "AI understands your personality and budget."
        }
      ]
    },
    {
      phase: "2", 
      title: "Booking Phase",
      features: [
        {
          title: "Unified Checkout",
          description: "One transaction for flights, hotels, and more."
        },
        {
          title: "Smart Coordination",
          description: "Ensures logical sequencing and logistics."
        }
      ]
    },
    {
      phase: "3",
      title: "During Travel", 
      features: [
        {
          title: "Live Adaptation",
          description: "\"It's raining today - here are indoor alternatives.\""
        },
        {
          title: "Real-time Support", 
          description: "\"Your train is delayed, I have rebooked your tickets.\""
        }
      ]
    },
    {
      phase: "4",
      title: "Post Trip",
      features: [
        {
          title: "Memory Creation",
          description: "Automatic trip journal with photos and notes."
        },
        {
          title: "Preference Learning",
          description: "Improves for your next journey based on feedback."
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white full-width">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The End-to-End Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Voyaj supports you at every single step of your travel experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < journeySteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-800 to-primary-600 transform translate-x-4"></div>
              )}
              
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.phase}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Agentic AI Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-800 to-primary-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Agentic AI
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See how Voyaj goes beyond traditional chatbots with proactive, contextual planning.
            </p>
            
            {/* Mock Chat Interface */}
            <div className="bg-white rounded-2xl p-6 text-left max-w-2xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  V
                </div>
                <div>
                  <div className="font-medium text-gray-900">Voyaj Agent</div>
                  <div className="text-sm text-green-600">Online</div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <p className="text-gray-800">
                  Hi! I am your Voyaj AI Agent. Where would you like to explore today? I can help plan, book, and support your entire journey.
                </p>
              </div>
              
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-primary-800 font-medium">
                  🏝️ Maldives recommendation: Based on your preference for overwater villas and sunset views, I found an exclusive resort with private butler service. From $1,200/night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}