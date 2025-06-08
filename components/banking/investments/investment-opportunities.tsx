import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function InvestmentOpportunities() {
  const opportunities = [
    {
      name: "Tech Growth Portfolio",
      type: "Managed Portfolio",
      description: "Curated selection of high-growth tech stocks",
      performance: "32.5% (1Y)",
      risk: "Medium",
    },
    {
      name: "Green Energy ETF",
      type: "ETF",
      description: "Exposure to renewable energy companies",
      performance: "18.7% (1Y)",
      risk: "Medium",
    },
    {
      name: "Crypto Index Fund",
      type: "Crypto",
      description: "Diversified crypto assets weighted by market cap",
      performance: "45.2% (1Y)",
      risk: "High",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Investment Opportunities</CardTitle>
        <CardDescription>Curated investment ideas for you</CardDescription>
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
              </div>
              <p className="text-xs text-gray-400 mb-1">{opportunity.type}</p>
              <p className="text-sm text-gray-300 mb-2">{opportunity.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-green-400 font-medium">{opportunity.performance}</span>
                  <span
                    className={`ml-2 text-xs px-2 py-0.5 rounded ${
                      opportunity.risk === "Low"
                        ? "bg-green-400/20 text-green-400"
                        : opportunity.risk === "Medium"
                          ? "bg-yellow-400/20 text-yellow-400"
                          : "bg-red-400/20 text-red-400"
                    }`}
                  >
                    {opportunity.risk} Risk
                  </span>
                </div>
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
