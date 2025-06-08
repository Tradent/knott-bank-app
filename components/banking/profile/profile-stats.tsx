"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, CreditCard, Landmark, Wallet } from "lucide-react"

export function ProfileStats() {
  return (
    <div className="space-y-6">
      <Card className="bg-navy-900 border-navy-800">
        <CardHeader>
          <CardTitle>Account Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-navy-800 mr-3">
                <Landmark className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Checking</p>
                <p className="text-white font-medium">**** 1234</p>
              </div>
            </div>
            <p className="text-white font-semibold">$12,456.78</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-navy-800 mr-3">
                <Landmark className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Savings</p>
                <p className="text-white font-medium">**** 5678</p>
              </div>
            </div>
            <p className="text-white font-semibold">$45,678.90</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-navy-800 mr-3">
                <Wallet className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Crypto Wallet</p>
                <p className="text-white font-medium">**** 9012</p>
              </div>
            </div>
            <p className="text-white font-semibold">$8,765.43</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-navy-800 mr-3">
                <CreditCard className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Credit Card</p>
                <p className="text-white font-medium">**** 3456</p>
              </div>
            </div>
            <p className="text-red-400 font-semibold">-$2,345.67</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-navy-900 border-navy-800">
        <CardHeader>
          <CardTitle>Spending Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-white">This Month</p>
            <div className="flex items-center text-red-400">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <p className="font-semibold">$3,456.78</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Shopping</span>
                <span className="text-white">$1,234.56</span>
              </div>
              <div className="h-2 bg-navy-800 rounded-full">
                <div className="h-2 bg-green-400 rounded-full" style={{ width: "35%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Dining</span>
                <span className="text-white">$876.54</span>
              </div>
              <div className="h-2 bg-navy-800 rounded-full">
                <div className="h-2 bg-blue-400 rounded-full" style={{ width: "25%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Transportation</span>
                <span className="text-white">$543.21</span>
              </div>
              <div className="h-2 bg-navy-800 rounded-full">
                <div className="h-2 bg-purple-400 rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Utilities</span>
                <span className="text-white">$432.10</span>
              </div>
              <div className="h-2 bg-navy-800 rounded-full">
                <div className="h-2 bg-yellow-400 rounded-full" style={{ width: "12%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Other</span>
                <span className="text-white">$370.37</span>
              </div>
              <div className="h-2 bg-navy-800 rounded-full">
                <div className="h-2 bg-red-400 rounded-full" style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
