"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Award, TrendingUp, Users, CheckCircle, Search, Filter, Eye, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CompletionTracking() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBatch, setFilterBatch] = useState("all")
  const { toast } = useToast()

  const students = [
    {
      id: 1,
      name: "Maria Sari",
      email: "maria.sari@email.com",
      batch: "Music Production Batch 1",
      overallProgress: 95,
      modulesCompleted: 14,
      totalModules: 15,
      projectsCompleted: 3,
      totalProjects: 4,
      averageScore: 88,
      status: "Near Completion",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@email.com",
      batch: "Music Production Batch 1",
      overallProgress: 100,
      modulesCompleted: 15,
      totalModules: 15,
      projectsCompleted: 4,
      totalProjects: 4,
      averageScore: 92,
      status: "Completed",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActivity: "1 day ago",
    },
    {
      id: 3,
      name: "Sarah Kim",
      email: "sarah.kim@email.com",
      batch: "Music Production Batch 1",
      overallProgress: 78,
      modulesCompleted: 12,
      totalModules: 15,
      projectsCompleted: 2,
      totalProjects: 4,
      averageScore: 85,
      status: "In Progress",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActivity: "3 hours ago",
    },
    {
      id: 4,
      name: "Ahmad Rizki",
      email: "ahmad.rizki@email.com",
      batch: "Music Production Batch 2",
      overallProgress: 100,
      modulesCompleted: 12,
      totalModules: 12,
      projectsCompleted: 3,
      totalProjects: 3,
      averageScore: 90,
      status: "Completed",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActivity: "5 hours ago",
    },
    {
      id: 5,
      name: "Lisa Chen",
      email: "lisa.chen@email.com",
      batch: "Content Creator Batch 1",
      overallProgress: 85,
      modulesCompleted: 10,
      totalModules: 12,
      projectsCompleted: 2,
      totalProjects: 3,
      averageScore: 87,
      status: "Near Completion",
      avatar: "/placeholder.svg?height=40&width=40",
      lastActivity: "1 hour ago",
    },
  ]

  const handleViewDetails = (studentId: number) => {
    toast({
      title: "Student Details",
      description: "Opening detailed completion report...",
      variant: "success",
    })
  }

  const handleSendCongrats = (studentName: string) => {
    toast({
      title: "Congratulations Sent!",
      description: `Congratulations message sent to ${studentName}`,
      variant: "success",
    })
  }

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBatch = filterBatch === "all" || student.batch.includes(filterBatch)
    return matchesSearch && matchesBatch
  })

  const completedStudents = students.filter((s) => s.status === "Completed").length
  const nearCompletionStudents = students.filter((s) => s.status === "Near Completion").length
  const averageCompletion = Math.round(students.reduce((acc, s) => acc + s.overallProgress, 0) / students.length)

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Completion Tracking</h1>
        <p className="text-lg text-gray-600 mt-2">Monitor student progress and celebrate achievements</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Completed</CardTitle>
            <Award className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">{completedStudents}</div>
            <p className="text-xs text-green-600 mt-1">Students finished</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Near Completion</CardTitle>
            <CheckCircle className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">{nearCompletionStudents}</div>
            <p className="text-xs text-blue-600 mt-1">Almost finished</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Average Progress</CardTitle>
            <TrendingUp className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">{averageCompletion}%</div>
            <p className="text-xs text-purple-600 mt-1">Overall completion</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Total Students</CardTitle>
            <Users className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">{students.length}</div>
            <p className="text-xs text-yellow-600 mt-1">Being tracked</p>
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
                  <SelectItem value="Batch 1">Music Production Batch 1</SelectItem>
                  <SelectItem value="Batch 2">Music Production Batch 2</SelectItem>
                  <SelectItem value="Content Creator">Content Creator Batch 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Completion Table */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">Student Completion Status</CardTitle>
          <CardDescription className="text-base">Track individual student progress and achievements</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-4">Student</TableHead>
                <TableHead className="font-semibold text-gray-900">Batch</TableHead>
                <TableHead className="font-semibold text-gray-900">Overall Progress</TableHead>
                <TableHead className="font-semibold text-gray-900">Modules</TableHead>
                <TableHead className="font-semibold text-gray-900">Projects</TableHead>
                <TableHead className="font-semibold text-gray-900">Avg. Score</TableHead>
                <TableHead className="font-semibold text-gray-900">Status</TableHead>
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
                        <div className="text-sm text-gray-500">{student.email}</div>
                        <div className="text-xs text-gray-400">Last active: {student.lastActivity}</div>
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
                        <span className="text-sm font-medium">{student.overallProgress}%</span>
                      </div>
                      <Progress value={student.overallProgress} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <span className="font-medium">{student.modulesCompleted}</span>
                      <span className="text-gray-500">/{student.totalModules}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <span className="font-medium">{student.projectsCompleted}</span>
                      <span className="text-gray-500">/{student.totalProjects}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{student.averageScore}%</div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        student.status === "Completed"
                          ? "default"
                          : student.status === "Near Completion"
                            ? "secondary"
                            : "outline"
                      }
                      className={
                        student.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : student.status === "Near Completion"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => handleViewDetails(student.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      {student.status === "Completed" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 text-green-600 hover:text-green-700"
                          onClick={() => handleSendCongrats(student.name)}
                        >
                          <Award className="w-4 h-4" />
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <MessageSquare className="w-4 h-4" />
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
