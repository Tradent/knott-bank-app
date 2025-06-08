"use client"

import type React from "react"

import { useState } from "react"
import { Bell, Check, Clock, CreditCard, DollarSign, ShieldCheck, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

// Add this after the imports
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`

type Notification = {
  id: string
  title: string
  description: string
  time: string
  read: boolean
  icon: React.ReactNode
  type: "transaction" | "security" | "account" | "card"
}

const initialNotifications: Notification[] = [
  {
    id: "1",
    title: "Payment Received",
    description: "You received $250.00 from John Doe",
    time: "Just now",
    read: false,
    icon: <DollarSign className="h-4 w-4 text-green-400" />,
    type: "transaction",
  },
  {
    id: "2",
    title: "Security Alert",
    description: "New login detected from San Francisco",
    time: "10 minutes ago",
    read: false,
    icon: <ShieldCheck className="h-4 w-4 text-yellow-400" />,
    type: "security",
  },
  {
    id: "3",
    title: "Card Transaction",
    description: "Your card was used for a $42.50 purchase",
    time: "1 hour ago",
    read: true,
    icon: <CreditCard className="h-4 w-4 text-blue-400" />,
    type: "card",
  },
  {
    id: "4",
    title: "Account Update",
    description: "Your account statement is ready to view",
    time: "Yesterday",
    read: true,
    icon: <Clock className="h-4 w-4 text-purple-400" />,
    type: "account",
  },
]

export function NotificationsPanel() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  const [open, setOpen] = useState(false)

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  return (
    <>
      <style jsx global>
        {scrollbarHideStyles}
      </style>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="relative border-navy-700">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            {unreadCount > 0 && <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-400" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80 bg-navy-900 border-navy-700">
          <div className="flex items-center justify-between p-2">
            <DropdownMenuLabel className="text-lg">Notifications</DropdownMenuLabel>
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={markAllAsRead}
                className="text-xs text-green-400 hover:text-green-300 hover:bg-navy-800"
              >
                Mark all as read
              </Button>
            )}
          </div>
          <DropdownMenuSeparator className="bg-navy-800" />
          <div className="max-h-[300px] overflow-y-auto scrollbar-hide">
            {notifications.length > 0 ? (
              <DropdownMenuGroup>
                {notifications.map((notification) => (
                  <div key={notification.id} className="relative">
                    <DropdownMenuItem
                      className={cn(
                        "flex items-start gap-3 p-3 cursor-default",
                        !notification.read && "bg-navy-800/50",
                      )}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="mt-0.5 rounded-full bg-navy-800 p-1">{notification.icon}</div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{notification.title}</p>
                        <p className="text-xs text-gray-400">{notification.description}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 hover:bg-navy-800 hover:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeNotification(notification.id)
                        }}
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Dismiss notification</span>
                      </Button>
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-2 h-5 w-5 rounded-full hover:bg-navy-800"
                          onClick={(e) => {
                            e.stopPropagation()
                            markAsRead(notification.id)
                          }}
                        >
                          <Check className="h-3 w-3" />
                          <span className="sr-only">Mark as read</span>
                        </Button>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-navy-800" />
                  </div>
                ))}
              </DropdownMenuGroup>
            ) : (
              <div className="flex flex-col items-center justify-center py-6 px-4">
                <Bell className="h-10 w-10 text-gray-500 mb-2" />
                <p className="text-sm text-gray-400">No notifications</p>
              </div>
            )}
          </div>
          <div className="p-2">
            <Button
              variant="outline"
              className="w-full border-navy-700 hover:bg-navy-800"
              onClick={() => setOpen(false)}
            >
              View all notifications
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
