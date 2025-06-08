"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Check } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function LanguageSettings() {
  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Globe className="mr-2 h-5 w-5 text-green-400" />
          Language & Region
        </CardTitle>
        <CardDescription className="text-gray-400">Set your preferred language and regional settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-white text-sm font-medium mb-3">Language</h3>
            <RadioGroup defaultValue="english" className="space-y-3">
              <div className="flex items-center space-x-2 bg-navy-700 p-3 rounded-md border border-navy-600">
                <RadioGroupItem id="english" value="english" className="text-green-400" />
                <Label htmlFor="english" className="text-white flex-1">
                  English (US)
                </Label>
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <div className="flex items-center space-x-2 bg-navy-700/50 p-3 rounded-md border border-navy-600">
                <RadioGroupItem id="spanish" value="spanish" />
                <Label htmlFor="spanish" className="text-white flex-1">
                  Español
                </Label>
              </div>
              <div className="flex items-center space-x-2 bg-navy-700/50 p-3 rounded-md border border-navy-600">
                <RadioGroupItem id="french" value="french" />
                <Label htmlFor="french" className="text-white flex-1">
                  Français
                </Label>
              </div>
              <div className="flex items-center space-x-2 bg-navy-700/50 p-3 rounded-md border border-navy-600">
                <RadioGroupItem id="german" value="german" />
                <Label htmlFor="german" className="text-white flex-1">
                  Deutsch
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-3">Region</h3>
            <RadioGroup defaultValue="us" className="space-y-3">
              <div className="flex items-center space-x-2 bg-navy-700 p-3 rounded-md border border-navy-600">
                <RadioGroupItem id="us" value="us" className="text-green-400" />
                <Label htmlFor="us" className="text-white flex-1">
                  United States
                </Label>
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <div className="flex items-center space-x-2 bg-navy-700/50 p-3 rounded-md border border-navy-600">
                <RadioGroupItem id="canada" value="canada" />
                <Label htmlFor="canada" className="text-white flex-1">
                  Canada
                </Label>
              </div>
              <div className="flex items-center space-x-2 bg-navy-700/50 p-3 rounded-md border border-navy-600">
                <RadioGroupItem id="uk" value="uk" />
                <Label htmlFor="uk" className="text-white flex-1">
                  United Kingdom
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-end">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Save Preferences</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
