import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CardsOptions() {
  const cardTiers = [
    {
      name: "Standard",
      description: "Perfect for everyday spending",
      price: "$0",
      period: "/month",
      features: [
        "Crypto-to-fiat conversion",
        "Virtual and physical card",
        "1% crypto back rewards",
        "24/7 customer support",
        "Up to $3,000 monthly spending limit",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      description: "Enhanced benefits for active users",
      price: "$9.99",
      period: "/month",
      features: [
        "All Standard features",
        "3% crypto back rewards",
        "Zero foreign transaction fees",
        "Airport lounge access (2 visits/year)",
        "Up to $10,000 monthly spending limit",
        "Premium metal card",
      ],
      highlighted: true,
    },
    {
      name: "Platinum",
      description: "Ultimate benefits for crypto enthusiasts",
      price: "$19.99",
      period: "/month",
      features: [
        "All Premium features",
        "5% crypto back rewards",
        "Unlimited foreign transactions",
        "Unlimited airport lounge access",
        "Up to $25,000 monthly spending limit",
        "Concierge service",
        "Travel insurance",
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-navy-50" id="options">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-500">Card Options</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-950">Choose Your Card</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Select the card that best fits your lifestyle and spending habits.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {cardTiers.map((tier, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg border ${
                tier.highlighted ? "border-green-400 bg-green-50 shadow-lg" : "border-gray-200 bg-white shadow-sm"
              } p-6`}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-navy-950">{tier.name}</h3>
                <p className="text-sm text-gray-500">{tier.description}</p>
              </div>
              <div className="mb-4 flex items-baseline">
                <span className="text-3xl font-bold text-navy-950">{tier.price}</span>
                <span className="ml-1 text-sm text-gray-500">{tier.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  asChild
                  className={
                    tier.highlighted
                      ? "w-full bg-green-400 text-navy-950 hover:bg-green-300"
                      : "w-full bg-navy-950 text-white hover:bg-navy-900"
                  }
                >
                  <Link href="/auth/signup">Apply Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
