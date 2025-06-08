"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "./auth-provider"

export function DemoModeBanner() {
  const { isDemoMode, exitDemoMode } = useAuth()

  if (!isDemoMode) return null

  return (
    <div className="bg-amber-500 text-navy-950 py-2 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="font-medium">Demo Mode</span>
        <span className="hidden sm:inline">- You're viewing Knott Bank with sample data</span>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          size="sm"
          variant="outline"
          className="border-navy-950 text-navy-950 hover:bg-amber-600 hover:text-navy-950"
          onClick={() => (window.location.href = "/auth/signup")}
        >
          Sign Up
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-navy-950 hover:bg-amber-600 hover:text-navy-950"
          onClick={exitDemoMode}
        >
          <X size={16} />
          <span className="sr-only">Exit Demo Mode</span>
        </Button>
      </div>
    </div>
  )
}
