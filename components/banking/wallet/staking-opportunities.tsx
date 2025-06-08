import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function StakingOpportunities() {
  const opportunities = [
    {
      name: "SOL Staking",
      apy: "5.8%",
      risk: "Low",
      description: "Earn rewards by staking your SOL",
    },
    {
      name: "ETH Staking",
      apy: "4.2%",
      risk: "Low",
      description: "Earn rewards by staking your ETH",
    },
    {
      name: "BTC Lending",
      apy: "3.5%",
      risk: "Medium",
      description: "Lend your BTC to earn interest",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Earn Rewards</CardTitle>
        <CardDescription>Staking and yield opportunities</CardDescription>
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
              <p className="text-sm text-gray-400 mb-2">{opportunity.description}</p>
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
                  <span>Stake</span>
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
