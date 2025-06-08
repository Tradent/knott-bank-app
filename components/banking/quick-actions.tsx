import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, RefreshCw, CreditCard, Wallet, Percent } from "lucide-react"

export function QuickActions() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="pb-2">
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common banking operations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-auto flex-col items-center justify-center py-5 border-navy-700 hover:bg-navy-800 hover:text-green-400"
          >
            <ArrowUpRight className="h-6 w-6 mb-2" />
            <span>Send</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col items-center justify-center py-5 border-navy-700 hover:bg-navy-800 hover:text-green-400"
          >
            <ArrowDownLeft className="h-6 w-6 mb-2" />
            <span>Receive</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col items-center justify-center py-5 border-navy-700 hover:bg-navy-800 hover:text-green-400"
          >
            <RefreshCw className="h-6 w-6 mb-2" />
            <span>Exchange</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col items-center justify-center py-5 border-navy-700 hover:bg-navy-800 hover:text-green-400"
          >
            <Percent className="h-6 w-6 mb-2" />
            <span>Earn</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col items-center justify-center py-5 border-navy-700 hover:bg-navy-800 hover:text-green-400"
          >
            <CreditCard className="h-6 w-6 mb-2" />
            <span>Cards</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col items-center justify-center py-5 border-navy-700 hover:bg-navy-800 hover:text-green-400"
          >
            <Wallet className="h-6 w-6 mb-2" />
            <span>Wallet</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
