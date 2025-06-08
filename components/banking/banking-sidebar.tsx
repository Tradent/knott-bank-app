"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import {
  Home,
  Wallet,
  CreditCard,
  ArrowLeftRight,
  PieChart,
  Settings,
  User,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const navItems = [
  { name: "Overview", href: "/banking", icon: Home },
  { name: "Accounts", href: "/banking/accounts", icon: Wallet },
  { name: "Cards", href: "/banking/cards", icon: CreditCard },
  { name: "Transfers", href: "/banking/transfers", icon: ArrowLeftRight },
  { name: "Investments", href: "/banking/investments", icon: PieChart },
  { name: "DeFi", href: "/banking/defi", icon: PieChart },
  { name: "Wallet", href: "/banking/wallet", icon: Wallet },
  { name: "Profile", href: "/banking/profile", icon: User },
  { name: "Settings", href: "/banking/settings", icon: Settings },
]

export function BankingSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  // Load collapsed state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem("bankingSidebarCollapsed")
    if (savedState !== null) {
      setCollapsed(savedState === "true")
    }
  }, [])

  // Save collapsed state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("bankingSidebarCollapsed", collapsed.toString())
  }, [collapsed])

  return (
    <aside
      className={cn(
        "border-r border-navy-800 h-screen overflow-y-auto flex-shrink-0 transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="h-full flex flex-col">
        <div className={cn("p-4 flex items-center", collapsed ? "justify-center" : "justify-between")}>
          {!collapsed && (
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                Knott
              </span>
            </Link>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-navy-800 text-gray-300 transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white",
                    pathname === item.href ? "bg-navy-800 text-green-400" : "hover:bg-navy-900",
                    collapsed ? "justify-center" : "",
                  )}
                  title={collapsed ? item.name : undefined}
                >
                  <item.icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={cn("p-2 mt-auto", collapsed ? "items-center" : "")}>
          <ul className="space-y-1">
            <li>
              <Link
                href="/help"
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white hover:bg-navy-900",
                  collapsed ? "justify-center" : "",
                )}
                title={collapsed ? "Help & Support" : undefined}
              >
                <HelpCircle className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
                {!collapsed && <span>Help & Support</span>}
              </Link>
            </li>
            <li>
              <button
                className={cn(
                  "w-full flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white hover:bg-navy-900",
                  collapsed ? "justify-center" : "",
                )}
                title={collapsed ? "Log Out" : undefined}
              >
                <LogOut className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
                {!collapsed && <span>Log Out</span>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
