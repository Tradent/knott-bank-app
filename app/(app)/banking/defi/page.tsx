import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StakingPools } from "@/components/banking/defi/staking-pools"
import { LendingMarkets } from "@/components/banking/defi/lending-markets"
import { LiquidityPools } from "@/components/banking/defi/liquidity-pools"
import { YieldFarming } from "@/components/banking/defi/yield-farming"

export default function DefiHubPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">DeFi Hub</h1>
          <p className="text-gray-400">Access decentralized finance opportunities</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Total Value Locked:</span>
            <span className="text-white font-medium">$7,720.67</span>
          </div>
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Earnings:</span>
            <span className="text-green-400 font-medium">+$345.28</span>
          </div>
        </div>
      </div>

      <Card className="bg-navy-900 border-navy-800">
        <CardHeader>
          <CardTitle>DeFi Opportunities</CardTitle>
          <CardDescription>Explore various ways to earn yield on your crypto assets</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="staking" className="w-full">
            <TabsList className="bg-navy-800 border border-navy-700 w-full justify-start mb-6">
              <TabsTrigger value="staking" className="data-[state=active]:bg-navy-700">
                Staking
              </TabsTrigger>
              <TabsTrigger value="lending" className="data-[state=active]:bg-navy-700">
                Lending
              </TabsTrigger>
              <TabsTrigger value="liquidity" className="data-[state=active]:bg-navy-700">
                Liquidity Pools
              </TabsTrigger>
              <TabsTrigger value="farming" className="data-[state=active]:bg-navy-700">
                Yield Farming
              </TabsTrigger>
            </TabsList>

            <TabsContent value="staking">
              <StakingPools />
            </TabsContent>

            <TabsContent value="lending">
              <LendingMarkets />
            </TabsContent>

            <TabsContent value="liquidity">
              <LiquidityPools />
            </TabsContent>

            <TabsContent value="farming">
              <YieldFarming />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
