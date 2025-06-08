import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, RefreshCw, CreditCard, FileText, AlertCircle } from "lucide-react"

export function AccountActions() {
  const actions = [
    {
      icon: ArrowUpRight,
      name: "Send Money",
      description: "Transfer to another account",
    },
    {
      icon: ArrowDownLeft,
      name: "Deposit",
      description: "Add funds to your account",
    },
    {
      icon: RefreshCw,
      name: "Transfer",
      description: "Move between your accounts",
    },
    {
      icon: CreditCard,
      name: "Pay Bills",
      description: "Schedule bill payments",
    },
    {
      icon: FileText,
      name: "Statements",
      description: "View and download",
    },
    {
      icon: AlertCircle,
      name: "Report Issue",
      description: "Get help with account",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common account operations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto flex-col items-center justify-center py-4 border-navy-700 hover:bg-navy-800 hover:text-green-400"
            >
              <action.icon className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">{action.name}</span>
              <span className="text-xs text-gray-400 mt-1">{action.description}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
