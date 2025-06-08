import { Check, X } from "lucide-react"

export function FeatureComparison() {
  const features = [
    "Physical Locations",
    "Multi-Currency Support",
    "Yield Generation",
    "Global Exchange",
    "Physical Cards",
    "Privacy Protection",
    "Self-Custody",
    "24/7 Access",
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -left-32 top-40 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-navy-950">How We </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Compare</span>
          </h2>
          <p className="text-navy-800 max-w-2xl mx-auto">
            See how Knott Bank stacks up against traditional banks and typical crypto platforms.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse bg-white rounded-xl shadow-md">
            <thead>
              <tr>
                <th className="text-left p-4 bg-white rounded-tl-lg border-b border-gray-200"></th>
                <th className="p-4 bg-white text-center border-b border-gray-200">
                  <span className="text-green-500 font-bold">Knott Bank</span>
                </th>
                <th className="p-4 bg-white text-center border-b border-gray-200">
                  <span className="text-navy-700 font-bold">Traditional Banks</span>
                </th>
                <th className="p-4 bg-white text-center rounded-tr-lg border-b border-gray-200">
                  <span className="text-navy-700 font-bold">Crypto Exchanges</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 font-medium text-navy-900">{feature}</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    {["Physical Locations", "Multi-Currency Support", "Physical Cards"].includes(feature) ? (
                      <Check className="h-5 w-5 text-navy-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {["Multi-Currency Support", "Yield Generation", "Self-Custody", "24/7 Access"].includes(feature) ? (
                      <Check className="h-5 w-5 text-navy-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
