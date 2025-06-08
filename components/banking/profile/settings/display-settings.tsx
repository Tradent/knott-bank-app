"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Moon, Sun, Palette } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme/theme-context"
import { useState, useEffect } from "react"
import { toast } from "@/components/ui/use-toast"

export function DisplaySettings() {
  const { theme, accentColor, setTheme, setAccentColor } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)
  const [selectedAccent, setSelectedAccent] = useState(accentColor)
  const [isSaving, setIsSaving] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure we're mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    setSelectedTheme(theme)
    setSelectedAccent(accentColor)
  }, [theme, accentColor])

  if (!mounted) {
    return null
  }

  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call with a small delay
    setTimeout(() => {
      setTheme(selectedTheme)
      setAccentColor(selectedAccent)
      setIsSaving(false)

      toast({
        title: "Settings saved",
        description: "Your display preferences have been updated.",
      })
    }, 500)
  }

  return (
    <Card className="bg-navy-800 border-navy-700 dark:bg-navy-800 dark:border-navy-700 light:bg-white light:border-gray-200">
      <CardHeader>
        <CardTitle className="text-white dark:text-white light:text-navy-800 flex items-center">
          <Monitor className="mr-2 h-5 w-5 text-primary" />
          Display Settings
        </CardTitle>
        <CardDescription className="text-gray-400 dark:text-gray-400 light:text-gray-600">
          Customize the appearance of your banking dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-white dark:text-white light:text-navy-800 text-sm font-medium mb-3">Theme</h3>
            <RadioGroup
              value={selectedTheme}
              onValueChange={(value) => setSelectedTheme(value as "dark" | "light" | "system")}
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
            >
              <div
                className={`flex flex-col items-center space-y-2 p-4 rounded-md border transition-all ${
                  selectedTheme === "dark"
                    ? "bg-navy-700 border-primary"
                    : "bg-navy-700/50 border-navy-600 dark:border-navy-600 light:border-gray-300"
                }`}
              >
                <div className="h-20 w-full rounded bg-navy-900 flex items-center justify-center">
                  <Moon className={`h-8 w-8 ${selectedTheme === "dark" ? "text-primary" : "text-gray-400"}`} />
                </div>
                <RadioGroupItem id="dark" value="dark" className="sr-only" />
                <Label htmlFor="dark" className="text-white dark:text-white light:text-navy-800 cursor-pointer">
                  Dark Mode
                </Label>
              </div>

              <div
                className={`flex flex-col items-center space-y-2 p-4 rounded-md border transition-all ${
                  selectedTheme === "light"
                    ? "bg-navy-700 border-primary"
                    : "bg-navy-700/50 border-navy-600 dark:border-navy-600 light:border-gray-300"
                }`}
              >
                <div className="h-20 w-full rounded bg-white flex items-center justify-center">
                  <Sun className={`h-8 w-8 ${selectedTheme === "light" ? "text-primary" : "text-navy-800"}`} />
                </div>
                <RadioGroupItem id="light" value="light" className="sr-only" />
                <Label htmlFor="light" className="text-white dark:text-white light:text-navy-800 cursor-pointer">
                  Light Mode
                </Label>
              </div>

              <div
                className={`flex flex-col items-center space-y-2 p-4 rounded-md border transition-all ${
                  selectedTheme === "system"
                    ? "bg-navy-700 border-primary"
                    : "bg-navy-700/50 border-navy-600 dark:border-navy-600 light:border-gray-300"
                }`}
              >
                <div className="h-20 w-full rounded bg-gradient-to-r from-navy-900 to-white flex items-center justify-center">
                  <Monitor className={`h-8 w-8 ${selectedTheme === "system" ? "text-primary" : "text-navy-500"}`} />
                </div>
                <RadioGroupItem id="system" value="system" className="sr-only" />
                <Label htmlFor="system" className="text-white dark:text-white light:text-navy-800 cursor-pointer">
                  System Default
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-white dark:text-white light:text-navy-800 text-sm font-medium mb-3">Color Accent</h3>
            <RadioGroup
              value={selectedAccent}
              onValueChange={(value) => setSelectedAccent(value as "green" | "blue" | "purple" | "amber")}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              <div className="flex flex-col items-center space-y-2">
                <div
                  className={`h-12 w-12 rounded-full bg-green-500 flex items-center justify-center transition-all ${
                    selectedAccent === "green" ? "ring-2 ring-white" : ""
                  }`}
                >
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <RadioGroupItem id="green" value="green" className="sr-only" />
                <Label
                  htmlFor="green"
                  className="text-white dark:text-white light:text-navy-800 cursor-pointer text-xs"
                >
                  Green
                </Label>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div
                  className={`h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center transition-all ${
                    selectedAccent === "blue" ? "ring-2 ring-white" : ""
                  }`}
                >
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <RadioGroupItem id="blue" value="blue" className="sr-only" />
                <Label htmlFor="blue" className="text-white dark:text-white light:text-navy-800 cursor-pointer text-xs">
                  Blue
                </Label>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div
                  className={`h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center transition-all ${
                    selectedAccent === "purple" ? "ring-2 ring-white" : ""
                  }`}
                >
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <RadioGroupItem id="purple" value="purple" className="sr-only" />
                <Label
                  htmlFor="purple"
                  className="text-white dark:text-white light:text-navy-800 cursor-pointer text-xs"
                >
                  Purple
                </Label>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div
                  className={`h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center transition-all ${
                    selectedAccent === "amber" ? "ring-2 ring-white" : ""
                  }`}
                >
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <RadioGroupItem id="amber" value="amber" className="sr-only" />
                <Label
                  htmlFor="amber"
                  className="text-white dark:text-white light:text-navy-800 cursor-pointer text-xs"
                >
                  Amber
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              disabled={isSaving || (selectedTheme === theme && selectedAccent === accentColor)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isSaving ? "Saving..." : "Save Preferences"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
