import { InvestmentOverview } from "@/components/banking/investments/investment-overview"
import { PortfolioPerformance } from "@/components/banking/investments/portfolio-performance"
import { AssetAllocation } from "@/components/banking/investments/asset-allocation"
import { RecentTransactions } from "@/components/banking/investments/recent-transactions"
import { InvestmentOpportunities } from "@/components/banking/investments/investment-opportunities"
import { WatchList } from "@/components/banking/investments/watch-list"

export default function InvestmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Investments</h1>
          <p className="text-gray-400">Manage your investment portfolio</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Total Value:</span>
            <span className="text-white font-medium">$42,586.75</span>
          </div>
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Today:</span>
            <span className="text-green-400 font-medium">+$845.32 (1.98%)</span>
          </div>
        </div>
      </div>

      <InvestmentOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PortfolioPerformance />
        </div>
        <div>
          <AssetAllocation />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>
        <div className="space-y-6">
          <WatchList />
          <InvestmentOpportunities />
        </div>
      </div>
    </div>
  )
}
