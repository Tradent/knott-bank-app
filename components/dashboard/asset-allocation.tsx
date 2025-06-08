"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
  { name: "SOL", value: 40, color: "#00ff9d" },
  { name: "USDC", value: 30, color: "#2775ca" },
  { name: "BTC", value: 20, color: "#f7931a" },
  { name: "ETH", value: 10, color: "#627eea" },
]

export function AssetAllocation() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
        <CardDescription>Distribution of your portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            SOL: {
              label: "SOL",
              color: "#00ff9d",
            },
            USDC: {
              label: "USDC",
              color: "#2775ca",
            },
            BTC: {
              label: "BTC",
              color: "#f7931a",
            },
            ETH: {
              label: "ETH",
              color: "#627eea",
            },
          }}
          className="aspect-square w-full max-w-xs mx-auto"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <div className="text-sm text-gray-300">{item.name}</div>
              <div className="ml-auto text-sm font-medium">{item.value}%</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
