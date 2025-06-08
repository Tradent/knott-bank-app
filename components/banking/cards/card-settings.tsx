import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export function CardSettings() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Card Settings</CardTitle>
          <CardDescription>Manage your card preferences</CardDescription>
        </div>
        <Button variant="outline" size="icon" className="h-8 w-8 border-navy-700">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Advanced settings</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="contactless-payments">Contactless Payments</Label>
              <p className="text-xs text-gray-400">Enable tap-to-pay functionality</p>
            </div>
            <Switch id="contactless-payments" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="online-purchases">Online Purchases</Label>
              <p className="text-xs text-gray-400">Allow card to be used for online shopping</p>
            </div>
            <Switch id="online-purchases" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="international-transactions">International Transactions</Label>
              <p className="text-xs text-gray-400">Allow purchases outside your country</p>
            </div>
            <Switch id="international-transactions" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="atm-withdrawals">ATM Withdrawals</Label>
              <p className="text-xs text-gray-400">Allow cash withdrawals from ATMs</p>
            </div>
            <Switch id="atm-withdrawals" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="transaction-notifications">Transaction Notifications</Label>
              <p className="text-xs text-gray-400">Receive alerts for all card transactions</p>
            </div>
            <Switch id="transaction-notifications" defaultChecked />
          </div>

          <div className="pt-2">
            <Button variant="outline" className="w-full border-navy-700 hover:bg-navy-800 hover:text-green-400">
              Advanced Settings
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
