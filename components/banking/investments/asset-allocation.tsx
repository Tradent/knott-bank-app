"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

export function AssetAllocation() {
  const data = [
    { name: "Stocks", value: 28450.65, color: "#3b82f6" },
    { name: "Crypto", value: 8235.1, color: "#4ade97" },
    { name: "ETFs", value: 5901.0, color: "#a855f7" },
  ]

  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
        <CardDescription>Distribution of your investments</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            Stocks: {
              label: "Stocks",
              color: "#3b82f6",
            },
            Crypto: {
              label: "Crypto",
              color: "#4ade97",
            },
            ETFs: {
              label: "ETFs",
              color: "#a855f7",
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
        <div className="mt-4 space-y-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="text-sm text-gray-300">{item.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-white">
                  ${item.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-gray-400">{((item.value / total) * 100).toFixed(1)}%</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
