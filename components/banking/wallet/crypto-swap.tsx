"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownUp, Info } from "lucide-react"

export function CryptoSwap() {
  const [fromCrypto, setFromCrypto] = useState("btc")
  const [toCrypto, setToCrypto] = useState("usdc")
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")

  // Mock conversion rates
  const conversionRates = {
    btc: { usdc: 19448.17, eth: 10.27, sol: 115.3 },
    eth: { usdc: 1893.33, btc: 0.097, sol: 11.23 },
    sol: { usdc: 168.67, btc: 0.0087, eth: 0.089 },
    usdc: { btc: 0.000051, eth: 0.00053, sol: 0.0059 },
  }

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    if (value && !isNaN(Number.parseFloat(value))) {
      const rate =
        conversionRates[fromCrypto as keyof typeof conversionRates][
          toCrypto as keyof (typeof conversionRates)[keyof typeof conversionRates]
        ]
      setToAmount((Number.parseFloat(value) * rate).toFixed(6))
    } else {
      setToAmount("")
    }
  }

  const handleToAmountChange = (value: string) => {
    setToAmount(value)
    if (value && !isNaN(Number.parseFloat(value))) {
      const rate =
        conversionRates[fromCrypto as keyof typeof conversionRates][
          toCrypto as keyof (typeof conversionRates)[keyof typeof conversionRates]
        ]
      setFromAmount((Number.parseFloat(value) / rate).toFixed(6))
    } else {
      setFromAmount("")
    }
  }

  const swapCurrencies = () => {
    const tempCrypto = fromCrypto
    setFromCrypto(toCrypto)
    setToCrypto(tempCrypto)
    setFromAmount(toAmount)
    handleFromAmountChange(toAmount)
  }

  const cryptoOptions = [
    { value: "btc", label: "Bitcoin (BTC)", balance: "0.18 BTC" },
    { value: "eth", label: "Ethereum (ETH)", balance: "0.75 ETH" },
    { value: "sol", label: "Solana (SOL)", balance: "12.45 SOL" },
    { value: "usdc", label: "USD Coin (USDC)", balance: "700.00 USDC" },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>Swap Crypto</CardTitle>
        <CardDescription>Exchange between cryptocurrencies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm text-gray-400">From</label>
              <span className="text-xs text-gray-400">
                Balance: {cryptoOptions.find((option) => option.value === fromCrypto)?.balance}
              </span>
            </div>
            <div className="flex space-x-2">
              <Select value={fromCrypto} onValueChange={setFromCrypto}>
                <SelectTrigger className="bg-navy-800 border-navy-700">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  {cryptoOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="number"
                placeholder="0.00"
                className="bg-navy-800 border-navy-700"
                value={fromAmount}
                onChange={(e) => handleFromAmountChange(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-navy-700 hover:bg-navy-800"
              onClick={swapCurrencies}
            >
              <ArrowDownUp className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm text-gray-400">To</label>
              <span className="text-xs text-gray-400">
                Balance: {cryptoOptions.find((option) => option.value === toCrypto)?.balance}
              </span>
            </div>
            <div className="flex space-x-2">
              <Select value={toCrypto} onValueChange={setToCrypto}>
                <SelectTrigger className="bg-navy-800 border-navy-700">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  {cryptoOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="number"
                placeholder="0.00"
                className="bg-navy-800 border-navy-700"
                value={toAmount}
                onChange={(e) => handleToAmountChange(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-navy-800 p-3 rounded-lg">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Exchange Rate</span>
              <span className="text-white">
                1 {fromCrypto.toUpperCase()} ≈{" "}
                {
                  conversionRates[fromCrypto as keyof typeof conversionRates][
                    toCrypto as keyof (typeof conversionRates)[keyof typeof conversionRates]
                  ]
                }{" "}
                {toCrypto.toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-400">Fee</span>
              <span className="text-white">0.1%</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-400">Slippage Tolerance</span>
              <span className="text-white">0.5%</span>
            </div>
          </div>

          <div className="flex items-center text-xs text-gray-400 mt-1">
            <Info className="h-3 w-3 mr-1" />
            <span>Estimated. Your transaction may be subject to network conditions.</span>
          </div>

          <Button className="w-full bg-green-400 text-navy-950 hover:bg-green-500">Swap</Button>
        </div>
      </CardContent>
    </Card>
  )
}
