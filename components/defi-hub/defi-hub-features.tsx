import { Layers, Shield, TrendingUp, Zap, RefreshCw, Lock } from "lucide-react"

export function DefiHubFeatures() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-navy-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-400">
              DeFi Ecosystem
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Unlock the Power of DeFi</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Access the best decentralized finance protocols through our secure and intuitive platform.
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
                {feature.icon}
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
    title: "Yield Farming",
    description: "Maximize returns by providing liquidity to various protocols and earning rewards in multiple tokens.",
    icon: <TrendingUp className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Staking Pools",
    description: "Stake your crypto assets to earn passive income while supporting network security and operations.",
    icon: <Layers className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Lending Markets",
    description: "Lend your assets to earn interest or borrow against your crypto holdings with competitive rates.",
    icon: <RefreshCw className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Liquidity Pools",
    description: "Provide liquidity to decentralized exchanges and earn a share of trading fees and incentives.",
    icon: <Zap className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Risk Management",
    description: "Advanced tools to monitor and manage your DeFi positions with real-time risk assessment.",
    icon: <Shield className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Security First",
    description:
      "All protocols are thoroughly audited and monitored to ensure the highest level of security for your assets.",
    icon: <Lock className="h-6 w-6 text-green-400" />,
  },
]
