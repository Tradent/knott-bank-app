"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

export function AssetBreakdown() {
  const traditionalData = [
    { name: "Checking", value: 4285.65, color: "#4299e1" },
    { name: "Savings", value: 12580.0, color: "#3182ce" },
    { name: "CDs", value: 5000.0, color: "#2c5282" },
  ]

  const cryptoData = [
    { name: "SOL", value: 3500.67, color: "#4ade97" },
    { name: "BTC", value: 2800.0, color: "#f7931a" },
    { name: "ETH", value: 1420.0, color: "#627eea" },
  ]

  const totalTraditional = traditionalData.reduce((sum, item) => sum + item.value, 0)
  const totalCrypto = cryptoData.reduce((sum, item) => sum + item.value, 0)
  const grandTotal = totalTraditional + totalCrypto

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value)
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-navy-800 p-2 border border-navy-700 rounded-md">
          <p className="text-white font-medium">{payload[0].name}</p>
          <p className="text-green-400">{formatCurrency(payload[0].value)}</p>
          <p className="text-gray-400 text-xs">{((payload[0].value / grandTotal) * 100).toFixed(1)}% of total</p>
        </div>
      )
    }
    return null
  }

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Asset Breakdown</CardTitle>
        <CardDescription>Distribution of your financial assets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="bg-navy-800 border border-navy-700">
            <TabsTrigger value="all" className="data-[state=active]:bg-navy-700">
              All Assets
            </TabsTrigger>
            <TabsTrigger value="traditional" className="data-[state=active]:bg-navy-700">
              Traditional
            </TabsTrigger>
            <TabsTrigger value="crypto" className="data-[state=active]:bg-navy-700">
              Crypto
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Traditional", value: totalTraditional, color: "#3182ce" },
                        { name: "Crypto", value: totalCrypto, color: "#4ade97" },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {[
                        { name: "Traditional", value: totalTraditional, color: "#3182ce" },
                        { name: "Crypto", value: totalCrypto, color: "#4ade97" },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Total Assets</h3>
                  <p className="text-2xl font-bold text-white">{formatCurrency(grandTotal)}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#3182ce] mr-2"></div>
                      <span className="text-gray-300">Traditional</span>
                    </div>
                    <div className="text-white font-medium">{formatCurrency(totalTraditional)}</div>
                    <div className="text-gray-400">{((totalTraditional / grandTotal) * 100).toFixed(1)}%</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#4ade97] mr-2"></div>
                      <span className="text-gray-300">Crypto</span>
                    </div>
                    <div className="text-white font-medium">{formatCurrency(totalCrypto)}</div>
                    <div className="text-gray-400">{((totalCrypto / grandTotal) * 100).toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="traditional" className="mt-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={traditionalData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {traditionalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Traditional Assets</h3>
                  <p className="text-2xl font-bold text-white">{formatCurrency(totalTraditional)}</p>
                </div>

                <div className="space-y-2">
                  {traditionalData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} mr-2></div>
                        <span className="text-gray-300">{item.name}</span>
                      </div>
                      <div className="text-white font-medium">{formatCurrency(item.value)}</div>
                      <div className="text-gray-400">{((item.value / totalTraditional) * 100).toFixed(1)}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="crypto" className="mt-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={cryptoData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {cryptoData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Crypto Assets</h3>
                  <p className="text-2xl font-bold text-white">{formatCurrency(totalCrypto)}</p>
                </div>

                <div className="space-y-2">
                  {cryptoData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} mr-2></div>
                        <span className="text-gray-300">{item.name}</span>
                      </div>
                      <div className="text-white font-medium">{formatCurrency(item.value)}</div>
                      <div className="text-gray-400">{((item.value / totalCrypto) * 100).toFixed(1)}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
