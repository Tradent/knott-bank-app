"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sliders, DollarSign, ShoppingCart, Globe } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function CardLimits() {
  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Sliders className="mr-2 h-5 w-5 text-green-400" />
          Card Limits
        </CardTitle>
        <CardDescription className="text-gray-400">Manage your spending and withdrawal limits</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-white text-sm">Daily ATM Withdrawal</span>
            </div>
            <span className="text-green-400 text-sm">$1,000</span>
          </div>
          <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-gray-400">
            <span>$0</span>
            <span>$2,000</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <ShoppingCart className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-white text-sm">Daily Purchase Limit</span>
            </div>
            <span className="text-green-400 text-sm">$5,000</span>
          </div>
          <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-gray-400">
            <span>$0</span>
            <span>$10,000</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Globe className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-white text-sm">Online Transactions</span>
            </div>
            <span className="text-green-400 text-sm">$3,000</span>
          </div>
          <Slider defaultValue={[60]} max={100} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-gray-400">
            <span>$0</span>
            <span>$5,000</span>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Changes to your card limits may take up to 24 hours to take effect. For higher limits, please contact customer
          support.
        </p>
      </CardContent>
    </Card>
  )
}
