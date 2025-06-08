"use client"

import { useState } from "react"
import { Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfileDropdown } from "@/components/banking/profile-dropdown"
import { NotificationsPanel } from "@/components/banking/notifications-panel"

export function BankingHeader() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <header className="bg-navy-900 border-b border-navy-800 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-2 text-gray-400 hover:text-white"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">Toggle menu</span>
        </Button>
        <h1 className="text-xl font-semibold text-white">Knott Bank</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="sr-only">Notifications</span>
          </Button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-navy-800 rounded-md shadow-lg z-50 border border-navy-700">
              <NotificationsPanel onClose={() => setShowNotifications(false)} />
            </div>
          )}
        </div>

        <ProfileDropdown />
      </div>
    </header>
  )
}
