"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquareIcon as MessageSquareQuestion, ChevronDown, ChevronUp, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your registered email address to create a new password.",
    },
    {
      question: "How do I enable two-factor authentication?",
      answer:
        "You can enable two-factor authentication in your Security settings. Go to Profile > Security > Two-Factor Authentication and follow the setup instructions.",
    },
    {
      question: "What are the fees for international transfers?",
      answer:
        "International transfer fees vary based on destination country, amount, and transfer method. Standard fees range from $15-$45. Premium members receive discounted rates. Check the fee calculator in the Transfers section for specific rates.",
    },
    {
      question: "How do I link my traditional bank account?",
      answer:
        "To link a traditional bank account, go to Banking > Accounts > Linked Accounts and select 'Add New Account'. You'll need your bank's routing number and your account number to complete the process.",
    },
    {
      question: "What cryptocurrencies does Knott Bank support?",
      answer:
        "Knott Bank currently supports Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and several stablecoins including USDC and USDT. We regularly add support for additional cryptocurrencies based on security reviews and customer demand.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Card className="bg-navy-800 border-navy-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <MessageSquareQuestion className="mr-2 h-5 w-5 text-green-400" />
          Frequently Asked Questions
        </CardTitle>
        <CardDescription className="text-gray-400">Quick answers to common questions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search FAQs..."
            className="pl-10 bg-navy-700 border-navy-600 text-white focus:border-green-500"
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-navy-700 rounded-md overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 bg-navy-700 hover:bg-navy-600 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && <div className="p-4 bg-navy-800 text-gray-300 text-sm">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
