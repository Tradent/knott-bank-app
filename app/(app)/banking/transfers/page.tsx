import { TransferOverview } from "@/components/banking/transfers/transfer-overview"
import { NewTransfer } from "@/components/banking/transfers/new-transfer"
import { TransferHistory } from "@/components/banking/transfers/transfer-history"
import { SavedRecipients } from "@/components/banking/transfers/saved-recipients"
import { ScheduledTransfers } from "@/components/banking/transfers/scheduled-transfers"
import { InternationalTransfers } from "@/components/banking/transfers/international-transfers"

export default function TransfersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Transfers</h1>
          <p className="text-gray-400">Send and manage money transfers</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Recent Transfer:</span>
            <span className="text-white font-medium">$1,250.00</span>
          </div>
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Scheduled:</span>
            <span className="text-white font-medium">3</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <NewTransfer />
          <TransferHistory />
        </div>
        <div className="space-y-6">
          <TransferOverview />
          <SavedRecipients />
          <ScheduledTransfers />
          <InternationalTransfers />
        </div>
      </div>
    </div>
  )
}
