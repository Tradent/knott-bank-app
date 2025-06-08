"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, TrendingUp, Coffee, Plane } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function CardRewards() {
  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Gift className="mr-2 h-5 w-5 text-green-400" />
          Card Rewards
        </CardTitle>
        <CardDescription className="text-gray-400">Track your rewards and cashback</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white">Rewards Balance</span>
            <span className="text-green-400 font-semibold">12,450 points</span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-400">Next Reward Tier</span>
            <span className="text-sm text-gray-400">15,000 points</span>
          </div>
          <Progress value={83} className="h-2 bg-navy-700" />
          <p className="text-xs text-gray-400 mt-2">Earn 2,550 more points to reach Gold tier</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-white text-sm font-medium mb-3">Cashback Categories</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                <Coffee className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <p className="text-white text-sm">Dining</p>
                <p className="text-xs text-gray-400">3% cashback</p>
              </div>
            </div>
            <span className="text-white text-sm">$124.50</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <Plane className="h-4 w-4 text-purple-400" />
              </div>
              <div>
                <p className="text-white text-sm">Travel</p>
                <p className="text-xs text-gray-400">2% cashback</p>
              </div>
            </div>
            <span className="text-white text-sm">$86.20</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                <TrendingUp className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-white text-sm">All Other Purchases</p>
                <p className="text-xs text-gray-400">1% cashback</p>
              </div>
            </div>
            <span className="text-white text-sm">$45.75</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
