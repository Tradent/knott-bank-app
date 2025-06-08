import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Knott Bank",
  description: "Learn how Knott Bank uses cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-navy-900 py-16 border-b border-navy-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cookie Policy</h1>
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
                  This Cookie Policy explains how Knott Bank ("we", "us", or "our") uses cookies and similar
                  technologies on our website and applications. It explains what these technologies are and why we use
                  them, as well as your rights to control our use of them.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">What Are Cookies?</h2>
                <p className="text-gray-300 mb-6">
                  Cookies are small text files that are stored on your computer or mobile device when you visit a
                  website. They are widely used to make websites work more efficiently and provide information to the
                  website owners. Cookies enhance user experience by allowing websites to remember your preferences and
                  understand how you use their site.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Types of Cookies We Use</h2>
                <p className="text-gray-300 mb-4">We use the following types of cookies on our website:</p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Essential Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are necessary for the website to function properly. They enable core functionality such
                  as security, network management, and account access. You cannot opt out of these cookies.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Performance and Analytics Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies collect information about how visitors use our website, such as which pages they visit
                  most often and if they receive error messages. They help us improve how our website works and
                  understand user behavior.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Functionality Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies allow the website to remember choices you make (such as your username, language, or
                  region) and provide enhanced, personalized features.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Targeting and Advertising Cookies</h3>
                <p className="text-gray-300 mb-6">
                  These cookies are used to deliver advertisements that are more relevant to you and your interests.
                  They are also used to limit the number of times you see an advertisement and help measure the
                  effectiveness of advertising campaigns.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-300 mb-6">
                  In addition to our own cookies, we may also use various third-party cookies to report usage
                  statistics, deliver advertisements, and so on. These cookies may be placed by third-party service
                  providers when you use our website or by us for third-party features on our website.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cookie Duration</h2>
                <p className="text-gray-300 mb-4">
                  Cookies can remain on your computer or mobile device for different periods of time:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                  <li>
                    <strong className="text-white">Session Cookies:</strong> These cookies exist only while your browser
                    is open and are deleted automatically once you close your browser.
                  </li>
                  <li>
                    <strong className="text-white">Persistent Cookies:</strong> These cookies remain on your device
                    after your browser is closed and can be used by websites to recognize your computer when you reopen
                    your browser.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Managing Cookies</h2>
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. However, if you
                  limit the ability of websites to set cookies, you may worsen your overall user experience and/or lose
                  access to certain features.
                </p>
                <p className="text-gray-300 mb-6">
                  To find out more about cookies, including how to see what cookies have been set and how to manage and
                  delete them, visit{" "}
                  <a href="https://www.allaboutcookies.org" className="text-green-400 hover:text-green-300">
                    www.allaboutcookies.org
                  </a>
                  .
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Changes to This Cookie Policy</h2>
                <p className="text-gray-300 mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or
                  our business practices. Any changes will be posted on this page with an updated revision date.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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
