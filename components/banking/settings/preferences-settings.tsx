import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Globe, Clock, DollarSign } from "lucide-react"

export function PreferencesSettings() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>Customize your regional and display preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-green-400" />
              <Label htmlFor="language">Language</Label>
            </div>
            <Select defaultValue="en">
              <SelectTrigger id="language" className="bg-navy-800 border-navy-700">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-green-400" />
              <Label htmlFor="timezone">Time Zone</Label>
            </div>
            <Select defaultValue="utc-5">
              <SelectTrigger id="timezone" className="bg-navy-800 border-navy-700">
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                <SelectItem value="utc+0">UTC</SelectItem>
                <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-400" />
              <Label htmlFor="currency">Default Currency</Label>
            </div>
            <Select defaultValue="usd">
              <SelectTrigger id="currency" className="bg-navy-800 border-navy-700">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD ($)</SelectItem>
                <SelectItem value="eur">EUR (€)</SelectItem>
                <SelectItem value="gbp">GBP (£)</SelectItem>
                <SelectItem value="jpy">JPY (¥)</SelectItem>
                <SelectItem value="btc">BTC (₿)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date-format">Date Format</Label>
            <Select defaultValue="mdy">
              <SelectTrigger id="date-format" className="bg-navy-800 border-navy-700">
                <SelectValue placeholder="Select date format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-2 space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="24h-time" className="text-sm text-gray-300">
                Use 24-hour time
              </Label>
              <Switch id="24h-time" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="weekend-start" className="text-sm text-gray-300">
                Start week on Monday
              </Label>
              <Switch id="weekend-start" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="crypto-decimals" className="text-sm text-gray-300">
                Show all crypto decimals
              </Label>
              <Switch id="crypto-decimals" defaultChecked />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
