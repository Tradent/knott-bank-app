"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, User, Mail, Phone, MapPin, Check, X } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export function ProfileSettings() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    bio: "Crypto enthusiast and early adopter of decentralized finance solutions.",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    // In a real app, you would save the data to the backend here
    setIsEditing(false)
  }

  const handleCancel = () => {
    // Reset to original data
    setIsEditing(false)
  }

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Manage your personal information</CardDescription>
        </div>
        {!isEditing ? (
          <Button
            variant="outline"
            size="sm"
            className="border-navy-700 hover:bg-navy-800 hover:text-green-400"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="h-4 w-4 mr-2" /> Edit
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-navy-700 hover:bg-navy-800 hover:text-red-400"
              onClick={handleCancel}
            >
              <X className="h-4 w-4 mr-2" /> Cancel
            </Button>
            <Button size="sm" className="bg-green-400 text-navy-950 hover:bg-green-500" onClick={handleSave}>
              <Check className="h-4 w-4 mr-2" /> Save
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-32 h-32 bg-navy-800 rounded-full flex items-center justify-center mb-4 relative">
                <User className="h-16 w-16 text-gray-400" />
                {isEditing && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0 border-navy-700 bg-navy-800"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <p className="text-white font-medium">
                {profileData.firstName} {profileData.lastName}
              </p>
              <p className="text-sm text-gray-400">Member since 2022</p>
            </div>

            <div className="md:w-2/3 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
                    {isEditing ? (
                      <Input
                        id="firstName"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleInputChange}
                        className="bg-navy-800 border-navy-700"
                      />
                    ) : (
                      <p className="text-white">{profileData.firstName}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
                    {isEditing ? (
                      <Input
                        id="lastName"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleInputChange}
                        className="bg-navy-800 border-navy-700"
                      />
                    ) : (
                      <p className="text-white">{profileData.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    {isEditing ? (
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="bg-navy-800 border-navy-700"
                      />
                    ) : (
                      <p className="text-white">{profileData.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    {isEditing ? (
                      <Input
                        id="phone"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        className="bg-navy-800 border-navy-700"
                      />
                    ) : (
                      <p className="text-white">{profileData.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-1" />
                  {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      <Input
                        id="address"
                        name="address"
                        value={profileData.address}
                        onChange={handleInputChange}
                        className="bg-navy-800 border-navy-700 md:col-span-2"
                        placeholder="Street Address"
                      />
                      <Input
                        id="city"
                        name="city"
                        value={profileData.city}
                        onChange={handleInputChange}
                        className="bg-navy-800 border-navy-700"
                        placeholder="City"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          id="state"
                          name="state"
                          value={profileData.state}
                          onChange={handleInputChange}
                          className="bg-navy-800 border-navy-700"
                          placeholder="State"
                        />
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={profileData.zipCode}
                          onChange={handleInputChange}
                          className="bg-navy-800 border-navy-700"
                          placeholder="Zip Code"
                        />
                      </div>
                      <Input
                        id="country"
                        name="country"
                        value={profileData.country}
                        onChange={handleInputChange}
                        className="bg-navy-800 border-navy-700"
                        placeholder="Country"
                      />
                    </div>
                  ) : (
                    <div>
                      <p className="text-white">{profileData.address}</p>
                      <p className="text-white">
                        {profileData.city}, {profileData.state} {profileData.zipCode}
                      </p>
                      <p className="text-white">{profileData.country}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                {isEditing ? (
                  <Textarea
                    id="bio"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    className="bg-navy-800 border-navy-700 min-h-[80px]"
                  />
                ) : (
                  <p className="text-white">{profileData.bio}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
