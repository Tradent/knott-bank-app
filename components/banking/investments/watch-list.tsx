"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function WatchList() {
  const [watchlist, setWatchlist] = useState([
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: "$182.52",
      change: "+1.25%",
      isPositive: true,
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      price: "$415.30",
      change: "+0.87%",
      isPositive: true,
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: "$177.35",
      change: "-2.15%",
      isPositive: false,
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: "$148.25",
      change: "+4.32%",
      isPositive: true,
    },
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$63,245.80",
      change: "+1.05%",
      isPositive: true,
    },
  ])

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Watch List</CardTitle>
          <CardDescription>Track assets you're interested in</CardDescription>
        </div>
        <Button variant="outline" size="icon" className="h-8 w-8 border-navy-700">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add to watchlist</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {watchlist.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-navy-800 rounded-md transition-colors"
            >
              <div>
                <div className="font-medium text-white">{item.symbol}</div>
                <div className="text-xs text-gray-400">{item.name}</div>
              </div>
              <div className="text-right">
                <div className="font-medium text-white">{item.price}</div>
                <div
                  className={cn(
                    "text-xs flex items-center justify-end",
                    item.isPositive ? "text-green-400" : "text-red-400",
                  )}
                >
                  {item.isPositive ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {item.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
