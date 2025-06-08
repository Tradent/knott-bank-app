"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useAuth } from "./auth-provider"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Mock wallet providers
const walletProviders = [
  {
    id: "phantom",
    name: "Phantom",
    icon: "🔮",
    color: "#AB9FF2",
  },
  {
    id: "solflare",
    name: "Solflare",
    icon: "🔆",
    color: "#FC822B",
  },
  {
    id: "metamask",
    name: "MetaMask",
    icon: "🦊",
    color: "#F6851B",
  },
]

export function WalletMultiButton() {
  const [open, setOpen] = useState(false)
  const [connecting, setConnecting] = useState<string | null>(null)
  const router = useRouter()
  const { signIn } = useAuth()

  const handleConnectWallet = async (providerId: string) => {
    setConnecting(providerId)

    try {
      // In a real app, this would connect to the actual wallet
      // For now, we'll simulate a delay and then sign in
      await new Promise((resolve) => setTimeout(resolve, 1500))
      await signIn("wallet")
      setOpen(false)
      router.push("/banking")
    } catch (error) {
      console.error("Wallet connection error:", error)
    } finally {
      setConnecting(null)
    }
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-green-400 text-navy-950 hover:bg-green-300">
        Connect Wallet
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-navy-900 border-navy-800">
          <DialogHeader>
            <DialogTitle>Connect Wallet</DialogTitle>
            <DialogDescription>Choose a wallet to connect to Knott Bank</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-4">
            {walletProviders.map((provider) => (
              <Button
                key={provider.id}
                variant="outline"
                className="w-full justify-start border-navy-700 hover:bg-navy-800"
                style={{
                  borderLeft: `4px solid ${provider.color}`,
                }}
                onClick={() => handleConnectWallet(provider.id)}
                disabled={connecting !== null}
              >
                <span className="mr-2 text-xl">{provider.icon}</span>
                <span>{provider.name}</span>
                {connecting === provider.id && (
                  <div className="ml-auto animate-spin rounded-full h-4 w-4 border-2 border-t-transparent border-white"></div>
                )}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
