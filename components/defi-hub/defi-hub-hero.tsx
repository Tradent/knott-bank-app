import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DefiHubHero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-navy-950 border-b border-navy-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Your Gateway to Decentralized Finance
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Access the world of DeFi with confidence. Our DeFi Hub provides a secure, user-friendly interface to
                explore decentralized protocols and maximize your crypto assets.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-green-400 text-navy-950 hover:bg-green-300">
                <Link href="/auth/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
                <Link href="#features">Explore DeFi</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-400/20 rounded-lg blur-3xl opacity-50"></div>
              <div className="relative z-10 w-full h-full rounded-lg overflow-hidden border border-navy-800 bg-navy-900">
                <div className="absolute inset-0 bg-[url('/defi-yield-overview.png')] bg-cover bg-center opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
