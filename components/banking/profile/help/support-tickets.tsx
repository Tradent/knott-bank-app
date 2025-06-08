"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Ticket, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function SupportTickets() {
  const tickets = [
    {
      id: "T-7829",
      subject: "Card Declined Transaction",
      status: "open",
      priority: "high",
      updated: "2 hours ago",
    },
    {
      id: "T-7814",
      subject: "International Transfer Inquiry",
      status: "in-progress",
      priority: "medium",
      updated: "1 day ago",
    },
    {
      id: "T-7802",
      subject: "Account Statement Request",
      status: "resolved",
      priority: "low",
      updated: "3 days ago",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Open</Badge>
      case "in-progress":
        return <Badge className="bg-amber-500 hover:bg-amber-600">In Progress</Badge>
      case "resolved":
        return <Badge className="bg-green-500 hover:bg-green-600">Resolved</Badge>
      default:
        return null
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-4 w-4 text-red-400" />
      case "medium":
        return <Clock className="h-4 w-4 text-amber-400" />
      case "low":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      default:
        return null
    }
  }

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-white flex items-center">
            <Ticket className="mr-2 h-5 w-5 text-green-400" />
            Support Tickets
          </CardTitle>
          <CardDescription className="text-gray-400">Track your support requests</CardDescription>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Ticket
        </Button>
      </CardHeader>
      <CardContent>
        {tickets.length > 0 ? (
          <div className="space-y-3">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between p-4 bg-navy-700 rounded-md border border-navy-600"
              >
                <div className="flex items-center">
                  {getPriorityIcon(ticket.priority)}
                  <div className="ml-3">
                    <p className="text-white font-medium">{ticket.subject}</p>
                    <div className="flex items-center text-xs text-gray-400 mt-1">
                      <span className="mr-2">#{ticket.id}</span>
                      <span>Updated {ticket.updated}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">{getStatusBadge(ticket.status)}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Ticket className="h-12 w-12 text-gray-500 mx-auto mb-3" />
            <p className="text-white">No support tickets found</p>
            <p className="text-gray-400 text-sm mt-1">Create a new ticket for assistance</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
