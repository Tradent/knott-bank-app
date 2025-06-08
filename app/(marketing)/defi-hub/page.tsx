import type { Metadata } from "next"
import { DefiHubHero } from "@/components/defi-hub/defi-hub-hero"
import { DefiHubFeatures } from "@/components/defi-hub/defi-hub-features"
import { DefiHubCTA } from "@/components/defi-hub/defi-hub-cta"

export const metadata: Metadata = {
  title: "DeFi Hub | Knott Bank",
  description: "Access the world of decentralized finance through our secure and user-friendly DeFi Hub.",
}

export default function DefiHubPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        <DefiHubHero />
        <DefiHubFeatures />
        <DefiHubCTA />
      </main>
    </div>
  )
}
