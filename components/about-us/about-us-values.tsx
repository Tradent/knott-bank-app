import { Shield, Lock, Lightbulb, Users } from "lucide-react"

export function AboutUsValues() {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-green-400" />,
      title: "Security",
      description: "We prioritize the security of your assets above all else with multi-layered protection systems.",
    },
    {
      icon: <Lock className="h-10 w-10 text-green-400" />,
      title: "Privacy",
      description: "Your financial data remains confidential with our enhanced privacy measures and encryption.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-green-400" />,
      title: "Innovation",
      description: "We continuously develop cutting-edge solutions that bridge traditional and decentralized finance.",
    },
    {
      icon: <Users className="h-10 w-10 text-green-400" />,
      title: "Accessibility",
      description: "Our services are designed to be accessible to everyone, regardless of technical expertise.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-navy-950">Our </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            At Knott Bank, we're guided by a set of principles that define how we operate and serve our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
            >
              <div className="mb-4 p-3 bg-navy-50 inline-block rounded-lg">{value.icon}</div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">{value.title}</h3>
              <p className="text-navy-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
