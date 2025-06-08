"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Shield, Key, Smartphone, Fingerprint, Eye, EyeOff, AlertTriangle, Clock, Lock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function SecuritySettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwordFeedback, setPasswordFeedback] = useState("")

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value

    // Simple password strength calculation
    let strength = 0

    if (password.length > 0) strength += 20
    if (password.length >= 8) strength += 20
    if (/[A-Z]/.test(password)) strength += 20
    if (/[0-9]/.test(password)) strength += 20
    if (/[^A-Za-z0-9]/.test(password)) strength += 20

    setPasswordStrength(strength)

    // Feedback based on strength
    if (strength < 40) {
      setPasswordFeedback("Weak password")
    } else if (strength < 80) {
      setPasswordFeedback("Moderate password")
    } else {
      setPasswordFeedback("Strong password")
    }
  }

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-green-400" />
          <CardTitle>Security Settings</CardTitle>
        </div>
        <CardDescription>Manage your account security and authentication methods</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-navy-800 p-4 rounded-lg border border-navy-700">
            <h3 className="text-white font-medium flex items-center mb-2">
              <Key className="h-4 w-4 text-green-400 mr-2" /> Change Password
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showCurrentPassword ? "text" : "password"}
                    className="bg-navy-700 border-navy-600 pr-10"
                    placeholder="Enter your current password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    className="bg-navy-700 border-navy-600 pr-10"
                    placeholder="Enter your new password"
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {passwordStrength > 0 && (
                  <div className="space-y-1 mt-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">{passwordFeedback}</span>
                      <span className="text-xs text-gray-400">{passwordStrength}%</span>
                    </div>
                    <Progress
                      value={passwordStrength}
                      className="h-1 bg-navy-600"
                      indicatorClassName={
                        passwordStrength < 40 ? "bg-red-400" : passwordStrength < 80 ? "bg-yellow-400" : "bg-green-400"
                      }
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="bg-navy-700 border-navy-600 pr-10"
                    placeholder="Confirm your new password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button className="bg-green-400 text-navy-950 hover:bg-green-500">Update Password</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-medium">Two-Factor Authentication</h3>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-400/20 rounded-full">
                  <Smartphone className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Authenticator App</p>
                  <p className="text-sm text-gray-400">Use an authenticator app to generate verification codes</p>
                </div>
              </div>
              <Switch id="authenticator" defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-400/20 rounded-full">
                  <Smartphone className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">SMS Verification</p>
                  <p className="text-sm text-gray-400">Receive verification codes via SMS</p>
                </div>
              </div>
              <Switch id="sms" />
            </div>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-400/20 rounded-full">
                  <Fingerprint className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Biometric Authentication</p>
                  <p className="text-sm text-gray-400">Use fingerprint or face recognition</p>
                </div>
              </div>
              <Switch id="biometric" defaultChecked />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-medium">Additional Security</h3>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-400/20 rounded-full">
                  <AlertTriangle className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Login Notifications</p>
                  <p className="text-sm text-gray-400">Receive alerts for new login attempts</p>
                </div>
              </div>
              <Switch id="login-alerts" defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-400/20 rounded-full">
                  <Clock className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Auto-Logout</p>
                  <p className="text-sm text-gray-400">Automatically log out after 30 minutes of inactivity</p>
                </div>
              </div>
              <Switch id="auto-logout" defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-400/20 rounded-full">
                  <Lock className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Transaction PIN</p>
                  <p className="text-sm text-gray-400">Require PIN for all transactions</p>
                </div>
              </div>
              <Switch id="transaction-pin" />
            </div>
          </div>

          <Button variant="outline" className="w-full border-navy-700 hover:bg-navy-800 hover:text-green-400">
            <Shield className="h-4 w-4 mr-2" /> Security Checkup
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
