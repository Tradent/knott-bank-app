import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, ExternalLink } from "lucide-react"

export function InternationalTransfers() {
  const exchangeRates = [
    { currency: "EUR", code: "Euro", rate: "0.93", change: "+0.2%" },
    { currency: "GBP", code: "British Pound", rate: "0.79", change: "-0.1%" },
    { currency: "CAD", code: "Canadian Dollar", rate: "1.35", change: "+0.3%" },
    { currency: "AUD", code: "Australian Dollar", rate: "1.52", change: "+0.5%" },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>International Transfers</CardTitle>
        <CardDescription>Current exchange rates (per 1 USD)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {exchangeRates.map((rate, index) => (
              <div key={index} className="p-2 bg-navy-800 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-white">{rate.currency}</span>
                  <span className={`text-xs ${rate.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                    {rate.change}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">{rate.code}</span>
                  <span className="text-sm text-white">{rate.rate}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-navy-800 p-3 rounded-lg border border-navy-700">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-navy-700 rounded-lg">
                <Globe className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">International Transfer Benefits</h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Competitive exchange rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Low transfer fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Fast delivery to 130+ countries</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 border-navy-700 hover:bg-navy-800 hover:text-green-400"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> View All Rates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
