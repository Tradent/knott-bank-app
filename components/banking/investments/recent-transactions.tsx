import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownLeft, ArrowUpRight, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

export function RecentTransactions() {
  const transactions = [
    {
      id: "1",
      type: "buy",
      icon: ArrowDownLeft,
      name: "Bought AAPL",
      amount: "5 shares @ $182.52",
      value: "$912.60",
      date: "Today, 10:45 AM",
      status: "completed",
      category: "stocks",
    },
    {
      id: "2",
      type: "sell",
      icon: ArrowUpRight,
      name: "Sold TSLA",
      amount: "2 shares @ $177.35",
      value: "$354.70",
      date: "Yesterday, 3:30 PM",
      status: "completed",
      category: "stocks",
    },
    {
      id: "3",
      type: "buy",
      icon: ArrowDownLeft,
      name: "Bought SOL",
      amount: "10 SOL @ $148.25",
      value: "$1,482.50",
      date: "Yesterday, 1:15 PM",
      status: "completed",
      category: "crypto",
    },
    {
      id: "4",
      type: "buy",
      icon: ArrowDownLeft,
      name: "Bought VTI",
      amount: "3 shares @ $252.80",
      value: "$758.40",
      date: "Jul 12, 8:20 PM",
      status: "completed",
      category: "etfs",
    },
    {
      id: "5",
      type: "dividend",
      icon: RefreshCw,
      name: "Dividend MSFT",
      amount: "$12.50",
      value: "$12.50",
      date: "Jul 10, 6:30 AM",
      status: "completed",
      category: "stocks",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest investment activities</CardDescription>
        </div>
        <button className="text-sm text-green-400 hover:text-green-300 transition-colors">View All</button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center gap-4">
              <div
                className={cn(
                  "p-2 rounded-full",
                  transaction.type === "buy"
                    ? "bg-green-400/20"
                    : transaction.type === "sell"
                      ? "bg-red-400/20"
                      : "bg-blue-400/20",
                )}
              >
                <transaction.icon
                  className={cn(
                    "h-5 w-5",
                    transaction.type === "buy"
                      ? "text-green-400"
                      : transaction.type === "sell"
                        ? "text-red-400"
                        : "text-blue-400",
                  )}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium text-white">{transaction.name}</span>
                  {transaction.category === "crypto" && (
                    <span className="ml-2 px-2 py-0.5 rounded text-xs bg-green-400/20 text-green-400">Crypto</span>
                  )}
                  {transaction.category === "stocks" && (
                    <span className="ml-2 px-2 py-0.5 rounded text-xs bg-blue-400/20 text-blue-400">Stocks</span>
                  )}
                  {transaction.category === "etfs" && (
                    <span className="ml-2 px-2 py-0.5 rounded text-xs bg-purple-400/20 text-purple-400">ETFs</span>
                  )}
                </div>
                <div className="text-sm text-gray-400">{transaction.date}</div>
              </div>
              <div className="text-right">
                <div className="font-medium text-white">{transaction.amount}</div>
                <div className="text-sm text-gray-400">{transaction.value}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
