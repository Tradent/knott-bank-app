import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useTransactions } from "@/hooks/use-transactions"

export function RecentActivity() {
  const { transactions, isLoading } = useTransactions(5)

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest transactions</CardDescription>
        </div>
        <button className="text-sm text-green-400 hover:text-green-300 transition-colors">View All</button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse flex items-center gap-4">
                <div className="p-2 rounded-full bg-navy-800 h-9 w-9"></div>
                <div className="flex-1">
                  <div className="h-4 bg-navy-800 rounded w-3/4"></div>
                  <div className="h-3 bg-navy-800 rounded w-1/2 mt-2"></div>
                </div>
                <div className="text-right">
                  <div className="h-4 bg-navy-800 rounded w-16"></div>
                  <div className="h-3 bg-navy-800 rounded w-12 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center gap-4">
                <div
                  className={cn(
                    "p-2 rounded-full",
                    transaction.type === "receive"
                      ? "bg-green-400/20"
                      : transaction.type === "send"
                        ? "bg-red-400/20"
                        : transaction.type === "swap"
                          ? "bg-blue-400/20"
                          : "bg-purple-400/20",
                  )}
                >
                  <transaction.icon
                    className={cn(
                      "h-5 w-5",
                      transaction.type === "receive"
                        ? "text-green-400"
                        : transaction.type === "send"
                          ? "text-red-400"
                          : transaction.type === "swap"
                            ? "text-blue-400"
                            : "text-purple-400",
                    )}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-white">{transaction.name}</span>
                    {transaction.category === "crypto" && (
                      <span className="ml-2 px-2 py-0.5 rounded text-xs bg-green-400/20 text-green-400">Crypto</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{transaction.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-white">{transaction.amount}</div>
                  <div className="text-xs text-gray-400 capitalize mt-1">{transaction.status}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
