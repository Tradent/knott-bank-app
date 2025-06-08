export function AboutTeam() {
  const team = [
    {
      name: "Alexandra Chen",
      role: "Chief Executive Officer",
      bio: "Former fintech executive with 15+ years of experience in traditional banking and blockchain technology.",
    },
    {
      name: "Marcus Johnson",
      role: "Chief Technology Officer",
      bio: "Blockchain pioneer and security expert who previously led development at major cryptocurrency exchanges.",
    },
    {
      name: "Sophia Rodriguez",
      role: "Chief Financial Officer",
      bio: "Experienced financial strategist with background in both traditional finance and cryptocurrency markets.",
    },
    {
      name: "David Kim",
      role: "Chief Security Officer",
      bio: "Cybersecurity veteran with expertise in protecting financial systems and digital assets.",
    },
    {
      name: "Olivia Patel",
      role: "Head of Operations",
      bio: "Operations specialist focused on creating seamless experiences across digital and physical banking channels.",
    },
    {
      name: "James Wilson",
      role: "Head of Compliance",
      bio: "Regulatory expert ensuring Knott Bank maintains the highest standards of compliance globally.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -left-32 top-40 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-navy-950">Our </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            Meet the experienced professionals leading Knott Bank's mission to bridge traditional and decentralized
            finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-400/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="text-2xl font-bold text-green-500">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-1">{member.name}</h3>
              <p className="text-green-500 text-sm mb-3">{member.role}</p>
              <p className="text-navy-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
