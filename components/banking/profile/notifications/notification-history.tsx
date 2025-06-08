"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Shield, CreditCard, AlertCircle, Check } from "lucide-react"

type NotificationType = "transaction" | "security" | "account" | "card"

interface Notification {
  id: string
  type: NotificationType
  title: string
  description: string
  time: string
  read: boolean
}

export function NotificationHistory() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "transaction",
      title: "Deposit Received",
      description: "You received a deposit of $1,250.00 from Bank of America",
      time: "Today, 10:45 AM",
      read: false,
    },
    {
      id: "2",
      type: "security",
      title: "New Login Detected",
      description: "A new login was detected from San Francisco, CA",
      time: "Yesterday, 8:30 PM",
      read: true,
    },
    {
      id: "3",
      type: "account",
      title: "Account Verification Complete",
      description: "Your account verification has been completed successfully",
      time: "Jul 15, 2:15 PM",
      read: true,
    },
    {
      id: "4",
      type: "card",
      title: "Card Transaction Alert",
      description: "Your card was used for a $79.99 purchase at Amazon.com",
      time: "Jul 12, 8:20 PM",
      read: false,
    },
    {
      id: "5",
      type: "security",
      title: "Password Changed",
      description: "Your account password was changed successfully",
      time: "Jul 10, 6:30 AM",
      read: true,
    },
  ])

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case "transaction":
        return <Bell className="h-5 w-5 text-blue-400" />
      case "security":
        return <Shield className="h-5 w-5 text-green-400" />
      case "account":
        return <AlertCircle className="h-5 w-5 text-yellow-400" />
      case "card":
        return <CreditCard className="h-5 w-5 text-purple-400" />
    }
  }

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-white">Notification History</CardTitle>
          <CardDescription className="text-gray-400">Your recent notifications</CardDescription>
        </div>
        <button
          className="text-sm text-green-400 hover:text-green-300 transition-colors"
          onClick={() => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))}
        >
          Mark all as read
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start space-x-4 p-3 rounded-lg ${
                notification.read ? "bg-navy-800" : "bg-navy-700"
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="mt-1">{getIcon(notification.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                  {!notification.read && (
                    <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">
                      New
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-400 mt-1">{notification.description}</p>
                <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
              </div>
              {notification.read && <Check className="h-4 w-4 text-gray-500 mt-1" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
