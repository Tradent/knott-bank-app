import { AccountsOverview } from "@/components/banking/accounts/accounts-overview"
import { AccountDetails } from "@/components/banking/accounts/account-details"
import { AccountActivity } from "@/components/banking/accounts/account-activity"
import { AccountActions } from "@/components/banking/accounts/account-actions"
import { LinkedAccounts } from "@/components/banking/accounts/linked-accounts"
import { AccountSettings } from "@/components/banking/accounts/account-settings"

export default function AccountsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Accounts</h1>
          <p className="text-gray-400">Manage your bank accounts and linked services</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Total Balance:</span>
            <span className="text-white font-medium">$24,586.32</span>
          </div>
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Accounts:</span>
            <span className="text-white font-medium">5</span>
          </div>
        </div>
      </div>

      <AccountsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AccountDetails />
          <AccountActivity />
        </div>
        <div className="space-y-6">
          <AccountActions />
          <LinkedAccounts />
          <AccountSettings />
        </div>
      </div>
    </div>
  )
}
