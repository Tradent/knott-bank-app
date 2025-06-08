import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Device = {
  id: string
  name: string
  type: "desktop" | "mobile" | "tablet"
  lastActive: string
  location: string
  isCurrent: boolean
}

export function DeviceManagement() {
  // Sample devices data
  const devices: Device[] = [
    {
      id: "1",
      name: "MacBook Pro",
      type: "desktop",
      lastActive: "Now",
      location: "San Francisco, CA",
      isCurrent: true,
    },
    {
      id: "2",
      name: "iPhone 13",
      type: "mobile",
      lastActive: "Yesterday, 8:30 PM",
      location: "San Francisco, CA",
      isCurrent: false,
    },
    {
      id: "3",
      name: "iPad Pro",
      type: "tablet",
      lastActive: "Apr 8, 3:15 PM",
      location: "San Francisco, CA",
      isCurrent: false,
    },
  ]

  const getDeviceIcon = (type: Device["type"]) => {
    switch (type) {
      case "desktop":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-500"
          >
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
          </svg>
        )
      case "mobile":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-500"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
        )
      case "tablet":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-500"
          >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <line x1="12" x2="12.01" y1="18" y2="18" />
          </svg>
        )
    }
  }

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white">Device Management</CardTitle>
        <CardDescription className="text-gray-400">Manage devices that have access to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {devices.map((device) => (
            <div
              key={device.id}
              className="flex items-start justify-between border-b border-navy-700 pb-3 last:border-0 last:pb-0"
            >
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">{getDeviceIcon(device.type)}</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-white">{device.name}</p>
                    {device.isCurrent && <Badge className="bg-green-600 text-white">Current</Badge>}
                  </div>
                  <p className="text-xs text-gray-400">Last active: {device.lastActive}</p>
                  <p className="text-xs text-gray-500">{device.location}</p>
                </div>
              </div>
              {!device.isCurrent && (
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400 hover:bg-navy-700">
                  Remove
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
