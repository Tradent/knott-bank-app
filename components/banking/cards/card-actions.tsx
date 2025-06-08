import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LockIcon, AlertCircle, CreditCard, RefreshCw, Shield, Settings } from "lucide-react"

export function CardActions() {
  const actions = [
    {
      icon: LockIcon,
      name: "Lock Card",
      description: "Temporarily freeze",
    },
    {
      icon: AlertCircle,
      name: "Report Lost",
      description: "Block & replace",
    },
    {
      icon: CreditCard,
      name: "View PIN",
      description: "Securely access",
    },
    {
      icon: RefreshCw,
      name: "Change Limits",
      description: "Adjust spending",
    },
    {
      icon: Shield,
      name: "Security",
      description: "Manage settings",
    },
    {
      icon: Settings,
      name: "More Options",
      description: "Additional tools",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Manage your card security and settings</CardDescription>
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
