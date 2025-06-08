import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export function AccountSettings() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account preferences</CardDescription>
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
              <Label htmlFor="overdraft-protection">Overdraft Protection</Label>
              <p className="text-xs text-gray-400">Prevent overdraft fees by declining transactions</p>
            </div>
            <Switch id="overdraft-protection" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="paper-statements">Paper Statements</Label>
              <p className="text-xs text-gray-400">Receive monthly statements by mail</p>
            </div>
            <Switch id="paper-statements" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="transaction-alerts">Transaction Alerts</Label>
              <p className="text-xs text-gray-400">Get notified for all account transactions</p>
            </div>
            <Switch id="transaction-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="international-transfers">International Transfers</Label>
              <p className="text-xs text-gray-400">Enable sending money internationally</p>
            </div>
            <Switch id="international-transfers" />
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
