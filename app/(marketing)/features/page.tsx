import { FeaturesHero } from "@/components/features/features-hero"
import { FeaturesList } from "@/components/features/features-list"
import { FeaturesCTA } from "@/components/features/features-cta"

export default function FeaturesPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        <FeaturesHero />
        <FeaturesList />
        <FeaturesCTA />
      </main>
    </div>
  )
}
