import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { SecuritySection } from "@/components/security-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        <HeroSection />
        <FeatureSection />
        <SecuritySection />
        <CTASection />
      </main>
    </div>
  )
}
