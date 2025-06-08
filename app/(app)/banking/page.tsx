import { AccountSummary } from "@/components/banking/account-summary"
import { RecentActivity } from "@/components/banking/recent-activity"
import { QuickActions } from "@/components/banking/quick-actions"
import { DefiOpportunities } from "@/components/banking/defi-opportunities"
import { UpcomingPayments } from "@/components/banking/upcoming-payments"
import { AssetBreakdown } from "@/components/banking/asset-breakdown"

export default function BankingPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-2xl font-bold text-white mb-6">Welcome back, Alex</h1>

      <AccountSummary />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-8">
          <RecentActivity />
          <UpcomingPayments />
        </div>
        <div className="space-y-8">
          <QuickActions />
          <DefiOpportunities />
        </div>
      </div>

      <div className="mt-8">
        <AssetBreakdown />
      </div>
    </div>
  )
}
