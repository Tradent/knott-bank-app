import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CryptoFAQ() {
  const faqs = [
    {
      question: "How secure is the Knott Bank crypto wallet?",
      answer:
        "Our wallet employs bank-grade security measures including AES-256 encryption, secure key management, biometric authentication, and cold storage for the majority of assets. We also conduct regular security audits with third-party security firms.",
    },
    {
      question: "Which cryptocurrencies are supported?",
      answer:
        "We support over 100 cryptocurrencies including Bitcoin, Ethereum, Solana, Cardano, Polkadot, and many more. We regularly add support for new cryptocurrencies based on market trends and user requests.",
    },
    {
      question: "Are there fees for using the wallet?",
      answer:
        "Basic wallet functionality is free. There are small fees for certain actions like swapping between cryptocurrencies or withdrawing to external wallets, which vary based on network conditions and the specific cryptocurrencies involved.",
    },
    {
      question: "Can I connect my wallet to DeFi protocols?",
      answer:
        "Yes, our wallet includes built-in DeFi integration, allowing you to connect to popular protocols for staking, lending, and yield farming directly from the wallet interface.",
    },
    {
      question: "What happens if I lose access to my device?",
      answer:
        "During setup, you'll create a recovery phrase that can be used to restore access to your wallet. It's crucial to store this phrase securely offline, as it provides complete access to your assets.",
    },
    {
      question: "Is customer support available?",
      answer:
        "Yes, we offer 24/7 customer support through multiple channels including live chat, email, and phone. Our support team is trained to assist with technical issues, security concerns, and general inquiries.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-500">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-950">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our crypto wallet.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-navy-950">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
