import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Knott Bank",
  description: "Learn how Knott Bank collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-navy-900 py-16 border-b border-navy-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
              <p className="text-gray-300">Last updated: April 12, 2025</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-navy-900 rounded-lg p-8 border border-navy-800">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-6">
                  At Knott Bank, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our website or use our banking and financial
                  services.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-4">We collect personal information that you provide to us, such as:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                  <li>Personal identifiers (name, email address, phone number, etc.)</li>
                  <li>Account information and financial data</li>
                  <li>Transaction history and payment details</li>
                  <li>Identity verification information</li>
                  <li>Communication records between you and Knott Bank</li>
                  <li>Device and usage information when you access our services</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                  <li>Providing and maintaining our services</li>
                  <li>Processing transactions and managing your accounts</li>
                  <li>Verifying your identity and preventing fraud</li>
                  <li>Improving and personalizing your experience</li>
                  <li>Communicating with you about your accounts and our services</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-300 mb-6">
                  We may share your information with third parties in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                  <li>With service providers who help us operate our business</li>
                  <li>With financial partners to facilitate transactions</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transaction such as a merger or acquisition</li>
                  <li>With your consent or at your direction</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Security</h2>
                <p className="text-gray-300 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
                  security.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Your Rights and Choices</h2>
                <p className="text-gray-300 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                  <li>Accessing and obtaining a copy of your data</li>
                  <li>Correcting inaccurate information</li>
                  <li>Requesting deletion of your data</li>
                  <li>Restricting or objecting to certain processing activities</li>
                  <li>Data portability</li>
                  <li>Withdrawing consent</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-300 mb-6">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-navy-800 p-4 rounded-md mb-6">
                  <p className="text-gray-300">Email: privacy@knottbank.com</p>
                  <p className="text-gray-300">Address: 123 Financial District, New York, NY 10004, United States</p>
                  <p className="text-gray-300">Phone: +1 (800) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
