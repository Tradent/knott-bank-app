import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                Knott Bank
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              A central location for storing crypto wealth with CEFI features in a DEFI world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <span className="sr-only">Discord</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 12h.01M15 12h.01M8.5 17.5l-1.5.5s0-9 4-9c-2.5 0-2 6-2 6zm8.5 0l1.5.5s0-9-4-9c2.5 0 2 6 2 6z"></path>
                  <path d="M15.5 17c0 1-1.5 3-3.5 3s-3.5-2-3.5-3 1.5-1 3.5-1 3.5 0 3.5 1z"></path>
                  <path d="M18 4c-1.5-1-4-2-6-2-2-.05-4.5.95-6 2-2 1-3 2-3 6 0 4 1 8 3 10 0 0 3.5 2 6 2 2.5 0 6-2 6-2 2-2 3-6 3-10 0-4-1-5-3-6z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/auth/signin" className="text-gray-400 hover:text-green-400">
                  Banking
                </Link>
              </li>
              <li>
                <Link href="/crypto-wallet" className="text-gray-400 hover:text-green-400">
                  Crypto Wallet
                </Link>
              </li>
              <li>
                <Link href="/physical-cards" className="text-gray-400 hover:text-green-400">
                  Physical Cards
                </Link>
              </li>
              <li>
                <Link href="/investments" className="text-gray-400 hover:text-green-400">
                  Investments
                </Link>
              </li>
              <li>
                <Link href="/defi-hub" className="text-gray-400 hover:text-green-400">
                  DeFi Hub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-green-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-green-400">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-green-400">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-green-400">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help-center" className="text-gray-400 hover:text-green-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-green-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-green-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-green-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-green-400">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Knott Bank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
