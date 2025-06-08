import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, RefreshCw, CreditCard, Shield, Smartphone, Wallet, Globe, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeatureSection() {
  const productCategories = [
    {
      id: "banking",
      title: "Banking",
      features: [
        {
          icon: <Building className="h-10 w-10 text-green-400" />,
          title: "Checking & Savings",
          description: "No-fee accounts with high interest rates and instant access to your money.",
          link: "#",
        },
        {
          icon: <RefreshCw className="h-10 w-10 text-green-400" />,
          title: "Currency Exchange",
          description: "Seamlessly exchange between fiat and cryptocurrencies at competitive rates.",
          link: "#",
        },
        {
          icon: <Shield className="h-10 w-10 text-green-400" />,
          title: "Secure Vault",
          description: "Military-grade encryption for your assets with multi-signature protection.",
          link: "#",
        },
      ],
    },
    {
      id: "cards",
      title: "Cards",
      features: [
        {
          icon: <CreditCard className="h-10 w-10 text-green-400" />,
          title: "Physical Cards",
          description: "Premium metal cards with contactless payment and worldwide acceptance.",
          link: "#",
        },
        {
          icon: <Smartphone className="h-10 w-10 text-green-400" />,
          title: "Virtual Cards",
          description: "Instant virtual cards for secure online shopping and subscriptions.",
          link: "#",
        },
        {
          icon: <Wallet className="h-10 w-10 text-green-400" />,
          title: "Rewards Program",
          description: "Earn cashback and crypto rewards on every purchase you make.",
          link: "#",
        },
      ],
    },
    {
      id: "investments",
      title: "Investments",
      features: [
        {
          icon: <Globe className="h-10 w-10 text-green-400" />,
          title: "Global Markets",
          description: "Access to stocks, ETFs, and crypto markets from a single platform.",
          link: "#",
        },
        {
          icon: <RefreshCw className="h-10 w-10 text-green-400" />,
          title: "Automated Investing",
          description: "Smart portfolios that automatically rebalance based on your goals.",
          link: "#",
        },
        {
          icon: <Shield className="h-10 w-10 text-green-400" />,
          title: "Retirement Planning",
          description: "Tax-advantaged accounts to help you save for the future.",
          link: "#",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-400/20 px-4 py-2 rounded-full mb-4">
            <span className="text-green-400 font-medium text-sm">Products & Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Banking solutions for </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              every need
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive suite of financial products designed to help you manage, grow, and protect your
            money.
          </p>
        </div>

        <Tabs defaultValue="banking" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-navy-800 p-1 rounded-full">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-green-400 data-[state=active]:text-navy-950"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {productCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-navy-800 rounded-xl p-6 border border-navy-700 hover:border-green-400/50 transition-all duration-300"
                  >
                    <div className="mb-4 p-3 bg-navy-700 inline-block rounded-lg">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <a
                      href={feature.link}
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Button className="bg-green-400 text-navy-950 hover:bg-green-300 px-8 py-6 text-lg rounded-full">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
