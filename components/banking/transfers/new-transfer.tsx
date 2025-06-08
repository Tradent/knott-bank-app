"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { CalendarIcon, RefreshCw, ArrowUpRight, Globe, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export function NewTransfer() {
  const [date, setDate] = useState<Date>()
  const [isRecurring, setIsRecurring] = useState(false)

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <CardTitle>New Transfer</CardTitle>
        <CardDescription>Send money to your accounts or others</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="between-accounts" className="w-full">
          <TabsList className="bg-navy-800 border border-navy-700 w-full justify-start mb-6">
            <TabsTrigger value="between-accounts" className="data-[state=active]:bg-navy-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Between Accounts
            </TabsTrigger>
            <TabsTrigger value="to-someone" className="data-[state=active]:bg-navy-700">
              <ArrowUpRight className="h-4 w-4 mr-2" />
              To Someone
            </TabsTrigger>
            <TabsTrigger value="international" className="data-[state=active]:bg-navy-700">
              <Globe className="h-4 w-4 mr-2" />
              International
            </TabsTrigger>
          </TabsList>

          <TabsContent value="between-accounts">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from-account">From Account</Label>
                  <Select>
                    <SelectTrigger id="from-account" className="bg-navy-800 border-navy-700">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">Primary Checking - $4,285.65</SelectItem>
                      <SelectItem value="savings">High-Yield Savings - $12,580.00</SelectItem>
                      <SelectItem value="crypto">Crypto Wallet - $7,720.67</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="to-account">To Account</Label>
                  <Select>
                    <SelectTrigger id="to-account" className="bg-navy-800 border-navy-700">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">Primary Checking - $4,285.65</SelectItem>
                      <SelectItem value="savings">High-Yield Savings - $12,580.00</SelectItem>
                      <SelectItem value="crypto">Crypto Wallet - $7,720.67</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-400">$</span>
                  </div>
                  <Input id="amount" type="number" placeholder="0.00" className="bg-navy-800 border-navy-700 pl-8" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input id="description" placeholder="Enter a description" className="bg-navy-800 border-navy-700" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="transfer-date">Transfer Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-navy-700 bg-navy-800",
                          !date && "text-gray-400",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-navy-800 border-navy-700">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="bg-navy-800" />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Make this a recurring transfer</span>
                    <Switch checked={isRecurring} onCheckedChange={setIsRecurring} />
                  </div>
                  {isRecurring && (
                    <Select>
                      <SelectTrigger className="mt-2 bg-navy-800 border-navy-700">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <Button variant="outline" className="border-navy-700 hover:bg-navy-800">
                  Cancel
                </Button>
                <Button className="bg-green-400 text-navy-950 hover:bg-green-500">Transfer Funds</Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="to-someone">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from-account-external">From Account</Label>
                  <Select>
                    <SelectTrigger id="from-account-external" className="bg-navy-800 border-navy-700">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">Primary Checking - $4,285.65</SelectItem>
                      <SelectItem value="savings">High-Yield Savings - $12,580.00</SelectItem>
                      <SelectItem value="crypto">Crypto Wallet - $7,720.67</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="recipient">Recipient</Label>
                    <Button variant="link" size="sm" className="h-5 p-0 text-green-400">
                      <Plus className="h-3 w-3 mr-1" /> Add New
                    </Button>
                  </div>
                  <Select>
                    <SelectTrigger id="recipient" className="bg-navy-800 border-navy-700">
                      <SelectValue placeholder="Select recipient" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Smith</SelectItem>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                      <SelectItem value="mike">Mike Williams</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount-external">Amount</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-400">$</span>
                  </div>
                  <Input
                    id="amount-external"
                    type="number"
                    placeholder="0.00"
                    className="bg-navy-800 border-navy-700 pl-8"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description-external">Description (Optional)</Label>
                <Input
                  id="description-external"
                  placeholder="Enter a description"
                  className="bg-navy-800 border-navy-700"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="transfer-date-external">Transfer Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-navy-700 bg-navy-800",
                          !date && "text-gray-400",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-navy-800 border-navy-700">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="bg-navy-800" />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="delivery-speed">Delivery Speed</Label>
                  <Select>
                    <SelectTrigger className="bg-navy-800 border-navy-700">
                      <SelectValue placeholder="Select speed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (1-2 business days, free)</SelectItem>
                      <SelectItem value="same-day">Same Day (by 5pm, $10)</SelectItem>
                      <SelectItem value="instant">Instant (immediate, $15)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <Button variant="outline" className="border-navy-700 hover:bg-navy-800">
                  Cancel
                </Button>
                <Button className="bg-green-400 text-navy-950 hover:bg-green-500">Send Money</Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="international">
            <div className="bg-navy-800 p-4 rounded-lg border border-navy-700 mb-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-navy-700 rounded-lg">
                  <Globe className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">International Transfers</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Send money to recipients worldwide with competitive exchange rates and low fees.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-navy-700 rounded-md text-xs text-gray-300">130+ Countries</span>
                    <span className="px-2 py-1 bg-navy-700 rounded-md text-xs text-gray-300">Multiple Currencies</span>
                    <span className="px-2 py-1 bg-navy-700 rounded-md text-xs text-gray-300">Secure Transfers</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="from-account-intl">From Account</Label>
                  <Select>
                    <SelectTrigger id="from-account-intl" className="bg-navy-800 border-navy-700">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">Primary Checking - $4,285.65</SelectItem>
                      <SelectItem value="savings">High-Yield Savings - $12,580.00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recipient-country">Recipient Country</Label>
                  <Select>
                    <SelectTrigger id="recipient-country" className="bg-navy-800 border-navy-700">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="eu">European Union</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="japan">Japan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient-name">Recipient Name</Label>
                  <Input id="recipient-name" placeholder="Full name" className="bg-navy-800 border-navy-700" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recipient-currency">Currency</Label>
                  <Select>
                    <SelectTrigger id="recipient-currency" className="bg-navy-800 border-navy-700">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eur">EUR - Euro</SelectItem>
                      <SelectItem value="gbp">GBP - British Pound</SelectItem>
                      <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                      <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                      <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount-send">You Send (USD)</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-400">$</span>
                    </div>
                    <Input
                      id="amount-send"
                      type="number"
                      placeholder="0.00"
                      className="bg-navy-800 border-navy-700 pl-8"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount-receive">Recipient Gets (EUR)</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-400">€</span>
                    </div>
                    <Input
                      id="amount-receive"
                      type="number"
                      placeholder="0.00"
                      className="bg-navy-800 border-navy-700 pl-8"
                    />
                  </div>
                  <p className="text-xs text-gray-400">Exchange Rate: 1 USD = 0.93 EUR</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bank-details">Recipient Bank Details</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input id="bank-name" placeholder="Bank Name" className="bg-navy-800 border-navy-700" />
                  <Input id="iban" placeholder="IBAN / Account Number" className="bg-navy-800 border-navy-700" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <Input id="swift-bic" placeholder="SWIFT/BIC Code" className="bg-navy-800 border-navy-700" />
                  <Input
                    id="routing-number"
                    placeholder="Routing Number (if applicable)"
                    className="bg-navy-800 border-navy-700"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <Button variant="outline" className="border-navy-700 hover:bg-navy-800">
                  Cancel
                </Button>
                <Button className="bg-green-400 text-navy-950 hover:bg-green-500">Continue</Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
