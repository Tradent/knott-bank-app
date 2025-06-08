"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function PortfolioPerformance() {
  const [timeRange, setTimeRange] = useState("1M")

  // Sample data for different time ranges
  const data = {
    "1W": [
      { date: "Mon", value: 40250 },
      { date: "Tue", value: 40800 },
      { date: "Wed", value: 41200 },
      { date: "Thu", value: 40900 },
      { date: "Fri", value: 41500 },
      { date: "Sat", value: 42100 },
      { date: "Sun", value: 42586 },
    ],
    "1M": [
      { date: "Week 1", value: 38500 },
      { date: "Week 2", value: 39200 },
      { date: "Week 3", value: 40100 },
      { date: "Week 4", value: 42586 },
    ],
    "3M": [
      { date: "Jan", value: 35000 },
      { date: "Feb", value: 38000 },
      { date: "Mar", value: 42586 },
    ],
    "1Y": [
      { date: "Apr", value: 28000 },
      { date: "Jun", value: 30000 },
      { date: "Aug", value: 32000 },
      { date: "Oct", value: 36000 },
      { date: "Dec", value: 38000 },
      { date: "Feb", value: 40000 },
      { date: "Apr", value: 42586 },
    ],
    All: [
      { date: "2020", value: 15000 },
      { date: "2021", value: 25000 },
      { date: "2022", value: 32000 },
      { date: "2023", value: 42586 },
    ],
  }

  const timeRanges = ["1W", "1M", "3M", "1Y", "All"]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Portfolio Performance</CardTitle>
          <CardDescription>Track your investment growth over time</CardDescription>
        </div>
        <div className="flex space-x-2">
          {timeRanges.map((range) => (
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
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer
            config={{
              value: {
                label: "Value",
                color: "hsl(var(--chart-1))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data[timeRange as keyof typeof data]}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
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
          </ChartContainer>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "Starting Value", value: "$28,000.00", subtext: "1 year ago" },
            { label: "Current Value", value: "$42,586.75", subtext: "Today" },
            { label: "Total Return", value: "+$14,586.75", subtext: "+52.1%" },
            { label: "Annualized Return", value: "+52.1%", subtext: "vs. S&P 500: +24.3%" },
          ].map((stat, index) => (
            <div key={index} className="bg-navy-800 p-3 rounded-lg">
              <p className="text-xs text-gray-400">{stat.label}</p>
              <p className="text-lg font-medium text-white">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
