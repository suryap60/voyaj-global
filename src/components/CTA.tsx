export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 full-width">
      <div className="max-w-4xl mx-auto content-container text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for your next intelligently planned journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 50,000+ travelers who have already switched to agentic travel planning.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <button className="bg-luxury-gold hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
            Create Free Account
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
            Contact Sales
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center justify-center hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No setup fees
          </div>
          <div className="flex items-center justify-center hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </div>
          <div className="flex items-center justify-center hover:text-white transition-colors duration-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            24/7 AI support
          </div>
        </div>
      </div>
    </section>
  )
}