import { Button } from "@/components/ui/button"

export function LiquidityPools() {
  const liquidityPools = [
    {
      id: "sol-usdc",
      name: "SOL-USDC Pool",
      tokens: ["SOL", "USDC"],
      apy: "12.5%",
      totalLiquidity: "$8.5M",
      volume24h: "$1.2M",
      fees24h: "$3,600",
      yourLiquidity: "5 SOL + 500 USDC",
      value: "$990.00",
      earnings: "$24.75",
      status: "active",
    },
    {
      id: "eth-usdc",
      name: "ETH-USDC Pool",
      tokens: ["ETH", "USDC"],
      apy: "10.2%",
      totalLiquidity: "$12.8M",
      volume24h: "$2.5M",
      fees24h: "$7,500",
      yourLiquidity: "0",
      value: "$0.00",
      earnings: "$0.00",
      status: "not-active",
    },
    {
      id: "btc-usdc",
      name: "BTC-USDC Pool",
      tokens: ["BTC", "USDC"],
      apy: "8.7%",
      totalLiquidity: "$15.2M",
      volume24h: "$3.1M",
      fees24h: "$9,300",
      yourLiquidity: "0.01 BTC + 300 USDC",
      value: "$600.00",
      earnings: "$10.45",
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {liquidityPools.map((pool) => (
          <div key={pool.id} className="bg-navy-800 rounded-lg border border-navy-700 p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{pool.name}</h3>
                  <p className="text-green-400 font-medium">{pool.apy} APY</p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <div>
                    <p className="text-sm text-gray-400">Total Liquidity</p>
                    <p className="text-white">{pool.totalLiquidity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">24h Volume</p>
                    <p className="text-white">{pool.volume24h}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">24h Fees</p>
                    <p className="text-white">{pool.fees24h}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Tokens</p>
                    <p className="text-white">{pool.tokens.join(" + ")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 rounded-lg p-4 min-w-[240px]">
                <h4 className="text-lg font-medium text-white mb-4">Your Position</h4>

                {pool.status === "active" ? (
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Liquidity</span>
                        <span className="text-white">{pool.yourLiquidity}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Value</span>
                        <span className="text-white">{pool.value}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Earnings</span>
                        <span className="text-green-400">{pool.earnings}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 border-navy-700 hover:bg-navy-700">
                        Remove
                      </Button>
                      <Button size="sm" className="flex-1 bg-green-400 text-navy-950 hover:bg-green-500">
                        Add More
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm">You are not providing liquidity to this pool yet.</p>
                    <Button className="w-full bg-green-400 text-navy-950 hover:bg-green-500">Add Liquidity</Button>
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
