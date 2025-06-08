"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accessibility, Type, MousePointer, Clock } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function AccessibilitySettings() {
  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Accessibility className="mr-2 h-5 w-5 text-green-400" />
          Accessibility Settings
        </CardTitle>
        <CardDescription className="text-gray-400">Customize your experience for better accessibility</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Type className="h-4 w-4 text-green-400" />
                <Label htmlFor="text-size" className="text-white">
                  Text Size
                </Label>
              </div>
              <div className="w-1/2">
                <Slider id="text-size" defaultValue={[50]} max={100} step={10} className="w-full" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MousePointer className="h-4 w-4 text-green-400" />
                <Label htmlFor="cursor-size" className="text-white">
                  Cursor Size
                </Label>
              </div>
              <div className="w-1/2">
                <Slider id="cursor-size" defaultValue={[30]} max={100} step={10} className="w-full" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-400" />
                <Label htmlFor="animation-speed" className="text-white">
                  Animation Speed
                </Label>
              </div>
              <div className="w-1/2">
                <Slider id="animation-speed" defaultValue={[70]} max={100} step={10} className="w-full" />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="high-contrast" className="text-white block mb-1">
                  High Contrast Mode
                </Label>
                <p className="text-xs text-gray-400">Increase contrast for better visibility</p>
              </div>
              <Switch id="high-contrast" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="reduce-motion" className="text-white block mb-1">
                  Reduce Motion
                </Label>
                <p className="text-xs text-gray-400">Minimize animations and transitions</p>
              </div>
              <Switch id="reduce-motion" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="screen-reader" className="text-white block mb-1">
                  Screen Reader Optimization
                </Label>
                <p className="text-xs text-gray-400">Enhance compatibility with screen readers</p>
              </div>
              <Switch id="screen-reader" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Save Preferences</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
