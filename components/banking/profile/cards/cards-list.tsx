"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Wifi } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CardsList() {
  const cards = [
    {
      id: 1,
      type: "Credit Card",
      name: "Platinum Rewards",
      number: "**** **** **** 3456",
      expiry: "09/26",
      background: "bg-gradient-to-r from-blue-600 to-blue-400",
      logo: "VISA",
    },
    {
      id: 2,
      type: "Debit Card",
      name: "Everyday Checking",
      number: "**** **** **** 1234",
      expiry: "12/25",
      background: "bg-gradient-to-r from-green-600 to-green-400",
      logo: "MASTERCARD",
    },
    {
      id: 3,
      type: "Virtual Card",
      name: "Online Shopping",
      number: "**** **** **** 7890",
      expiry: "03/24",
      background: "bg-gradient-to-r from-purple-600 to-purple-400",
      logo: "VISA",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>My Cards</CardTitle>
        <Button size="sm" className="bg-green-400 text-navy-950 hover:bg-green-500">
          <Plus className="h-4 w-4 mr-2" /> Add Card
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="physical" className="w-full">
          <TabsList className="grid grid-cols-3 bg-navy-800">
            <TabsTrigger value="physical" className="data-[state=active]:bg-navy-700">
              Physical
            </TabsTrigger>
            <TabsTrigger value="virtual" className="data-[state=active]:bg-navy-700">
              Virtual
            </TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-navy-700">
              All Cards
            </TabsTrigger>
          </TabsList>
          <TabsContent value="physical" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards
                .filter((card) => card.type !== "Virtual Card")
                .map((card) => (
                  <div
                    key={card.id}
                    className={`${card.background} p-4 rounded-xl text-white relative overflow-hidden h-48 flex flex-col justify-between`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm opacity-80">{card.type}</p>
                        <p className="font-semibold">{card.name}</p>
                      </div>
                      <Wifi className="h-6 w-6 rotate-90" />
                    </div>
                    <div>
                      <p className="text-lg font-mono tracking-wider mb-2">{card.number}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs opacity-80">Expiry Date</p>
                          <p className="font-mono">{card.expiry}</p>
                        </div>
                        <p className="font-bold text-xl">{card.logo}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
                  </div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="virtual" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards
                .filter((card) => card.type === "Virtual Card")
                .map((card) => (
                  <div
                    key={card.id}
                    className={`${card.background} p-4 rounded-xl text-white relative overflow-hidden h-48 flex flex-col justify-between`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm opacity-80">{card.type}</p>
                        <p className="font-semibold">{card.name}</p>
                      </div>
                      <Wifi className="h-6 w-6 rotate-90" />
                    </div>
                    <div>
                      <p className="text-lg font-mono tracking-wider mb-2">{card.number}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs opacity-80">Expiry Date</p>
                          <p className="font-mono">{card.expiry}</p>
                        </div>
                        <p className="font-bold text-xl">{card.logo}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
                  </div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="all" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`${card.background} p-4 rounded-xl text-white relative overflow-hidden h-48 flex flex-col justify-between`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm opacity-80">{card.type}</p>
                      <p className="font-semibold">{card.name}</p>
                    </div>
                    <Wifi className="h-6 w-6 rotate-90" />
                  </div>
                  <div>
                    <p className="text-lg font-mono tracking-wider mb-2">{card.number}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs opacity-80">Expiry Date</p>
                        <p className="font-mono">{card.expiry}</p>
                      </div>
                      <p className="font-bold text-xl">{card.logo}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
