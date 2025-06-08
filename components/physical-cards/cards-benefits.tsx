import { Sparkles, ShieldCheck, Wallet, CreditCard, Gift, Clock } from "lucide-react"

export function CardsBenefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-500">Benefits</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-950">
              Exclusive Benefits for Cardholders
            </h2>
            <p className="text-gray-500 md:text-xl">
              Our physical cards come with a range of benefits designed to enhance your spending experience and provide
              value beyond just payments.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-400/10 p-2">
                  <Sparkles className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-950">Premium Experiences</h3>
                  <p className="text-gray-500">
                    Access to exclusive events, premium airport lounges, and concierge services for higher tier cards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-400/10 p-2">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-950">Purchase Protection</h3>
                  <p className="text-gray-500">
                    Coverage for eligible purchases against damage or theft for up to 90 days from purchase date.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-400/10 p-2">
                  <Wallet className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-950">Flexible Funding</h3>
                  <p className="text-gray-500">
                    Fund your card from multiple crypto assets or traditional bank accounts with no conversion fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-400/10 p-2">
                <CreditCard className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-navy-950">Contactless Technology</h3>
                <p className="text-gray-500">
                  All cards feature the latest contactless payment technology for quick and secure transactions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-400/10 p-2">
                <Gift className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-navy-950">Merchant Offers</h3>
                <p className="text-gray-500">
                  Exclusive discounts and offers with selected merchants across retail, dining, and travel categories.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-400/10 p-2">
                <Clock className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-navy-950">Real-time Controls</h3>
                <p className="text-gray-500">
                  Instantly freeze or unfreeze your card, set spending limits, and receive real-time transaction
                  notifications.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Card Benefits Illustration"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
