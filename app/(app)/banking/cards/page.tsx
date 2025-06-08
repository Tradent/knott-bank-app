import { CardsOverview } from "@/components/banking/cards/cards-overview"
import { CardDetails } from "@/components/banking/cards/card-details"
import { CardTransactions } from "@/components/banking/cards/card-transactions"
import { CardActions } from "@/components/banking/cards/card-actions"
import { CardSettings } from "@/components/banking/cards/card-settings"
import { VirtualCards } from "@/components/banking/cards/virtual-cards"

export default function CardsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Cards</h1>
          <p className="text-gray-400">Manage your physical and virtual cards</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Active Cards:</span>
            <span className="text-white font-medium">3</span>
          </div>
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Available Credit:</span>
            <span className="text-white font-medium">$9,500</span>
          </div>
        </div>
      </div>

      <CardsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CardDetails />
          <CardTransactions />
        </div>
        <div className="space-y-6">
          <CardActions />
          <VirtualCards />
          <CardSettings />
        </div>
      </div>
    </div>
  )
}
