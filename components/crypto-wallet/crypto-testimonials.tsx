import { Star } from "lucide-react"

export function CryptoTestimonials() {
  const testimonials = [
    {
      quote:
        "Knott Bank's crypto wallet has completely changed how I manage my digital assets. The security features give me peace of mind, and the interface is incredibly intuitive.",
      author: "Sarah J.",
      role: "Crypto Investor",
      rating: 5,
    },
    {
      quote:
        "I've tried many crypto wallets, but none compare to the seamless experience of Knott Bank. The ability to easily swap between assets and stake coins all in one place is game-changing.",
      author: "Michael T.",
      role: "DeFi Enthusiast",
      rating: 5,
    },
    {
      quote:
        "As someone new to cryptocurrency, I was worried about security and ease of use. Knott Bank made the whole process simple while keeping my assets safe.",
      author: "Elena R.",
      role: "New Crypto User",
      rating: 4,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-navy-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-500">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-950">What Our Users Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our community has to say about our crypto wallet.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                      }`}
                    />
                  ))}
              </div>
              <p className="flex-1 text-gray-500">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium text-navy-950">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
