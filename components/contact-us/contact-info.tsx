import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-green-500 mr-4 mt-1" />
            <div>
              <h3 className="font-medium text-navy-900">Phone</h3>
              <p className="text-gray-600">+1 (800) 555-KNOTT</p>
              <p className="text-sm text-gray-500 mt-1">Toll-free within the US</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 text-green-500 mr-4 mt-1" />
            <div>
              <h3 className="font-medium text-navy-900">Email</h3>
              <p className="text-gray-600">support@knottbank.com</p>
              <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-green-500 mr-4 mt-1" />
            <div>
              <h3 className="font-medium text-navy-900">Office</h3>
              <p className="text-gray-600">123 Financial District</p>
              <p className="text-gray-600">New York, NY 10004</p>
              <p className="text-sm text-gray-500 mt-1">By appointment only</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-5 w-5 text-green-500 mr-4 mt-1" />
            <div>
              <h3 className="font-medium text-navy-900">Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9AM - 8PM EST</p>
              <p className="text-gray-600">Saturday: 10AM - 5PM EST</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-100 rounded-lg p-6">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-orange-500 mr-4 mt-1" />
          <div>
            <h3 className="font-semibold text-orange-800 mb-2">Emergency Support</h3>
            <p className="text-orange-700">
              For urgent matters such as suspected fraud or account security issues, please call our 24/7 emergency
              line:
            </p>
            <p className="font-medium text-orange-800 mt-2">+1 (888) 999-HELP</p>
          </div>
        </div>
      </div>
    </div>
  )
}
