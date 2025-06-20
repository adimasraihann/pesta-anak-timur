"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, Video, MapPin, User, Bell, Plus, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function StudentSchedule() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [viewMode, setViewMode] = useState("week")
  const { toast } = useToast()

  const upcomingClasses = [
    {
      id: 1,
      title: "Music Production Workshop",
      mentor: "John Smith",
      date: "2024-12-20",
      time: "14:00 - 16:00",
      type: "Workshop",
      location: "Online - Zoom",
      description: "Advanced techniques in electronic music production",
      status: "Confirmed",
      meetingLink: "https://zoom.us/j/123456789",
    },
    {
      id: 2,
      title: "One-on-One Mentoring",
      mentor: "John Smith",
      date: "2024-12-22",
      time: "10:00 - 11:00",
      type: "Mentoring",
      location: "Online - Google Meet",
      description: "Personal feedback on your latest project",
      status: "Confirmed",
      meetingLink: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 3,
      title: "Group Project Review",
      mentor: "Sarah Johnson",
      date: "2024-12-25",
      time: "15:00 - 17:00",
      type: "Review",
      location: "Online - Zoom",
      description: "Present and review final projects with peers",
      status: "Pending",
      meetingLink: "https://zoom.us/j/987654321",
    },
  ]

  const assignments = [
    {
      id: 1,
      title: "Beat Creation Assignment",
      course: "Music Production Basics",
      dueDate: "2024-12-23",
      dueTime: "23:59",
      status: "Pending",
      priority: "High",
    },
    {
      id: 2,
      title: "Vocal Recording Project",
      course: "Audio Recording Techniques",
      dueDate: "2024-12-28",
      dueTime: "23:59",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Module 5 Quiz",
      course: "Music Production Basics",
      dueDate: "2024-12-30",
      dueTime: "23:59",
      status: "Not Started",
      priority: "Low",
    },
  ]

  const studyPlan = [
    {
      day: "Monday",
      sessions: [
        { time: "09:00 - 10:30", activity: "Music Theory Study", type: "Self Study" },
        { time: "14:00 - 15:30", activity: "DAW Practice", type: "Practice" },
      ],
    },
    {
      day: "Wednesday",
      sessions: [
        { time: "10:00 - 11:30", activity: "Audio Recording Practice", type: "Practice" },
        { time: "19:00 - 20:00", activity: "Live Class", type: "Class" },
      ],
    },
    {
      day: "Friday",
      sessions: [
        { time: "15:00 - 16:30", activity: "Project Work", type: "Project" },
        { time: "20:00 - 21:00", activity: "Peer Review", type: "Collaboration" },
      ],
    },
  ]

  const handleJoinClass = (meetingLink: string, title: string) => {
    toast({
      title: "Joining Class",
      description: `Opening ${title} meeting...`,
      variant: "success",
    })
    window.open(meetingLink, "_blank")
  }

  const handleSetReminder = (classId: number, title: string) => {
    toast({
      title: "Reminder Set",
      description: `You'll be notified 15 minutes before ${title}`,
      variant: "success",
    })
  }

  const handleViewAssignment = (assignmentId: number) => {
    toast({
      title: "Opening Assignment",
      description: "Loading assignment details...",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Schedule</h1>
          <p className="text-lg text-gray-600 mt-2">Manage your classes, assignments, and study plan</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={viewMode} onValueChange={setViewMode}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Upcoming Classes</CardTitle>
            <CalendarIcon className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">{upcomingClasses.length}</div>
            <p className="text-xs text-blue-600 mt-1">This week</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Pending Assignments</CardTitle>
            <Clock className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">
              {assignments.filter((a) => a.status === "Pending").length}
            </div>
            <p className="text-xs text-yellow-600 mt-1">Due soon</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Study Hours</CardTitle>
            <Clock className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">12h</div>
            <p className="text-xs text-green-600 mt-1">This week</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Completed Tasks</CardTitle>
            <CalendarIcon className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">8</div>
            <p className="text-xs text-purple-600 mt-1">This week</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl font-bold text-gray-900">Calendar</CardTitle>
            <CardDescription>Select a date to view your schedule</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
          </CardContent>
        </Card>

        {/* Schedule Details */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="classes" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="classes">Upcoming Classes</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="study-plan">Study Plan</TabsTrigger>
            </TabsList>

            <TabsContent value="classes" className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-xl font-bold text-gray-900">Upcoming Classes</CardTitle>
                  <CardDescription className="text-base">Your scheduled classes and mentoring sessions</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {upcomingClasses.map((classItem) => (
                      <div key={classItem.id} className="border rounded-lg p-6 bg-gray-50">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{classItem.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{classItem.description}</p>
                          </div>
                          <Badge
                            variant={classItem.status === "Confirmed" ? "default" : "secondary"}
                            className={
                              classItem.status === "Confirmed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {classItem.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <User className="w-4 h-4" />
                            <span>{classItem.mentor}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{classItem.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{classItem.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{classItem.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Button
                            size="sm"
                            onClick={() => handleJoinClass(classItem.meetingLink, classItem.title)}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Video className="w-4 h-4 mr-2" />
                            Join Class
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleSetReminder(classItem.id, classItem.title)}
                          >
                            <Bell className="w-4 h-4 mr-2" />
                            Set Reminder
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignments" className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-xl font-bold text-gray-900">Assignment Deadlines</CardTitle>
                  <CardDescription className="text-base">
                    Keep track of your upcoming assignments and projects
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {assignments.map((assignment) => (
                      <div key={assignment.id} className="border rounded-lg p-4 bg-gray-50">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                            <p className="text-sm text-gray-600">{assignment.course}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={
                                assignment.priority === "High"
                                  ? "border-red-200 text-red-800"
                                  : assignment.priority === "Medium"
                                    ? "border-yellow-200 text-yellow-800"
                                    : "border-green-200 text-green-800"
                              }
                            >
                              {assignment.priority}
                            </Badge>
                            <Badge
                              variant={assignment.status === "Pending" ? "default" : "secondary"}
                              className={
                                assignment.status === "Pending"
                                  ? "bg-red-100 text-red-800"
                                  : assignment.status === "In Progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                              }
                            >
                              {assignment.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4" />
                              <span>{assignment.dueDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{assignment.dueTime}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" onClick={() => handleViewAssignment(assignment.id)}>
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="study-plan" className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="text-xl font-bold text-gray-900">Weekly Study Plan</CardTitle>
                  <CardDescription className="text-base">Your personalized study schedule</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {studyPlan.map((day, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-gray-50">
                        <h3 className="font-semibold text-gray-900 mb-4">{day.day}</h3>
                        <div className="space-y-3">
                          {day.sessions.map((session, sessionIndex) => (
                            <div
                              key={sessionIndex}
                              className="flex items-center justify-between p-3 bg-white rounded border"
                            >
                              <div>
                                <p className="font-medium text-gray-900">{session.activity}</p>
                                <p className="text-sm text-gray-600">{session.time}</p>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {session.type}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
