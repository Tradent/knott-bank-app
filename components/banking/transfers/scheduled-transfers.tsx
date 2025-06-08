import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, RefreshCw, ArrowUpRight, Calendar, Edit, Trash2 } from "lucide-react"

export function ScheduledTransfers() {
  const scheduledTransfers = [
    {
      id: "1",
      description: "Rent Payment",
      amount: "$1,750.00",
      date: "Aug 1, 2023",
      recurring: true,
      frequency: "Monthly",
      type: "outgoing",
    },
    {
      id: "2",
      description: "Transfer to Savings",
      amount: "$500.00",
      date: "Jul 25, 2023",
      recurring: true,
      frequency: "Bi-weekly",
      type: "internal",
    },
    {
      id: "3",
      description: "Car Insurance",
      amount: "$175.50",
      date: "Aug 5, 2023",
      recurring: true,
      frequency: "Monthly",
      type: "outgoing",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Scheduled Transfers</CardTitle>
          <CardDescription>Upcoming and recurring transfers</CardDescription>
        </div>
        <Button variant="outline" size="icon" className="h-8 w-8 border-navy-700">
          <Calendar className="h-4 w-4" />
          <span className="sr-only">View calendar</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {scheduledTransfers.map((transfer) => (
            <div key={transfer.id} className="p-3 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-full ${transfer.type === "internal" ? "bg-blue-400/20" : "bg-red-400/20"}`}
                  >
                    {transfer.type === "internal" ? (
                      <RefreshCw className="h-4 w-4 text-blue-400" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-red-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{transfer.description}</h3>
                    <p className="text-sm text-white">{transfer.amount}</p>
                    <div className="flex items-center mt-1">
                      <Clock className="h-3 w-3 text-gray-400 mr-1" />
                      <p className="text-xs text-gray-400">
                        Next: {transfer.date}
                        {transfer.recurring && ` • ${transfer.frequency}`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit transfer</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Cancel transfer</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {scheduledTransfers.length === 0 && (
            <div className="text-center py-6">
              <p className="text-gray-400 mb-2">No scheduled transfers</p>
              <Button variant="outline" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
                Schedule a Transfer
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
