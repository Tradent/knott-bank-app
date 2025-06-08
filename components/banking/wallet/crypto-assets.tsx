"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, ArrowDownLeft, Search, TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCryptoAssets } from "@/hooks/use-crypto-assets"

export function CryptoAssets() {
  const [searchTerm, setSearchTerm] = useState("")
  const { assets, isLoading } = useCryptoAssets()

  const filteredAssets = assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Assets</CardTitle>
          <CardDescription>Manage your cryptocurrency holdings</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
            <ArrowUpRight className="h-4 w-4 mr-2" /> Send
          </Button>
          <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
            <ArrowDownLeft className="h-4 w-4 mr-2" /> Receive
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search assets..."
            className="w-full bg-navy-800 border-navy-700 pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="grid grid-cols-12 items-center p-3 rounded-lg bg-navy-800">
                    <div className="col-span-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-navy-700 rounded-full"></div>
                      <div>
                        <div className="h-4 bg-navy-700 rounded w-20"></div>
                        <div className="h-3 bg-navy-700 rounded w-10 mt-1"></div>
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <div className="h-4 bg-navy-700 rounded w-12 ml-auto"></div>
                      <div className="h-3 bg-navy-700 rounded w-8 ml-auto mt-1"></div>
                    </div>
                    <div className="col-span-2 text-right">
                      <div className="h-4 bg-navy-700 rounded w-16 ml-auto"></div>
                    </div>
                    <div className="col-span-2 text-right">
                      <div className="h-4 bg-navy-700 rounded w-14 ml-auto"></div>
                      <div className="h-3 bg-navy-700 rounded w-10 ml-auto mt-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredAssets.length > 0 ? (
            <>
              <div className="grid grid-cols-12 text-xs text-gray-400 px-2">
                <div className="col-span-6">Asset</div>
                <div className="col-span-2 text-right">Balance</div>
                <div className="col-span-2 text-right">Value</div>
                <div className="col-span-2 text-right">Price</div>
              </div>

              {filteredAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="grid grid-cols-12 items-center p-3 rounded-lg hover:bg-navy-800 transition-colors"
                >
                  <div className="col-span-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <img src={asset.logo || "/placeholder.svg"} alt={asset.name} className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{asset.name}</div>
                      <div className="text-xs text-gray-400">{asset.symbol}</div>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    <div className="font-medium text-white">{asset.balance}</div>
                    <div className="text-xs text-gray-400">{asset.symbol}</div>
                  </div>
                  <div className="col-span-2 text-right">
                    <div className="font-medium text-white">{asset.value}</div>
                  </div>
                  <div className="col-span-2 text-right">
                    <div className="font-medium text-white">{asset.price}</div>
                    <div
                      className={cn(
                        "text-xs flex items-center justify-end",
                        asset.isPositive ? "text-green-400" : "text-red-400",
                      )}
                    >
                      {asset.isPositive ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {asset.change}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">No assets found matching your search criteria.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
