"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, ChevronRight } from "lucide-react"

export function HelpTopics() {
  const topics = [
    { title: "Account Management", count: 12 },
    { title: "Transfers & Payments", count: 18 },
    { title: "Cards & ATMs", count: 15 },
    { title: "Crypto & DeFi", count: 24 },
    { title: "Security & Privacy", count: 9 },
    { title: "Mobile Banking", count: 7 },
  ]

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <HelpCircle className="mr-2 h-5 w-5 text-green-400" />
          Help Topics
        </CardTitle>
        <CardDescription className="text-gray-400">Browse help by category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {topics.map((topic, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-3 rounded-md bg-navy-700 hover:bg-navy-600 transition-colors"
            >
              <span className="text-white">{topic.title}</span>
              <div className="flex items-center">
                <span className="text-xs text-gray-400 mr-2">{topic.count} articles</span>
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
