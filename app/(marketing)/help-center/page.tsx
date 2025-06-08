import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Help Center | Knott Bank",
  description: "Find answers to your questions about Knott Bank services and features.",
}

export default function HelpCenterPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-navy-900 py-16 border-b border-navy-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How can we help you?</h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full py-4 px-6 rounded-lg bg-navy-800 text-white border border-navy-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-400 text-navy-900 px-4 py-2 rounded-md hover:bg-green-300 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Banking Category */}
              <div className="bg-navy-900 p-8 rounded-lg border border-navy-800 hover:border-green-400 transition-colors">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l18 0M3 12h18M3 18h18" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Banking</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Account Management</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Transfers & Payments</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Direct Deposits</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Mobile Banking</li>
                </ul>
              </div>

              {/* Cards Category */}
              <div className="bg-navy-900 p-8 rounded-lg border border-navy-800 hover:border-green-400 transition-colors">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Cards</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Physical Cards</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Virtual Cards</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Card Security</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Rewards & Benefits</li>
                </ul>
              </div>

              {/* Crypto & DeFi Category */}
              <div className="bg-navy-900 p-8 rounded-lg border border-navy-800 hover:border-green-400 transition-colors">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Crypto & DeFi</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Wallet Setup</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Buying & Selling Crypto</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Staking & Yield Farming</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Security Best Practices</li>
                </ul>
              </div>

              {/* Account Security Category */}
              <div className="bg-navy-900 p-8 rounded-lg border border-navy-800 hover:border-green-400 transition-colors">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Account Security</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Two-Factor Authentication</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Password Management</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Phishing Prevention</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Device Security</li>
                </ul>
              </div>

              {/* Investments Category */}
              <div className="bg-navy-900 p-8 rounded-lg border border-navy-800 hover:border-green-400 transition-colors">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Investments</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Getting Started</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Portfolio Management</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Investment Strategies</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Tax Considerations</li>
                </ul>
              </div>

              {/* Account Settings Category */}
              <div className="bg-navy-900 p-8 rounded-lg border border-navy-800 hover:border-green-400 transition-colors">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Account Settings</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Profile Management</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Notification Preferences</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Privacy Settings</li>
                  <li className="text-gray-400 hover:text-green-400 transition-colors">Linked Accounts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Articles Section */}
        <section className="py-16 bg-navy-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-navy-800 p-6 rounded-lg hover:bg-navy-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">How to set up two-factor authentication</h3>
                <p className="text-gray-400 mb-4">
                  Learn how to add an extra layer of security to your Knott Bank account.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 flex items-center">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-navy-800 p-6 rounded-lg hover:bg-navy-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Getting started with crypto wallet</h3>
                <p className="text-gray-400 mb-4">
                  A beginner's guide to setting up and using your Knott Bank crypto wallet.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 flex items-center">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-navy-800 p-6 rounded-lg hover:bg-navy-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">How to earn rewards with your card</h3>
                <p className="text-gray-400 mb-4">
                  Maximize your benefits and earn rewards with every purchase using your Knott Bank card.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 flex items-center">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-navy-800 p-6 rounded-lg hover:bg-navy-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Understanding DeFi staking options</h3>
                <p className="text-gray-400 mb-4">
                  Learn about the different staking options available and how to maximize your returns.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 flex items-center">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our support team is available 24/7 to assist you with any questions or issues you may have.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/contact-us"
                    className="bg-green-400 text-navy-900 px-6 py-3 rounded-md font-medium hover:bg-green-300 transition-colors"
                  >
                    Contact Support
                  </a>
                  <a
                    href="#"
                    className="border border-green-400 text-green-400 px-6 py-3 rounded-md font-medium hover:bg-green-400/10 transition-colors"
                  >
                    Live Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
