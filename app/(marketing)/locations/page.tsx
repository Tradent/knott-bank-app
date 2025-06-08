import { LocationsHero } from "@/components/locations/locations-hero"
import { LocationsList } from "@/components/locations/locations-list"
import { LocationsCTA } from "@/components/locations/locations-cta"

export default function LocationsPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        <LocationsHero />
        <LocationsList />
        <LocationsCTA />
      </main>
    </div>
  )
}
