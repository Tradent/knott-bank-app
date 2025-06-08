import Link from "next/link"
import { Button } from "@/components/ui/button"

export function InvestmentsHero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-navy-950 border-b border-navy-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Smart Investments for the Digital Age
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Diversify your portfolio with traditional and digital assets, all in one place. Our investment solutions
                bridge the gap between conventional finance and the future of money.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-green-400 text-navy-950 hover:bg-green-300">
                <Link href="/auth/signup">Start Investing</Link>
              </Button>
              <Button asChild variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-lg blur-3xl opacity-50"></div>
              <div className="relative z-10 w-full h-full rounded-lg overflow-hidden border border-navy-800 bg-navy-900">
                <div className="absolute inset-0 bg-[url('/investment-overview-dashboard.png')] bg-cover bg-center opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
