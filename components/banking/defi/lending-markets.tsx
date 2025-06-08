import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function LendingMarkets() {
  const lendingMarkets = [
    {
      id: "usdc-lending",
      name: "USDC Lending",
      token: "USDC",
      apy: "8.2%",
      totalSupplied: "12.5M USDC",
      totalBorrowed: "9.8M USDC",
      utilization: 78,
      yourSupply: "2,500 USDC",
      value: "$2,500.00",
      earnings: "$42.50",
      status: "active",
    },
    {
      id: "usdt-lending",
      name: "USDT Lending",
      token: "USDT",
      apy: "7.9%",
      totalSupplied: "8.2M USDT",
      totalBorrowed: "6.1M USDT",
      utilization: 74,
      yourSupply: "0 USDT",
      value: "$0.00",
      earnings: "$0.00",
      status: "not-active",
    },
    {
      id: "sol-lending",
      name: "SOL Lending",
      token: "SOL",
      apy: "3.5%",
      totalSupplied: "450K SOL",
      totalBorrowed: "320K SOL",
      utilization: 71,
      yourSupply: "10 SOL",
      value: "$980.00",
      earnings: "$7.15",
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {lendingMarkets.map((market) => (
          <div key={market.id} className="bg-navy-800 rounded-lg border border-navy-700 p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{market.name}</h3>
                  <p className="text-green-400 font-medium">{market.apy} APY</p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <div>
                    <p className="text-sm text-gray-400">Total Supplied</p>
                    <p className="text-white">{market.totalSupplied}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Borrowed</p>
                    <p className="text-white">{market.totalBorrowed}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-400 mb-1">Utilization</p>
                    <Progress value={market.utilization} className="h-2 bg-navy-700" indicatorClassName="bg-blue-400" />
                    <p className="text-xs text-gray-500 mt-1">{market.utilization}%</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 rounded-lg p-4 min-w-[240px]">
                <h4 className="text-lg font-medium text-white mb-4">Your Position</h4>

                {market.status === "active" ? (
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Supplied</span>
                        <span className="text-white">{market.yourSupply}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Value</span>
                        <span className="text-white">{market.value}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Earnings</span>
                        <span className="text-green-400">{market.earnings}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 border-navy-700 hover:bg-navy-700">
                        Withdraw
                      </Button>
                      <Button size="sm" className="flex-1 bg-green-400 text-navy-950 hover:bg-green-500">
                        Supply More
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm">You are not supplying to this market yet.</p>
                    <Button className="w-full bg-green-400 text-navy-950 hover:bg-green-500">Supply</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
