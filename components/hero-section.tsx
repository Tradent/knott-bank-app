"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"
import Link from "next/link"

export function HeroSection() {
  const { enterDemoMode } = useAuth()

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 z-0"></div>

      {/* Green accent */}
      <div className="absolute top-40 -left-24 w-72 h-72 bg-green-400/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-400/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-green-400/20 px-4 py-2 rounded-full mb-2">
              <span className="text-green-400 font-medium text-sm">Banking Reimagined</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Smart banking for the </span>
              <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                digital age
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Experience seamless financial management with enhanced privacy and security. All the features of
              traditional banking with the benefits of decentralized finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-green-400 text-navy-950 hover:bg-green-300 px-8 py-6 text-lg rounded-full">
                Open an Account
              </Button>
              <Button
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-6 text-lg rounded-full"
              >
                Explore Features <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-navy-700 border-2 border-navy-950 flex items-center justify-center text-xs text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-green-400 font-medium">10,000+</span> customers trust Knott Bank
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/30 to-green-300/30 rounded-2xl blur-sm"></div>
              <div className="relative bg-navy-800 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-navy-700">
                  <div className="bg-navy-800 p-6 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/10 rounded-bl-full"></div>
                    <h3 className="text-lg font-medium text-white mb-2">Checking Account</h3>
                    <p className="text-sm text-gray-400 mb-4">No monthly fees, no minimum balance</p>
                    <div className="bg-navy-700 p-4 rounded-lg mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Balance</span>
                        <span className="text-green-400 font-medium">$12,456.78</span>
                      </div>
                      <div className="h-1 w-full bg-navy-600 rounded-full">
                        <div className="h-1 bg-green-400 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <Button className="w-full bg-navy-700 hover:bg-navy-600 text-white">View Details</Button>
                  </div>
                  <div className="bg-navy-800 p-6 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/10 rounded-bl-full"></div>
                    <h3 className="text-lg font-medium text-white mb-2">Savings Account</h3>
                    <p className="text-sm text-gray-400 mb-4">3.5% APY, compound interest</p>
                    <div className="bg-navy-700 p-4 rounded-lg mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Growth</span>
                        <span className="text-green-400 font-medium">+$345.92</span>
                      </div>
                      <div className="h-1 w-full bg-navy-600 rounded-full">
                        <div className="h-1 bg-green-400 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <Button className="w-full bg-navy-700 hover:bg-navy-600 text-white">View Details</Button>
                  </div>
                  <div className="bg-navy-800 p-6 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/10 rounded-bl-full"></div>
                    <h3 className="text-lg font-medium text-white mb-2">Credit Card</h3>
                    <p className="text-sm text-gray-400 mb-4">2% cashback on all purchases</p>
                    <div className="flex items-center justify-center h-20">
                      <div className="w-12 h-8 bg-gradient-to-r from-green-400 to-green-300 rounded-md mr-2"></div>
                      <span className="text-sm text-gray-400">•••• 4582</span>
                    </div>
                    <Button className="w-full bg-navy-700 hover:bg-navy-600 text-white">Manage Card</Button>
                  </div>
                  <div className="bg-navy-800 p-6 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/10 rounded-bl-full"></div>
                    <h3 className="text-lg font-medium text-white mb-2">Investments</h3>
                    <p className="text-sm text-gray-400 mb-4">Diversified portfolio management</p>
                    <div className="flex items-center justify-center h-20">
                      <div className="grid grid-cols-2 gap-1 w-full">
                        <div className="h-8 bg-navy-700 rounded flex items-center justify-center">
                          <span className="text-xs text-green-400">+2.4%</span>
                        </div>
                        <div className="h-8 bg-navy-700 rounded flex items-center justify-center">
                          <span className="text-xs text-red-400">-0.8%</span>
                        </div>
                        <div className="h-8 bg-navy-700 rounded flex items-center justify-center">
                          <span className="text-xs text-green-400">+1.2%</span>
                        </div>
                        <div className="h-8 bg-navy-700 rounded flex items-center justify-center">
                          <span className="text-xs text-green-400">+3.7%</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-navy-700 hover:bg-navy-600 text-white">View Portfolio</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
