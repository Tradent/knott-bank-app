"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Camera, Edit, Mail, MapPin, Phone, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ProfileOverview() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Profile Overview</CardTitle>
        <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800">
          <Edit className="h-4 w-4 mr-2" /> Edit Profile
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="relative">
            <Avatar className="h-24 w-24 border-2 border-green-400">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="John Doe" />
              <AvatarFallback className="text-2xl bg-navy-800 text-green-400">JD</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-green-400 hover:bg-green-500 text-navy-950"
            >
              <Camera className="h-4 w-4" />
              <span className="sr-only">Change profile picture</span>
            </Button>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold text-white">John Doe</h3>
              <p className="text-gray-400">Premium Account Member</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge className="bg-green-400/20 text-green-400 hover:bg-green-400/30 border-none">Verified</Badge>
              <Badge className="bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 border-none">Premium</Badge>
              <Badge className="bg-purple-400/20 text-purple-400 hover:bg-purple-400/30 border-none">
                Early Adopter
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-white">john.doe@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-white">Member since 2022</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-white">New York, USA</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
