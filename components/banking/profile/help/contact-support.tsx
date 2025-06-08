"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageSquare, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSupport() {
  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <MessageSquare className="mr-2 h-5 w-5 text-green-400" />
          Contact Support
        </CardTitle>
        <CardDescription className="text-gray-400">Get help from our support team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start p-3 bg-navy-700 rounded-md">
            <Phone className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
            <div>
              <h4 className="text-white font-medium">Phone Support</h4>
              <p className="text-gray-400 text-sm mt-1">+1 (800) 555-1234</p>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <Clock className="h-3 w-3 mr-1" />
                <span>24/7 for Premium Members</span>
              </div>
            </div>
          </div>

          <div className="flex items-start p-3 bg-navy-700 rounded-md">
            <Mail className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
            <div>
              <h4 className="text-white font-medium">Email Support</h4>
              <p className="text-gray-400 text-sm mt-1">support@knottbank.com</p>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <Clock className="h-3 w-3 mr-1" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="flex items-start p-3 bg-navy-700 rounded-md">
            <MessageSquare className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
            <div>
              <h4 className="text-white font-medium">Live Chat</h4>
              <p className="text-gray-400 text-sm mt-1">Available in-app</p>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <Clock className="h-3 w-3 mr-1" />
                <span>9AM - 8PM EST, Mon-Fri</span>
              </div>
            </div>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-2">Start Live Chat</Button>
        </div>
      </CardContent>
    </Card>
  )
}
