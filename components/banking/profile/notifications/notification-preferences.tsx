"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function NotificationPreferences() {
  const [preferences, setPreferences] = useState({
    transactions: true,
    security: true,
    marketing: false,
    accountUpdates: true,
    newFeatures: true,
    promotions: false,
  })

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white">Notification Preferences</CardTitle>
        <CardDescription className="text-gray-400">Choose what notifications you want to receive</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="transactions" className="text-white">
                Transaction Alerts
              </Label>
              <p className="text-sm text-gray-400">Receive notifications for deposits, withdrawals, and transfers</p>
            </div>
            <Switch
              id="transactions"
              checked={preferences.transactions}
              onCheckedChange={() => handleToggle("transactions")}
              className="data-[state=checked]:bg-green-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="security" className="text-white">
                Security Alerts
              </Label>
              <p className="text-sm text-gray-400">Receive notifications for login attempts and security updates</p>
            </div>
            <Switch
              id="security"
              checked={preferences.security}
              onCheckedChange={() => handleToggle("security")}
              className="data-[state=checked]:bg-green-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="marketing" className="text-white">
                Marketing Communications
              </Label>
              <p className="text-sm text-gray-400">Receive updates about new products and services</p>
            </div>
            <Switch
              id="marketing"
              checked={preferences.marketing}
              onCheckedChange={() => handleToggle("marketing")}
              className="data-[state=checked]:bg-green-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="accountUpdates" className="text-white">
                Account Updates
              </Label>
              <p className="text-sm text-gray-400">Receive notifications about changes to your account</p>
            </div>
            <Switch
              id="accountUpdates"
              checked={preferences.accountUpdates}
              onCheckedChange={() => handleToggle("accountUpdates")}
              className="data-[state=checked]:bg-green-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="newFeatures" className="text-white">
                New Features
              </Label>
              <p className="text-sm text-gray-400">Be the first to know about new features and improvements</p>
            </div>
            <Switch
              id="newFeatures"
              checked={preferences.newFeatures}
              onCheckedChange={() => handleToggle("newFeatures")}
              className="data-[state=checked]:bg-green-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="promotions" className="text-white">
                Promotions & Offers
              </Label>
              <p className="text-sm text-gray-400">Receive special offers and promotions</p>
            </div>
            <Switch
              id="promotions"
              checked={preferences.promotions}
              onCheckedChange={() => handleToggle("promotions")}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
