"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckSquare, Clock, Calendar, FileText, Upload, Search, Filter, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function StudentTasks() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const { toast } = useToast()

  const tasks = [
    {
      id: 1,
      title: "Audio Recording Assignment",
      module: "Audio Recording Techniques",
      type: "Assignment",
      dueDate: "2024-12-25",
      status: "pending",
      description: "Record a 3-minute audio clip using proper microphone techniques",
      points: 100,
      submitted: false,
    },
    {
      id: 2,
      title: "Music Theory Quiz",
      module: "Music Theory Essentials",
      type: "Quiz",
      dueDate: "2024-12-22",
      status: "completed",
      description: "Complete the quiz on scales and chord progressions",
      points: 50,
      submitted: true,
      score: 85,
    },
    {
      id: 3,
      title: "DAW Project Submission",
      module: "Digital Audio Workstations",
      type: "Project",
      dueDate: "2024-12-30",
      status: "in-progress",
      description: "Create a 2-minute instrumental track using your chosen DAW",
      points: 150,
      submitted: false,
    },
    {
      id: 4,
      title: "Mixing Exercise",
      module: "Mixing and Mastering",
      type: "Exercise",
      dueDate: "2024-12-20",
      status: "overdue",
      description: "Mix the provided stems into a cohesive track",
      points: 75,
      submitted: false,
    },
    {
      id: 5,
      title: "Final Project Proposal",
      module: "Final Project Workshop",
      type: "Proposal",
      dueDate: "2025-01-05",
      status: "upcoming",
      description: "Submit your final project proposal with timeline and objectives",
      points: 200,
      submitted: false,
    },
  ]

  const handleSubmitTask = (taskId: number) => {
    toast({
      title: "Task Submitted!",
      description: "Your assignment has been submitted successfully.",
      variant: "success",
    })
  }

  const handleViewTask = (taskId: number) => {
    toast({
      title: "Opening Task",
      description: "Loading task details...",
      variant: "success",
    })
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.module.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || task.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
        <p className="text-lg text-gray-600 mt-2">Track and complete your assignments and assessments</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Tasks</CardTitle>
            <CheckSquare className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">12</div>
            <p className="text-xs text-blue-600 mt-1">This semester</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Completed</CardTitle>
            <CheckSquare className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">7</div>
            <p className="text-xs text-green-600 mt-1">58% completion rate</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Pending</CardTitle>
            <Clock className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">4</div>
            <p className="text-xs text-yellow-600 mt-1">Need attention</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-red-50 to-red-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-700">Overdue</CardTitle>
            <Calendar className="h-5 w-5 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-900">1</div>
            <p className="text-xs text-red-600 mt-1">Requires immediate action</p>
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
                  placeholder="Search tasks by title or module..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
            </div>
            <div className="w-full sm:w-64">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="h-11">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tasks</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tasks Table */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">Assignment & Assessment List</CardTitle>
          <CardDescription className="text-base">Complete your tasks to progress through the course</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-4">Task</TableHead>
                <TableHead className="font-semibold text-gray-900">Module</TableHead>
                <TableHead className="font-semibold text-gray-900">Type</TableHead>
                <TableHead className="font-semibold text-gray-900">Due Date</TableHead>
                <TableHead className="font-semibold text-gray-900">Points</TableHead>
                <TableHead className="font-semibold text-gray-900">Status</TableHead>
                <TableHead className="font-semibold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTasks.map((task) => (
                <TableRow key={task.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="py-4">
                    <div>
                      <div className="font-semibold text-gray-900">{task.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{task.description}</div>
                      {task.submitted && task.score && (
                        <div className="text-sm text-green-600 mt-1">Score: {task.score}/100</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-medium">
                      {task.module}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span>{task.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{task.dueDate}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{task.points} pts</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        task.status === "completed"
                          ? "default"
                          : task.status === "overdue"
                            ? "destructive"
                            : task.status === "in-progress"
                              ? "secondary"
                              : "outline"
                      }
                      className={
                        task.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : task.status === "overdue"
                            ? "bg-red-100 text-red-800"
                            : task.status === "in-progress"
                              ? "bg-blue-100 text-blue-800"
                              : task.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                      }
                    >
                      {task.status === "in-progress"
                        ? "In Progress"
                        : task.status === "completed"
                          ? "Completed"
                          : task.status === "overdue"
                            ? "Overdue"
                            : task.status === "pending"
                              ? "Pending"
                              : "Upcoming"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => handleViewTask(task.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      {!task.submitted && task.status !== "upcoming" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => handleSubmitTask(task.id)}
                        >
                          <Upload className="w-4 h-4" />
                        </Button>
                      )}
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
