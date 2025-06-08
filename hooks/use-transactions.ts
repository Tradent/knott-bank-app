"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { getSupabaseBrowserClient } from "@/lib/supabase"
import { ArrowDownLeft, ArrowUpRight, RefreshCw, CreditCard } from "lucide-react"

export type Transaction = {
  id: string
  type: "receive" | "send" | "swap" | "card"
  icon: typeof ArrowDownLeft | typeof ArrowUpRight | typeof RefreshCw | typeof CreditCard
  name: string
  amount: string
  date: string
  status: string
  category: "traditional" | "crypto"
}

export function useTransactions(limit?: number) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const { user, isDemoMode } = useAuth()
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!user) {
        setTransactions([])
        setIsLoading(false)
        return
      }

      // If in demo mode, return mock data
      if (isDemoMode) {
        const mockTransactions = [
          {
            id: "1",
            type: "receive" as const,
            icon: ArrowDownLeft,
            name: "Deposit from Bank",
            amount: "+$1,250.00",
            date: "Today, 10:45 AM",
            status: "completed",
            category: "traditional" as const,
          },
          {
            id: "2",
            type: "send" as const,
            icon: ArrowUpRight,
            name: "Payment to John Smith",
            amount: "-$350.00",
            date: "Yesterday, 3:30 PM",
            status: "completed",
            category: "traditional" as const,
          },
          {
            id: "3",
            type: "swap" as const,
            icon: RefreshCw,
            name: "USD to SOL Conversion",
            amount: "$500.00 → 5.2 SOL",
            date: "Yesterday, 1:15 PM",
            status: "completed",
            category: "crypto" as const,
          },
          {
            id: "4",
            type: "card" as const,
            icon: CreditCard,
            name: "Amazon.com",
            amount: "-$79.99",
            date: "Jul 12, 8:20 PM",
            status: "completed",
            category: "traditional" as const,
          },
          {
            id: "5",
            type: "receive" as const,
            icon: ArrowDownLeft,
            name: "SOL Staking Rewards",
            amount: "+0.12 SOL",
            date: "Jul 10, 6:30 AM",
            status: "completed",
            category: "crypto" as const,
          },
        ]
        setTransactions(limit ? mockTransactions.slice(0, limit) : mockTransactions)
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        let query = supabase
          .from("transactions")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })

        if (limit) {
          query = query.limit(limit)
        }

        const { data, error } = await query

        if (error) {
          throw error
        }

        // Transform the data to match our Transaction type
        const formattedTransactions = data.map((tx) => {
          let type: "receive" | "send" | "swap" | "card"
          let icon
          let category: "traditional" | "crypto"

          // Determine transaction type and icon
          if (tx.type.includes("deposit") || Number.parseFloat(tx.amount) > 0) {
            type = "receive"
            icon = ArrowDownLeft
          } else if (tx.type.includes("payment") || tx.type.includes("transfer")) {
            type = "send"
            icon = ArrowUpRight
          } else if (tx.type.includes("swap") || tx.type.includes("conversion")) {
            type = "swap"
            icon = RefreshCw
          } else {
            type = "card"
            icon = CreditCard
          }

          // Determine category
          category = tx.currency === "USD" ? "traditional" : "crypto"

          // Format amount
          const formattedAmount =
            tx.currency === "USD"
              ? `${Number.parseFloat(tx.amount) > 0 ? "+" : ""}$${Math.abs(Number.parseFloat(tx.amount)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
              : `${Number.parseFloat(tx.amount) > 0 ? "+" : ""}${Math.abs(Number.parseFloat(tx.amount)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })} ${tx.currency}`

          // Format date
          const date = new Date(tx.created_at)
          const now = new Date()
          const isToday = date.toDateString() === now.toDateString()
          const isYesterday = new Date(now.setDate(now.getDate() - 1)).toDateString() === date.toDateString()

          let formattedDate
          if (isToday) {
            formattedDate = `Today, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
          } else if (isYesterday) {
            formattedDate = `Yesterday, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
          } else {
            formattedDate = `${date.toLocaleDateString([], { month: "short", day: "numeric" })}, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
          }

          return {
            id: tx.id,
            type,
            icon,
            name: tx.description || "Transaction",
            amount: formattedAmount,
            date: formattedDate,
            status: tx.status,
            category,
          }
        })

        setTransactions(formattedTransactions)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An unknown error occurred"))
        console.error("Error fetching transactions:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTransactions()
  }, [user, isDemoMode, supabase, limit])

  return {
    transactions,
    isLoading,
    error,
  }
}
