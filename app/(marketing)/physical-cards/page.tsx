import { CardsHero } from "@/components/physical-cards/cards-hero"
import { CardsFeatures } from "@/components/physical-cards/cards-features"
import { CardsOptions } from "@/components/physical-cards/cards-options"
import { CardsBenefits } from "@/components/physical-cards/cards-benefits"
import { CardsTestimonials } from "@/components/physical-cards/cards-testimonials"
import { CardsFAQ } from "@/components/physical-cards/cards-faq"
import { CardsCTA } from "@/components/physical-cards/cards-cta"

export default function PhysicalCardsPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        <CardsHero />
        <CardsFeatures />
        <CardsOptions />
        <CardsBenefits />
        <CardsTestimonials />
        <CardsFAQ />
        <CardsCTA />
      </main>
    </div>
  )
}
