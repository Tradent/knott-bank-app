import { Button } from "@/components/ui/button"

export function YieldFarming() {
  const farmingPools = [
    {
      id: "sol-usdc-farm",
      name: "SOL-USDC Farm",
      platform: "Raydium",
      baseApy: "12.5%",
      rewardApy: "8.2%",
      totalApy: "20.7%",
      rewards: ["RAY"],
      totalStaked: "$5.2M",
      yourStake: "LP Tokens (5 SOL + 500 USDC)",
      value: "$990.00",
      earned: "12.5 RAY",
      earnedValue: "$45.00",
      status: "active",
    },
    {
      id: "eth-usdc-farm",
      name: "ETH-USDC Farm",
      platform: "Orca",
      baseApy: "10.2%",
      rewardApy: "15.8%",
      totalApy: "26.0%",
      rewards: ["ORCA"],
      totalStaked: "$8.7M",
      yourStake: "0",
      value: "$0.00",
      earned: "0",
      earnedValue: "$0.00",
      status: "not-active",
    },
    {
      id: "ray-usdc-farm",
      name: "RAY-USDC Farm",
      platform: "Raydium",
      baseApy: "14.5%",
      rewardApy: "22.3%",
      totalApy: "36.8%",
      rewards: ["RAY"],
      totalStaked: "$3.8M",
      yourStake: "LP Tokens (100 RAY + 400 USDC)",
      value: "$760.00",
      earned: "8.2 RAY",
      earnedValue: "$29.52",
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {farmingPools.map((pool) => (
          <div key={pool.id} className="bg-navy-800 rounded-lg border border-navy-700 p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{pool.name}</h3>
                    <span className="px-2 py-0.5 bg-navy-700 rounded text-xs text-gray-300">{pool.platform}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-green-400 font-medium">{pool.totalApy} APY</p>
                    <span className="text-xs text-gray-400">
                      ({pool.baseApy} Base + {pool.rewardApy} Rewards)
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <div>
                    <p className="text-sm text-gray-400">Total Staked</p>
                    <p className="text-white">{pool.totalStaked}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Reward Tokens</p>
                    <p className="text-white">{pool.rewards.join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 rounded-lg p-4 min-w-[240px]">
                <h4 className="text-lg font-medium text-white mb-4">Your Position</h4>

                {pool.status === "active" ? (
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Staked</span>
                        <span className="text-white truncate max-w-[150px]">{pool.yourStake}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Value</span>
                        <span className="text-white">{pool.value}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Earned</span>
                        <span className="text-green-400">{pool.earned}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Value</span>
                        <span className="text-green-400">{pool.earnedValue}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 border-navy-700 hover:bg-navy-700">
                        Unstake
                      </Button>
                      <Button size="sm" className="flex-1 bg-green-400 text-navy-950 hover: bg-green-500">
                        Harvest
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm">You are not farming in this pool yet.</p>
                    <Button className="w-full bg-green-400 text-navy-950 hover:bg-green-500">Start Farming</Button>
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
