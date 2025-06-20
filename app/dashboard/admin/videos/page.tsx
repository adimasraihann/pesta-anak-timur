"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Plus, Video, Play, Edit, Trash2, Youtube, FileVideo, Clock, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function VideoManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const videos = [
    {
      id: 1,
      title: "Introduction to Music Production",
      module: "Music Production Basics",
      duration: "12:45",
      source: "YouTube",
      url: "https://youtube.com/watch?v=example1",
      views: 245,
      uploadDate: "2024-12-01",
      status: "Published",
    },
    {
      id: 2,
      title: "Recording Vocals Professionally",
      module: "Audio Recording Techniques",
      duration: "18:30",
      source: "Vimeo",
      url: "https://vimeo.com/example2",
      views: 187,
      uploadDate: "2024-12-05",
      status: "Published",
    },
    {
      id: 3,
      title: "Mixing and Mastering Basics",
      module: "Audio Mixing",
      duration: "24:15",
      source: "YouTube",
      url: "https://youtube.com/watch?v=example3",
      views: 312,
      uploadDate: "2024-12-08",
      status: "Published",
    },
    {
      id: 4,
      title: "Coffee Bean Selection Guide",
      module: "Barista Fundamentals",
      duration: "15:20",
      source: "Vimeo",
      url: "https://vimeo.com/example4",
      views: 156,
      uploadDate: "2024-12-10",
      status: "Draft",
    },
  ]

  const handleAddVideo = () => {
    toast({
      title: "Video Added Successfully!",
      description: "New video has been uploaded to the system.",
      variant: "success",
    })
    setIsDialogOpen(false)
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Video Management</h1>
          <p className="text-lg text-gray-600 mt-2">Upload and manage educational videos for your courses</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Plus className="w-5 h-5 mr-2" />
              Add New Video
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Add New Video</DialogTitle>
              <DialogDescription>Upload or link to a video for your learning modules.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="video-title" className="text-sm font-medium">
                  Video Title
                </Label>
                <Input id="video-title" placeholder="e.g., Introduction to Music Production" className="h-11" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Description
                </Label>
                <Textarea id="description" placeholder="Describe what this video covers..." className="min-h-[100px]" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="module" className="text-sm font-medium">
                  Assign to Module
                </Label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select module" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="music-basics">Music Production Basics</SelectItem>
                    <SelectItem value="audio-recording">Audio Recording Techniques</SelectItem>
                    <SelectItem value="audio-mixing">Audio Mixing</SelectItem>
                    <SelectItem value="barista-fundamentals">Barista Fundamentals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="youtube-url" className="text-sm font-medium">
                  YouTube Video URL
                </Label>
                <Input
                  id="youtube-url"
                  placeholder="e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  className="h-11"
                />
                <p className="text-xs text-gray-500">
                  Paste the YouTube video URL and it will be automatically embedded in your modules
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddVideo} className="bg-red-600 hover:bg-red-700">
                Add Video
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Videos</CardTitle>
            <Video className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">42</div>
            <p className="text-xs text-blue-600 mt-1">Across all modules</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Total Watch Time</CardTitle>
            <Clock className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">1,245h</div>
            <p className="text-xs text-green-600 mt-1">By all students</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">YouTube Videos</CardTitle>
            <Youtube className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">28</div>
            <p className="text-xs text-yellow-600 mt-1">Embedded videos</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Uploaded Videos</CardTitle>
            <FileVideo className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">14</div>
            <p className="text-xs text-purple-600 mt-1">Custom uploads</p>
          </CardContent>
        </Card>
      </div>

      {/* Video Preview */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">Featured Video</CardTitle>
          <CardDescription className="text-base">Preview your most recent educational content</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="aspect-video bg-black rounded-lg relative">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </CardContent>
      </Card>

      {/* Videos Table */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">All Videos</CardTitle>
          <CardDescription className="text-base">Manage your educational video content</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-4">Video Title</TableHead>
                <TableHead className="font-semibold text-gray-900">Module</TableHead>
                <TableHead className="font-semibold text-gray-900">Duration</TableHead>
                <TableHead className="font-semibold text-gray-900">Source</TableHead>
                <TableHead className="font-semibold text-gray-900">Views</TableHead>
                <TableHead className="font-semibold text-gray-900">Status</TableHead>
                <TableHead className="font-semibold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videos.map((video) => (
                <TableRow key={video.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-gray-900 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                        <Play className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-semibold">{video.title}</div>
                        <div className="text-xs text-gray-500">Uploaded: {video.uploadDate}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{video.module}</TableCell>
                  <TableCell>{video.duration}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-medium">
                      {video.source}
                    </Badge>
                  </TableCell>
                  <TableCell>{video.views}</TableCell>
                  <TableCell>
                    <Badge
                      variant={video.status === "Published" ? "default" : "secondary"}
                      className={
                        video.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {video.status}
                    </Badge>
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
