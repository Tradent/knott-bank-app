import { WalletOverview } from "@/components/banking/wallet/wallet-overview"
import { CryptoAssets } from "@/components/banking/wallet/crypto-assets"
import { CryptoTransactions } from "@/components/banking/wallet/crypto-transactions"
import { CryptoSwap } from "@/components/banking/wallet/crypto-swap"
import { StakingOpportunities } from "@/components/banking/wallet/staking-opportunities"
import { WalletSecurity } from "@/components/banking/wallet/wallet-security"
import { MarketTrends } from "@/components/banking/wallet/market-trends"

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Crypto Wallet</h1>
          <p className="text-gray-400">Manage your cryptocurrency assets</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">Total Balance:</span>
            <span className="text-white font-medium">$7,720.67</span>
          </div>
          <div className="px-2 py-1 bg-navy-800 rounded-md border border-navy-700">
            <span className="text-gray-400 mr-1">24h Change:</span>
            <span className="text-green-400 font-medium">+$245.32 (3.28%)</span>
          </div>
        </div>
      </div>

      <WalletOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CryptoAssets />
          <CryptoTransactions />
        </div>
        <div className="space-y-6">
          <CryptoSwap />
          <StakingOpportunities />
          <MarketTrends />
          <WalletSecurity />
        </div>
      </div>
    </div>
  )
}
