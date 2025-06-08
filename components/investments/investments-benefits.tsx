import { Shield, TrendingUp, Zap, BarChart4, Users, Clock } from "lucide-react"

export function InvestmentsBenefits() {
  return (
    <section className="bg-navy-900 py-16 md:py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Knott Bank Investments
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Experience the advantages of our integrated investment platform
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col space-y-3 bg-navy-800 p-6 rounded-lg border border-navy-700"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500/20 rounded-full">
                  <benefit.icon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    title: "Bank-Level Security",
    description: "Your investments are protected with the same enterprise-grade security as your banking assets.",
    icon: Shield,
  },
  {
    title: "Performance Tracking",
    description: "Monitor your investment performance with detailed analytics and customizable reports.",
    icon: TrendingUp,
  },
  {
    title: "Instant Transfers",
    description: "Move funds between your bank accounts and investment portfolios instantly with no fees.",
    icon: Zap,
  },
  {
    title: "Advanced Analytics",
    description: "Access sophisticated investment analytics typically reserved for institutional investors.",
    icon: BarChart4,
  },
  {
    title: "Community Insights",
    description: "Learn from our community of investors and share strategies with like-minded individuals.",
    icon: Users,
  },
  {
    title: "24/7 Access",
    description: "Manage your investments anytime, anywhere with our secure mobile and web platforms.",
    icon: Clock,
  },
]
