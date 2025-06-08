import { CreditCard, Wallet, Building, Shield, Smartphone, Users, DollarSign, Settings } from "lucide-react"

export function HelpCenterCategories() {
  const categories = [
    {
      title: "Banking",
      icon: Building,
      description: "Account management, transfers, and deposits",
    },
    {
      title: "Cards",
      icon: CreditCard,
      description: "Physical and virtual card management",
    },
    {
      title: "Crypto & DeFi",
      icon: Wallet,
      description: "Wallet setup, trading, and staking",
    },
    {
      title: "Security",
      icon: Shield,
      description: "Account protection and privacy settings",
    },
    {
      title: "Mobile App",
      icon: Smartphone,
      description: "App features and troubleshooting",
    },
    {
      title: "Account Access",
      icon: Users,
      description: "Login issues and account recovery",
    },
    {
      title: "Investments",
      icon: DollarSign,
      description: "Portfolio management and investment options",
    },
    {
      title: "Settings",
      icon: Settings,
      description: "Preferences and notification settings",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Browse Help Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <category.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">{category.title}</h3>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
