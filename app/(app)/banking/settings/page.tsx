import { ProfileSettings } from "@/components/banking/settings/profile-settings"
import { SecuritySettings } from "@/components/banking/settings/security-settings"
import { NotificationSettings } from "@/components/banking/settings/notification-settings"
import { AppearanceSettings } from "@/components/banking/settings/appearance-settings"
import { PrivacySettings } from "@/components/banking/settings/privacy-settings"
import { DeviceSettings } from "@/components/banking/settings/device-settings"
import { ApiSettings } from "@/components/banking/settings/api-settings"
import { PreferencesSettings } from "@/components/banking/settings/preferences-settings"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ProfileSettings />
          <SecuritySettings />
          <NotificationSettings />
          <PrivacySettings />
        </div>
        <div className="space-y-6">
          <AppearanceSettings />
          <PreferencesSettings />
          <DeviceSettings />
          <ApiSettings />
        </div>
      </div>
    </div>
  )
}
