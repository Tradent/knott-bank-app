import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { AssetAllocation } from "@/components/dashboard/asset-allocation"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1 bg-navy-900 border-navy-800">
          <CardHeader className="pb-2">
            <CardDescription>Total Balance</CardDescription>
            <CardTitle className="text-3xl text-white">$24,586.32</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-400">+2.5% from last week</p>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-navy-900 border-navy-800">
          <CardHeader className="pb-2">
            <CardDescription>Yield Earnings</CardDescription>
            <CardTitle className="text-3xl text-white">$1,245.08</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-400">+5.3% APY</p>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-navy-900 border-navy-800">
          <CardHeader className="pb-2">
            <CardDescription>Active Cards</CardDescription>
            <CardTitle className="text-3xl text-white">2</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-400">1 physical, 1 virtual</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Overview />
        </div>
        <div>
          <AssetAllocation />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  )
}
