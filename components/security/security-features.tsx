import { Shield, Lock, Eye, Server, Key, Fingerprint, Bell, FileCheck } from "lucide-react"

export function SecurityFeatures() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-green-400" />,
      title: "Multi-Signature Security",
      description:
        "All transactions require multiple approvals, ensuring no single point of failure in the authorization process.",
    },
    {
      icon: <Lock className="h-10 w-10 text-green-400" />,
      title: "End-to-End Encryption",
      description: "All communications and data transfers are protected with military-grade encryption protocols.",
    },
    {
      icon: <Key className="h-10 w-10 text-green-400" />,
      title: "Cold Storage",
      description: "The majority of assets are stored in offline cold wallets, inaccessible to online threats.",
    },
    {
      icon: <Server className="h-10 w-10 text-green-400" />,
      title: "Decentralized Storage",
      description: "Assets are distributed across multiple secure locations to prevent single-point vulnerabilities.",
    },
    {
      icon: <Fingerprint className="h-10 w-10 text-green-400" />,
      title: "Biometric Verification",
      description: "Optional biometric authentication adds an extra layer of security for sensitive operations.",
    },
    {
      icon: <Eye className="h-10 w-10 text-green-400" />,
      title: "Privacy Protection",
      description: "Enhanced privacy measures ensure your financial data remains confidential and secure.",
    },
    {
      icon: <Bell className="h-10 w-10 text-green-400" />,
      title: "Real-time Monitoring",
      description: "24/7 surveillance of all activities with instant alerts for suspicious transactions.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-green-400" />,
      title: "Regular Security Audits",
      description:
        "Independent security firms regularly audit our systems to identify and address potential vulnerabilities.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Multi-Layered
            </span>
            <span className="text-navy-950"> Security Approach</span>
          </h2>
          <p className="text-navy-800 max-w-2xl mx-auto">
            Our comprehensive security framework ensures your assets are protected at every level, from transaction
            authorization to data storage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
            >
              <div className="mb-4 p-3 bg-navy-50 inline-block rounded-lg">{feature.icon}</div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">{feature.title}</h3>
              <p className="text-navy-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
