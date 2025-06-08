"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Mail, Smartphone, CreditCard, ArrowLeftRight, Shield, Wallet, PieChart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NotificationSettings() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-green-400" />
          <CardTitle>Notification Settings</CardTitle>
        </div>
        <CardDescription>Manage how you receive notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="channels" className="w-full">
          <TabsList className="bg-navy-800 border border-navy-700 w-full justify-start mb-6">
            <TabsTrigger value="channels" className="data-[state=active]:bg-navy-700">
              Notification Channels
            </TabsTrigger>
            <TabsTrigger value="preferences" className="data-[state=active]:bg-navy-700">
              Notification Types
            </TabsTrigger>
          </TabsList>

          <TabsContent value="channels">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <Mail className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-400">Receive notifications via email</p>
                  </div>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <Smartphone className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Push Notifications</p>
                    <p className="text-sm text-gray-400">Receive notifications on your devices</p>
                  </div>
                </div>
                <Switch id="push-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <Smartphone className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">SMS Notifications</p>
                    <p className="text-sm text-gray-400">Receive notifications via text message</p>
                  </div>
                </div>
                <Switch id="sms-notifications" />
              </div>

              <div className="p-4 bg-navy-800 rounded-lg border border-navy-700">
                <p className="text-white font-medium mb-2">Notification Schedule</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="quiet-hours" className="text-sm text-gray-400">
                      Quiet Hours
                    </Label>
                    <Switch id="quiet-hours" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="start-time" className="text-xs text-gray-400">
                        Start Time
                      </Label>
                      <input
                        id="start-time"
                        type="time"
                        defaultValue="22:00"
                        className="w-full bg-navy-700 border border-navy-600 rounded-md p-2 text-white mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="end-time" className="text-xs text-gray-400">
                        End Time
                      </Label>
                      <input
                        id="end-time"
                        type="time"
                        defaultValue="07:00"
                        className="w-full bg-navy-700 border border-navy-600 rounded-md p-2 text-white mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preferences">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <ArrowLeftRight className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Transaction Alerts</p>
                    <p className="text-sm text-gray-400">Notifications for deposits, withdrawals, and transfers</p>
                  </div>
                </div>
                <Switch id="transaction-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <CreditCard className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Card Activity</p>
                    <p className="text-sm text-gray-400">Notifications for card purchases and ATM withdrawals</p>
                  </div>
                </div>
                <Switch id="card-activity" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <Shield className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Security Alerts</p>
                    <p className="text-sm text-gray-400">Notifications for login attempts and security changes</p>
                  </div>
                </div>
                <Switch id="security-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <Wallet className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Crypto Alerts</p>
                    <p className="text-sm text-gray-400">Notifications for crypto price changes and transactions</p>
                  </div>
                </div>
                <Switch id="crypto-alerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <PieChart className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Investment Updates</p>
                    <p className="text-sm text-gray-400">Notifications for portfolio performance and opportunities</p>
                  </div>
                </div>
                <Switch id="investment-updates" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <Bell className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Marketing & Promotions</p>
                    <p className="text-sm text-gray-400">Notifications about new features, offers, and updates</p>
                  </div>
                </div>
                <Switch id="marketing" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
