import Link from "next/link"

export function SecurityCTA() {
  return (
    <section className="py-16 md:py-24 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-navy-950">Your security is our </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              top priority
            </span>
          </h2>
          <p className="text-navy-700 mb-8 text-lg">
            Experience peace of mind with Knott Bank's industry-leading security measures. Open an account today and
            keep your assets safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="px-8 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
            >
              Open a Secure Account
            </Link>
            <Link
              href="/about-us"
              className="px-8 py-3 bg-white text-navy-950 font-medium rounded-lg border border-navy-200 hover:bg-navy-50 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
