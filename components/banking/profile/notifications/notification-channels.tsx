"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Smartphone } from "lucide-react"

interface Channel {
  id: string
  name: string
  icon: React.ReactNode
  active: boolean
  primary: boolean
}

export function NotificationChannels() {
  const [channels, setChannels] = useState<Channel[]>([
    {
      id: "email",
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      active: true,
      primary: true,
    },
    {
      id: "sms",
      name: "SMS",
      icon: <MessageSquare className="h-5 w-5" />,
      active: true,
      primary: false,
    },
    {
      id: "push",
      name: "Push Notifications",
      icon: <Smartphone className="h-5 w-5" />,
      active: false,
      primary: false,
    },
  ])

  const toggleChannel = (id: string) => {
    setChannels((prev) =>
      prev.map((channel) => (channel.id === id ? { ...channel, active: !channel.active } : channel)),
    )
  }

  const setPrimaryChannel = (id: string) => {
    setChannels((prev) =>
      prev.map((channel) => ({
        ...channel,
        primary: channel.id === id,
      })),
    )
  }

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white">Notification Channels</CardTitle>
        <CardDescription className="text-gray-400">Manage how you receive notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {channels.map((channel) => (
            <div key={channel.id} className="flex items-center justify-between p-3 rounded-lg bg-navy-700">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-600">{channel.icon}</div>
                <div>
                  <h4 className="text-sm font-medium text-white">{channel.name}</h4>
                  {channel.primary && <span className="text-xs text-green-400">Primary channel</span>}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className={`px-3 py-1 text-xs rounded-full ${
                    channel.active ? "bg-green-500/20 text-green-400" : "bg-gray-700 text-gray-400"
                  }`}
                  onClick={() => toggleChannel(channel.id)}
                >
                  {channel.active ? "Active" : "Inactive"}
                </button>
                {channel.active && !channel.primary && (
                  <button
                    className="text-xs text-gray-400 hover:text-white"
                    onClick={() => setPrimaryChannel(channel.id)}
                  >
                    Set as primary
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
