export function HelpCenterPopular() {
  const popularArticles = [
    {
      title: "How to set up two-factor authentication",
      category: "Security",
      views: "2.4k",
    },
    {
      title: "Connecting your traditional bank account",
      category: "Banking",
      views: "1.9k",
    },
    {
      title: "Getting started with crypto staking",
      category: "Crypto & DeFi",
      views: "3.1k",
    },
    {
      title: "Managing your physical card settings",
      category: "Cards",
      views: "1.7k",
    },
    {
      title: "How to recover your account",
      category: "Account Access",
      views: "2.2k",
    },
    {
      title: "Understanding yield farming risks",
      category: "Investments",
      views: "1.5k",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Popular Help Articles</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {popularArticles.map((article, index) => (
            <div
              key={index}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                index !== popularArticles.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-navy-900">{article.title}</h3>
                  <span className="text-sm text-gray-500">{article.category}</span>
                </div>
                <span className="text-sm text-gray-400">{article.views} views</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
