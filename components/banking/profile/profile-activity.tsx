"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownRight, ArrowUpRight, Clock, CreditCard, ShieldCheck } from "lucide-react"

export function ProfileActivity() {
  const activities = [
    {
      id: 1,
      type: "login",
      description: "Successful login from New York, USA",
      icon: <ShieldCheck className="h-5 w-5 text-green-400" />,
      time: "Today, 10:30 AM",
    },
    {
      id: 2,
      type: "transaction",
      description: "Sent $250 to Jane Smith",
      icon: <ArrowUpRight className="h-5 w-5 text-red-400" />,
      time: "Today, 9:15 AM",
    },
    {
      id: 3,
      type: "transaction",
      description: "Received $1,200 from Employer",
      icon: <ArrowDownRight className="h-5 w-5 text-green-400" />,
      time: "Yesterday, 3:45 PM",
    },
    {
      id: 4,
      type: "card",
      description: "Card ending in 4567 used at Amazon",
      icon: <CreditCard className="h-5 w-5 text-blue-400" />,
      time: "Yesterday, 1:30 PM",
    },
    {
      id: 5,
      type: "settings",
      description: "Changed account password",
      icon: <ShieldCheck className="h-5 w-5 text-yellow-400" />,
      time: "Aug 15, 2023, 5:20 PM",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Activity</CardTitle>
        <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800">
          <Clock className="h-4 w-4 mr-2" /> View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 pb-4 border-b border-navy-800 last:border-0 last:pb-0"
            >
              <div className="p-2 rounded-full bg-navy-800">{activity.icon}</div>
              <div className="flex-1">
                <p className="text-white">{activity.description}</p>
                <p className="text-sm text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

import { Button } from "@/components/ui/button"
