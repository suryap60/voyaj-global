export default function Features() {
  const features = [
    {
      title: "Client First",
      description: "We always act in the best interest of our clients. Their success is our success. We listen deeply.",
      icon: "🤝"
    },
    {
      title: "One Team, Global Reach",
      description: "We collaborate seamlessly across borders to deliver a consistent, high-quality experience.",
      icon: "🌍"
    },
    {
      title: "Passion for Precision",
      description: "Obsessed with accuracy, completeness and getting it right the first time for every traveler.",
      icon: "🎯"
    }
  ]

  const stats = [
    { number: "18,000+", label: "Active Routes" },
    { number: "450+", label: "Partner Airlines" },
    { number: "250+", label: "Verified Packages" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <section className="py-20 bg-gray-50 full-width">
      <div className="content-container">
        {/* What makes us different */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What makes us different
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gradient mb-8">
            The Agentic AI Advantage
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most travel platforms wait for you to ask. Voyaj predicts, plans, and protects your journey before you even realize you need it.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            A New Standard for Global Logistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase I Features */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Flight Inventory</h3>
            <p className="text-gray-600 mb-6">
              We've integrated directly with over 450 major airlines and regional carriers. Phase I offers real-time pricing intelligence and a unified ticketing layer that handles complex multi-city routes with unprecedented speed.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary-800 rounded-full mr-3"></span>
                Direct GDS Integration
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary-800 rounded-full mr-3"></span>
                Real-time Seat Availability
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary-800 rounded-full mr-3"></span>
                Business & First Class Specialists
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary-800 rounded-full mr-3"></span>
                24/7 Schedule Monitoring
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Curated Tour Collections</h3>
            <p className="text-gray-600 mb-6">
              Moving beyond mass-market travel, our Phase I packages are hand-selected by local destination experts. Every itinerary is vetted for luxury, authenticity, and logical flow.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary-800 rounded-full mr-3"></span>
                Exclusive "Hidden Gems" Access
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary-800 rounded-full mr-3"></span>
                All-Inclusive Luxury Handling
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary-800 rounded-full mr-3"></span>
                Professional Local Guides
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary-800 rounded-full mr-3"></span>
                Customizable Itinerary Frames
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}