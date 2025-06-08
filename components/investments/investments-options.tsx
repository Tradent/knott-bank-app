import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function InvestmentsOptions() {
  return (
    <section id="investment-options" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">
              Investment Options
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Choose from our range of investment products designed to meet your financial goals
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {options.map((option) => (
            <div key={option.title} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${option.image}')` }}></div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{option.description}</p>
                <div className="mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-between border-green-500 text-green-500 hover:bg-green-500/10"
                  >
                    <Link href={option.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const options = [
  {
    title: "Managed Portfolios",
    description: "Professionally managed investment portfolios tailored to your risk tolerance and financial goals.",
    image: "/collaborative-financial-planning.png",
    link: "/investments/managed-portfolios",
  },
  {
    title: "Digital Assets",
    description:
      "Invest in a curated selection of cryptocurrencies and digital assets with institutional-grade security.",
    image: "/crypto-dashboard-overview.png",
    link: "/investments/digital-assets",
  },
  {
    title: "ETFs & Stocks",
    description: "Access global markets with commission-free trading of stocks, ETFs, and fractional shares.",
    image: "/stock-market-dashboard.png",
    link: "/investments/stocks-etfs",
  },
  {
    title: "Retirement Accounts",
    description: "Plan for your future with tax-advantaged retirement accounts including Traditional and Roth IRAs.",
    image: "/placeholder.svg?height=300&width=500&query=retirement%20planning%20couple",
    link: "/investments/retirement",
  },
  {
    title: "Alternative Investments",
    description: "Diversify with alternative investments including real estate, commodities, and private equity.",
    image: "/placeholder.svg?height=300&width=500&query=real%20estate%20investment%20property",
    link: "/investments/alternatives",
  },
  {
    title: "DeFi Yield",
    description: "Earn passive income through carefully vetted decentralized finance protocols and yield strategies.",
    image: "/placeholder.svg?height=300&width=500&query=defi%20yield%20farming%20concept",
    link: "/defi-hub",
  },
]
