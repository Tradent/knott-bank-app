"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, RefreshCw, Plus, Wallet, Shield } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

export function WalletOverview() {
  const [timeRange, setTimeRange] = useState("1W")

  // Sample data for the chart
  const chartData = [
    { name: "Mon", value: 7200 },
    { name: "Tue", value: 7350 },
    { name: "Wed", value: 7100 },
    { name: "Thu", value: 7400 },
    { name: "Fri", value: 7600 },
    { name: "Sat", value: 7500 },
    { name: "Sun", value: 7720 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card className="bg-navy-900 border-navy-800 md:col-span-3">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="font-medium text-gray-400 text-sm">Portfolio Value</h3>
              <p className="text-2xl font-semibold text-white">$7,720.67</p>
              <p className="text-sm text-green-400">+$245.32 (3.28%) today</p>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              {["1D", "1W", "1M", "3M", "1Y", "All"].map((range) => (
                <button
                  key={range}
                  className={`px-2 py-1 text-xs rounded ${
                    timeRange === range ? "bg-green-400 text-navy-950" : "bg-navy-800 text-gray-300 hover:bg-navy-700"
                  }`}
                  onClick={() => setTimeRange(range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[150px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-navy-800 p-2 border border-navy-700 rounded-md">
                          <p className="text-white font-medium">${payload[0].value}</p>
                          <p className="text-xs text-gray-400">{payload[0].payload.name}</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4ade97"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, fill: "#4ade97" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-navy-900 border-navy-800">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-400 text-sm">Quick Actions</h3>
            </div>
            <div className="p-2 rounded-full bg-green-400/20">
              <Wallet className="h-5 w-5 text-green-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-navy-700 hover:bg-navy-800 hover:text-green-400"
            >
              <ArrowUpRight className="h-4 w-4 mr-2" /> Send
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-navy-700 hover:bg-navy-800 hover:text-green-400"
            >
              <ArrowDownLeft className="h-4 w-4 mr-2" /> Receive
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-navy-700 hover:bg-navy-800 hover:text-green-400"
            >
              <RefreshCw className="h-4 w-4 mr-2" /> Swap
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-navy-700 hover:bg-navy-800 hover:text-green-400"
            >
              <Plus className="h-4 w-4 mr-2" /> Buy
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border-navy-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-xs text-gray-300">Security Level</span>
              </div>
              <span className="text-xs font-medium text-green-400">High</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
