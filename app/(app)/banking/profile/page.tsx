import { ProfileOverview } from "@/components/banking/profile/profile-overview"
import { ProfileDetails } from "@/components/banking/profile/profile-details"
import { ProfileActivity } from "@/components/banking/profile/profile-activity"
import { ProfileStats } from "@/components/banking/profile/profile-stats"

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-6">My Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ProfileOverview />
        </div>
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <ProfileDetails />
            <ProfileStats />
            <ProfileActivity />
          </div>
        </div>
      </div>
    </div>
  )
}
