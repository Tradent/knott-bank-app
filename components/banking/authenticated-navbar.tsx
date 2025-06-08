"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth/auth-provider"

export function AuthenticatedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated } = useAuth()

  return (
    <nav className="sticky top-0 z-50 w-full bg-navy-950/90 backdrop-blur-sm border-b border-navy-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Knott Bank
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-300 hover:text-green-400 transition-colors">
              Features
            </Link>
            <Link href="/security" className="text-gray-300 hover:text-green-400 transition-colors">
              Security
            </Link>
            <Link href="/locations" className="text-gray-300 hover:text-green-400 transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <Button asChild className="bg-green-400 text-navy-950 hover:bg-green-300">
                <Link href="/banking">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button asChild className="bg-green-400 text-navy-950 hover:bg-green-300">
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden fixed inset-0 top-16 bg-navy-950 z-40 transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/features"
              className="text-gray-300 hover:text-green-400 transition-colors py-2 border-b border-navy-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/security"
              className="text-gray-300 hover:text-green-400 transition-colors py-2 border-b border-navy-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Security
            </Link>
            <Link
              href="/locations"
              className="text-gray-300 hover:text-green-400 transition-colors py-2 border-b border-navy-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-green-400 transition-colors py-2 border-b border-navy-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              {isAuthenticated ? (
                <Button asChild className="bg-green-400 text-navy-950 hover:bg-green-300 w-full">
                  <Link href="/banking" onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>
                </Button>
              ) : (
                <>
                  <Button
                    asChild
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400/10 w-full"
                  >
                    <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button asChild className="bg-green-400 text-navy-950 hover:bg-green-300 w-full">
                    <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
