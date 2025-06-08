import { Shield, Zap, RefreshCw, Globe, Lock, Wallet } from "lucide-react"

export function CryptoFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Multi-layer encryption and secure key management protect your assets at all times.",
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "Send and receive crypto with lightning-fast transaction speeds.",
    },
    {
      icon: RefreshCw,
      title: "Seamless Swaps",
      description: "Exchange between different cryptocurrencies with minimal fees and slippage.",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your wallet from anywhere in the world, on any device.",
    },
    {
      icon: Lock,
      title: "Self-Custody",
      description: "You own your private keys, giving you complete control over your assets.",
    },
    {
      icon: Wallet,
      title: "Multi-Asset Support",
      description: "Store, send, and receive over 100 different cryptocurrencies.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-500">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-950">
              Everything You Need in One Place
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our crypto wallet combines the best of traditional banking security with the freedom of decentralized
              finance.
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
