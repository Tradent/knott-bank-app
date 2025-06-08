import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function DefiOpportunities() {
  const opportunities = [
    {
      name: "SOL Staking",
      apy: "5.8%",
      risk: "Low",
      description: "Earn rewards by staking your SOL",
    },
    {
      name: "USDC Lending",
      apy: "8.2%",
      risk: "Medium",
      description: "Lend your USDC to earn interest",
    },
    {
      name: "ETH-SOL LP",
      apy: "12.5%",
      risk: "High",
      description: "Provide liquidity to ETH-SOL pair",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="pb-2">
        <CardTitle>DeFi Opportunities</CardTitle>
        <CardDescription>Earn yield on your crypto assets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="p-4 bg-navy-800 rounded-lg border border-navy-700 hover:border-green-400/50 transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-white">{opportunity.name}</h3>
                <div className="text-green-400 font-bold">{opportunity.apy} APY</div>
              </div>
              <p className="text-sm text-gray-400 mb-3">{opportunity.description}</p>
              <div className="flex justify-between items-center">
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    opportunity.risk === "Low"
                      ? "bg-green-400/20 text-green-400"
                      : opportunity.risk === "Medium"
                        ? "bg-yellow-400/20 text-yellow-400"
                        : "bg-red-400/20 text-red-400"
                  }`}
                >
                  {opportunity.risk} Risk
                </span>
                <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-0 h-auto">
                  <span>Invest</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
