"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, CreditCard, Plus, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

export function CardsOverview() {
  const [cards, setCards] = useState([
    {
      id: "physical-1",
      name: "Knott Debit Card",
      number: "**** **** **** 4582",
      expiryDate: "05/27",
      type: "physical",
      status: "active",
      cardType: "debit",
      isSelected: true,
      showDetails: false,
      color: "green",
    },
    {
      id: "physical-2",
      name: "Knott Credit Card",
      number: "**** **** **** 7891",
      expiryDate: "09/26",
      type: "physical",
      status: "active",
      cardType: "credit",
      isSelected: false,
      showDetails: false,
      color: "blue",
    },
    {
      id: "virtual-1",
      name: "Virtual Shopping Card",
      number: "**** **** **** 3456",
      expiryDate: "12/24",
      type: "virtual",
      status: "active",
      cardType: "debit",
      isSelected: false,
      showDetails: false,
      color: "purple",
    },
    {
      id: "add-card",
      name: "Add New Card",
      number: "",
      expiryDate: "",
      type: "add",
      status: "",
      cardType: "",
      isSelected: false,
      showDetails: false,
      color: "",
    },
  ])

  const selectCard = (id: string) => {
    setCards(
      cards.map((card) => ({
        ...card,
        isSelected: card.id === id,
      })),
    )
  }

  const toggleCardDetails = (id: string) => {
    setCards(
      cards.map((card) => ({
        ...card,
        showDetails: card.id === id ? !card.showDetails : card.showDetails,
      })),
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <Card
          key={card.id}
          className={cn(
            "bg-navy-900 border-navy-800 cursor-pointer transition-all hover:border-navy-600",
            card.isSelected && "border-green-400",
          )}
          onClick={() => selectCard(card.id)}
        >
          <CardContent className="p-0">
            {card.type === "add" ? (
              <div className="p-6 flex flex-col items-center justify-center h-full min-h-[200px]">
                <div className="bg-navy-800 rounded-full p-3 mb-4">
                  <Plus className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="font-medium text-white text-center">{card.name}</h3>
                <p className="text-sm text-gray-400 text-center mt-1">Apply for a new card</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-navy-700 hover:bg-navy-800 hover:text-green-400"
                >
                  Apply Now
                </Button>
              </div>
            ) : (
              <div
                className={cn(
                  "p-6 rounded-t-lg h-40 flex flex-col justify-between",
                  card.color === "green" && "bg-gradient-to-r from-green-900 to-green-800",
                  card.color === "blue" && "bg-gradient-to-r from-blue-900 to-blue-800",
                  card.color === "purple" && "bg-gradient-to-r from-purple-900 to-purple-800",
                )}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-white">{card.name}</h3>
                    <p className="text-xs text-gray-300 mt-1">
                      {card.cardType === "debit" ? "Debit Card" : "Credit Card"}
                    </p>
                  </div>
                  <div
                    className={cn("p-1 rounded-full", card.type === "physical" ? "bg-white/10" : "bg-purple-400/20")}
                  >
                    {card.type === "physical" ? (
                      <CreditCard className="h-4 w-4 text-white" />
                    ) : (
                      <Smartphone className="h-4 w-4 text-purple-400" />
                    )}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-white text-lg">
                    {card.showDetails ? "1234 5678 9012 3456" : card.number}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-300">Expires: {card.showDetails ? "05/2027" : card.expiryDate}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleCardDetails(card.id)
                      }}
                      className="text-gray-300 hover:text-white"
                    >
                      {card.showDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {card.type !== "add" && (
              <div className="p-4 border-t border-navy-800">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm text-gray-400">Status</p>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                    <p className="text-sm text-white capitalize">{card.status}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-navy-700 hover:bg-navy-800 hover:text-green-400"
                  >
                    Manage
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-navy-700 hover:bg-navy-800 hover:text-green-400"
                  >
                    Details
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
