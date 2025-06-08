"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { getSupabaseBrowserClient } from "@/lib/supabase"

export type Account = {
  id: string
  name: string
  balance: number
  accountNumber?: string
  type: string
  currency: string
  isSelected?: boolean
  isDefault?: boolean
}

export function useAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const { user, isDemoMode } = useAuth()
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    const fetchAccounts = async () => {
      if (!user) {
        setAccounts([])
        setIsLoading(false)
        return
      }

      // If in demo mode, return mock data
      if (isDemoMode) {
        const mockAccounts = [
          {
            id: "checking",
            name: "Primary Checking",
            balance: 4285.65,
            accountNumber: "•••• 4582",
            type: "checking",
            currency: "USD",
            isSelected: true,
            isDefault: true,
          },
          {
            id: "savings",
            name: "High-Yield Savings",
            balance: 12580.0,
            accountNumber: "•••• 7891",
            type: "savings",
            currency: "USD",
            isSelected: false,
            isDefault: false,
          },
          {
            id: "crypto",
            name: "Crypto Wallet",
            balance: 7720.67,
            accountNumber: "0x89...4e21",
            type: "crypto",
            currency: "USD",
            isSelected: false,
            isDefault: false,
          },
          {
            id: "investment",
            name: "Investment Account",
            balance: 42586.75,
            accountNumber: "•••• 3456",
            type: "investment",
            currency: "USD",
            isSelected: false,
            isDefault: false,
          },
        ]
        setAccounts(mockAccounts)
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        const { data, error } = await supabase
          .from("accounts")
          .select("*")
          .eq("user_id", user.id)
          .order("is_default", { ascending: false })

        if (error) {
          throw error
        }

        // Transform the data to match our Account type
        const formattedAccounts = data.map((account) => ({
          id: account.id,
          name: account.name,
          balance: Number.parseFloat(account.balance),
          accountNumber: `•••• ${Math.floor(1000 + Math.random() * 9000)}`, // Mock account number
          type: account.type,
          currency: account.currency,
          isSelected: account.is_default,
          isDefault: account.is_default,
        }))

        setAccounts(formattedAccounts)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An unknown error occurred"))
        console.error("Error fetching accounts:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAccounts()
  }, [user, isDemoMode, supabase])

  const selectAccount = (id: string) => {
    setAccounts(
      accounts.map((account) => ({
        ...account,
        isSelected: account.id === id,
      })),
    )
  }

  const addAccount = async (accountData: Omit<Account, "id" | "isSelected">) => {
    if (!user) return null

    if (isDemoMode) {
      // For demo mode, just add to the local state
      const newAccount = {
        ...accountData,
        id: `new-${Date.now()}`,
        isSelected: false,
      }
      setAccounts([...accounts, newAccount])
      return newAccount
    }

    try {
      const { data, error } = await supabase
        .from("accounts")
        .insert([
          {
            user_id: user.id,
            name: accountData.name,
            balance: accountData.balance,
            type: accountData.type,
            currency: accountData.currency,
            is_default: accountData.isDefault || false,
          },
        ])
        .select()
        .single()

      if (error) throw error

      const newAccount = {
        id: data.id,
        name: data.name,
        balance: Number.parseFloat(data.balance),
        accountNumber: `•••• ${Math.floor(1000 + Math.random() * 9000)}`,
        type: data.type,
        currency: data.currency,
        isSelected: false,
        isDefault: data.is_default,
      }

      setAccounts([...accounts, newAccount])
      return newAccount
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An unknown error occurred"))
      console.error("Error adding account:", err)
      return null
    }
  }

  return {
    accounts,
    isLoading,
    error,
    selectAccount,
    addAccount,
  }
}
