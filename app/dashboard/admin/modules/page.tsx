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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  BookOpen,
  Video,
  FileText,
  ImageIcon,
  Edit,
  Trash2,
  Eye,
  DotIcon as DragHandleDots2Icon,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ModuleBuilder() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const modules = [
    {
      id: 1,
      title: "Introduction to Music Production",
      category: "Music Producer",
      lessons: 8,
      duration: "6 hours",
      status: "Published",
      students: 125,
      completion: 89,
      lastUpdated: "2024-12-10",
    },
    {
      id: 2,
      title: "Content Creation Fundamentals",
      category: "Content Creator",
      lessons: 12,
      duration: "8 hours",
      status: "Draft",
      students: 0,
      completion: 0,
      lastUpdated: "2024-12-15",
    },
    {
      id: 3,
      title: "Coffee Brewing Mastery",
      category: "Barista",
      lessons: 15,
      duration: "10 hours",
      status: "Published",
      students: 78,
      completion: 67,
      lastUpdated: "2024-12-08",
    },
  ]

  const handleCreateModule = () => {
    toast({
      title: "Module Created Successfully!",
      description: "New learning module has been added to the system.",
      variant: "success",
    })
    setIsDialogOpen(false)
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Module Builder</h1>
          <p className="text-lg text-gray-600 mt-2">
            Create and manage interactive learning modules with multimedia content
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Plus className="w-5 h-5 mr-2" />
              Create New Module
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Create New Learning Module</DialogTitle>
              <DialogDescription>Build an interactive module with videos, text, and assessments.</DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4 mt-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="module-title" className="text-sm font-medium">
                      Module Title
                    </Label>
                    <Input id="module-title" placeholder="e.g., Advanced Audio Mixing Techniques" className="h-11" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description" className="text-sm font-medium">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what students will learn in this module..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="category" className="text-sm font-medium">
                        Category
                      </Label>
                      <Select>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="music-producer">Music Producer</SelectItem>
                          <SelectItem value="content-creator">Content Creator</SelectItem>
                          <SelectItem value="barista">Barista</SelectItem>
                          <SelectItem value="event-organizer">Event Organizer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="difficulty" className="text-sm font-medium">
                        Difficulty Level
                      </Label>
                      <Select>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="content" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Module Content</h3>
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Lesson
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center gap-3">
                        <DragHandleDots2Icon className="w-5 h-5 text-gray-400" />
                        <div className="flex-1">
                          <h4 className="font-medium">Lesson 1: Introduction</h4>
                          <p className="text-sm text-gray-600">Video + Text + Quiz</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center gap-3">
                        <DragHandleDots2Icon className="w-5 h-5 text-gray-400" />
                        <div className="flex-1">
                          <h4 className="font-medium">Lesson 2: Basic Concepts</h4>
                          <p className="text-sm text-gray-600">Video + Interactive Exercise</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4 mt-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="prerequisites" className="text-sm font-medium">
                      Prerequisites
                    </Label>
                    <Textarea
                      id="prerequisites"
                      placeholder="List any required knowledge or completed modules..."
                      className="min-h-[80px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="duration" className="text-sm font-medium">
                        Estimated Duration
                      </Label>
                      <Input id="duration" placeholder="e.g., 4 hours" className="h-11" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="points" className="text-sm font-medium">
                        Points/Credits
                      </Label>
                      <Input id="points" type="number" placeholder="100" className="h-11" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter className="mt-6">
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
            <div className="text-3xl font-bold text-blue-900">24</div>
            <p className="text-xs text-blue-600 mt-1">Across all categories</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Published</CardTitle>
            <BookOpen className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">18</div>
            <p className="text-xs text-green-600 mt-1">Live modules</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">In Draft</CardTitle>
            <FileText className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">6</div>
            <p className="text-xs text-yellow-600 mt-1">Being developed</p>
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

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Card key={module.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2">{module.title}</CardTitle>
                  <Badge
                    variant={module.status === "Published" ? "default" : "secondary"}
                    className={
                      module.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {module.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Lessons:</span>
                  <span className="font-medium ml-2">{module.lessons}</span>
                </div>
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium ml-2">{module.duration}</span>
                </div>
                <div>
                  <span className="text-gray-500">Students:</span>
                  <span className="font-medium ml-2">{module.students}</span>
                </div>
                <div>
                  <span className="text-gray-500">Completion:</span>
                  <span className="font-medium ml-2">{module.completion}%</span>
                </div>
              </div>
              <div className="text-xs text-gray-500">Last updated: {module.lastUpdated}</div>
              <div className="flex items-center gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-8 p-0 text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">Module Builder Tools</CardTitle>
          <CardDescription className="text-base">Quick access to content creation and management tools</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <Video className="w-6 h-6 text-red-600" />
              <span className="text-sm font-medium">Add Video</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="w-6 h-6 text-red-600" />
              <span className="text-sm font-medium">Add Text</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <ImageIcon className="w-6 h-6 text-red-600" />
              <span className="text-sm font-medium">Add Image</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <BookOpen className="w-6 h-6 text-red-600" />
              <span className="text-sm font-medium">Create Quiz</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
