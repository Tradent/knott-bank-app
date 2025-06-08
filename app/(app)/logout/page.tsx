"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // In a real app, you would call your logout API here
    const logoutTimer = setTimeout(() => {
      router.push("/auth/signin")
    }, 2000)

    return () => clearTimeout(logoutTimer)
  }, [router])

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center">
      <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mb-6">
        <LogOut className="h-8 w-8 text-green-400" />
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Signing Out</h1>
      <p className="text-gray-400">Thank you for using Knott Bank</p>
      <div className="mt-8 w-16 h-1 bg-navy-800 relative overflow-hidden rounded-full">
        <div className="absolute top-0 left-0 h-full bg-green-500 animate-progress"></div>
      </div>
    </div>
  )
}
