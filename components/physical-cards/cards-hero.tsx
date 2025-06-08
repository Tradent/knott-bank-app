import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CardsHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-navy-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-400">
              Premium Cards
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              The Bridge Between Crypto and Everyday Spending
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Our physical cards let you spend your crypto assets anywhere that accepts traditional payment cards, with
              premium benefits and complete control.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-green-400 text-navy-950 hover:bg-green-300">
                <Link href="/auth/signup">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
                <Link href="#options">View Card Options</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/placeholder.svg?height=375&width=500"
                alt="Knott Bank Premium Card"
                className="relative z-10 w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
