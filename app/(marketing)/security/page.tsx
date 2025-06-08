import { SecurityHero } from "@/components/security/security-hero"
import { SecurityFeatures } from "@/components/security/security-features"
import { SecurityCTA } from "@/components/security/security-cta"

export default function SecurityPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        <SecurityHero />
        <SecurityFeatures />
        <SecurityCTA />
      </main>
    </div>
  )
}
