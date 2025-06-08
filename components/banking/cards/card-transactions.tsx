"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CreditCard, ShoppingBag, Coffee, Utensils, Fuel, Filter, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CardTransactions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [dateRange, setDateRange] = useState("30days")

  const transactions = [
    {
      id: "1",
      merchant: "Amazon.com",
      amount: "$79.99",
      date: "Today, 10:45 AM",
      status: "completed",
      category: "shopping",
      icon: ShoppingBag,
    },
    {
      id: "2",
      merchant: "Starbucks",
      amount: "$5.75",
      date: "Yesterday, 3:30 PM",
      status: "completed",
      category: "food",
      icon: Coffee,
    },
    {
      id: "3",
      merchant: "Grocery Store",
      amount: "$125.30",
      date: "Yesterday, 1:15 PM",
      status: "completed",
      category: "groceries",
      icon: ShoppingBag,
    },
    {
      id: "4",
      merchant: "Restaurant",
      amount: "$68.50",
      date: "Jul 12, 8:20 PM",
      status: "completed",
      category: "dining",
      icon: Utensils,
    },
    {
      id: "5",
      merchant: "Gas Station",
      amount: "$45.75",
      date: "Jul 10, 6:30 PM",
      status: "completed",
      category: "transportation",
      icon: Fuel,
    },
    {
      id: "6",
      merchant: "Netflix",
      amount: "$14.99",
      date: "Jul 8, 2:15 PM",
      status: "completed",
      category: "entertainment",
      icon: CreditCard,
    },
    {
      id: "7",
      merchant: "Target",
      amount: "$97.32",
      date: "Jul 5, 11:20 AM",
      status: "completed",
      category: "shopping",
      icon: ShoppingBag,
    },
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === "all" || transaction.category === filterType
    return matchesSearch && matchesFilter
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "shopping":
        return "bg-blue-400/20 text-blue-400"
      case "food":
      case "groceries":
      case "dining":
        return "bg-green-400/20 text-green-400"
      case "transportation":
        return "bg-yellow-400/20 text-yellow-400"
      case "entertainment":
        return "bg-purple-400/20 text-purple-400"
      default:
        return "bg-gray-400/20 text-gray-400"
    }
  }

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <CardTitle>Card Transactions</CardTitle>
          <CardDescription>Recent purchases made with your Knott Debit Card</CardDescription>
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
              placeholder="Search merchants..."
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
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="shopping">Shopping</SelectItem>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="groceries">Groceries</SelectItem>
              <SelectItem value="dining">Dining</SelectItem>
              <SelectItem value="transportation">Transportation</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center gap-4">
                <div className={cn("p-2 rounded-full", getCategoryColor(transaction.category))}>
                  <transaction.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-white">{transaction.merchant}</span>
                    <span className={cn("ml-2 px-2 py-0.5 rounded text-xs", getCategoryColor(transaction.category))}>
                      {transaction.category}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">{transaction.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-white">{transaction.amount}</div>
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
