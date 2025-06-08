import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function InvestmentsTestimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">
              What Our Investors Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Hear from clients who have transformed their investment strategy with Knott Bank
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Retail Investor",
    quote:
      "Knott Bank's investment platform has completely transformed how I manage my portfolio. The ability to seamlessly move between traditional and digital assets is game-changing.",
    avatar: "/placeholder.svg?height=100&width=100&query=professional%20woman%20headshot",
  },
  {
    name: "Michael Chen",
    title: "Tech Entrepreneur",
    quote:
      "As someone deeply involved in the tech industry, I appreciate how Knott Bank bridges traditional finance with cutting-edge digital assets. Their security measures are unmatched.",
    avatar: "/placeholder.svg?height=100&width=100&query=asian%20man%20professional%20headshot",
  },
  {
    name: "Aisha Patel",
    title: "Financial Advisor",
    quote:
      "I recommend Knott Bank to my clients because of their comprehensive investment options and excellent customer service. The platform is intuitive and the analytics are top-notch.",
    avatar: "/placeholder.svg?height=100&width=100&query=indian%20woman%20professional%20headshot",
  },
  {
    name: "David Rodriguez",
    title: "Retirement Planner",
    quote:
      "The tax optimization features have significantly improved my clients' retirement portfolios. Knott Bank offers institutional-grade tools with a user-friendly interface.",
    avatar: "/placeholder.svg?height=100&width=100&query=hispanic%20man%20professional%20headshot",
  },
  {
    name: "Emma Wilson",
    title: "Small Business Owner",
    quote:
      "As a business owner, I appreciate how Knott Bank helps me manage both my personal and business investments in one place. The fractional investing feature is perfect for starting small.",
    avatar: "/placeholder.svg?height=100&width=100&query=blonde%20woman%20professional%20headshot",
  },
  {
    name: "James Thompson",
    title: "Early Adopter",
    quote:
      "I've been with Knott Bank since they launched, and the continuous innovation in their investment products keeps me excited about the future of finance.",
    avatar: "/placeholder.svg?height=100&width=100&query=black%20man%20professional%20headshot",
  },
]
