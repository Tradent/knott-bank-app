import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

export function InvestmentOverview() {
  const accounts = [
    {
      id: "stock-portfolio",
      name: "Stock Portfolio",
      balance: "$28,450.65",
      change: "+$425.30 (1.52%)",
      isPositive: true,
      type: "stocks",
    },
    {
      id: "crypto-investments",
      name: "Crypto Investments",
      balance: "$8,235.10",
      change: "+$320.02 (4.05%)",
      isPositive: true,
      type: "crypto",
    },
    {
      id: "etf-portfolio",
      name: "ETF Portfolio",
      balance: "$5,901.00",
      change: "+$100.00 (1.72%)",
      isPositive: true,
      type: "etfs",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {accounts.map((account) => (
        <Card key={account.id} className="bg-navy-900 border-navy-800">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-400 text-sm">{account.name}</h3>
                <p className="text-2xl font-semibold text-white mt-1">{account.balance}</p>
                <p className={cn("text-sm mt-1", account.isPositive ? "text-green-400" : "text-red-400")}>
                  {account.change}
                </p>
              </div>
              <div
                className={cn(
                  "p-2 rounded-full",
                  account.type === "stocks"
                    ? "bg-blue-400/20"
                    : account.type === "crypto"
                      ? "bg-green-400/20"
                      : "bg-purple-400/20",
                )}
              >
                {account.type === "stocks" ? (
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                ) : account.type === "crypto" ? (
                  <TrendingUp className="h-5 w-5 text-green-400" />
                ) : (
                  <Briefcase className="h-5 w-5 text-purple-400" />
                )}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-navy-700 hover:bg-navy-800 hover:text-green-400"
              >
                <ArrowUpRight className="h-4 w-4 mr-2" /> Trade
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-navy-700 hover:bg-navy-800 hover:text-green-400"
              >
                Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
