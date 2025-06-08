import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CardsFAQ() {
  const faqs = [
    {
      question: "How do I apply for a Knott Bank card?",
      answer:
        "You can apply directly through your Knott Bank account. Navigate to the Cards section, select your preferred card tier, and follow the application process. Approval typically takes minutes, and your virtual card will be available immediately.",
    },
    {
      question: "How long does it take to receive my physical card?",
      answer:
        "After approval, physical cards are typically delivered within 5-7 business days, depending on your location. Premium and Platinum cards may be expedited at no additional cost.",
    },
    {
      question: "How does the crypto-to-fiat conversion work?",
      answer:
        "When you make a purchase, the required amount is automatically converted from your selected crypto asset to the local currency at the current market rate. You can set default assets for conversion or choose specific assets for different transactions.",
    },
    {
      question: "What are the spending limits?",
      answer:
        "Spending limits vary by card tier: Standard cards have a $3,000 monthly limit, Premium cards have a $10,000 monthly limit, and Platinum cards have a $25,000 monthly limit. You can view and manage your limits in the app.",
    },
    {
      question: "How does the rewards program work?",
      answer:
        "You earn crypto rewards on every purchase: 1% for Standard, 3% for Premium, and 5% for Platinum cards. Rewards are paid in the cryptocurrency of your choice and deposited directly to your Knott Bank wallet monthly.",
    },
    {
      question: "What happens if my card is lost or stolen?",
      answer:
        "You can instantly freeze your card through the app or website. Report the loss or theft through our 24/7 support, and we'll issue a replacement card. Your funds remain secure, and you're protected against unauthorized transactions.",
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
              Find answers to common questions about our physical cards.
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
