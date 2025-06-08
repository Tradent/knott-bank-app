import { Building, RefreshCw, CreditCard, Shield, Wallet, Globe, Lock, Clock } from "lucide-react"

export function FeatureList() {
  const features = [
    {
      icon: <Building className="h-10 w-10 text-green-400" />,
      title: "Physical Locations",
      description:
        "Access our services at brick and mortar locations with private banking rooms and ATMs available for the private sector.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-green-400" />,
      title: "Multi-Currency Wallets",
      description:
        "Store multiple cryptocurrencies in a single secure wallet with full control over your private keys.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-green-400" />,
      title: "Flexible Currency Storage",
      description:
        "Pick what currency to store your money in based on your yielding preferences with automatic rebalancing.",
    },
    {
      icon: <Globe className="h-10 w-10 text-green-400" />,
      title: "Global Exchange",
      description:
        "Exchange currency easily at any location in the world for travelers with minimal fees and great rates.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-green-400" />,
      title: "Physical & Virtual Cards",
      description:
        "Get physical cards for seamless spending and transferring between centralized financial institutions.",
    },
    {
      icon: <Shield className="h-10 w-10 text-green-400" />,
      title: "Enhanced Security",
      description:
        "Multi-signature authorization and biometric verification for all transactions to keep your assets safe.",
    },
    {
      icon: <Lock className="h-10 w-10 text-green-400" />,
      title: "Privacy Protection",
      description:
        "Extra layer of anonymity for data privacy concerns with end-to-end encryption for all communications.",
    },
    {
      icon: <Clock className="h-10 w-10 text-green-400" />,
      title: "24/7 Access",
      description: "Access your funds anytime, anywhere with our mobile app and web platform with no downtime.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <span className="text-navy-950"> Banking Features</span>
          </h2>
          <p className="text-navy-800 max-w-2xl mx-auto">
            Experience the best of both worlds with our comprehensive suite of financial services that bridge
            traditional banking with decentralized finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
            >
              <div className="mb-4 p-3 bg-navy-50 inline-block rounded-lg">{feature.icon}</div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">{feature.title}</h3>
              <p className="text-navy-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
