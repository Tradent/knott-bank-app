import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function MarketTrends() {
  const trends = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$19,448.17",
      change: "+2.4%",
      isPositive: true,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$1,893.33",
      change: "+5.2%",
      isPositive: true,
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "$168.67",
      change: "+8.7%",
      isPositive: true,
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: "$0.45",
      change: "-1.3%",
      isPositive: false,
    },
    {
      name: "Polkadot",
      symbol: "DOT",
      price: "$6.32",
      change: "+3.1%",
      isPositive: true,
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Market Trends</CardTitle>
          <CardDescription>Latest cryptocurrency prices</CardDescription>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0 h-auto">
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-navy-800 rounded-md transition-colors"
            >
              <div>
                <div className="font-medium text-white">{trend.name}</div>
                <div className="text-xs text-gray-400">{trend.symbol}</div>
              </div>
              <div className="text-right">
                <div className="font-medium text-white">{trend.price}</div>
                <div
                  className={cn(
                    "text-xs flex items-center justify-end",
                    trend.isPositive ? "text-green-400" : "text-red-400",
                  )}
                >
                  {trend.isPositive ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {trend.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
