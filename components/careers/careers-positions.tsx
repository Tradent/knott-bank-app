import { Code, BarChart, Users } from "lucide-react"
import Link from "next/link"

export function CareersPositions() {
  const departments = [
    {
      name: "Engineering",
      icon: <Code className="h-8 w-8 text-green-500" />,
      positions: [
        { title: "Senior Blockchain Developer", location: "Remote", type: "Full-time" },
        { title: "Frontend Engineer", location: "New York", type: "Full-time" },
      ],
    },
    {
      name: "Finance",
      icon: <BarChart className="h-8 w-8 text-green-500" />,
      positions: [
        { title: "Financial Analyst", location: "Singapore", type: "Full-time" },
        { title: "Investment Advisor", location: "London", type: "Full-time" },
      ],
    },
    {
      name: "Customer Success",
      icon: <Users className="h-8 w-8 text-green-500" />,
      positions: [
        { title: "Customer Support Specialist", location: "Remote", type: "Full-time" },
        { title: "Account Manager", location: "Dubai", type: "Full-time" },
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-navy-950">Open </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Positions
            </span>
          </h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            Join our team of passionate professionals working to bridge traditional banking with decentralized finance.
          </p>
        </div>

        <div className="space-y-12">
          {departments.map((department, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-navy-50 rounded-lg">{department.icon}</div>
                <h3 className="text-2xl font-bold text-navy-950">{department.name}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {department.positions.map((position, posIndex) => (
                  <div
                    key={posIndex}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <h4 className="text-xl font-bold text-navy-950 mb-2">{position.title}</h4>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm bg-navy-50 text-navy-700 px-3 py-1 rounded-full">
                        {position.location}
                      </span>
                      <span className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full">{position.type}</span>
                    </div>
                    <Link
                      href="#"
                      className="text-green-500 font-medium hover:text-green-600 transition-colors flex items-center gap-1"
                    >
                      <span>Apply Now</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
