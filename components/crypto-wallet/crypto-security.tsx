import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Server } from "lucide-react"

export function CryptoSecurity() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-navy-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-400/10 px-3 py-1 text-sm text-green-500">Security</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-950">
              Your Security Is Our Priority
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We've implemented multiple layers of protection to ensure your digital assets remain safe at all times.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-400/10 p-2">
                  <Shield className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-950">Multi-Layer Encryption</h3>
              </div>
              <p className="text-gray-500">
                Your data is encrypted with AES-256, the same encryption standard used by banks and military
                organizations worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-400/10 p-2">
                  <Lock className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-950">Secure Key Management</h3>
              </div>
              <p className="text-gray-500">
                Private keys are stored using advanced secure enclave technology, never leaving your device unencrypted.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-400/10 p-2">
                  <Eye className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-950">Biometric Authentication</h3>
              </div>
              <p className="text-gray-500">
                Access your wallet using fingerprint or facial recognition for an additional layer of security.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-400/10 p-2">
                  <AlertTriangle className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-950">Fraud Detection</h3>
              </div>
              <p className="text-gray-500">
                Our AI-powered system monitors transactions 24/7 to detect and prevent suspicious activities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-400/10 p-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-950">Regular Security Audits</h3>
              </div>
              <p className="text-gray-500">
                Our systems undergo regular security audits by independent third-party security firms.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-400/10 p-2">
                  <Server className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-950">Cold Storage</h3>
              </div>
              <p className="text-gray-500">
                The majority of assets are stored in offline cold storage, protected from online threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
