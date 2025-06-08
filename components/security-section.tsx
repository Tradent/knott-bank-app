import { LockKeyhole, Shield, Eye, Server, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: <LockKeyhole className="h-6 w-6 text-green-400" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using AES-256 encryption.",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-400" />,
      title: "Multi-Signature Security",
      description: "Transactions require multiple approvals for enhanced security.",
    },
    {
      icon: <Eye className="h-6 w-6 text-green-400" />,
      title: "Privacy-Focused",
      description: "Your personal information is never sold or shared with third parties.",
    },
    {
      icon: <Server className="h-6 w-6 text-green-400" />,
      title: "Decentralized Storage",
      description: "Assets are stored across multiple secure locations to prevent single points of failure.",
    },
  ]

  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-navy-900 to-transparent"></div>
      <div className="absolute -left-32 top-40 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-navy-800 rounded-2xl overflow-hidden border border-navy-700">
              <div className="p-6 border-b border-navy-700">
                <h3 className="text-xl font-bold text-white mb-1">Security Rating</h3>
                <p className="text-gray-400 text-sm">Last updated: April 2025</p>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-4xl font-bold text-white">A+</div>
                    <div className="text-green-400">Excellent</div>
                  </div>
                  <div className="w-24 h-24 rounded-full bg-navy-700 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-navy-800 flex items-center justify-center border-4 border-green-400">
                      <span className="text-xl font-bold text-white">98%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  {[
                    { label: "Encryption", score: 100 },
                    { label: "Authentication", score: 98 },
                    { label: "Data Protection", score: 95 },
                    { label: "Network Security", score: 97 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="text-green-400 font-medium">{item.score}/100</span>
                      </div>
                      <div className="w-full bg-navy-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-500 to-green-300 h-2 rounded-full"
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-navy-700 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-green-400/20 p-2 rounded-full mr-3">
                      <Shield className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Security Guarantee</h4>
                      <p className="text-gray-400 text-sm">
                        Your funds are insured up to $250,000 against security breaches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-green-400/20 px-4 py-2 rounded-full mb-4">
              <span className="text-green-400 font-medium text-sm">Bank-Grade Security</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Your security is our </span>
              <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                top priority
              </span>
            </h2>
            <p className="text-gray-300 mb-8">
              At Knott Bank, we implement multiple layers of protection to ensure your assets and personal information
              remain secure at all times. Our security measures exceed industry standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-navy-800 p-2 rounded-lg mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-navy-800 rounded-xl p-6 border border-navy-700 mb-8">
              <h3 className="text-white font-bold mb-4">Security Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {["ISO 27001", "PCI DSS", "SOC 2", "GDPR Compliant"].map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-green-400/20 flex items-center justify-center mr-2">
                      <Check className="h-3 w-3 text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="bg-green-400 text-navy-950 hover:bg-green-300 px-8 py-3 rounded-full">
              Learn More About Security
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
