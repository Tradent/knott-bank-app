import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Shield, Key } from "lucide-react"

export function WalletSecurity() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Wallet Security</CardTitle>
          <CardDescription>Protect your crypto assets</CardDescription>
        </div>
        <div className="p-2 bg-green-400/20 rounded-full">
          <Shield className="h-4 w-4 text-green-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="two-factor">Two-Factor Authentication</Label>
              <p className="text-xs text-gray-400">Require 2FA for all transactions</p>
            </div>
            <Switch id="two-factor" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="biometric">Biometric Verification</Label>
              <p className="text-xs text-gray-400">Use fingerprint or face ID</p>
            </div>
            <Switch id="biometric" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="whitelist">Address Whitelisting</Label>
              <p className="text-xs text-gray-400">Only send to approved addresses</p>
            </div>
            <Switch id="whitelist" />
          </div>

          <div className="pt-2">
            <Button
              variant="outline"
              className="w-full border-navy-700 hover:bg-navy-800 hover:text-green-400 flex items-center justify-center"
            >
              <Key className="h-4 w-4 mr-2" /> Backup Recovery Phrase
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
