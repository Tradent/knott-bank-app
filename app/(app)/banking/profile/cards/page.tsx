import { CardsList } from "@/components/banking/profile/cards/cards-list"
import { CardDetails } from "@/components/banking/profile/cards/card-details"
import { CardLimits } from "@/components/banking/profile/cards/card-limits"
import { CardRewards } from "@/components/banking/profile/cards/card-rewards"

export default function CardsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-6">My Cards</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <CardsList />
        </div>
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <CardDetails />
            <CardLimits />
            <CardRewards />
          </div>
        </div>
      </div>
    </div>
  )
}
