export function AboutTimeline() {
  const milestones = [
    {
      year: "2018",
      title: "Concept Development",
      description: "The idea for Knott Bank was born, aiming to bridge traditional banking with decentralized finance.",
    },
    {
      year: "2019",
      title: "Seed Funding",
      description: "Secured initial funding from venture capital firms specializing in fintech and blockchain.",
    },
    {
      year: "2020",
      title: "Beta Platform Launch",
      description: "Launched our beta platform with core digital banking features and cryptocurrency support.",
    },
    {
      year: "2021",
      title: "First Physical Location",
      description: "Opened our first premium branch in New York's Financial District.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to Europe and Asia with new branches in London and Singapore.",
    },
    {
      year: "2023",
      title: "Full Platform Release",
      description: "Released our complete platform with integrated CEFI and DEFI features.",
    },
    {
      year: "2024",
      title: "Physical Card Launch",
      description: "Introduced physical cards for seamless spending and transfers between financial systems.",
    },
    {
      year: "2025",
      title: "The Future",
      description: "Continuing to innovate and expand our services globally.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-navy-950">Our </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            The evolution of Knott Bank from concept to global crypto banking platform.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500"></div>

                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="text-green-500 font-bold mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-navy-950 mb-2">{milestone.title}</h3>
                    <p className="text-navy-700">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
