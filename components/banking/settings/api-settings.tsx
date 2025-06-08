"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Code, Copy, Eye, EyeOff, Plus, RefreshCw, Trash2 } from "lucide-react"

export function ApiSettings() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [apiKeys, setApiKeys] = useState([
    {
      id: "key-1",
      name: "Development API Key",
      key: "kb_dev_a1b2c3d4e5f6g7h8i9j0",
      created: "May 15, 2023",
      lastUsed: "Today",
      permissions: ["read"],
    },
    {
      id: "key-2",
      name: "Production API Key",
      key: "kb_prod_k1l2m3n4o5p6q7r8s9t0",
      created: "Jun 20, 2023",
      lastUsed: "Yesterday",
      permissions: ["read", "write"],
    },
  ])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // In a real app, you would show a toast notification here
  }

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-green-400" />
            <CardTitle>API Access</CardTitle>
          </div>
          <CardDescription>Manage your API keys and permissions</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
          <Plus className="h-4 w-4 mr-2" /> New Key
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-navy-800 rounded-lg border border-navy-700">
            <h3 className="text-white font-medium mb-2">API Documentation</h3>
            <p className="text-sm text-gray-400 mb-3">
              Access our comprehensive API documentation to integrate with Knott Bank services.
            </p>
            <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
              View Documentation
            </Button>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-medium">Your API Keys</h3>

            {apiKeys.map((apiKey) => (
              <div key={apiKey.id} className="p-4 bg-navy-800 rounded-lg border border-navy-700">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{apiKey.name}</p>
                    <div className="flex items-center mt-1">
                      <div className="relative flex-1">
                        <Input
                          value={showApiKey ? apiKey.key : "•".repeat(apiKey.key.length)}
                          readOnly
                          className="pr-16 bg-navy-700 border-navy-600 text-sm font-mono"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                          <button
                            type="button"
                            className="text-gray-400 hover:text-white"
                            onClick={() => setShowApiKey(!showApiKey)}
                          >
                            {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                          <button
                            type="button"
                            className="text-gray-400 hover:text-white"
                            onClick={() => copyToClipboard(apiKey.key)}
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {apiKey.permissions.includes("read") && (
                        <span className="px-2 py-1 bg-navy-700 rounded-md text-xs text-gray-300">Read</span>
                      )}
                      {apiKey.permissions.includes("write") && (
                        <span className="px-2 py-1 bg-navy-700 rounded-md text-xs text-gray-300">Write</span>
                      )}
                    </div>
                    <div className="flex items-center mt-2 text-xs text-gray-400">
                      <span>Created: {apiKey.created}</span>
                      <span className="mx-2">•</span>
                      <span>Last used: {apiKey.lastUsed}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                      <RefreshCw className="h-4 w-4" />
                      <span className="sr-only">Regenerate key</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-400">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete key</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-medium">API Settings</h3>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="api-access" className="text-sm text-gray-300">
                  Enable API Access
                </Label>
                <p className="text-xs text-gray-400">Allow external applications to access your account</p>
              </div>
              <Switch id="api-access" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="webhook" className="text-sm text-gray-300">
                  Webhook Notifications
                </Label>
                <p className="text-xs text-gray-400">Send event notifications to your applications</p>
              </div>
              <Switch id="webhook" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="ip-restriction" className="text-sm text-gray-300">
                  IP Restrictions
                </Label>
                <p className="text-xs text-gray-400">Limit API access to specific IP addresses</p>
              </div>
              <Switch id="ip-restriction" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
