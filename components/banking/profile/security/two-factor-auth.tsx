"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function TwoFactorAuth() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [showQRCode, setShowQRCode] = useState(false)
  const [verificationMethod, setVerificationMethod] = useState<"app" | "sms">("app")

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white">Two-Factor Authentication</CardTitle>
        <CardDescription className="text-gray-400">Add an extra layer of security to your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-white">Enable Two-Factor Authentication</Label>
            <p className="text-sm text-gray-400">Require a verification code when signing in</p>
          </div>
          <Switch
            checked={twoFactorEnabled}
            onCheckedChange={setTwoFactorEnabled}
            className="data-[state=checked]:bg-green-600"
          />
        </div>

        {twoFactorEnabled && (
          <>
            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-medium text-white">Verification Method</h4>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className={`p-4 border rounded-lg cursor-pointer ${
                    verificationMethod === "app" ? "border-green-600 bg-navy-700" : "border-navy-600 bg-navy-900"
                  }`}
                  onClick={() => setVerificationMethod("app")}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                        <path d="M12 18h.01" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Authenticator App</h5>
                      <p className="text-xs text-gray-400">Google or Microsoft Authenticator</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-4 border rounded-lg cursor-pointer ${
                    verificationMethod === "sms" ? "border-green-600 bg-navy-700" : "border-navy-600 bg-navy-900"
                  }`}
                  onClick={() => setVerificationMethod("sms")}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium text-white">SMS Verification</h5>
                      <p className="text-xs text-gray-400">Text message to your phone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {verificationMethod === "app" && !showQRCode && (
              <Button onClick={() => setShowQRCode(true)} className="bg-green-600 hover:bg-green-700 text-white w-full">
                Set Up Authenticator App
              </Button>
            )}

            {verificationMethod === "app" && showQRCode && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg w-48 h-48 mx-auto flex items-center justify-center">
                  <div className="text-center text-black">QR Code Placeholder</div>
                </div>
                <p className="text-sm text-gray-400 text-center">Scan this QR code with your authenticator app</p>
              </div>
            )}

            {verificationMethod === "sms" && (
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Set Up SMS Verification</Button>
            )}
          </>
        )}
      </CardContent>
      {twoFactorEnabled && (
        <CardFooter className="border-t border-navy-700 pt-4">
          <div className="w-full">
            <h4 className="text-sm font-medium text-white mb-2">Recovery Codes</h4>
            <p className="text-xs text-gray-400 mb-3">
              Save these recovery codes in a secure place to use if you lose access to your authentication device.
            </p>
            <Button variant="outline" className="w-full border-navy-600 text-white hover:bg-navy-700">
              View Recovery Codes
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
