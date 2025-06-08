import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, User, Building, Trash2, Edit } from "lucide-react"

export function SavedRecipients() {
  const recipients = [
    {
      id: "1",
      name: "John Smith",
      accountType: "External Bank Account",
      accountNumber: "•••• 5678",
      type: "person",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      accountType: "Knott Bank User",
      accountNumber: "•••• 9012",
      type: "person",
    },
    {
      id: "3",
      name: "XYZ Utilities",
      accountType: "Company",
      accountNumber: "•••• 3456",
      type: "company",
    },
  ]

  return (
    <Card className="bg-navy-900 border-navy-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Saved Recipients</CardTitle>
          <CardDescription>People and companies you send money to</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
          <Plus className="h-4 w-4 mr-2" /> Add New
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recipients.map((recipient) => (
            <div key={recipient.id} className="p-3 bg-navy-800 rounded-lg border border-navy-700">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-navy-700 rounded-full">
                    {recipient.type === "person" ? (
                      <User className="h-4 w-4 text-blue-400" />
                    ) : (
                      <Building className="h-4 w-4 text-purple-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{recipient.name}</h3>
                    <p className="text-sm text-gray-400">{recipient.accountType}</p>
                    <p className="text-xs text-gray-500 mt-1">Account: {recipient.accountNumber}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit recipient</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove recipient</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {recipients.length === 0 && (
            <div className="text-center py-6">
              <p className="text-gray-400 mb-2">No recipients saved yet</p>
              <Button variant="outline" className="border-navy-700 hover:bg-navy-800 hover:text-green-400">
                <Plus className="h-4 w-4 mr-2" /> Add Your First Recipient
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
