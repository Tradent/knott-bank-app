import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Copy, CreditCard, Shield, Wallet } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function CardDetails() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
          <div>
            <CardTitle>Knott Debit Card</CardTitle>
            <CardDescription>Card details and information</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
            <Download className="h-4 w-4 mr-2" /> Download Statement
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="bg-navy-800 border border-navy-700 w-full justify-start mb-6">
            <TabsTrigger value="details" className="data-[state=active]:bg-navy-700">
              Details
            </TabsTrigger>
            <TabsTrigger value="limits" className="data-[state=active]:bg-navy-700">
              Limits & Security
            </TabsTrigger>
            <TabsTrigger value="benefits" className="data-[state=active]:bg-navy-700">
              Benefits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Card Number</h3>
                  <div className="flex items-center mt-1">
                    <p className="text-white">•••• •••• •••• 4582</p>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2 text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy card number</span>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Cardholder Name</h3>
                  <p className="text-white mt-1">Alex Johnson</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Expiration Date</h3>
                  <p className="text-white mt-1">05/2027</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Card Type</h3>
                  <p className="text-white mt-1">Debit Card</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Linked Account</h3>
                  <p className="text-white mt-1">Primary Checking (•••• 4582)</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Card Status</h3>
                  <div className="flex items-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                    <p className="text-white">Active</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Issue Date</h3>
                  <p className="text-white mt-1">May 15, 2022</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Card Network</h3>
                  <div className="flex items-center mt-1">
                    <CreditCard className="h-4 w-4 mr-2 text-blue-400" />
                    <p className="text-white">Visa</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Card Features</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 py-1 bg-navy-800 rounded-md text-xs text-gray-300">Contactless</span>
                    <span className="px-2 py-1 bg-navy-800 rounded-md text-xs text-gray-300">Chip & PIN</span>
                    <span className="px-2 py-1 bg-navy-800 rounded-md text-xs text-gray-300">Mobile Payments</span>
                    <span className="px-2 py-1 bg-navy-800 rounded-md text-xs text-gray-300">Global Acceptance</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="limits">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm font-medium text-gray-400">Daily ATM Withdrawal</h3>
                      <p className="text-sm text-white">$500 / $1,000</p>
                    </div>
                    <Progress value={50} className="h-2 bg-navy-700" indicatorClassName="bg-green-400" />
                    <p className="text-xs text-gray-400 mt-1">50% of limit used</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm font-medium text-gray-400">Daily Purchase Limit</h3>
                      <p className="text-sm text-white">$1,200 / $5,000</p>
                    </div>
                    <Progress value={24} className="h-2 bg-navy-700" indicatorClassName="bg-green-400" />
                    <p className="text-xs text-gray-400 mt-1">24% of limit used</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm font-medium text-gray-400">Online Transaction Limit</h3>
                      <p className="text-sm text-white">$800 / $3,000</p>
                    </div>
                    <Progress value={27} className="h-2 bg-navy-700" indicatorClassName="bg-green-400" />
                    <p className="text-xs text-gray-400 mt-1">27% of limit used</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-navy-800 p-4 rounded-lg border border-navy-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-navy-700 rounded-lg">
                        <Shield className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Security Features</h3>
                        <ul className="mt-2 space-y-2 text-sm text-gray-300">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                            <span>3D Secure for online purchases</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                            <span>Real-time fraud monitoring</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                            <span>Transaction notifications</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                            <span>Temporary card lock</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-navy-800 p-4 rounded-lg border border-navy-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-navy-700 rounded-lg">
                        <Wallet className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Manage Limits</h3>
                        <p className="mt-1 text-sm text-gray-300">
                          You can adjust your card limits through the app or by contacting customer support.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 border-navy-700 hover:bg-navy-800 hover:text-green-400"
                        >
                          Adjust Limits
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="benefits">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "No Foreign Transaction Fees",
                    description: "Use your card worldwide without additional fees on international purchases.",
                  },
                  {
                    title: "Purchase Protection",
                    description: "Coverage for eligible items against theft or damage for 90 days from purchase date.",
                  },
                  {
                    title: "Cashback Rewards",
                    description: "Earn 1% cashback on all purchases and 2% on groceries and gas.",
                  },
                  {
                    title: "Travel Insurance",
                    description: "Basic travel insurance coverage for trips paid with your card.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="bg-navy-800 p-4 rounded-lg border border-navy-700">
                    <h3 className="text-white font-medium">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-navy-800 p-4 rounded-lg border border-navy-700">
                <h3 className="text-white font-medium mb-2">Rewards Summary</h3>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-gray-300">Available Cashback</p>
                  <p className="text-sm text-green-400 font-medium">$87.50</p>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm text-gray-300">Pending Rewards</p>
                  <p className="text-sm text-gray-300">$12.25</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-300">Lifetime Earnings</p>
                  <p className="text-sm text-gray-300">$342.75</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 w-full border-navy-700 hover:bg-navy-800 hover:text-green-400"
                >
                  Redeem Rewards
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
