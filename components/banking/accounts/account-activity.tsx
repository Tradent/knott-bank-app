"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowDownLeft, ArrowUpRight, CreditCard, RefreshCw, Filter, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AccountActivity() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [dateRange, setDateRange] = useState("30days")

  const transactions = [
    {
      id: "1",
      type: "deposit",
      icon: ArrowDownLeft,
      name: "Direct Deposit - Payroll",
      amount: "+$2,850.00",
      date: "Today, 10:45 AM",
      status: "completed",
      category: "income",
    },
    {
      id: "2",
      type: "payment",
      icon: ArrowUpRight,
      name: "Rent Payment",
      amount: "-$1,750.00",
      date: "Yesterday, 3:30 PM",
      status: "completed",
      category: "housing",
    },
    {
      id: "3",
      type: "transfer",
      icon: RefreshCw,
      name: "Transfer to Savings",
      amount: "-$500.00",
      date: "Yesterday, 1:15 PM",
      status: "completed",
      category: "transfer",
    },
    {
      id: "4",
      type: "payment",
      icon: CreditCard,
      name: "Amazon.com",
      amount: "-$79.99",
      date: "Jul 12, 8:20 PM",
      status: "completed",
      category: "shopping",
    },
    {
      id: "5",
      type: "payment",
      icon: CreditCard,
      name: "Grocery Store",
      amount: "-$125.30",
      date: "Jul 10, 6:30 PM",
      status: "completed",
      category: "groceries",
    },
    {
      id: "6",
      type: "payment",
      icon: CreditCard,
      name: "Gas Station",
      amount: "-$45.75",
      date: "Jul 8, 2:15 PM",
      status: "completed",
      category: "transportation",
    },
    {
      id: "7",
      type: "deposit",
      icon: ArrowDownLeft,
      name: "ATM Deposit",
      amount: "+$200.00",
      date: "Jul 5, 11:20 AM",
      status: "completed",
      category: "income",
    },
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === "all" || transaction.type === filterType
    return matchesSearch && matchesFilter
  })

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <CardTitle>Account Activity</CardTitle>
          <CardDescription>Recent transactions for your Primary Checking account</CardDescription>
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
              <SelectItem value="deposit">Deposits</SelectItem>
              <SelectItem value="payment">Payments</SelectItem>
              <SelectItem value="transfer">Transfers</SelectItem>
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
                    transaction.type === "deposit"
                      ? "bg-green-400/20"
                      : transaction.type === "payment"
                        ? "bg-red-400/20"
                        : "bg-blue-400/20",
                  )}
                >
                  <transaction.icon
                    className={cn(
                      "h-5 w-5",
                      transaction.type === "deposit"
                        ? "text-green-400"
                        : transaction.type === "payment"
                          ? "text-red-400"
                          : "text-blue-400",
                    )}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-white">{transaction.name}</span>
                    <span className="ml-2 px-2 py-0.5 rounded text-xs bg-navy-800 text-gray-300">
                      {transaction.category}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">{transaction.date}</div>
                </div>
                <div className="text-right">
                  <div
                    className={cn("font-medium", transaction.amount.startsWith("+") ? "text-green-400" : "text-white")}
                  >
                    {transaction.amount}
                  </div>
                  <div className="text-xs text-gray-400 capitalize">{transaction.status}</div>
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
