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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Video, Calendar, Clock, Users, Copy, Edit, Trash2, Link2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ConferenceLinks() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const conferences = [
    {
      id: 1,
      title: "Music Production Q&A Session",
      batch: "Music Production Batch 1",
      platform: "Zoom",
      date: "2024-12-20",
      time: "14:00",
      duration: "60 min",
      host: "John Smith",
      status: "Upcoming",
      link: "https://zoom.us/j/123456789",
    },
    {
      id: 2,
      title: "Content Creation Workshop",
      batch: "Content Creator Batch 2",
      platform: "Google Meet",
      date: "2024-12-21",
      time: "10:00",
      duration: "90 min",
      host: "Sarah Johnson",
      status: "Upcoming",
      link: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 3,
      title: "Coffee Brewing Demonstration",
      batch: "Barista Skills Batch 1",
      platform: "Zoom",
      date: "2024-12-18",
      time: "15:30",
      duration: "120 min",
      host: "Mike Wilson",
      status: "Completed",
      link: "https://zoom.us/j/987654321",
    },
    {
      id: 4,
      title: "Event Planning Basics",
      batch: "Event Organizer Batch 1",
      platform: "Microsoft Teams",
      date: "2024-12-22",
      time: "09:00",
      duration: "60 min",
      host: "Lisa Chen",
      status: "Upcoming",
      link: "https://teams.microsoft.com/l/meetup-join/abc123",
    },
  ]

  const handleAddConference = () => {
    toast({
      title: "Conference Link Added!",
      description: "New conference link has been created and shared with students.",
      variant: "success",
    })
    setIsDialogOpen(false)
  }

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link)
    toast({
      title: "Link Copied!",
      description: "Conference link has been copied to clipboard.",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Conference Links</h1>
          <p className="text-lg text-gray-600 mt-2">Manage virtual meeting links for classes and workshops</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Plus className="w-5 h-5 mr-2" />
              Create Conference Link
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Create Conference Link</DialogTitle>
              <DialogDescription>Set up a virtual meeting for your class or workshop.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="conference-title" className="text-sm font-medium">
                  Conference Title
                </Label>
                <Input id="conference-title" placeholder="e.g., Music Production Q&A Session" className="h-11" />
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
                    <SelectItem value="content-creator-2">Content Creator Batch 2</SelectItem>
                    <SelectItem value="barista-skills-1">Barista Skills Batch 1</SelectItem>
                    <SelectItem value="event-organizer-1">Event Organizer Batch 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="platform" className="text-sm font-medium">
                  Platform
                </Label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zoom">Zoom</SelectItem>
                    <SelectItem value="google-meet">Google Meet</SelectItem>
                    <SelectItem value="microsoft-teams">Microsoft Teams</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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
                    Duration (minutes)
                  </Label>
                  <Input id="duration" type="number" placeholder="60" className="h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="host" className="text-sm font-medium">
                    Host
                  </Label>
                  <Select>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select host" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john-smith">John Smith</SelectItem>
                      <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                      <SelectItem value="mike-wilson">Mike Wilson</SelectItem>
                      <SelectItem value="lisa-chen">Lisa Chen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="conference-link" className="text-sm font-medium">
                  Conference Link
                </Label>
                <Input id="conference-link" placeholder="e.g., https://zoom.us/j/123456789" className="h-11" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddConference} className="bg-red-600 hover:bg-red-700">
                Create Conference
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Conferences</CardTitle>
            <Video className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">24</div>
            <p className="text-xs text-blue-600 mt-1">Scheduled meetings</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Upcoming</CardTitle>
            <Calendar className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">18</div>
            <p className="text-xs text-green-600 mt-1">Future sessions</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Total Hours</CardTitle>
            <Clock className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">42</div>
            <p className="text-xs text-yellow-600 mt-1">Of virtual meetings</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Participants</CardTitle>
            <Users className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">325</div>
            <p className="text-xs text-purple-600 mt-1">Total attendees</p>
          </CardContent>
        </Card>
      </div>

      {/* Conferences Table */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">All Conference Links</CardTitle>
          <CardDescription className="text-base">Manage your virtual meeting links and sessions</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-4">Conference Title</TableHead>
                <TableHead className="font-semibold text-gray-900">Batch</TableHead>
                <TableHead className="font-semibold text-gray-900">Platform</TableHead>
                <TableHead className="font-semibold text-gray-900">Schedule</TableHead>
                <TableHead className="font-semibold text-gray-900">Host</TableHead>
                <TableHead className="font-semibold text-gray-900">Status</TableHead>
                <TableHead className="font-semibold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {conferences.map((conference) => (
                <TableRow key={conference.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-gray-900 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                        <Video className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-semibold">{conference.title}</div>
                        <div className="text-xs text-gray-500">Duration: {conference.duration}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{conference.batch}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-medium">
                      {conference.platform}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{conference.date}</div>
                      <div className="text-gray-500">{conference.time}</div>
                    </div>
                  </TableCell>
                  <TableCell>{conference.host}</TableCell>
                  <TableCell>
                    <Badge
                      variant={conference.status === "Upcoming" ? "default" : "secondary"}
                      className={
                        conference.status === "Upcoming" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }
                    >
                      {conference.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => handleCopyLink(conference.link)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <Link2 className="w-4 h-4" />
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
