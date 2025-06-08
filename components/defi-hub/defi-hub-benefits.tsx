import { Shield, Zap, BarChart3, RefreshCw } from "lucide-react"

export function DefiHubBenefits() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-navy-800 px-4 py-1.5 rounded-full mb-6">
              <span className="text-green-400 text-sm font-medium">Why Choose Knott Bank DeFi</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">DeFi Without the Complexity</h2>
            <p className="text-gray-300 mb-8">
              We've built a bridge between traditional finance and DeFi, making decentralized finance accessible to
              everyone without sacrificing security or control.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-300 rounded-lg blur-lg opacity-30"></div>
            <div className="relative bg-navy-800 border border-navy-700 rounded-lg p-6">
              <div className="grid gap-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">DeFi vs Traditional Finance</h3>
                </div>
                <div className="space-y-4">
                  {comparisons.map((comparison, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4">
                      <div className="col-span-1 text-gray-300">{comparison.feature}</div>
                      <div className="col-span-1 text-green-400 font-medium flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                        {comparison.defi}
                      </div>
                      <div className="col-span-1 text-gray-400 flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-600 mr-2"></div>
                        {comparison.traditional}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-navy-900 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">
                    <p>
                      With Knott Bank's DeFi Hub, you get the best of both worlds: the innovation and yield potential of
                      DeFi with the security and ease-of-use of traditional finance.
                    </p>
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

const benefits = [
  {
    icon: Shield,
    title: "Institutional Security",
    description: "Enterprise-grade security with multi-signature wallets and audited smart contracts.",
  },
  {
    icon: Zap,
    title: "Gas Optimization",
    description: "Intelligent transaction batching and gas optimization to reduce fees.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    description: "Comprehensive analytics to track performance across all DeFi positions.",
  },
  {
    icon: RefreshCw,
    title: "Seamless Integration",
    description: "Effortlessly move between traditional banking and DeFi in one platform.",
  },
]

const comparisons = [
  {
    feature: "Yield Potential",
    defi: "High",
    traditional: "Low",
  },
  {
    feature: "Accessibility",
    defi: "24/7",
    traditional: "Limited",
  },
  {
    feature: "Transaction Speed",
    defi: "Minutes",
    traditional: "Days",
  },
  {
    feature: "Control",
    defi: "Self-custody",
    traditional: "Custodial",
  },
  {
    feature: "Innovation",
    defi: "Rapid",
    traditional: "Slow",
  },
]
