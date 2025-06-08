"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Mail, Phone, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function GeneralSettings() {
  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Settings className="mr-2 h-5 w-5 text-green-400" />
          General Settings
        </CardTitle>
        <CardDescription className="text-gray-400">Manage your account information and preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  defaultValue="Demo"
                  className="bg-navy-700 border-navy-600 text-white focus:border-green-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  defaultValue="User"
                  className="bg-navy-700 border-navy-600 text-white focus:border-green-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white flex items-center">
                <Mail className="h-4 w-4 mr-2 text-green-400" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="demo@knottbank.com"
                className="bg-navy-700 border-navy-600 text-white focus:border-green-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white flex items-center">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="bg-navy-700 border-navy-600 text-white focus:border-green-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-white flex items-center">
                <Home className="h-4 w-4 mr-2 text-green-400" />
                Address
              </Label>
              <Input
                id="address"
                defaultValue="123 Financial St"
                className="bg-navy-700 border-navy-600 text-white focus:border-green-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-white">
                  City
                </Label>
                <Input
                  id="city"
                  defaultValue="San Francisco"
                  className="bg-navy-700 border-navy-600 text-white focus:border-green-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="text-white">
                  State
                </Label>
                <Input
                  id="state"
                  defaultValue="CA"
                  className="bg-navy-700 border-navy-600 text-white focus:border-green-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip" className="text-white">
                  ZIP Code
                </Label>
                <Input
                  id="zip"
                  defaultValue="94105"
                  className="bg-navy-700 border-navy-600 text-white focus:border-green-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Save Changes</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
