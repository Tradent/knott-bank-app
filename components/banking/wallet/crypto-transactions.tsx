"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, RefreshCw, Filter, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CryptoTransactions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [dateRange, setDateRange] = useState("30days")

  const transactions = [
    {
      id: "1",
      type: "receive",
      icon: ArrowDownLeft,
      description: "Received BTC",
      amount: "+0.05 BTC",
      value: "$972.41",
      date: "Today, 10:45 AM",
      status: "completed",
      from: "External Wallet",
      to: "My Wallet",
    },
    {
      id: "2",
      type: "send",
      icon: ArrowUpRight,
      description: "Sent ETH",
      amount: "-0.25 ETH",
      value: "$473.33",
      date: "Yesterday, 3:30 PM",
      status: "completed",
      from: "My Wallet",
      to: "External Wallet",
    },
    {
      id: "3",
      type: "swap",
      icon: RefreshCw,
      description: "Swapped SOL to USDC",
      amount: "2.5 SOL → 420 USDC",
      value: "$420.00",
      date: "Yesterday, 1:15 PM",
      status: "completed",
      from: "SOL",
      to: "USDC",
    },
    {
      id: "4",
      type: "receive",
      icon: ArrowDownLeft,
      description: "Received SOL",
      amount: "+5.0 SOL",
      value: "$845.00",
      date: "Jul 12, 8:20 PM",
      status: "completed",
      from: "External Wallet",
      to: "My Wallet",
    },
    {
      id: "5",
      type: "send",
      icon: ArrowUpRight,
      description: "Sent USDC",
      amount: "-200 USDC",
      value: "$200.00",
      date: "Jul 10, 6:30 PM",
      status: "completed",
      from: "My Wallet",
      to: "External Wallet",
    },
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === "all" || transaction.type === filterType
    return matchesSearch && matchesFilter
  })

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Recent cryptocurrency transactions</CardDescription>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[140px] bg-navy-800 border-navy-700">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="border-navy-700 hover:bg-navy-800">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter transactions</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search transactions..."
              className="w-full bg-navy-800 border-navy-700 pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[140px] bg-navy-800 border-navy-700">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="receive">Received</SelectItem>
              <SelectItem value="send">Sent</SelectItem>
              <SelectItem value="swap">Swapped</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center gap-4">
                <div
                  className={cn(
                    "p-2 rounded-full",
                    transaction.type === "receive"
                      ? "bg-green-400/20"
                      : transaction.type === "send"
                        ? "bg-red-400/20"
                        : "bg-blue-400/20",
                  )}
                >
                  <transaction.icon
                    className={cn(
                      "h-5 w-5",
                      transaction.type === "receive"
                        ? "text-green-400"
                        : transaction.type === "send"
                          ? "text-red-400"
                          : "text-blue-400",
                    )}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-white">{transaction.description}</span>
                    <span
                      className={cn(
                        "ml-2 px-2 py-0.5 rounded text-xs",
                        transaction.type === "receive"
                          ? "bg-green-400/20 text-green-400"
                          : transaction.type === "send"
                            ? "bg-red-400/20 text-red-400"
                            : "bg-blue-400/20 text-blue-400",
                      )}
                    >
                      {transaction.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    From: {transaction.from} • To: {transaction.to}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-white">{transaction.amount}</div>
                  <div className="text-xs text-gray-400">{transaction.value}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">No transactions found matching your search criteria.</p>
            </div>
          )}
        </div>

        {filteredTransactions.length > 0 && (
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
              View All Transactions
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
