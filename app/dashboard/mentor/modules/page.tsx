"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { BookOpen, Plus, Edit, Eye, Trash2, Video, Users, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function MentorModules() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const modules = [
    {
      id: 1,
      title: "Introduction to Music Production",
      description: "Basic concepts and tools for music production",
      category: "Music Producer",
      lessons: 8,
      duration: "6 hours",
      students: 32,
      status: "Published",
      lastUpdated: "2024-12-10",
      completion: 89,
    },
    {
      id: 2,
      title: "Advanced Audio Mixing",
      description: "Professional mixing techniques and workflows",
      category: "Music Producer",
      lessons: 12,
      duration: "8 hours",
      students: 28,
      status: "Draft",
      lastUpdated: "2024-12-15",
      completion: 0,
    },
    {
      id: 3,
      title: "Recording Studio Setup",
      description: "How to set up a professional recording environment",
      category: "Music Producer",
      lessons: 6,
      duration: "4 hours",
      students: 32,
      status: "Published",
      lastUpdated: "2024-12-08",
      completion: 67,
    },
  ]

  const handleCreateModule = () => {
    toast({
      title: "Module Created Successfully!",
      description: "New module has been added to your course.",
      variant: "success",
    })
    setIsDialogOpen(false)
  }

  const handleEditModule = (moduleId: number) => {
    toast({
      title: "Opening Module Editor",
      description: "Loading module content for editing...",
      variant: "success",
    })
  }

  const handleDeleteModule = (moduleId: number) => {
    toast({
      title: "Module Deleted",
      description: "Module has been removed from the course.",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Course Modules</h1>
          <p className="text-lg text-gray-600 mt-2">Create and manage your course content</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Plus className="w-5 h-5 mr-2" />
              Create New Module
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Create New Module</DialogTitle>
              <DialogDescription>Add a new learning module to your course.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="module-title" className="text-sm font-medium">
                  Module Title
                </Label>
                <Input id="module-title" placeholder="e.g., Advanced Mixing Techniques" className="h-11" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe what students will learn..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="duration" className="text-sm font-medium">
                    Duration
                  </Label>
                  <Input id="duration" placeholder="e.g., 4 hours" className="h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lessons" className="text-sm font-medium">
                    Number of Lessons
                  </Label>
                  <Input id="lessons" type="number" placeholder="8" className="h-11" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="youtube-links" className="text-sm font-medium">
                  YouTube Video Links
                </Label>
                <Textarea
                  id="youtube-links"
                  placeholder="Paste YouTube URLs (one per line)..."
                  className="min-h-[100px]"
                />
                <p className="text-xs text-gray-500">Add YouTube video links for your lessons</p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateModule} className="bg-red-600 hover:bg-red-700">
                Create Module
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Modules</CardTitle>
            <BookOpen className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">8</div>
            <p className="text-xs text-blue-600 mt-1">Created by you</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Published</CardTitle>
            <BookOpen className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">6</div>
            <p className="text-xs text-green-600 mt-1">Live modules</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Total Students</CardTitle>
            <Users className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">92</div>
            <p className="text-xs text-yellow-600 mt-1">Enrolled students</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Avg. Completion</CardTitle>
            <BookOpen className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">78%</div>
            <p className="text-xs text-purple-600 mt-1">Student completion rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Modules Table */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">Your Course Modules</CardTitle>
          <CardDescription className="text-base">
            Manage your educational content and track student engagement
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-4">Module</TableHead>
                <TableHead className="font-semibold text-gray-900">Lessons</TableHead>
                <TableHead className="font-semibold text-gray-900">Duration</TableHead>
                <TableHead className="font-semibold text-gray-900">Students</TableHead>
                <TableHead className="font-semibold text-gray-900">Completion</TableHead>
                <TableHead className="font-semibold text-gray-900">Status</TableHead>
                <TableHead className="font-semibold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modules.map((module) => (
                <TableRow key={module.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="py-4">
                    <div>
                      <div className="font-semibold text-gray-900">{module.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{module.description}</div>
                      <div className="text-xs text-gray-400 mt-1">Updated: {module.lastUpdated}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{module.lessons}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{module.duration}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{module.students}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <span className="font-medium">{module.completion}%</span>
                      <div className="text-gray-500">avg. completion</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={module.status === "Published" ? "default" : "secondary"}
                      className={
                        module.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {module.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => handleEditModule(module.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        onClick={() => handleDeleteModule(module.id)}
                      >
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
