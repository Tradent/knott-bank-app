export function HelpCenterHero() {
  return (
    <section className="bg-gradient-to-r from-navy-900 to-navy-800 py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How can we help you?</h1>
        <p className="text-lg text-gray-300 mb-8">
          Find answers to your questions and learn how to get the most out of your Knott Bank account.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search for help articles..."
            className="w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
