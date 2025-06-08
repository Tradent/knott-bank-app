import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Knott Bank",
  description: "Get in touch with Knott Bank's customer support team for assistance.",
}

export default function ContactUsPage() {
  return (
    <div className="bg-navy-950 text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-navy-900 py-16 border-b border-navy-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-300">
                Our team is here to help you with any questions or concerns you may have.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-navy-900 p-8 rounded-lg border border-navy-800">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="">Select a subject</option>
                      <option value="account">Account Issues</option>
                      <option value="banking">Banking Services</option>
                      <option value="cards">Card Services</option>
                      <option value="crypto">Crypto & DeFi</option>
                      <option value="security">Security Concerns</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-400 text-navy-900 py-3 px-6 rounded-md font-medium hover:bg-green-300 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="bg-navy-900 p-8 rounded-lg border border-navy-800 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-green-400/20 p-3 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Phone</h3>
                        <p className="text-gray-300">Customer Support: +1 (800) 123-4567</p>
                        <p className="text-gray-300">International: +1 (123) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-400/20 p-3 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Email</h3>
                        <p className="text-gray-300">General Inquiries: info@knottbank.com</p>
                        <p className="text-gray-300">Support: support@knottbank.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-400/20 p-3 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Office</h3>
                        <p className="text-gray-300">123 Financial District</p>
                        <p className="text-gray-300">New York, NY 10004</p>
                        <p className="text-gray-300">United States</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-400/20 p-3 rounded-full mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Hours</h3>
                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 8:00 PM EST</p>
                        <p className="text-gray-300">Saturday: 10:00 AM - 6:00 PM EST</p>
                        <p className="text-gray-300">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-navy-900 p-8 rounded-lg border border-navy-800">
                  <h2 className="text-2xl font-bold text-white mb-6">Emergency Support</h2>
                  <p className="text-gray-300 mb-4">
                    For urgent matters such as lost or stolen cards, suspicious account activity, or other emergencies:
                  </p>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-md p-4 mb-6">
                    <p className="text-red-400 font-semibold">24/7 Emergency Hotline: +1 (888) 999-8888</p>
                  </div>
                  <p className="text-gray-300">
                    For lost or stolen cards, you can also freeze your card instantly through the Knott Bank mobile app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
