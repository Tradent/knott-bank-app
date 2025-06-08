import { CreditCard, Repeat, Shield, Globe, Gift, Zap } from "lucide-react"

export function CardsFeatures() {
  const features = [
    {
      icon: CreditCard,
      title: "Instant Crypto-to-Fiat",
      description: "Spend your crypto assets instantly, converted to local currency at point of sale.",
    },
    {
      icon: Repeat,
      title: "Zero FX Fees",
      description: "Use your card worldwide with no foreign exchange fees on international purchases.",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced fraud protection with real-time alerts and instant card freezing.",
    },
    {
      icon: Globe,
      title: "Global Acceptance",
      description: "Accepted at over 80 million merchant locations worldwide.",
    },
    {
      icon: Gift,
      title: "Rewards Program",
      description: "Earn crypto back on every purchase, with enhanced rates for premium tiers.",
    },
    {
      icon: Zap,
      title: "Instant Issuance",
      description: "Virtual card available immediately upon approval, physical card within days.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-500">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-950">
              Designed for the Modern Spender
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our physical cards combine the benefits of traditional payment cards with the flexibility of
              cryptocurrency.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="rounded-full bg-green-400/10 p-3">
                <feature.icon className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-950">{feature.title}</h3>
              <p className="text-center text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
