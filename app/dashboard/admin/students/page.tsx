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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { UserPlus, Search, Filter, Mail, Phone, Eye, Edit, Trash2, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ManageStudents() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBatch, setFilterBatch] = useState("all")
  const { toast } = useToast()

  const students = [
    {
      id: 1,
      name: "Maria Sari",
      email: "maria.sari@email.com",
      phone: "+62 812-3456-7890",
      batch: "Music Production Batch 1",
      enrollDate: "2024-01-15",
      progress: 85,
      status: "Active",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+62 813-4567-8901",
      batch: "Music Production Batch 1",
      enrollDate: "2024-01-15",
      progress: 92,
      status: "Active",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActivity: "1 day ago",
    },
    {
      id: 3,
      name: "Sarah Kim",
      email: "sarah.kim@email.com",
      phone: "+62 814-5678-9012",
      batch: "Content Creator Batch 2",
      enrollDate: "2024-02-01",
      progress: 67,
      status: "Behind",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActivity: "3 days ago",
    },
    {
      id: 4,
      name: "Ahmad Rizki",
      email: "ahmad.rizki@email.com",
      phone: "+62 815-6789-0123",
      batch: "Barista Skills Batch 1",
      enrollDate: "2024-03-01",
      progress: 78,
      status: "Active",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActivity: "5 hours ago",
    },
    {
      id: 5,
      name: "Lisa Chen",
      email: "lisa.chen@email.com",
      phone: "+62 816-7890-1234",
      batch: "Event Organizer Batch 1",
      enrollDate: "2024-01-01",
      progress: 100,
      status: "Completed",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActivity: "1 week ago",
    },
  ]

  const handleAddStudent = () => {
    toast({
      title: "Student Added Successfully!",
      description: "New student has been enrolled in the system.",
      variant: "success",
    })
    setIsDialogOpen(false)
  }

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBatch = filterBatch === "all" || student.batch.includes(filterBatch)
    return matchesSearch && matchesBatch
  })

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Students</h1>
          <p className="text-lg text-gray-600 mt-2">Add, edit, and monitor student progress across all batches</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="shadow-sm">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
                <UserPlus className="w-5 h-5 mr-2" />
                Add New Student
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">Add New Student</DialogTitle>
                <DialogDescription>Enroll a new student into the learning management system.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </Label>
                    <Input id="first-name" placeholder="John" className="h-11" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </Label>
                    <Input id="last-name" placeholder="Doe" className="h-11" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input id="email" type="email" placeholder="john.doe@email.com" className="h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input id="phone" placeholder="+62 812-3456-7890" className="h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="batch" className="text-sm font-medium">
                    Assign to Batch
                  </Label>
                  <Select>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select batch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="music-production-1">Music Production Batch 1</SelectItem>
                      <SelectItem value="content-creator-2">Content Creator Batch 2</SelectItem>
                      <SelectItem value="barista-skills-1">Barista Skills Batch 1</SelectItem>
                      <SelectItem value="event-organizer-1">Event Organizer Batch 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddStudent} className="bg-red-600 hover:bg-red-700">
                  Add Student
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Students</CardTitle>
            <UserPlus className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">125</div>
            <p className="text-xs text-blue-600 mt-1">Across all batches</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Active Students</CardTitle>
            <UserPlus className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">98</div>
            <p className="text-xs text-green-600 mt-1">Currently learning</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Behind Schedule</CardTitle>
            <UserPlus className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">12</div>
            <p className="text-xs text-yellow-600 mt-1">Need attention</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Completed</CardTitle>
            <UserPlus className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">15</div>
            <p className="text-xs text-purple-600 mt-1">Graduated students</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search students by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
            </div>
            <div className="w-full sm:w-64">
              <Select value={filterBatch} onValueChange={setFilterBatch}>
                <SelectTrigger className="h-11">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Batches</SelectItem>
                  <SelectItem value="Music Production">Music Production</SelectItem>
                  <SelectItem value="Content Creator">Content Creator</SelectItem>
                  <SelectItem value="Barista Skills">Barista Skills</SelectItem>
                  <SelectItem value="Event Organizer">Event Organizer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">All Students</CardTitle>
          <CardDescription className="text-base">
            Complete list of enrolled students with their progress and status
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-4">Student</TableHead>
                <TableHead className="font-semibold text-gray-900">Contact</TableHead>
                <TableHead className="font-semibold text-gray-900">Batch</TableHead>
                <TableHead className="font-semibold text-gray-900">Progress</TableHead>
                <TableHead className="font-semibold text-gray-900">Status</TableHead>
                <TableHead className="font-semibold text-gray-900">Last Activity</TableHead>
                <TableHead className="font-semibold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                        <AvatarFallback className="bg-red-100 text-red-600 font-semibold">
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">Enrolled: {student.enrollDate}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{student.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{student.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-medium">
                      {student.batch}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{student.progress}%</span>
                      </div>
                      <Progress value={student.progress} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        student.status === "Active"
                          ? "default"
                          : student.status === "Completed"
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        student.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : student.status === "Completed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{student.lastActivity}</TableCell>
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
