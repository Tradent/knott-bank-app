export function DefiHubTestimonials() {
  return (
    <section className="bg-navy-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
          <p className="text-gray-300">
            Join thousands of satisfied users who have transformed their DeFi experience with Knott Bank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-navy-900 border border-navy-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center mr-3">
                  <span className="text-green-400 font-medium">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "Knott Bank's DeFi Hub has completely transformed how I interact with DeFi protocols. The gas optimization alone has saved me thousands in fees.",
    name: "Alex Thompson",
    title: "Crypto Investor",
  },
  {
    quote:
      "As someone new to DeFi, the simplified interface and risk indicators made it easy for me to start earning yield without feeling overwhelmed.",
    name: "Maria Rodriguez",
    title: "Software Engineer",
  },
  {
    quote:
      "The ability to manage all my DeFi positions in one dashboard with detailed analytics has been a game-changer for my investment strategy.",
    name: "James Wilson",
    title: "Financial Analyst",
  },
  {
    quote:
      "I've tried many DeFi platforms, but none offer the security features and ease of use that Knott Bank provides. It's truly the best of both worlds.",
    name: "Sarah Kim",
    title: "Business Owner",
  },
  {
    quote:
      "The yield optimization strategies have consistently outperformed what I was able to achieve on my own. The team really understands DeFi.",
    name: "Michael Chen",
    title: "Blockchain Developer",
  },
  {
    quote:
      "Being able to move seamlessly between traditional banking and DeFi in one app has simplified my financial life tremendously.",
    name: "Emily Johnson",
    title: "Marketing Director",
  },
]
