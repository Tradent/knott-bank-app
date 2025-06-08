import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, RefreshCw, CreditCard } from "lucide-react"

export function QuickActions() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common operations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-auto flex-col items-center justify-center py-4 border-navy-700 hover:bg-navy-800 hover:text-green-400"
          >
            <ArrowUpRight className="h-6 w-6 mb-2" />
            <span>Send</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col items-center justify-center py-4 border-navy-700 hover:bg-navy-800 hover:text-green-400"
          >
            <ArrowDownLeft className="h-6 w-6 mb-2" />
            <span>Receive</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col items-center justify-center py-4 border-navy-700 hover:bg-navy-800 hover:text-green-400"
          >
            <RefreshCw className="h-6 w-6 mb-2" />
            <span>Swap</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col items-center justify-center py-4 border-navy-700 hover:bg-navy-800 hover:text-green-400"
          >
            <CreditCard className="h-6 w-6 mb-2" />
            <span>Cards</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
