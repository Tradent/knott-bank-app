export function HelpCenterCta() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-navy-900 to-navy-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Still need help?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Our support team is available 24/7 to assist you with any questions or issues you may have.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact-us"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium"
          >
            Contact Support
          </a>
          <a
            href="#"
            className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-full font-medium"
          >
            Live Chat
          </a>
        </div>
      </div>
    </section>
  )
}
