import { Star } from "lucide-react"

export function CardsTestimonials() {
  const testimonials = [
    {
      quote:
        "The Knott Bank Premium card has transformed how I use my crypto. I can spend it anywhere without worrying about conversion fees or complicated processes.",
      author: "David L.",
      role: "Premium Cardholder",
      rating: 5,
    },
    {
      quote:
        "I love the instant notifications and the ability to freeze my card with a single tap. The security features give me complete peace of mind when shopping online.",
      author: "Jessica M.",
      role: "Standard Cardholder",
      rating: 5,
    },
    {
      quote:
        "The crypto rewards program is fantastic. I've earned back significant value just by using my card for everyday purchases. The Platinum tier benefits are well worth the monthly fee.",
      author: "Robert K.",
      role: "Platinum Cardholder",
      rating: 4,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-navy-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-500">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-950">What Our Cardholders Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers about their experience with Knott Bank cards.
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
