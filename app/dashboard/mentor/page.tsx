"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, BookOpen, Calendar, CheckCircle, Music, Camera, Coffee, Megaphone } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function MentorDashboard() {
  const [selectedRole, setSelectedRole] = useState("music-producer")
  const { toast } = useToast()

  const mentorRoles = [
    { value: "event-organizer", label: "Event Organizer", icon: Megaphone },
    { value: "music-producer", label: "Music Producer", icon: Music },
    { value: "content-creator", label: "Content Creator", icon: Camera },
    { value: "barista", label: "Barista", icon: Coffee },
  ]

  const students = [
    {
      name: "Maria Sari",
      batch: "Music Production Batch 1",
      progress: 85,
      status: "Active",
      lastActivity: "2 hours ago",
    },
    { name: "John Doe", batch: "Music Production Batch 1", progress: 92, status: "Active", lastActivity: "1 day ago" },
    {
      name: "Sarah Kim",
      batch: "Music Production Batch 1",
      progress: 67,
      status: "Behind",
      lastActivity: "3 days ago",
    },
    {
      name: "Ahmad Rizki",
      batch: "Music Production Batch 1",
      progress: 78,
      status: "Active",
      lastActivity: "5 hours ago",
    },
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Mentor Dashboard</h1>
          <p className="text-gray-600 mt-2 text-lg">Manage your classes and track student progress</p>
        </div>
        <div className="w-64">
          <Select
            value={selectedRole}
            onValueChange={(value) => {
              setSelectedRole(value)
              toast({
                title: "Role Updated",
                description: `Your role has been updated to ${mentorRoles.find((role) => role.value === value)?.label}`,
              })
            }}
          >
            <SelectTrigger className="text-lg">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              {mentorRoles.map((role) => (
                <SelectItem key={role.value} value={role.value} className="text-lg">
                  <div className="flex items-center gap-2">
                    <role.icon className="w-5 h-5" />
                    {role.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">My Students</CardTitle>
            <Users className="h-5 w-5 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">32</div>
            <p className="text-sm text-muted-foreground">Across 2 batches</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Modules Completed</CardTitle>
            <BookOpen className="h-5 w-5 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">156</div>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Upcoming Classes</CardTitle>
            <Calendar className="h-5 w-5 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-sm text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Avg. Progress</CardTitle>
            <CheckCircle className="h-5 w-5 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">78%</div>
            <p className="text-sm text-muted-foreground">
              <span className="text-green-600">+5%</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Students Progress Table */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Student Progress</CardTitle>
          <CardDescription className="text-lg text-gray-500">
            Track your students' learning progress and completion status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg">Student Name</TableHead>
                <TableHead className="text-lg">Batch</TableHead>
                <TableHead className="text-lg">Progress</TableHead>
                <TableHead className="text-lg">Status</TableHead>
                <TableHead className="text-lg">Last Activity</TableHead>
                <TableHead className="text-lg">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.name}>
                  <TableCell className="font-medium text-lg">{student.name}</TableCell>
                  <TableCell className="text-lg">{student.batch}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress value={student.progress} className="w-20 h-3" />
                      <span className="text-sm text-gray-600">{student.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={student.status === "Active" ? "default" : "destructive"}
                      className={`text-lg ${student.status === "Active" ? "bg-green-100 text-green-800" : ""}`}
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500 text-lg">{student.lastActivity}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() =>
                        toast({
                          title: "View Details",
                          description: `Viewing details for ${student.name}`,
                        })
                      }
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pending Reviews */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Pending Reviews</CardTitle>
            <CardDescription className="text-lg text-gray-500">Final projects waiting for your review</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-lg">Maria Sari - Final Music Project</p>
                <p className="text-sm text-gray-500">Submitted 2 days ago</p>
              </div>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-lg"
                onClick={() =>
                  toast({
                    title: "Reviewing Project",
                    description: `Reviewing Maria Sari's Final Music Project`,
                  })
                }
              >
                Review
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium text-lg">John Doe - Audio Mixing Assignment</p>
                <p className="text-sm text-gray-500">Submitted 1 day ago</p>
              </div>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-lg"
                onClick={() =>
                  toast({
                    title: "Reviewing Assignment",
                    description: `Reviewing John Doe's Audio Mixing Assignment`,
                  })
                }
              >
                Review
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Classes */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Upcoming Classes</CardTitle>
            <CardDescription className="text-lg text-gray-500">Your scheduled classes for this week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-6 p-4 border rounded-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium text-lg">Advanced Audio Editing</p>
                <p className="text-sm text-gray-500">Today, 2:00 PM - Music Production Batch 1</p>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="text-lg"
                onClick={() =>
                  toast({
                    title: "Joining Class",
                    description: `Joining Advanced Audio Editing class`,
                  })
                }
              >
                Join
              </Button>
            </div>
            <div className="flex items-center space-x-6 p-4 border rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium text-lg">Music Theory Basics</p>
                <p className="text-sm text-gray-500">Tomorrow, 10:00 AM - Music Production Batch 2</p>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="text-lg"
                onClick={() =>
                  toast({
                    title: "Preparing for Class",
                    description: `Preparing for Music Theory Basics class`,
                  })
                }
              >
                Prepare
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
