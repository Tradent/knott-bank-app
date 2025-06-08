"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { getSupabaseBrowserClient } from "@/lib/supabase"

export type CryptoAsset = {
  id: string
  name: string
  symbol: string
  balance: string
  value: string
  price: string
  change: string
  isPositive: boolean
  logo?: string
}

export function useCryptoAssets() {
  const [assets, setAssets] = useState<CryptoAsset[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const { user, isDemoMode } = useAuth()
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    const fetchCryptoAssets = async () => {
      if (!user) {
        setAssets([])
        setIsLoading(false)
        return
      }

      // If in demo mode, return mock data
      if (isDemoMode) {
        const mockAssets = [
          {
            id: "bitcoin",
            name: "Bitcoin",
            symbol: "BTC",
            balance: "0.18",
            value: "$3,500.67",
            price: "$19,448.17",
            change: "+2.4%",
            isPositive: true,
            logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
          },
          {
            id: "ethereum",
            name: "Ethereum",
            symbol: "ETH",
            balance: "0.75",
            value: "$1,420.00",
            price: "$1,893.33",
            change: "+5.2%",
            isPositive: true,
            logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
          },
          {
            id: "solana",
            name: "Solana",
            symbol: "SOL",
            balance: "12.45",
            value: "$2,100.00",
            price: "$168.67",
            change: "+8.7%",
            isPositive: true,
            logo: "https://cryptologos.cc/logos/solana-sol-logo.svg",
          },
          {
            id: "usdc",
            name: "USD Coin",
            symbol: "USDC",
            balance: "700.00",
            value: "$700.00",
            price: "$1.00",
            change: "0.0%",
            isPositive: true,
            logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg",
          },
        ]
        setAssets(mockAssets)
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        const { data, error } = await supabase.from("crypto_assets").select("*").eq("user_id", user.id)

        if (error) {
          throw error
        }

        // Transform the data to match our CryptoAsset type
        const formattedAssets = data.map((asset) => {
          const value = Number.parseFloat(asset.amount) * Number.parseFloat(asset.price_usd)
          // Generate a random change percentage between -10% and +10%
          const changePercent = (Math.random() * 20 - 10).toFixed(1)
          const isPositive = Number.parseFloat(changePercent) >= 0

          return {
            id: asset.id,
            name: asset.name,
            symbol: asset.symbol,
            balance: asset.amount.toString(),
            value: `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            price: `$${Number.parseFloat(asset.price_usd).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            change: `${isPositive ? "+" : ""}${changePercent}%`,
            isPositive,
            logo: `https://cryptologos.cc/logos/${asset.name.toLowerCase()}-${asset.symbol.toLowerCase()}-logo.svg`,
          }
        })

        setAssets(formattedAssets)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An unknown error occurred"))
        console.error("Error fetching crypto assets:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCryptoAssets()
  }, [user, isDemoMode, supabase])

  return {
    assets,
    isLoading,
    error,
  }
}
