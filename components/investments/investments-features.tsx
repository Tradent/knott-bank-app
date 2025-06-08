import { CheckCircle } from "lucide-react"

export function InvestmentsFeatures() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-navy-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-400">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Comprehensive Investment Solutions
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers a wide range of investment options designed to help you grow your wealth securely.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start space-y-4 p-6 rounded-lg border border-navy-800 bg-navy-950/50"
            >
              <div className="inline-flex items-center justify-center p-2 rounded-md bg-green-400/10">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Traditional Stocks & Bonds",
    description:
      "Access global markets with our curated selection of stocks, bonds, and ETFs from established exchanges worldwide.",
  },
  {
    title: "Cryptocurrency Investments",
    description: "Invest in top cryptocurrencies with real-time market data and secure storage solutions.",
  },
  {
    title: "Tokenized Assets",
    description: "Explore fractional ownership of real-world assets through blockchain technology.",
  },
  {
    title: "Automated Portfolios",
    description: "Let our AI-driven algorithms create and manage diversified portfolios tailored to your risk profile.",
  },
  {
    title: "Tax-Optimized Strategies",
    description:
      "Maximize your returns with tax-efficient investment strategies across traditional and digital assets.",
  },
  {
    title: "Real-Time Analytics",
    description: "Track performance, analyze trends, and make informed decisions with our comprehensive dashboard.",
  },
]
