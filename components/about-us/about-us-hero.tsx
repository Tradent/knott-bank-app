export function AboutUsHero() {
  return (
    <section className="relative py-16 md:py-24 bg-navy-950 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 z-0"></div>

      {/* Green accent */}
      <div className="absolute top-40 -left-24 w-72 h-72 bg-green-400/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-400/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Knott Bank
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We're bridging the gap between traditional banking and decentralized finance, providing secure and private
            financial services for the modern world.
          </p>
        </div>
      </div>
    </section>
  )
}
