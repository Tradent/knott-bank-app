"use client"

import type React from "react"

import { useState } from "react"
import { HelpCircle, Search, ChevronRight, MessageSquare, FileText, Book, Lightbulb, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type HelpCategory = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const helpCategories: HelpCategory[] = [
  {
    id: "chat",
    title: "Chat with Support",
    description: "Connect with our customer support team",
    icon: <MessageSquare className="h-5 w-5 text-green-400" />,
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    description: "Find answers to common questions",
    icon: <FileText className="h-5 w-5 text-blue-400" />,
  },
  {
    id: "guides",
    title: "User Guides",
    description: "Step-by-step guides for using our platform",
    icon: <Book className="h-5 w-5 text-purple-400" />,
  },
  {
    id: "tips",
    title: "Banking Tips",
    description: "Learn how to make the most of your account",
    icon: <Lightbulb className="h-5 w-5 text-yellow-400" />,
  },
]

type FAQ = {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "How do I reset my password?",
    answer:
      "Go to the login page and click on 'Forgot Password'. Follow the instructions sent to your registered email address to reset your password.",
  },
  {
    question: "How do I transfer money between accounts?",
    answer:
      "Navigate to the Transfers tab in the banking dashboard. Select the source and destination accounts, enter the amount, and confirm the transfer.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard encryption and security protocols to protect your data. We also offer two-factor authentication for added security.",
  },
  {
    question: "How do I report a lost or stolen card?",
    answer:
      "Go to the Cards section in your profile, select the affected card, and click on 'Report Lost/Stolen'. You can also contact our 24/7 support line.",
  },
  {
    question: "What are the fees for international transfers?",
    answer:
      "International transfer fees vary based on destination country and transfer amount. You can view the fee structure in the Transfers section before confirming any transaction.",
  },
]

export function HelpPanel() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("categories")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCategories = searchQuery
    ? helpCategories.filter(
        (cat) =>
          cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : helpCategories

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    if (categoryId === "faq") {
      setActiveTab("faqs")
    } else {
      // In a real app, this would navigate to the specific help section
      console.log(`Navigating to ${categoryId} help section`)
      // For demo purposes, we'll just close the dialog
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="border-navy-700">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Help</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-navy-900 border-navy-700 max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div>
            <DialogTitle className="text-white">Help Center</DialogTitle>
            <DialogDescription>How can we assist you today?</DialogDescription>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="relative mt-2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search for help..."
            className="w-full bg-navy-800 border-navy-700 pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 overflow-hidden flex flex-col mt-4">
          <TabsList className="grid grid-cols-2 bg-navy-800">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          <TabsContent value="categories" className="flex-1 overflow-y-auto scrollbar-hide">
            <div className="space-y-2">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant="ghost"
                    className="w-full justify-start text-left p-3 hover:bg-navy-800"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <div className="flex items-center w-full">
                      <div className="mr-3">{category.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium">{category.title}</p>
                        <p className="text-xs text-gray-400">{category.description}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-500" />
                    </div>
                  </Button>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-6">
                  <p className="text-sm text-gray-400">No results found for "{searchQuery}"</p>
                  <Button
                    variant="link"
                    className="mt-2 text-green-400 hover:text-green-300"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear search
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="faqs" className="flex-1 overflow-y-auto scrollbar-hide">
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div key={index} className="border border-navy-700 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">{faq.question}</h3>
                    <p className="text-sm text-gray-300">{faq.answer}</p>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-6">
                  <p className="text-sm text-gray-400">No FAQs found for "{searchQuery}"</p>
                  <Button
                    variant="link"
                    className="mt-2 text-green-400 hover:text-green-300"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear search
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-4 pt-4 border-t border-navy-700">
          <Button
            variant="default"
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={() => {
              // In a real app, this would open a chat with support
              console.log("Opening live chat with support")
              setOpen(false)
            }}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Chat with Support
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
