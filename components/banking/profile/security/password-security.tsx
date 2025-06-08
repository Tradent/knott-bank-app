"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function PasswordSecurity() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwordMatch, setPasswordMatch] = useState(true)

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setNewPassword(password)

    // Simple password strength calculation
    let strength = 0
    if (password.length >= 8) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1

    setPasswordStrength(strength)

    // Check if passwords match
    if (confirmPassword) {
      setPasswordMatch(password === confirmPassword)
    }
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPwd = e.target.value
    setConfirmPassword(confirmPwd)
    setPasswordMatch(newPassword === confirmPwd)
  }

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 0:
        return "bg-red-500"
      case 1:
        return "bg-red-500"
      case 2:
        return "bg-yellow-500"
      case 3:
        return "bg-green-500"
      case 4:
        return "bg-green-500"
      default:
        return "bg-gray-300"
    }
  }

  const getStrengthText = () => {
    switch (passwordStrength) {
      case 0:
        return "Very Weak"
      case 1:
        return "Weak"
      case 2:
        return "Medium"
      case 3:
        return "Strong"
      case 4:
        return "Very Strong"
      default:
        return ""
    }
  }

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white">Password Security</CardTitle>
        <CardDescription className="text-gray-400">
          Update your password and manage password security settings
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current-password" className="text-white">
            Current Password
          </Label>
          <Input
            id="current-password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="bg-navy-700 border-navy-600 text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="new-password" className="text-white">
            New Password
          </Label>
          <Input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="bg-navy-700 border-navy-600 text-white"
          />

          {newPassword && (
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-400">Password Strength:</span>
                <span className="text-sm text-white">{getStrengthText()}</span>
              </div>
              <div className="h-1 w-full bg-navy-700 rounded-full overflow-hidden">
                <div className={`h-full ${getStrengthColor()}`} style={{ width: `${passwordStrength * 25}%` }}></div>
              </div>
              <ul className="text-xs text-gray-400 mt-2 space-y-1">
                <li className={newPassword.length >= 8 ? "text-green-500" : ""}>• At least 8 characters</li>
                <li className={/[A-Z]/.test(newPassword) ? "text-green-500" : ""}>• At least one uppercase letter</li>
                <li className={/[0-9]/.test(newPassword) ? "text-green-500" : ""}>• At least one number</li>
                <li className={/[^A-Za-z0-9]/.test(newPassword) ? "text-green-500" : ""}>
                  • At least one special character
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password" className="text-white">
            Confirm New Password
          </Label>
          <Input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="bg-navy-700 border-navy-600 text-white"
          />
          {confirmPassword && !passwordMatch && <p className="text-sm text-red-500 mt-1">Passwords do not match</p>}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-green-600 hover:bg-green-700 text-white"
          disabled={!currentPassword || !newPassword || !confirmPassword || !passwordMatch || passwordStrength < 2}
        >
          Update Password
        </Button>
      </CardFooter>
    </Card>
  )
}
