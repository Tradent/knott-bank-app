export function SecurityAudit() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -left-32 top-40 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-100 to-navy-50 rounded-2xl transform -rotate-2"></div>
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-400/20 rounded-lg">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-navy-950">Security Audit Report</span>
                  </div>
                  <span className="text-green-500 font-medium">Latest: June 2023</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-navy-700">Infrastructure Security</span>
                      <span className="text-green-500 font-bold">A+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2.5 rounded-full w-[98%]"></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-navy-700">Smart Contract Security</span>
                      <span className="text-green-500 font-bold">A</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2.5 rounded-full w-[95%]"></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-navy-700">Data Protection</span>
                      <span className="text-green-500 font-bold">A+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2.5 rounded-full w-[99%]"></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-navy-700">Access Control</span>
                      <span className="text-green-500 font-bold">A+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2.5 rounded-full w-[97%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-navy-950">Regular </span>
              <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                Security Audits
              </span>
            </h2>
            <p className="text-navy-700">
              We believe in transparency and accountability when it comes to security. That's why we conduct regular
              security audits with leading independent firms to ensure our systems remain impenetrable.
            </p>
            <ul className="space-y-3">
              {[
                "Quarterly audits by top security firms",
                "Comprehensive penetration testing",
                "Smart contract verification and validation",
                "Regulatory compliance reviews",
                "Public disclosure of security measures",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-400/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-navy-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-navy-700">
              Our latest security audit report is available for review upon request. We maintain an open security policy
              to ensure our customers can trust our platform with their assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
