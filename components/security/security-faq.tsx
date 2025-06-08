"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function SecurityFAQ() {
  const faqs = [
    {
      question: "How does Knott Bank protect my crypto assets?",
      answer:
        "Knott Bank employs a multi-layered security approach including cold storage for the majority of assets, multi-signature authorization for transactions, end-to-end encryption, and regular security audits by independent firms. We also offer optional biometric verification for withdrawals and real-time monitoring for suspicious activities.",
    },
    {
      question: "What happens if I lose my access credentials?",
      answer:
        "We have a secure account recovery process that requires multiple forms of verification to ensure only you can regain access to your account. This includes identity verification, security questions, and a waiting period for larger withdrawals after recovery.",
    },
    {
      question: "Are my assets insured?",
      answer:
        "Yes, Knott Bank maintains comprehensive insurance coverage for digital assets held in our custody. This insurance covers losses due to external hacking, theft, and certain internal issues, providing an additional layer of protection for your investments.",
    },
    {
      question: "How does multi-signature authorization work?",
      answer:
        "Multi-signature authorization requires multiple private keys to authorize a transaction. At Knott Bank, this means that no single person (not even you alone) can move funds without additional authorization, significantly reducing the risk of unauthorized access or theft.",
    },
    {
      question: "Can I review the security audits?",
      answer:
        "Yes, we believe in transparency. Summary reports of our security audits are available to all customers through their dashboard. For more detailed reports, you can submit a request through your account manager.",
    },
    {
      question: "How does Knott Bank ensure privacy?",
      answer:
        "We implement advanced privacy measures including zero-knowledge proofs for certain transactions, encrypted communications, and strict data access controls. We also minimize data collection to only what's necessary and give you control over your information sharing preferences.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-navy-950">Security </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">FAQ</span>
          </h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            Common questions about our security measures and how we protect your assets.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-navy-950">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-navy-600 transition-transform duration-200",
                      openIndex === index ? "transform rotate-180" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "pb-6 max-h-96" : "max-h-0",
                  )}
                >
                  <p className="text-navy-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
