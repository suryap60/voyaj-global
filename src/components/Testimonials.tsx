import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Tech Executive",
      location: "San Francisco",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Voyaj's AI understood exactly what I needed - a peaceful retreat that wasn't touristy. The Kyoto ryokan recommendation was perfect.",
      rating: 5,
      trip: "Japan Cultural Immersion"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Investment Banker",
      location: "New York",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The level of personalization is incredible. Voyaj remembered I'm vegetarian and pre-arranged everything. Seamless luxury travel.",
      rating: 5,
      trip: "Maldives Wellness Retreat"
    },
    {
      id: 3,
      name: "Elena Volkov",
      title: "Art Collector",
      location: "London",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Finally, a travel service that gets it. Private museum access in Florence was a dream come true. Worth every penny.",
      rating: 5,
      trip: "Italian Art & Culture Tour"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Discerning Travelers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of travelers who have discovered the future of luxury travel planning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t pt-4">
                <p className="text-sm font-medium text-primary-800">{testimonial.trip}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="inline-flex items-center space-x-12 text-white/80">
            <div className="text-center group hover:text-white transition-colors duration-300">
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="w-px h-16 bg-white/30"></div>
            <div className="text-center group hover:text-white transition-colors duration-300">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-sm">Happy Travelers</div>
            </div>
            <div className="w-px h-16 bg-white/30"></div>
            <div className="text-center group hover:text-white transition-colors duration-300">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-sm">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}