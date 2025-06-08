import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Laptop, Smartphone, Trash2, Clock } from "lucide-react"

export function DeviceSettings() {
  const devices = [
    {
      id: "device-1",
      name: "MacBook Pro",
      type: "desktop",
      lastActive: "Active now",
      location: "New York, USA",
      browser: "Chrome 98.0.4758.102",
      os: "macOS 12.3.1",
    },
    {
      id: "device-2",
      name: "iPhone 13",
      type: "mobile",
      lastActive: "2 hours ago",
      location: "New York, USA",
      browser: "Safari 15.4",
      os: "iOS 15.4.1",
    },
    {
      id: "device-3",
      name: "Windows PC",
      type: "desktop",
      lastActive: "3 days ago",
      location: "Boston, USA",
      browser: "Firefox 99.0",
      os: "Windows 11",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Devices & Sessions</CardTitle>
        <CardDescription>Manage your connected devices and active sessions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {devices.map((device) => (
            <div key={device.id} className="p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    {device.type === "desktop" ? (
                      <Laptop className="h-4 w-4 text-green-400" />
                    ) : (
                      <Smartphone className="h-4 w-4 text-green-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">{device.name}</p>
                    <div className="flex items-center mt-1">
                      <Clock className="h-3 w-3 text-gray-400 mr-1" />
                      <p className="text-xs text-gray-400">{device.lastActive}</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{device.location}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {device.browser} • {device.os}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {device.lastActive !== "Active now" && (
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-400">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove device</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="pt-2">
            <Button variant="outline" className="w-full border-navy-700 hover:bg-navy-800 hover:text-red-400">
              Sign Out From All Devices
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
