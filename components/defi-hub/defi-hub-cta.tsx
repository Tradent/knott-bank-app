import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DefiHubCTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-navy-950 border-t border-navy-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Start Your DeFi Journey Today
            </h2>
            <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join the financial revolution with Knott Bank's secure and user-friendly DeFi platform.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild className="bg-green-400 text-navy-950 hover:bg-green-300">
              <Link href="/auth/signup">Create Account</Link>
            </Button>
            <Button asChild variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
              <Link href="/security">Learn About Security</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
