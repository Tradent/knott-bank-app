import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function DefiHubFaq() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300">Find answers to common questions about using the Knott Bank DeFi Hub.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-navy-800 rounded-lg bg-navy-800"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-green-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "What is DeFi and how does it work?",
    answer:
      "Decentralized Finance (DeFi) refers to financial services built on blockchain technology that operate without centralized intermediaries like banks. It includes lending, borrowing, trading, and earning yield on crypto assets through smart contracts, which are self-executing agreements with the terms directly written into code.",
  },
  {
    question: "How does Knott Bank ensure the security of my assets in DeFi?",
    answer:
      "Knott Bank employs multiple security measures including smart contract audits, multi-signature wallets, real-time monitoring, and insurance coverage. We only integrate with protocols that have undergone rigorous security audits and have proven track records. Additionally, we provide risk indicators for each protocol to help you make informed decisions.",
  },
  {
    question: "What are the fees for using the DeFi Hub?",
    answer:
      "Knott Bank charges a small service fee ranging from 0.1% to 0.5% depending on the complexity of the DeFi interaction. We also employ gas optimization techniques to reduce network fees. All fees are transparently displayed before you confirm any transaction.",
  },
  {
    question: "Can I withdraw my assets from DeFi protocols at any time?",
    answer:
      "In most cases, yes. However, some DeFi protocols may have lock-up periods or liquidity constraints. Knott Bank clearly indicates any withdrawal restrictions before you deposit your assets. For protocols with lock-up periods, we provide estimated unlock dates and any early withdrawal penalties.",
  },
  {
    question: "How do I get started with DeFi on Knott Bank?",
    answer:
      "Getting started is easy. Simply create an account, complete the verification process, and fund your account with supported cryptocurrencies. Once funded, you can explore the DeFi Hub and choose from various opportunities based on your risk tolerance and financial goals. We also provide educational resources to help you understand each protocol.",
  },
  {
    question: "What blockchains does the DeFi Hub support?",
    answer:
      "Knott Bank's DeFi Hub currently supports Ethereum, Solana, Polygon, Avalanche, and Binance Smart Chain. We're continuously expanding our blockchain support based on security considerations and user demand.",
  },
]
