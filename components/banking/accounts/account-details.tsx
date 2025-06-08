import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Copy, ExternalLink } from "lucide-react"

export function AccountDetails() {
  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
          <div>
            <CardTitle>Primary Checking</CardTitle>
            <CardDescription>Account details and information</CardDescription>
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
            <TabsTrigger value="interest" className="data-[state=active]:bg-navy-700">
              Interest & Fees
            </TabsTrigger>
            <TabsTrigger value="statements" className="data-[state=active]:bg-navy-700">
              Statements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Account Number</h3>
                  <div className="flex items-center mt-1">
                    <p className="text-white">•••• •••• •••• 4582</p>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2 text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy account number</span>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Routing Number</h3>
                  <div className="flex items-center mt-1">
                    <p className="text-white">021000021</p>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2 text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy routing number</span>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Account Type</h3>
                  <p className="text-white mt-1">Checking</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Date Opened</h3>
                  <p className="text-white mt-1">January 15, 2022</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Current Balance</h3>
                  <p className="text-white text-2xl font-semibold mt-1">$4,285.65</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Available Balance</h3>
                  <p className="text-white mt-1">$4,285.65</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Status</h3>
                  <div className="flex items-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                    <p className="text-white">Active</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-400">Online Banking</h3>
                  <div className="flex items-center mt-1">
                    <p className="text-white">Enabled</p>
                    <Button variant="ghost" size="sm" className="h-8 ml-2 text-gray-400 hover:text-white">
                      <ExternalLink className="h-4 w-4 mr-1" /> Manage
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="interest">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Interest Rate</h3>
                    <p className="text-white text-xl font-semibold mt-1">0.05% APY</p>
                    <p className="text-xs text-gray-400 mt-1">Variable rate, subject to change</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Interest Earned (YTD)</h3>
                    <p className="text-white mt-1">$1.25</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Interest Payment Frequency</h3>
                    <p className="text-white mt-1">Monthly</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Monthly Maintenance Fee</h3>
                    <p className="text-white mt-1">$0.00</p>
                    <p className="text-xs text-green-400 mt-1">Waived with $1,500 minimum daily balance</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Overdraft Fee</h3>
                    <p className="text-white mt-1">$0.00</p>
                    <p className="text-xs text-green-400 mt-1">Overdraft protection enabled</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400">ATM Fee</h3>
                    <p className="text-white mt-1">$0.00 (In-network)</p>
                    <p className="text-xs text-gray-400 mt-1">$2.50 for out-of-network ATMs</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-800 p-4 rounded-lg border border-navy-700">
                <h3 className="text-sm font-medium text-white mb-2">Fee Comparison</h3>
                <p className="text-sm text-gray-300">
                  Your Knott Bank checking account saves you an average of $25.75 per month in fees compared to
                  traditional banks.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="statements">
            <div className="space-y-4">
              {[
                { month: "July 2023", date: "August 1, 2023", size: "245 KB" },
                { month: "June 2023", date: "July 1, 2023", size: "238 KB" },
                { month: "May 2023", date: "June 1, 2023", size: "256 KB" },
                { month: "April 2023", date: "May 1, 2023", size: "242 KB" },
                { month: "March 2023", date: "April 1, 2023", size: "251 KB" },
              ].map((statement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors"
                >
                  <div>
                    <h4 className="text-white font-medium">{statement.month} Statement</h4>
                    <p className="text-xs text-gray-400">Generated on {statement.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{statement.size}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download statement</span>
                    </Button>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full mt-2 border-navy-700 hover:bg-navy-800 hover:text-green-400">
                View All Statements
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
