import type { Metadata } from "next"
import { InvestmentsHero } from "@/components/investments/investments-hero"
import { InvestmentsFeatures } from "@/components/investments/investments-features"
import { InvestmentsCTA } from "@/components/investments/investments-cta"

export const metadata: Metadata = {
  title: "Investments | Knott Bank",
  description: "Discover our comprehensive investment solutions that bridge traditional finance with digital assets.",
}

export default function InvestmentsPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        <InvestmentsHero />
        <InvestmentsFeatures />
        <InvestmentsCTA />
      </main>
    </div>
  )
}
