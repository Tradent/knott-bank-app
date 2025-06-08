import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutTimeline } from "@/components/about/about-timeline"
import { CTA } from "@/components/cta-section"

export default function AboutUsPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        <AboutHero />
        <AboutMission />
        <AboutTeam />
        <AboutTimeline />
        <CTA />
      </main>
    </div>
  )
}
