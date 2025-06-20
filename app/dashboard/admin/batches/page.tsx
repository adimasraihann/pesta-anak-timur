"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Users, Calendar, Settings, Eye, Edit, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ManageBatches() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const batches = [
    {
      id: 1,
      name: "Music Production Batch 1",
      category: "Music Producer",
      students: 32,
      startDate: "2024-01-15",
      endDate: "2024-04-15",
      status: "Active",
      mentors: ["John Smith", "Sarah Johnson"],
      progress: 75,
    },
    {
      id: 2,
      name: "Content Creator Batch 2",
      category: "Content Creator",
      students: 28,
      startDate: "2024-02-01",
      endDate: "2024-05-01",
      status: "Active",
      mentors: ["Sarah Johnson"],
      progress: 60,
    },
    {
      id: 3,
      name: "Barista Skills Batch 1",
      category: "Barista",
      students: 45,
      startDate: "2024-03-01",
      endDate: "2024-06-01",
      status: "Registration Open",
      mentors: ["Mike Wilson"],
      progress: 0,
    },
    {
      id: 4,
      name: "Event Organizer Batch 1",
      category: "Event Organizer",
      students: 20,
      startDate: "2024-01-01",
      endDate: "2024-03-31",
      status: "Completed",
      mentors: ["Lisa Chen"],
      progress: 100,
    },
  ]

  const handleCreateBatch = () => {
    toast({
      title: "Batch Created Successfully!",
      description: "New batch has been added to the system.",
      variant: "success",
    })
    setIsDialogOpen(false)
  }

  const handleStatusChange = (batchId: number, newStatus: string) => {
    toast({
      title: "Batch Status Updated",
      description: `Batch status changed to ${newStatus}`,
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Batches</h1>
          <p className="text-lg text-gray-600 mt-2">
            Create and manage learning batches for different skill categories
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Plus className="w-5 h-5 mr-2" />
              Create New Batch
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Create New Batch</DialogTitle>
              <DialogDescription>Set up a new learning batch with all necessary details.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="batch-name" className="text-sm font-medium">
                  Batch Name
                </Label>
                <Input id="batch-name" placeholder="e.g., Music Production Batch 3" className="h-11" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category" className="text-sm font-medium">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="music-producer">Music Producer</SelectItem>
                    <SelectItem value="content-creator">Content Creator</SelectItem>
                    <SelectItem value="barista">Barista</SelectItem>
                    <SelectItem value="event-organizer">Event Organizer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="start-date" className="text-sm font-medium">
                    Start Date
                  </Label>
                  <Input id="start-date" type="date" className="h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="end-date" className="text-sm font-medium">
                    End Date
                  </Label>
                  <Input id="end-date" type="date" className="h-11" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mentors" className="text-sm font-medium">
                  Assign Mentors
                </Label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select mentors (multiple)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john-smith">John Smith</SelectItem>
                    <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                    <SelectItem value="mike-wilson">Mike Wilson</SelectItem>
                    <SelectItem value="lisa-chen">Lisa Chen</SelectItem>
                    <SelectItem value="david-brown">David Brown</SelectItem>
                    <SelectItem value="emma-davis">Emma Davis</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Hold Ctrl/Cmd to select multiple mentors</p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateBatch} className="bg-red-600 hover:bg-red-700">
                Create Batch
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Batches</CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">4</div>
            <p className="text-xs text-blue-600 mt-1">Across all categories</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Active Batches</CardTitle>
            <Calendar className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">2</div>
            <p className="text-xs text-green-600 mt-1">Currently running</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Registration Open</CardTitle>
            <Settings className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">1</div>
            <p className="text-xs text-yellow-600 mt-1">Accepting students</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Total Students</CardTitle>
            <Users className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">125</div>
            <p className="text-xs text-purple-600 mt-1">Enrolled students</p>
          </CardContent>
        </Card>
      </div>

      {/* Batches Table */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">All Batches</CardTitle>
          <CardDescription className="text-base">Manage all learning batches and their current status</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-4">Batch Name</TableHead>
                <TableHead className="font-semibold text-gray-900">Category</TableHead>
                <TableHead className="font-semibold text-gray-900">Students</TableHead>
                <TableHead className="font-semibold text-gray-900">Duration</TableHead>
                <TableHead className="font-semibold text-gray-900">Mentor</TableHead>
                <TableHead className="font-semibold text-gray-900">Status</TableHead>
                <TableHead className="font-semibold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.map((batch) => (
                <TableRow key={batch.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-gray-900 py-4">
                    <div>
                      <div className="font-semibold">{batch.name}</div>
                      <div className="text-sm text-gray-500">Progress: {batch.progress}%</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-medium">
                      {batch.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{batch.students}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    <div>{batch.startDate}</div>
                    <div className="text-gray-500">to {batch.endDate}</div>
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex flex-wrap gap-1">
                      {batch.mentors.map((mentor, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {mentor}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select value={batch.status} onValueChange={(value) => handleStatusChange(batch.id, value)}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Registration Open">Registration Open</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
