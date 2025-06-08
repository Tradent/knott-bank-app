import { Building, MapPin, Phone, Clock } from "lucide-react"

export function LocationsList() {
  const featuredLocations = [
    {
      name: "New York Financial District",
      address: "120 Wall Street, New York, NY 10005",
      phone: "+1 (212) 555-1234",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-2PM",
      type: "Premium Branch",
    },
    {
      name: "London Canary Wharf",
      address: "25 Canada Square, London E14 5LQ, UK",
      phone: "+44 20 7123 4567",
      hours: "Mon-Fri: 9AM-5:30PM, Sat: 10AM-2PM",
      type: "Premium Branch",
    },
    {
      name: "Singapore Marina Bay",
      address: "10 Marina Boulevard, Singapore 018983",
      phone: "+65 6123 4567",
      hours: "Mon-Fri: 9AM-6PM, Sat: 9:30AM-1PM",
      type: "Premium Branch",
    },
    {
      name: "Dubai International Financial Centre",
      address: "Gate Village 4, DIFC, Dubai, UAE",
      phone: "+971 4 123 4567",
      hours: "Sun-Thu: 8AM-5PM",
      type: "Premium Branch",
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
            <span className="text-navy-950">Our Global </span>
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Branches</span>
          </h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            Visit our premium branches for personalized service and private banking rooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredLocations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-400/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Building className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-950 mb-1">{location.name}</h3>
                  <p className="text-green-500 text-sm mb-3">{location.type}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-navy-600" />
                      <span className="text-navy-700 text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-navy-600" />
                      <span className="text-navy-700 text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-navy-600" />
                      <span className="text-navy-700 text-sm">{location.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors">
            <span>View all locations</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
