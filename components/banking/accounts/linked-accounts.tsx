import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, ExternalLink, Trash2 } from "lucide-react"

export function LinkedAccounts() {
  const linkedAccounts = [
    {
      name: "External Savings",
      institution: "Chase Bank",
      accountNumber: "•••• 5678",
      status: "active",
    },
    {
      name: "Joint Checking",
      institution: "Bank of America",
      accountNumber: "•••• 9012",
      status: "active",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Linked Accounts</CardTitle>
          <CardDescription>External accounts connected to your profile</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
          <Plus className="h-4 w-4 mr-2" /> Link Account
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {linkedAccounts.map((account, index) => (
            <div key={index} className="p-3 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-white">{account.name}</h3>
                  <p className="text-sm text-gray-400">{account.institution}</p>
                  <p className="text-xs text-gray-500 mt-1">{account.accountNumber}</p>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View account</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove account</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {linkedAccounts.length === 0 && (
            <div className="text-center py-6">
              <p className="text-gray-400 mb-2">No external accounts linked yet</p>
              <Button variant="outline" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
                <Plus className="h-4 w-4 mr-2" /> Link Your First Account
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
