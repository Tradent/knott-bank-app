import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CardsCTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-navy-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Ready to Experience the Future of Spending?
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Apply for your Knott Bank card today and start enjoying the benefits of seamless crypto-to-fiat spending.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild className="bg-green-400 text-navy-950 hover:bg-green-300">
              <Link href="/auth/signup">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
              <Link href="#options">Compare Cards</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
