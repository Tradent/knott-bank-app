import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type LoginEvent = {
  id: string
  device: string
  location: string
  ip: string
  date: string
  status: "success" | "failed"
}

export function LoginHistory() {
  // Sample login history data
  const loginHistory: LoginEvent[] = [
    {
      id: "1",
      device: "Chrome on MacOS",
      location: "San Francisco, CA",
      ip: "192.168.1.1",
      date: "Today, 10:23 AM",
      status: "success",
    },
    {
      id: "2",
      device: "Mobile App on iOS",
      location: "San Francisco, CA",
      ip: "192.168.1.2",
      date: "Yesterday, 6:45 PM",
      status: "success",
    },
    {
      id: "3",
      device: "Firefox on Windows",
      location: "New York, NY",
      ip: "203.0.113.1",
      date: "Apr 10, 2:30 PM",
      status: "failed",
    },
    {
      id: "4",
      device: "Chrome on MacOS",
      location: "San Francisco, CA",
      ip: "192.168.1.1",
      date: "Apr 9, 9:15 AM",
      status: "success",
    },
  ]

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white">Login History</CardTitle>
        <CardDescription className="text-gray-400">Recent login activity on your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {loginHistory.map((login) => (
            <div
              key={login.id}
              className="flex items-start justify-between border-b border-navy-700 pb-3 last:border-0 last:pb-0"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-white">{login.device}</p>
                  <Badge
                    variant={login.status === "success" ? "outline" : "destructive"}
                    className={login.status === "success" ? "border-green-600 text-green-500" : ""}
                  >
                    {login.status === "success" ? "Success" : "Failed"}
                  </Badge>
                </div>
                <p className="text-xs text-gray-400">
                  {login.location} • {login.ip}
                </p>
                <p className="text-xs text-gray-500">{login.date}</p>
              </div>
              {login.status === "success" && login.id === "1" && (
                <Badge className="bg-green-600 text-white">Current</Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
