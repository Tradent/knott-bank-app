import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownLeft, RefreshCw, Globe } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function TransferOverview() {
  const transferStats = [
    {
      type: "Internal Transfers",
      icon: RefreshCw,
      amount: "$5,250.00",
      percentage: 45,
      color: "bg-blue-400",
    },
    {
      type: "Sent to Others",
      icon: ArrowUpRight,
      amount: "$3,750.00",
      percentage: 32,
      color: "bg-red-400",
    },
    {
      type: "Received",
      icon: ArrowDownLeft,
      amount: "$2,100.00",
      percentage: 18,
      color: "bg-green-400",
    },
    {
      type: "International",
      icon: Globe,
      amount: "$600.00",
      percentage: 5,
      color: "bg-purple-400",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Transfer Summary</CardTitle>
        <CardDescription>Last 30 days activity</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {transferStats.map((stat, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`p-1.5 rounded-full ${stat.type === "Internal Transfers" ? "bg-blue-400/20" : stat.type === "Sent to Others" ? "bg-red-400/20" : stat.type === "Received" ? "bg-green-400/20" : "bg-purple-400/20"}`}
                >
                  <stat.icon
                    className={`h-3.5 w-3.5 ${stat.type === "Internal Transfers" ? "text-blue-400" : stat.type === "Sent to Others" ? "text-red-400" : stat.type === "Received" ? "text-green-400" : "text-purple-400"}`}
                  />
                </div>
                <span className="text-sm text-gray-300">{stat.type}</span>
              </div>
              <span className="text-sm font-medium text-white">{stat.amount}</span>
            </div>
            <Progress value={stat.percentage} className="h-1.5 bg-navy-700" indicatorClassName={stat.color} />
            <div className="flex justify-end">
              <span className="text-xs text-gray-400">{stat.percentage}% of total</span>
            </div>
          </div>
        ))}

        <div className="pt-2 border-t border-navy-800 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Total Transfer Volume</span>
            <span className="text-lg font-medium text-white">$11,700.00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
