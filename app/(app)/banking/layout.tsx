import type React from "react"
import { BankingSidebar } from "@/components/banking/banking-sidebar"
import { BankingHeader } from "@/components/banking/banking-header"

export default function BankingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex overflow-hidden bg-navy-950">
      <BankingSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <BankingHeader />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
