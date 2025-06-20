"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Video, MapPin, Search, Filter } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AssignedClasses() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const { toast } = useToast()

  const classes = [
    {
      id: 1,
      title: "Advanced Audio Editing",
      batch: "Music Production Batch 1",
      date: "2024-12-20",
      time: "14:00",
      duration: "2 hours",
      students: 32,
      location: "Zoom Meeting",
      status: "Upcoming",
      type: "Live Session",
    },
    {
      id: 2,
      title: "Music Theory Fundamentals",
      batch: "Music Production Batch 1",
      date: "2024-12-18",
      time: "10:00",
      duration: "1.5 hours",
      students: 32,
      location: "Google Meet",
      status: "Completed",
      type: "Workshop",
    },
    {
      id: 3,
      title: "Recording Techniques Workshop",
      batch: "Music Production Batch 2",
      date: "2024-12-22",
      time: "15:30",
      duration: "3 hours",
      students: 28,
      location: "Physical Studio",
      status: "Upcoming",
      type: "Practical Session",
    },
    {
      id: 4,
      title: "Final Project Review",
      batch: "Music Production Batch 1",
      date: "2024-12-25",
      time: "09:00",
      duration: "4 hours",
      students: 32,
      location: "Zoom Meeting",
      status: "Scheduled",
      type: "Assessment",
    },
  ]

  const handleJoinClass = (classId: number) => {
    toast({
      title: "Joining Class",
      description: "Opening meeting link...",
      variant: "success",
    })
  }

  const filteredClasses = classes.filter((classItem) => {
    const matchesSearch =
      classItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.batch.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || classItem.status.toLowerCase() === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Assigned Classes</h1>
        <p className="text-lg text-gray-600 mt-2">Manage your scheduled classes and sessions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Classes</CardTitle>
            <Calendar className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">24</div>
            <p className="text-xs text-blue-600 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Upcoming</CardTitle>
            <Clock className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">8</div>
            <p className="text-xs text-green-600 mt-1">Next 7 days</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Students</CardTitle>
            <Users className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">92</div>
            <p className="text-xs text-yellow-600 mt-1">Total enrolled</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Hours Taught</CardTitle>
            <Video className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">48</div>
            <p className="text-xs text-purple-600 mt-1">This month</p>
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
                  placeholder="Search classes by title or batch..."
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
                  <SelectItem value="all">All Classes</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((classItem) => (
          <Card key={classItem.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2">{classItem.title}</CardTitle>
                  <Badge
                    variant={
                      classItem.status === "Upcoming"
                        ? "default"
                        : classItem.status === "Completed"
                          ? "secondary"
                          : "outline"
                    }
                    className={
                      classItem.status === "Upcoming"
                        ? "bg-green-100 text-green-800"
                        : classItem.status === "Completed"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {classItem.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>{classItem.batch}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>
                    {classItem.date} at {classItem.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>
                    {classItem.duration} • {classItem.type}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{classItem.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>{classItem.students} students</span>
                </div>
              </div>
              <div className="pt-2">
                {classItem.status === "Upcoming" ? (
                  <Button onClick={() => handleJoinClass(classItem.id)} className="w-full bg-red-600 hover:bg-red-700">
                    <Video className="w-4 h-4 mr-2" />
                    Join Class
                  </Button>
                ) : classItem.status === "Scheduled" ? (
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full">
                    <Video className="w-4 h-4 mr-2" />
                    View Recording
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
