import { Check, X } from "lucide-react"

export function CryptoComparison() {
  const features = [
    "Bank-Grade Security",
    "Self-Custody",
    "Multi-Asset Support",
    "Fiat On/Off Ramp",
    "DeFi Integration",
    "24/7 Support",
    "Insurance Coverage",
    "Mobile App",
  ]

  const wallets = [
    {
      name: "Knott Bank",
      description: "The complete solution for your crypto needs",
      features: [true, true, true, true, true, true, true, true],
      highlighted: true,
    },
    {
      name: "Traditional Exchanges",
      description: "Centralized cryptocurrency exchanges",
      features: [true, false, true, true, false, true, false, true],
      highlighted: false,
    },
    {
      name: "Hardware Wallets",
      description: "Physical devices for crypto storage",
      features: [true, true, true, false, false, false, false, false],
      highlighted: false,
    },
    {
      name: "Mobile Wallets",
      description: "Standard crypto wallet apps",
      features: [false, true, false, false, true, false, false, true],
      highlighted: false,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-500">Comparison</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-950">How We Compare</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how our crypto wallet stacks up against other solutions in the market.
            </p>
          </div>
        </div>
        <div className="mt-12 overflow-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 text-left font-medium text-gray-500">Features</th>
                {wallets.map((wallet, index) => (
                  <th
                    key={index}
                    className={`py-4 px-6 text-left font-medium ${
                      wallet.highlighted ? "text-green-500" : "text-gray-500"
                    }`}
                  >
                    {wallet.name}
                    <span className="block text-xs font-normal mt-1">{wallet.description}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={featureIndex} className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium text-navy-950">{feature}</td>
                  {wallets.map((wallet, walletIndex) => (
                    <td key={walletIndex} className={`py-4 px-6 ${wallet.highlighted ? "bg-green-50" : ""}`}>
                      {wallet.features[featureIndex] ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
