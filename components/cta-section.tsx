"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth/auth-provider"

export function CTA() {
  const testimonials = [
    {
      quote:
        "Knott Bank has completely transformed how I manage my finances. The seamless integration between traditional and crypto banking is unmatched.",
      author: "Sarah J.",
      role: "Small Business Owner",
      rating: 5,
    },
    {
      quote:
        "The security features give me peace of mind, and the user interface makes complex financial tasks simple and intuitive.",
      author: "Michael T.",
      role: "Software Engineer",
      rating: 5,
    },
    {
      quote:
        "I've been able to grow my savings significantly thanks to Knott Bank's competitive interest rates and smart investment options.",
      author: "Elena R.",
      role: "Marketing Director",
      rating: 5,
    },
  ]

  const { enterDemoMode } = useAuth()

  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-400/20 px-4 py-2 rounded-full mb-4">
            <span className="text-green-400 font-medium text-sm">Join Our Community</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Ready to experience </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              the future of banking
            </span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already made the switch to Knott Bank. Sign up today and get access to our
            full suite of banking services.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-navy-800 rounded-xl p-6 border border-navy-700 hover:border-green-400/30 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-green-400 fill-green-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-navy-800 to-navy-700 rounded-2xl p-8 md:p-12 border border-navy-600 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Open your account in minutes</h3>
                <p className="text-gray-300 mb-6">
                  Get started with Knott Bank today and experience banking designed for the modern world. No paperwork,
                  no waiting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-400 text-navy-950 hover:bg-green-300 px-8 py-3 rounded-full">
                    Create Account
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400/10 rounded-full"
                  >
                    Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <Button asChild size="lg" className="bg-green-400 text-navy-950 hover:bg-green-300">
                    <Link href="/auth/signup">Get Started</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400/10"
                    onClick={enterDemoMode}
                  >
                    Try Demo
                  </Button>
                </div>
              </div>
              <div className="bg-navy-900 rounded-xl p-6 border border-navy-700">
                <h4 className="text-white font-bold mb-4">New Account Bonus</h4>
                <div className="flex items-start mb-4">
                  <div className="bg-green-400/20 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">
                      Get $50 in crypto when you open a new account and deposit $500 or more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-400/20 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Earn 3.5% APY on savings accounts for the first 3 months.</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-navy-700">
                  <p className="text-xs text-gray-400">
                    Offer valid for new customers only. Terms and conditions apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Also export as CTASection for backward compatibility
export { CTA as CTASection }
