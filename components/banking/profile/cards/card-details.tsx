"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Shield, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CardDetails() {
  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <CreditCard className="mr-2 h-5 w-5 text-green-400" />
          Card Details
        </CardTitle>
        <CardDescription className="text-gray-400">View and manage your card information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-r from-navy-700 to-navy-600 rounded-xl p-6 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/10 rounded-full -ml-12 -mb-12"></div>

          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-xs text-gray-400 mb-1">Card Number</p>
              <p className="text-lg text-white font-mono">•••• •••• •••• 4582</p>
            </div>
            <div className="h-8 w-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded opacity-80"></div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-gray-400 mb-1">Card Holder</p>
              <p className="text-white">Demo User</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Expires</p>
              <p className="text-white">09/26</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Shield className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-white text-sm">Card Status</span>
            </div>
            <span className="text-green-400 text-sm">Active</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-white text-sm">Contactless Payments</span>
            </div>
            <span className="text-green-400 text-sm">Enabled</span>
          </div>

          <div className="pt-4 flex space-x-3">
            <Button variant="outline" className="border-navy-600 text-white hover:bg-navy-700 flex-1">
              Freeze Card
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white flex-1">Manage Card</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
