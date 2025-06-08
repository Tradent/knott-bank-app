"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

export function LocationsMap() {
  const [activeRegion, setActiveRegion] = useState("north-america")

  const regions = [
    { id: "north-america", name: "North America", count: 24 },
    { id: "europe", name: "Europe", count: 18 },
    { id: "asia", name: "Asia", count: 12 },
    { id: "australia", name: "Australia", count: 5 },
    { id: "africa", name: "Africa", count: 3 },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Global</span>
            <span className="text-navy-950"> Presence</span>
          </h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            With locations across 5 continents, Knott Bank provides secure and private banking services worldwide.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {regions.map((region) => (
            <button
              key={region.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeRegion === region.id
                  ? "bg-green-400 text-navy-950"
                  : "bg-gray-100 text-navy-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveRegion(region.id)}
            >
              {region.name} ({region.count})
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-8 shadow-md">
          <div className="aspect-[16/9] bg-gray-100 rounded-lg relative overflow-hidden">
            {/* This would be replaced with an actual map component in a real implementation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-navy-600 mb-2">Interactive Map Placeholder</p>
                <p className="text-navy-950 text-lg font-medium">
                  {regions.find((r) => r.id === activeRegion)?.name}:{" "}
                  {regions.find((r) => r.id === activeRegion)?.count} Locations
                </p>
              </div>
            </div>

            {/* Sample location pins */}
            {activeRegion === "north-america" && (
              <>
                <div className="absolute top-[30%] left-[25%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute top-[40%] left-[30%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute top-[35%] left-[20%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
              </>
            )}

            {activeRegion === "europe" && (
              <>
                <div className="absolute top-[25%] left-[48%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute top-[30%] left-[52%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute top-[35%] left-[45%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
              </>
            )}

            {activeRegion === "asia" && (
              <>
                <div className="absolute top-[30%] left-[70%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute top-[40%] left-[75%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute top-[35%] left-[65%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
              </>
            )}

            {activeRegion === "australia" && (
              <>
                <div className="absolute top-[60%] left-[80%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute top-[65%] left-[85%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
              </>
            )}

            {activeRegion === "africa" && (
              <>
                <div className="absolute top-[45%] left-[50%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute top-[55%] left-[45%] animate-pulse">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
