import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function UpcomingPayments() {
  const payments = [
    {
      id: "1",
      name: "Netflix Subscription",
      amount: "$14.99",
      date: "Jul 22, 2023",
      recurring: true,
      status: "scheduled",
    },
    {
      id: "2",
      name: "Apartment Rent",
      amount: "$1,850.00",
      date: "Aug 1, 2023",
      recurring: true,
      status: "scheduled",
    },
    {
      id: "3",
      name: "Car Insurance",
      amount: "$175.50",
      date: "Aug 5, 2023",
      recurring: true,
      status: "scheduled",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Upcoming Payments</CardTitle>
          <CardDescription>Scheduled payments and bills</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule New
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-4 bg-navy-800 rounded-lg">
              <div>
                <div className="font-medium text-white">{payment.name}</div>
                <div className="text-sm text-gray-400 mt-1">Due {payment.date}</div>
                {payment.recurring && <div className="text-xs text-gray-500 mt-1">Recurring payment</div>}
              </div>
              <div className="text-right">
                <div className="font-medium text-white">{payment.amount}</div>
                <div className="text-xs px-2 py-0.5 rounded bg-blue-400/20 text-blue-400 mt-2 inline-block">
                  {payment.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
