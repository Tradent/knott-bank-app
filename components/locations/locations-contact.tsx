import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function LocationsContact() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-navy-950 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Schedule a </span>
                <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                  Visit
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Book a private consultation at one of our premium branches to discuss your financial needs.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <Input id="name" placeholder="John Doe" className="bg-navy-800 border-navy-700" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-navy-800 border-navy-700" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <Input id="phone" placeholder="+1 (555) 123-4567" className="bg-navy-800 border-navy-700" />
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium text-gray-300">
                  Preferred Location
                </label>
                <Select>
                  <SelectTrigger id="location" className="bg-navy-800 border-navy-700">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-york">New York Financial District</SelectItem>
                    <SelectItem value="london">London Canary Wharf</SelectItem>
                    <SelectItem value="singapore">Singapore Marina Bay</SelectItem>
                    <SelectItem value="dubai">Dubai International Financial Centre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your financial goals and how we can help..."
                  className="bg-navy-800 border-navy-700 min-h-[120px]"
                />
              </div>

              <div className="md:col-span-2">
                <Button className="w-full bg-green-400 text-navy-950 hover:bg-green-300">Schedule Appointment</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
