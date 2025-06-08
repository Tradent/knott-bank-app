import { Heart, Clock, GraduationCap, Globe } from "lucide-react"

export function CareersBenefits() {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-green-500" />,
      title: "Comprehensive Healthcare",
      description: "Full medical, dental, and vision coverage for you and your dependents.",
    },
    {
      icon: <Clock className="h-6 w-6 text-green-500" />,
      title: "Flexible Work",
      description: "Remote-friendly environment with flexible hours to maintain work-life balance.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-green-500" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities with education stipends and mentorship.",
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: "Global Opportunities",
      description: "Work with teams across our global offices and gain international experience.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-navy-950">Why Work </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            We offer competitive compensation and benefits to help you thrive both personally and professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-navy-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-white rounded-lg inline-block mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">{benefit.title}</h3>
              <p className="text-navy-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
