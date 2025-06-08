import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Eye, FileText, Download, Trash2 } from "lucide-react"

export function PrivacySettings() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-green-400" />
          <CardTitle>Privacy Settings</CardTitle>
        </div>
        <CardDescription>Manage your data and privacy preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-white font-medium">Data Collection & Usage</h3>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div>
                <p className="text-white font-medium">Analytics & Personalization</p>
                <p className="text-sm text-gray-400">Allow us to analyze your usage to improve our services</p>
              </div>
              <Switch id="analytics" defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div>
                <p className="text-white font-medium">Third-Party Data Sharing</p>
                <p className="text-sm text-gray-400">Share data with our trusted partners</p>
              </div>
              <Switch id="third-party" />
            </div>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div>
                <p className="text-white font-medium">Cookie Preferences</p>
                <p className="text-sm text-gray-400">Manage cookies and tracking technologies</p>
              </div>
              <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
                Manage
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-medium">Your Data</h3>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-400/20 rounded-full">
                  <FileText className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Privacy Policy</p>
                  <p className="text-sm text-gray-400">Review our privacy policy</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                View
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-400/20 rounded-full">
                  <Download className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Download Your Data</p>
                  <p className="text-sm text-gray-400">Get a copy of your personal data</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
                Request
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-400/20 rounded-full">
                  <Trash2 className="h-4 w-4 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Delete Account</p>
                  <p className="text-sm text-gray-400">Permanently delete your account and data</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-red-400">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
