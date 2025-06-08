"use client"

import { useState } from "react"
import Link from "next/link"
import { User, CreditCard, Bell, Settings, Shield, HelpCircle, LogOut, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme/theme-context"

export function ProfileDropdown() {
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-navy-950">
          <Avatar className="h-8 w-8 border border-navy-700">
            <AvatarImage src="/vibrant-street-market.png" alt="User" />
            <AvatarFallback className="bg-navy-800 text-green-500">DU</AvatarFallback>
          </Avatar>
          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-navy-900 border border-navy-700">
        <div className="flex items-center p-3">
          <Avatar className="h-10 w-10 mr-3 border border-navy-700">
            <AvatarImage src="/vibrant-street-market.png" alt="User" />
            <AvatarFallback className="bg-navy-800 text-green-500">DU</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-white dark:text-white light:text-navy-800">Demo User</p>
            <p className="text-xs text-gray-300">demo@knottbank.com</p>
          </div>
        </div>
        <DropdownMenuSeparator className="bg-navy-700" />
        <DropdownMenuItem asChild className="text-white hover:bg-navy-800 dark:text-white light:text-navy-800">
          <Link href="/banking/profile" className="flex items-center cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>My Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="text-white hover:bg-navy-800 dark:text-white light:text-navy-800">
          <Link href="/banking/profile/cards" className="flex items-center cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>My Cards</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="text-white hover:bg-navy-800 dark:text-white light:text-navy-800">
          <Link href="/banking/profile/notifications" className="flex items-center cursor-pointer">
            <Bell className="mr-2 h-4 w-4" />
            <span>Notifications</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="text-white hover:bg-navy-800 dark:text-white light:text-navy-800">
          <Link href="/banking/profile/settings" className="flex items-center cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="text-white hover:bg-navy-800 dark:text-white light:text-navy-800">
          <Link href="/banking/profile/security" className="flex items-center cursor-pointer">
            <Shield className="mr-2 h-4 w-4" />
            <span>Security</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="text-white hover:bg-navy-800 dark:text-white light:text-navy-800">
          <Link href="/banking/profile/help" className="flex items-center cursor-pointer">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help & Support</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-navy-700" />
        <DropdownMenuItem asChild className="hover:bg-navy-800">
          <Link href="/logout" className="flex items-center cursor-pointer text-red-500 hover:text-red-400">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
