import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Smartphone, Copy, ExternalLink } from "lucide-react"

export function VirtualCards() {
  const virtualCards = [
    {
      name: "Virtual Shopping Card",
      lastFour: "3456",
      expiryDate: "12/24",
      status: "active",
      merchant: "Online Shopping",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Virtual Cards</CardTitle>
          <CardDescription>Create and manage virtual cards for online use</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
          <Plus className="h-4 w-4 mr-2" /> New Card
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {virtualCards.map((card, index) => (
            <div key={index} className="p-3 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-400/20 rounded-full">
                    <Smartphone className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{card.name}</h3>
                    <p className="text-sm text-gray-400">•••• {card.lastFour}</p>
                    <div className="flex items-center mt-1">
                      <p className="text-xs text-gray-500">Expires: {card.expiryDate}</p>
                      <div className="mx-2 h-1 w-1 rounded-full bg-gray-700"></div>
                      <div className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-1"></div>
                        <p className="text-xs text-gray-500 capitalize">{card.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy details</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                </div>
              </div>
              {card.merchant && (
                <div className="mt-2 px-2 py-1 bg-navy-700 rounded text-xs text-gray-300 inline-block">
                  Merchant: {card.merchant}
                </div>
              )}
            </div>
          ))}

          {virtualCards.length === 0 && (
            <div className="text-center py-6">
              <p className="text-gray-400 mb-2">No virtual cards created yet</p>
              <Button variant="outline" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
                <Plus className="h-4 w-4 mr-2" /> Create Your First Virtual Card
              </Button>
            </div>
          )}

          <div className="bg-navy-800 p-4 rounded-lg border border-navy-700 mt-4">
            <h3 className="text-white font-medium mb-2">About Virtual Cards</h3>
            <p className="text-sm text-gray-300">
              Virtual cards provide an extra layer of security for online purchases. Create single-use or
              merchant-specific cards to protect your main card details.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-navy-700 rounded-md text-xs text-gray-300">Enhanced Security</span>
              <span className="px-2 py-1 bg-navy-700 rounded-md text-xs text-gray-300">Merchant-Specific</span>
              <span className="px-2 py-1 bg-navy-700 rounded-md text-xs text-gray-300">Customizable Limits</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
