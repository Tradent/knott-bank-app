import { CareersHero } from "@/components/careers/careers-hero"
import { CareersPositions } from "@/components/careers/careers-positions"
import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersCTA } from "@/components/careers/careers-cta"

export default function CareersPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        <CareersHero />
        <CareersBenefits />
        <CareersPositions />
        <CareersCTA />
      </main>
    </div>
  )
}
