"use client"

import { useState } from "react"
import { Bell, CreditCard, ShieldAlert, ArrowDownLeft, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

type Notification = {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: "transaction" | "security" | "account" | "card"
}

interface NotificationsPanelProps {
  onClose: () => void
}

export function NotificationsPanel({ onClose }: NotificationsPanelProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "New Transaction",
      message: "You received $250.00 from John Smith",
      time: "5 minutes ago",
      read: false,
      type: "transaction",
    },
    {
      id: "2",
      title: "Security Alert",
      message: "New login detected from San Francisco, CA",
      time: "1 hour ago",
      read: false,
      type: "security",
    },
    {
      id: "3",
      title: "Card Update",
      message: "Your virtual card has been activated",
      time: "3 hours ago",
      read: true,
      type: "card",
    },
    {
      id: "4",
      title: "Account Update",
      message: "Your account statement is now available",
      time: "Yesterday",
      read: true,
      type: "account",
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const dismissNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "transaction":
        return <ArrowDownLeft className="text-green-500" size={18} />
      case "security":
        return <ShieldAlert className="text-red-500" size={18} />
      case "card":
        return <CreditCard className="text-blue-500" size={18} />
      case "account":
        return <Bell className="text-yellow-500" size={18} />
      default:
        return <Bell className="text-gray-500" size={18} />
    }
  }

  return (
    <div className="max-h-[70vh] overflow-hidden flex flex-col">
      <div className="p-4 border-b border-navy-700 flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="font-medium text-white">Notifications</h3>
          {unreadCount > 0 && (
            <span className="ml-2 bg-green-500 text-xs text-white px-2 py-0.5 rounded-full">{unreadCount} new</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-gray-400 hover:text-white"
              onClick={markAllAsRead}
            >
              <Check size={14} className="mr-1" />
              Mark all as read
            </Button>
          )}
          <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-white" onClick={onClose}>
            <X size={16} />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>

      <div className="overflow-y-auto" style={{ maxHeight: "calc(70vh - 60px)" }}>
        {notifications.length === 0 ? (
          <div className="p-6 text-center text-gray-400">
            <Bell size={24} className="mx-auto mb-2 opacity-50" />
            <p>No notifications</p>
          </div>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-4 border-b border-navy-700 hover:bg-navy-700 transition-colors ${
                  notification.read ? "opacity-70" : ""
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex">
                  <div className="mr-3 mt-0.5">{getIcon(notification.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h4 className={`font-medium ${notification.read ? "text-gray-300" : "text-white"}`}>
                        {notification.title}
                        {!notification.read && (
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                        )}
                      </h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5 text-gray-500 hover:text-white -mt-1 -mr-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          dismissNotification(notification.id)
                        }}
                      >
                        <X size={12} />
                        <span className="sr-only">Dismiss</span>
                      </Button>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="p-3 border-t border-navy-700">
        <Button
          variant="outline"
          className="w-full text-sm bg-navy-700 border-navy-600 hover:bg-navy-600 text-white"
          onClick={onClose}
        >
          View all notifications
        </Button>
      </div>
    </div>
  )
}
