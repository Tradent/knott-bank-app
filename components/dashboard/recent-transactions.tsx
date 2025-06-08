import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownLeft, ArrowUpRight, CreditCard, RefreshCw } from "lucide-react"

const transactions = [
  {
    id: "1",
    type: "receive",
    icon: ArrowDownLeft,
    name: "Received SOL",
    amount: "+2.5 SOL",
    value: "$245.00",
    date: "Today, 10:45 AM",
  },
  {
    id: "2",
    type: "send",
    icon: ArrowUpRight,
    name: "Sent USDC",
    amount: "-350 USDC",
    value: "$350.00",
    date: "Yesterday, 3:30 PM",
  },
  {
    id: "3",
    type: "swap",
    icon: RefreshCw,
    name: "Swapped SOL to USDC",
    amount: "1.2 SOL → 120 USDC",
    value: "$120.00",
    date: "Yesterday, 1:15 PM",
  },
  {
    id: "4",
    type: "card",
    icon: CreditCard,
    name: "Card Payment",
    amount: "-55 USDC",
    value: "$55.00",
    date: "Jul 12, 8:20 PM",
  },
]

export function RecentTransactions() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center gap-4">
              <div
                className={`p-2 rounded-full ${
                  transaction.type === "receive"
                    ? "bg-green-400/20"
                    : transaction.type === "send"
                      ? "bg-red-400/20"
                      : transaction.type === "swap"
                        ? "bg-blue-400/20"
                        : "bg-purple-400/20"
                }`}
              >
                <transaction.icon
                  className={`h-5 w-5 ${
                    transaction.type === "receive"
                      ? "text-green-400"
                      : transaction.type === "send"
                        ? "text-red-400"
                        : transaction.type === "swap"
                          ? "text-blue-400"
                          : "text-purple-400"
                  }`}
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-white">{transaction.name}</div>
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
