"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, Clock, Plus, Video, Users, MapPin, Edit, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ClassSchedules() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const schedules = [
    {
      id: 1,
      title: "Advanced Audio Editing",
      batch: "Music Production Batch 1",
      date: "2024-12-17",
      time: "14:00",
      duration: "2 hours",
      type: "Live Session",
      mentor: "John Smith",
      students: 32,
      location: "Zoom Meeting",
      status: "Scheduled",
    },
    {
      id: 2,
      title: "Music Theory Basics",
      batch: "Music Production Batch 2",
      date: "2024-12-18",
      time: "10:00",
      duration: "1.5 hours",
      type: "Workshop",
      mentor: "Sarah Johnson",
      students: 28,
      location: "Google Meet",
      status: "Scheduled",
    },
    {
      id: 3,
      title: "Content Planning Strategy",
      batch: "Content Creator Batch 2",
      date: "2024-12-19",
      time: "15:30",
      duration: "2 hours",
      type: "Interactive Session",
      mentor: "Mike Wilson",
      students: 25,
      location: "Zoom Meeting",
      status: "Scheduled",
    },
    {
      id: 4,
      title: "Coffee Brewing Techniques",
      batch: "Barista Skills Batch 1",
      date: "2024-12-20",
      time: "09:00",
      duration: "3 hours",
      type: "Practical Session",
      mentor: "Lisa Chen",
      students: 45,
      location: "Physical Lab",
      status: "Confirmed",
    },
  ]

  const handleCreateSchedule = () => {
    toast({
      title: "Class Scheduled Successfully!",
      description: "New class has been added to the schedule.",
      variant: "success",
    })
    setIsDialogOpen(false)
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Class Schedules</h1>
          <p className="text-lg text-gray-600 mt-2">Manage and organize all class sessions and workshops</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Plus className="w-5 h-5 mr-2" />
              Schedule New Class
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Schedule New Class</DialogTitle>
              <DialogDescription>Create a new class session for your students.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="class-title" className="text-sm font-medium">
                  Class Title
                </Label>
                <Input id="class-title" placeholder="e.g., Advanced Audio Editing" className="h-11" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="batch" className="text-sm font-medium">
                  Select Batch
                </Label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Choose batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="music-production-1">Music Production Batch 1</SelectItem>
                    <SelectItem value="music-production-2">Music Production Batch 2</SelectItem>
                    <SelectItem value="content-creator-2">Content Creator Batch 2</SelectItem>
                    <SelectItem value="barista-skills-1">Barista Skills Batch 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date" className="text-sm font-medium">
                    Date
                  </Label>
                  <Input id="date" type="date" className="h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time" className="text-sm font-medium">
                    Time
                  </Label>
                  <Input id="time" type="time" className="h-11" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="duration" className="text-sm font-medium">
                    Duration
                  </Label>
                  <Select>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 hour</SelectItem>
                      <SelectItem value="1.5">1.5 hours</SelectItem>
                      <SelectItem value="2">2 hours</SelectItem>
                      <SelectItem value="3">3 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type" className="text-sm font-medium">
                    Session Type
                  </Label>
                  <Select>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="live-session">Live Session</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="interactive">Interactive Session</SelectItem>
                      <SelectItem value="practical">Practical Session</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location" className="text-sm font-medium">
                  Location/Platform
                </Label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zoom">Zoom Meeting</SelectItem>
                    <SelectItem value="google-meet">Google Meet</SelectItem>
                    <SelectItem value="physical">Physical Location</SelectItem>
                    <SelectItem value="teams">Microsoft Teams</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateSchedule} className="bg-red-600 hover:bg-red-700">
                Schedule Class
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Today's Classes</CardTitle>
            <Calendar className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">3</div>
            <p className="text-xs text-blue-600 mt-1">Scheduled for today</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">This Week</CardTitle>
            <Clock className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">12</div>
            <p className="text-xs text-green-600 mt-1">Classes scheduled</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Live Sessions</CardTitle>
            <Video className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">8</div>
            <p className="text-xs text-purple-600 mt-1">Online classes</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-orange-50 to-orange-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">Total Students</CardTitle>
            <Users className="h-5 w-5 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-900">130</div>
            <p className="text-xs text-orange-600 mt-1">Attending classes</p>
          </CardContent>
        </Card>
      </div>

      {/* Schedule Calendar View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <Card className="lg:col-span-2 shadow-lg border-0">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl font-bold text-gray-900">Weekly Schedule</CardTitle>
            <CardDescription className="text-base">Overview of all scheduled classes for this week</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {schedules.map((schedule) => (
                <div key={schedule.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">{schedule.title}</h3>
                        <Badge
                          variant={schedule.status === "Confirmed" ? "default" : "secondary"}
                          className={
                            schedule.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }
                        >
                          {schedule.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {schedule.date} at {schedule.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {schedule.duration} • {schedule.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>
                            {schedule.students} students • {schedule.batch}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{schedule.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-lg font-bold text-gray-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Button className="w-full justify-start bg-red-600 hover:bg-red-700 text-white h-12">
              <Plus className="w-5 h-5 mr-3" />
              Schedule New Class
            </Button>
            <Button variant="outline" className="w-full justify-start h-12">
              <Calendar className="w-5 h-5 mr-3" />
              View Full Calendar
            </Button>
            <Button variant="outline" className="w-full justify-start h-12">
              <Video className="w-5 h-5 mr-3" />
              Manage Meeting Links
            </Button>
            <Button variant="outline" className="w-full justify-start h-12">
              <Users className="w-5 h-5 mr-3" />
              Send Notifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
