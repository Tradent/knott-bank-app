import { HelpTopics } from "@/components/banking/profile/help/help-topics"
import { FAQSection } from "@/components/banking/profile/help/faq-section"
import { SupportTickets } from "@/components/banking/profile/help/support-tickets"
import { ContactSupport } from "@/components/banking/profile/help/contact-support"

export default function HelpPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Help & Support</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <HelpTopics />
            <ContactSupport />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <FAQSection />
            <SupportTickets />
          </div>
        </div>
      </div>
    </div>
  )
}
