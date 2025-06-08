import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function StakingPools() {
  const stakingPools = [
    {
      id: "sol-staking",
      name: "SOL Staking",
      token: "SOL",
      apy: "5.8%",
      lockPeriod: "None (Liquid Staking)",
      minStake: "1 SOL",
      totalStaked: "1.2M SOL",
      yourStake: "12.5 SOL",
      value: "$1,225.00",
      rewards: "0.14 SOL",
      status: "active",
    },
    {
      id: "eth-staking",
      name: "ETH Staking",
      token: "ETH",
      apy: "4.2%",
      lockPeriod: "None (Liquid Staking)",
      minStake: "0.1 ETH",
      totalStaked: "320K ETH",
      yourStake: "0.5 ETH",
      value: "$950.00",
      rewards: "0.004 ETH",
      status: "active",
    },
    {
      id: "dot-staking",
      name: "DOT Staking",
      token: "DOT",
      apy: "9.5%",
      lockPeriod: "28 days",
      minStake: "5 DOT",
      totalStaked: "8.5M DOT",
      yourStake: "0",
      value: "$0.00",
      rewards: "0",
      status: "not-staked",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {stakingPools.map((pool) => (
          <div key={pool.id} className="bg-navy-800 rounded-lg border border-navy-700 p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{pool.name}</h3>
                  <p className="text-green-400 font-medium">{pool.apy} APY</p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <div>
                    <p className="text-sm text-gray-400">Lock Period</p>
                    <p className="text-white">{pool.lockPeriod}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Minimum Stake</p>
                    <p className="text-white">{pool.minStake}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Staked</p>
                    <p className="text-white">{pool.totalStaked}</p>
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
                        <span className="text-white">
                          {pool.yourStake} {pool.token}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Value</span>
                        <span className="text-white">{pool.value}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Rewards</span>
                        <span className="text-green-400">
                          {pool.rewards} {pool.token}
                        </span>
                      </div>
                      <Progress value={65} className="h-2 bg-navy-700" indicatorClassName="bg-green-400" />
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 border-navy-700 hover:bg-navy-700">
                        Unstake
                      </Button>
                      <Button size="sm" className="flex-1 bg-green-400 text-navy-950 hover:bg-green-500">
                        Add More
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm">You are not staking in this pool yet.</p>
                    <Button className="w-full bg-green-400 text-navy-950 hover:bg-green-500">Start Staking</Button>
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
