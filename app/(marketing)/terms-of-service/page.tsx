import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Knott Bank",
  description: "The terms and conditions governing your use of Knott Bank services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-navy-900 py-16 border-b border-navy-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
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
                  These Terms of Service ("Terms") govern your access to and use of Knott Bank's website, mobile
                  applications, and financial services (collectively, the "Services"). Please read these Terms carefully
                  before using our Services.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If
                  you do not agree to these Terms, you may not access or use the Services.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Eligibility</h2>
                <p className="text-gray-300 mb-6">
                  You must be at least 18 years old and capable of forming a binding contract to use our Services. By
                  using our Services, you represent and warrant that you meet these requirements and that you are not
                  prohibited from using the Services under applicable laws.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Account Registration and Security</h2>
                <p className="text-gray-300 mb-4">
                  To access certain features of our Services, you may need to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your account credentials secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access or use of your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Financial Services</h2>
                <p className="text-gray-300 mb-6">
                  Our financial services are subject to additional terms and conditions that will be presented to you
                  when you sign up for specific services. These may include terms related to banking services,
                  cryptocurrency transactions, investments, and other financial products.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. User Conduct</h2>
                <p className="text-gray-300 mb-4">When using our Services, you agree not to:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Use the Services for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to any part of the Services</li>
                  <li>Interfere with or disrupt the Services or servers</li>
                  <li>Engage in fraudulent or deceptive activities</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-300 mb-6">
                  The Services and all content, features, and functionality thereof are owned by Knott Bank or its
                  licensors and are protected by copyright, trademark, and other intellectual property laws. You may not
                  copy, modify, distribute, sell, or lease any part of our Services without our prior written consent.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-300 mb-6">
                  To the maximum extent permitted by law, Knott Bank shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out
                  of or in connection with your access to or use of the Services.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-gray-300 mb-6">
                  The Services are provided "as is" and "as available" without warranties of any kind, either express or
                  implied, including, but not limited to, implied warranties of merchantability, fitness for a
                  particular purpose, or non-infringement.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Governing Law</h2>
                <p className="text-gray-300 mb-6">
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York,
                  without regard to its conflict of law provisions. Any legal action or proceeding arising out of or
                  relating to these Terms shall be brought exclusively in the federal or state courts located in New
                  York County, New York.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-300 mb-6">
                  We may modify these Terms at any time by posting the revised Terms on our website. Your continued use
                  of the Services after any such changes constitutes your acceptance of the new Terms.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Contact Information</h2>
                <p className="text-gray-300 mb-6">If you have any questions about these Terms, please contact us at:</p>
                <div className="bg-navy-800 p-4 rounded-md mb-6">
                  <p className="text-gray-300">Email: legal@knottbank.com</p>
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
