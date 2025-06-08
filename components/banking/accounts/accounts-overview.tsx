"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, Plus, Landmark, Wallet, Briefcase, PiggyBank } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAccounts } from "@/hooks/use-accounts"

export function AccountsOverview() {
  const { accounts, isLoading, selectAccount } = useAccounts()

  // Add a "Add New Account" option to the accounts array
  const displayAccounts = [
    ...accounts,
    {
      id: "add-account",
      name: "Add New Account",
      balance: 0,
      type: "add",
      currency: "",
      isSelected: false,
    },
  ]

  const getAccountIcon = (type: string) => {
    switch (type) {
      case "checking":
        return <Landmark className="h-5 w-5 text-blue-400" />
      case "savings":
        return <PiggyBank className="h-5 w-5 text-purple-400" />
      case "crypto":
        return <Wallet className="h-5 w-5 text-green-400" />
      case "investment":
        return <Briefcase className="h-5 w-5 text-yellow-400" />
      case "add":
        return <Plus className="h-5 w-5 text-gray-400" />
      default:
        return <Landmark className="h-5 w-5 text-blue-400" />
    }
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="bg-navy-900 border-navy-800">
            <CardContent className="p-4">
              <div className="animate-pulse flex flex-col space-y-4">
                <div className="h-4 bg-navy-800 rounded w-3/4"></div>
                <div className="h-6 bg-navy-800 rounded w-1/2"></div>
                <div className="h-3 bg-navy-800 rounded w-1/4"></div>
                <div className="h-8 bg-navy-800 rounded w-full mt-4"></div>
                <div className="h-8 bg-navy-800 rounded w-full"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {displayAccounts.map((account) => (
        <Card
          key={account.id}
          className={cn(
            "bg-navy-900 border-navy-800 cursor-pointer transition-all hover:border-navy-600",
            account.isSelected && "border-green-400",
          )}
          onClick={() => selectAccount(account.id)}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-400 text-sm">{account.name}</h3>
                {account.type !== "add" && (
                  <>
                    <p className="text-xl font-semibold text-white">
                      {account.currency}{" "}
                      {account.balance.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <p className="text-xs text-gray-400">{account.accountNumber}</p>
                  </>
                )}
              </div>
              <div
                className={cn(
                  "p-2 rounded-full",
                  account.type === "checking"
                    ? "bg-blue-400/20"
                    : account.type === "savings"
                      ? "bg-purple-400/20"
                      : account.type === "crypto"
                        ? "bg-green-400/20"
                        : account.type === "investment"
                          ? "bg-yellow-400/20"
                          : "bg-gray-400/20",
                )}
              >
                {getAccountIcon(account.type)}
              </div>
            </div>

            {account.type === "add" ? (
              <div className="mt-4 flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-navy-700 hover:bg-navy-800 hover:text-green-400"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Account
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-navy-700 hover:bg-navy-800 hover:text-green-400"
                >
                  <ArrowUpRight className="h-4 w-4 mr-2" /> Send
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-navy-700 hover:bg-navy-800 hover:text-green-400"
                >
                  <ArrowDownLeft className="h-4 w-4 mr-2" /> Receive
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
