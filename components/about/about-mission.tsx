export function AboutMission() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-navy-950">Our </span>
              <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-navy-700">
              At Knott Bank, our mission is to provide a secure, private, and convenient bridge between traditional
              financial systems and the world of decentralized finance. We believe that everyone should have access to
              the benefits of both worlds without compromising on security or privacy.
            </p>
            <p className="text-navy-700">
              We're committed to building a financial ecosystem that empowers individuals and businesses to take control
              of their financial future while maintaining the convenience and reliability of traditional banking
              services.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-navy-950 mb-4">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Security", description: "We prioritize the security of your assets above all else." },
                  { title: "Privacy", description: "We respect and protect your financial privacy." },
                  { title: "Innovation", description: "We continuously innovate to provide cutting-edge solutions." },
                  { title: "Accessibility", description: "We make financial services accessible to everyone." },
                ].map((value, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-green-500 mb-1">{value.title}</h4>
                    <p className="text-sm text-navy-700">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="w-16 h-16 bg-green-400/30 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-navy-950 mb-4">Our Vision</h3>
                    <p className="text-navy-700">
                      To create a world where traditional and decentralized finance seamlessly coexist, providing
                      everyone with secure, private, and accessible financial services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
