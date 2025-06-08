import { NotificationPreferences } from "@/components/banking/profile/notifications/notification-preferences"
import { NotificationHistory } from "@/components/banking/profile/notifications/notification-history"
import { NotificationChannels } from "@/components/banking/profile/notifications/notification-channels"
import { NotificationSummary } from "@/components/banking/profile/notifications/notification-summary"

export default function NotificationsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Notifications</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <NotificationSummary />
            <NotificationChannels />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <NotificationPreferences />
            <NotificationHistory />
          </div>
        </div>
      </div>
    </div>
  )
}
