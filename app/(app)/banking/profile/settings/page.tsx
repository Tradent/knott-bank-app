import { DisplaySettings } from "@/components/banking/profile/settings/display-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Monitor, Globe, Accessibility } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white dark:text-white light:text-navy-800 mb-2">Settings</h1>
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="display" className="space-y-4">
        <TabsList className="bg-navy-800 dark:bg-navy-800 light:bg-white border border-navy-700 dark:border-navy-700 light:border-gray-200">
          <TabsTrigger
            value="general"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Settings className="h-4 w-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger
            value="display"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Monitor className="h-4 w-4 mr-2" />
            Display
          </TabsTrigger>
          <TabsTrigger
            value="language"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Globe className="h-4 w-4 mr-2" />
            Language
          </TabsTrigger>
          <TabsTrigger
            value="accessibility"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Accessibility className="h-4 w-4 mr-2" />
            Accessibility
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="text-white dark:text-white light:text-navy-800">General settings content will go here</div>
        </TabsContent>

        <TabsContent value="display">
          <DisplaySettings />
        </TabsContent>

        <TabsContent value="language">
          <div className="text-white dark:text-white light:text-navy-800">Language settings content will go here</div>
        </TabsContent>

        <TabsContent value="accessibility">
          <div className="text-white dark:text-white light:text-navy-800">
            Accessibility settings content will go here
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
