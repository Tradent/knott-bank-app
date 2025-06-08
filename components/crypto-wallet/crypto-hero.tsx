import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CryptoHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-navy-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-400">New Features</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              The Future of Crypto Management
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Secure, simple, and seamless. Our crypto wallet gives you complete control over your digital assets with
              bank-grade security and intuitive features.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-green-400 text-navy-950 hover:bg-green-300">
                <Link href="/auth/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Crypto Wallet Interface"
                className="relative z-10 w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
