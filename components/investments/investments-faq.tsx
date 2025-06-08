import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function InvestmentsFAQ() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Find answers to common questions about our investment services
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-navy-900 font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
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
    question: "What investment options does Knott Bank offer?",
    answer:
      "Knott Bank offers a comprehensive range of investment options including managed portfolios, individual stocks and ETFs, digital assets (cryptocurrencies), retirement accounts, alternative investments, and DeFi yield opportunities. Our platform is designed to provide both traditional and innovative investment vehicles to meet diverse financial goals.",
  },
  {
    question: "How are my investments protected?",
    answer:
      "Your investments at Knott Bank are protected through multiple layers of security. Traditional securities are SIPC-insured up to $500,000, while digital assets are secured through institutional-grade custody solutions with insurance coverage. We employ military-grade encryption, multi-signature authorization, and regular security audits to ensure the safety of your assets.",
  },
  {
    question: "What are the fees for investment accounts?",
    answer:
      "Our fee structure is transparent and competitive. Managed portfolios have an annual fee of 0.25% to 0.75% depending on the strategy complexity. Stock and ETF trading is commission-free. Digital asset transactions have a 0.5% fee. There are no account maintenance fees or minimum balance requirements for standard accounts.",
  },
  {
    question: "Can I transfer existing investments to Knott Bank?",
    answer:
      "Yes, you can transfer existing investments to Knott Bank through our streamlined account transfer process. We support transfers of traditional securities through ACATS, digital asset transfers from external wallets, and direct rollovers of retirement accounts. Our transfer specialists can assist you throughout the process.",
  },
  {
    question: "How do I get started with investing at Knott Bank?",
    answer:
      "Getting started is simple. First, create a Knott Bank account if you don't already have one. Then, complete our investment profile questionnaire to help us understand your goals and risk tolerance. Finally, fund your investment account through bank transfer, wire, or digital asset deposit. You can start investing with as little as $1.",
  },
  {
    question: "What tax documents will I receive for my investments?",
    answer:
      "Knott Bank provides comprehensive tax documentation for your investments. For traditional securities, you'll receive Form 1099-B for capital gains and losses, Form 1099-DIV for dividends, and Form 1099-INT for interest income. For digital assets, you'll receive detailed transaction reports that can be used for tax reporting purposes. All documents are available electronically by February 15th each year.",
  },
]
