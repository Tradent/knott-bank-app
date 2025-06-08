"use client"

import { Bell, Settings, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-navy-800 bg-navy-900 px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-white">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
        <Link href="/banking/profile">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback className="bg-navy-700 text-white">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  )
}
