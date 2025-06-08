"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

export function AppearanceSettings() {
  const [theme, setTheme] = useState("dark")

  const themes = [
    { id: "light", name: "Light", icon: Sun },
    { id: "dark", name: "Dark", icon: Moon },
    { id: "system", name: "System", icon: Monitor },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>Customize the look and feel of the application</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-white font-medium mb-3">Theme</h3>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((item) => (
                <Button
                  key={item.id}
                  variant="outline"
                  className={cn(
                    "flex flex-col items-center justify-center h-auto py-4 border-navy-700 hover:bg-navy-800",
                    theme === item.id && "border-green-400 bg-navy-800",
                  )}
                  onClick={() => setTheme(item.id)}
                >
                  <item.icon className={cn("h-5 w-5 mb-1", theme === item.id ? "text-green-400" : "text-gray-400")} />
                  <span className={cn("text-sm", theme === item.id ? "text-white" : "text-gray-400")}>{item.name}</span>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">Accent Color</h3>
            <div className="grid grid-cols-5 gap-2">
              {[
                { id: "green", color: "bg-green-400" },
                { id: "blue", color: "bg-blue-400" },
                { id: "purple", color: "bg-purple-400" },
                { id: "orange", color: "bg-orange-400" },
                { id: "pink", color: "bg-pink-400" },
              ].map((color) => (
                <button
                  key={color.id}
                  className={cn(
                    "h-10 rounded-full border-2 border-transparent",
                    color.id === "green" && "border-white",
                  )}
                >
                  <div className={cn("h-full w-full rounded-full", color.color)}></div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">Font Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "small", name: "Small" },
                { id: "medium", name: "Medium" },
                { id: "large", name: "Large" },
              ].map((size) => (
                <Button
                  key={size.id}
                  variant="outline"
                  className={cn(
                    "border-navy-700 hover:bg-navy-800",
                    size.id === "medium" && "border-green-400 bg-navy-800",
                  )}
                >
                  <span className={cn("text-sm", size.id === "medium" ? "text-white" : "text-gray-400")}>
                    {size.name}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Button className="w-full bg-green-400 text-navy-950 hover:bg-green-500">Apply Changes</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
