import { CryptoHero } from "@/components/crypto-wallet/crypto-hero"
import { CryptoFeatures } from "@/components/crypto-wallet/crypto-features"
import { CryptoSecurity } from "@/components/crypto-wallet/crypto-security"
import { CryptoComparison } from "@/components/crypto-wallet/crypto-comparison"
import { CryptoTestimonials } from "@/components/crypto-wallet/crypto-testimonials"
import { CryptoFAQ } from "@/components/crypto-wallet/crypto-faq"
import { CryptoCTA } from "@/components/crypto-wallet/crypto-cta"

export default function CryptoWalletPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        <CryptoHero />
        <CryptoFeatures />
        <CryptoSecurity />
        <CryptoComparison />
        <CryptoTestimonials />
        <CryptoFAQ />
        <CryptoCTA />
      </main>
    </div>
  )
}
