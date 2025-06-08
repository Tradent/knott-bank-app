import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Landmark, Wallet } from "lucide-react"

export function AccountSummary() {
  const accounts = [
    {
      id: "checking",
      name: "Checking Account",
      balance: "$4,285.65",
      number: "•••• 4582",
      type: "traditional",
    },
    {
      id: "savings",
      name: "Savings Account",
      balance: "$12,580.00",
      number: "•••• 7891",
      type: "traditional",
    },
    {
      id: "crypto",
      name: "Crypto Wallet",
      balance: "$7,720.67",
      number: "0x89...4e21",
      type: "crypto",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {accounts.map((account) => (
        <Card key={account.id} className="bg-navy-900 border-navy-800">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-gray-400 text-sm">{account.name}</h3>
                <p className="text-2xl font-semibold text-white mt-2">{account.balance}</p>
                <p className="text-sm text-gray-400 mt-1">Account {account.number}</p>
              </div>
              <div
                className={cn(
                  "p-2 rounded-full",
                  account.type === "traditional" ? "bg-blue-400/20" : "bg-green-400/20",
                )}
              >
                {account.type === "traditional" ? (
                  <Landmark
                    className={cn("h-5 w-5", account.type === "traditional" ? "text-blue-400" : "text-green-400")}
                  />
                ) : (
                  <Wallet className="h-5 w-5 text-green-400" />
                )}
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-navy-700 hover:bg-navy-800 hover:text-green-400"
              >
                <ArrowUpRight className="h-4 w-4 mr-2" /> Send
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-navy-700 hover:bg-navy-800 hover:text-green-400"
              >
                <ArrowDownLeft className="h-4 w-4 mr-2" /> Receive
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
