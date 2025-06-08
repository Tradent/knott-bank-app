"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Briefcase, GraduationCapIcon as Graduation, Home, User } from "lucide-react"

export function ProfileDetails() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Profile Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid grid-cols-4 bg-navy-800">
            <TabsTrigger value="personal" className="data-[state=active]:bg-navy-700">
              <User className="h-4 w-4 mr-2" /> Personal
            </TabsTrigger>
            <TabsTrigger value="address" className="data-[state=active]:bg-navy-700">
              <Home className="h-4 w-4 mr-2" /> Address
            </TabsTrigger>
            <TabsTrigger value="employment" className="data-[state=active]:bg-navy-700">
              <Briefcase className="h-4 w-4 mr-2" /> Employment
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-navy-700">
              <Graduation className="h-4 w-4 mr-2" /> Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personal" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-gray-400">First Name</Label>
                <p className="text-white">John</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Last Name</Label>
                <p className="text-white">Doe</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Date of Birth</Label>
                <p className="text-white">January 15, 1985</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Gender</Label>
                <p className="text-white">Male</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Nationality</Label>
                <p className="text-white">United States</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Tax ID</Label>
                <p className="text-white">***-**-1234</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="address" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1 md:col-span-2">
                <Label className="text-gray-400">Street Address</Label>
                <p className="text-white">123 Main Street, Apt 4B</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">City</Label>
                <p className="text-white">New York</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">State</Label>
                <p className="text-white">NY</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Zip Code</Label>
                <p className="text-white">10001</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Country</Label>
                <p className="text-white">United States</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="employment" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-gray-400">Employer</Label>
                <p className="text-white">Tech Innovations Inc.</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Position</Label>
                <p className="text-white">Senior Software Engineer</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Employment Status</Label>
                <p className="text-white">Full-time</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Start Date</Label>
                <p className="text-white">March 2020</p>
              </div>
              <div className="space-y-1 md:col-span-2">
                <Label className="text-gray-400">Work Address</Label>
                <p className="text-white">456 Tech Plaza, New York, NY 10002</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="education" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-gray-400">Highest Degree</Label>
                <p className="text-white">Master's Degree</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Field of Study</Label>
                <p className="text-white">Computer Science</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Institution</Label>
                <p className="text-white">New York University</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400">Graduation Year</Label>
                <p className="text-white">2018</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
