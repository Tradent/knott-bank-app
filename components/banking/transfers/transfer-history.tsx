"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, RefreshCw, Globe, Filter, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TransferHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [dateRange, setDateRange] = useState("30days")

  const transfers = [
    {
      id: "1",
      type: "internal",
      icon: RefreshCw,
      description: "Transfer to Savings",
      amount: "$500.00",
      date: "Today, 10:45 AM",
      status: "completed",
      from: "Primary Checking",
      to: "High-Yield Savings",
    },
    {
      id: "2",
      type: "outgoing",
      icon: ArrowUpRight,
      description: "Sent to John Smith",
      amount: "$350.00",
      date: "Yesterday, 3:30 PM",
      status: "completed",
      from: "Primary Checking",
      to: "External - John Smith",
    },
    {
      id: "3",
      type: "incoming",
      icon: ArrowDownLeft,
      description: "Received from Sarah Johnson",
      amount: "$125.00",
      date: "Yesterday, 1:15 PM",
      status: "completed",
      from: "External - Sarah Johnson",
      to: "Primary Checking",
    },
    {
      id: "4",
      type: "internal",
      icon: RefreshCw,
      description: "Transfer to Crypto Wallet",
      amount: "$1,000.00",
      date: "Jul 12, 8:20 PM",
      status: "completed",
      from: "Primary Checking",
      to: "Crypto Wallet",
    },
    {
      id: "5",
      type: "international",
      icon: Globe,
      description: "International Transfer to UK",
      amount: "$600.00",
      date: "Jul 10, 6:30 PM",
      status: "completed",
      from: "Primary Checking",
      to: "External - James Wilson (UK)",
    },
    {
      id: "6",
      type: "outgoing",
      icon: ArrowUpRight,
      description: "Sent to Mike Williams",
      amount: "$75.50",
      date: "Jul 8, 2:15 PM",
      status: "completed",
      from: "Primary Checking",
      to: "External - Mike Williams",
    },
    {
      id: "7",
      type: "incoming",
      icon: ArrowDownLeft,
      description: "Received from Payroll",
      amount: "$2,850.00",
      date: "Jul 5, 11:20 AM",
      status: "completed",
      from: "External - XYZ Company",
      to: "Primary Checking",
    },
  ]

  const filteredTransfers = transfers.filter((transfer) => {
    const matchesSearch = transfer.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === "all" || transfer.type === filterType
    return matchesSearch && matchesFilter
  })

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <CardTitle>Transfer History</CardTitle>
          <CardDescription>Recent money transfers</CardDescription>
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
            <span className="sr-only">Filter transfers</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search transfers..."
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
              <SelectItem value="internal">Internal</SelectItem>
              <SelectItem value="outgoing">Outgoing</SelectItem>
              <SelectItem value="incoming">Incoming</SelectItem>
              <SelectItem value="international">International</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {filteredTransfers.length > 0 ? (
            filteredTransfers.map((transfer) => (
              <div key={transfer.id} className="flex items-center gap-4">
                <div
                  className={cn(
                    "p-2 rounded-full",
                    transfer.type === "internal"
                      ? "bg-blue-400/20"
                      : transfer.type === "outgoing"
                        ? "bg-red-400/20"
                        : transfer.type === "incoming"
                          ? "bg-green-400/20"
                          : "bg-purple-400/20",
                  )}
                >
                  <transfer.icon
                    className={cn(
                      "h-5 w-5",
                      transfer.type === "internal"
                        ? "text-blue-400"
                        : transfer.type === "outgoing"
                          ? "text-red-400"
                          : transfer.type === "incoming"
                            ? "text-green-400"
                            : "text-purple-400",
                    )}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-white">{transfer.description}</span>
                    <span
                      className={cn(
                        "ml-2 px-2 py-0.5 rounded text-xs",
                        transfer.type === "internal"
                          ? "bg-blue-400/20 text-blue-400"
                          : transfer.type === "outgoing"
                            ? "bg-red-400/20 text-red-400"
                            : transfer.type === "incoming"
                              ? "bg-green-400/20 text-green-400"
                              : "bg-purple-400/20 text-purple-400",
                      )}
                    >
                      {transfer.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    From: {transfer.from} • To: {transfer.to}
                  </div>
                </div>
                <div className="text-right">
                  <div className={cn("font-medium", transfer.type === "incoming" ? "text-green-400" : "text-white")}>
                    {transfer.amount}
                  </div>
                  <div className="text-xs text-gray-400">{transfer.date}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">No transfers found matching your search criteria.</p>
            </div>
          )}
        </div>

        {filteredTransfers.length > 0 && (
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
              View All Transfers
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
