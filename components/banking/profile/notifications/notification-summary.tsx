import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Shield, CreditCard, AlertCircle } from "lucide-react"

export function NotificationSummary() {
  const stats = [
    {
      name: "Transaction Alerts",
      value: 12,
      icon: <Bell className="h-5 w-5 text-blue-400" />,
      change: "+3",
      changeType: "increase",
    },
    {
      name: "Security Alerts",
      value: 5,
      icon: <Shield className="h-5 w-5 text-green-400" />,
      change: "-2",
      changeType: "decrease",
    },
    {
      name: "Account Alerts",
      value: 8,
      icon: <AlertCircle className="h-5 w-5 text-yellow-400" />,
      change: "+1",
      changeType: "increase",
    },
    {
      name: "Card Alerts",
      value: 4,
      icon: <CreditCard className="h-5 w-5 text-purple-400" />,
      change: "0",
      changeType: "neutral",
    },
  ]

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white">Notification Summary</CardTitle>
        <CardDescription className="text-gray-400">Last 30 days activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-700">{stat.icon}</div>
                <div>
                  <p className="text-sm text-white">{stat.name}</p>
                  <p className="text-xs text-gray-400">Last 30 days</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-white">{stat.value}</p>
                <p
                  className={`text-xs ${
                    stat.changeType === "increase"
                      ? "text-green-400"
                      : stat.changeType === "decrease"
                        ? "text-red-400"
                        : "text-gray-400"
                  }`}
                >
                  {stat.change} from previous
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
