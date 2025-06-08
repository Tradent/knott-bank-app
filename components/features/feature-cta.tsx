import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FeatureCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-navy-950 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Ready to experience </span>
              <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                the future of banking
              </span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already made the switch to Knott Bank. Sign up today and get access to
              our full suite of crypto banking services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-400 text-navy-950 hover:bg-green-300 px-8 py-6 text-lg">
                Create Account
              </Button>
              <Button
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-6 text-lg"
              >
                Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
