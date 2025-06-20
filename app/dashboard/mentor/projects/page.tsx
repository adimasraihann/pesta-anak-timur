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
import { Progress } from "@/components/ui/progress"
import { FolderOpen, Plus, Eye, Edit, MessageSquare, Calendar, Users, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function MentorProjects() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const projects = [
    {
      id: 1,
      title: "Final Music Production Project",
      description: "Create a complete 3-minute track from recording to mastering",
      batch: "Music Production Batch 1",
      dueDate: "2024-12-30",
      submissions: 28,
      totalStudents: 32,
      status: "Active",
      progress: 87,
      graded: 15,
    },
    {
      id: 2,
      title: "Podcast Episode Creation",
      description: "Record and edit a 10-minute podcast episode",
      batch: "Content Creator Batch 1",
      dueDate: "2025-01-15",
      submissions: 12,
      totalStudents: 25,
      status: "Active",
      progress: 48,
      graded: 8,
    },
    {
      id: 3,
      title: "Coffee Brewing Portfolio",
      description: "Document 5 different brewing methods with photos and notes",
      batch: "Barista Batch 1",
      dueDate: "2024-12-25",
      submissions: 35,
      totalStudents: 40,
      status: "Review",
      progress: 87,
      graded: 35,
    },
    {
      id: 4,
      title: "Event Planning Proposal",
      description: "Create a comprehensive event plan for a 100-person gathering",
      batch: "Event Organizer Batch 1",
      dueDate: "2024-12-20",
      submissions: 18,
      totalStudents: 20,
      status: "Completed",
      progress: 90,
      graded: 18,
    },
  ]

  const handleCreateProject = () => {
    toast({
      title: "Project Created Successfully!",
      description: "New project has been assigned to students.",
      variant: "success",
    })
    setIsDialogOpen(false)
  }

  const handleViewSubmissions = (projectId: number) => {
    toast({
      title: "Opening Submissions",
      description: "Loading student submissions for review...",
      variant: "success",
    })
  }

  const handleGradeProject = (projectId: number) => {
    toast({
      title: "Opening Grading Interface",
      description: "Loading project grading tools...",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Projects</h1>
          <p className="text-lg text-gray-600 mt-2">Assign and evaluate student project work</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Plus className="w-5 h-5 mr-2" />
              Create New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Create New Project</DialogTitle>
              <DialogDescription>Assign a new project to your students.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="project-title" className="text-sm font-medium">
                  Project Title
                </Label>
                <Input id="project-title" placeholder="e.g., Final Music Production Project" className="h-11" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Project Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the project requirements and objectives..."
                  className="min-h-[120px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="batch" className="text-sm font-medium">
                    Assign to Batch
                  </Label>
                  <Select>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select batch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="music-batch-1">Music Production Batch 1</SelectItem>
                      <SelectItem value="music-batch-2">Music Production Batch 2</SelectItem>
                      <SelectItem value="content-batch-1">Content Creator Batch 1</SelectItem>
                      <SelectItem value="barista-batch-1">Barista Batch 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="due-date" className="text-sm font-medium">
                    Due Date
                  </Label>
                  <Input id="due-date" type="date" className="h-11" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="requirements" className="text-sm font-medium">
                  Project Requirements
                </Label>
                <Textarea
                  id="requirements"
                  placeholder="List specific requirements and deliverables..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="points" className="text-sm font-medium">
                    Total Points
                  </Label>
                  <Input id="points" type="number" placeholder="100" className="h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="submission-format" className="text-sm font-medium">
                    Submission Format
                  </Label>
                  <Select>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="file-upload">File Upload</SelectItem>
                      <SelectItem value="link-submission">Link Submission</SelectItem>
                      <SelectItem value="text-submission">Text Submission</SelectItem>
                      <SelectItem value="presentation">Presentation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateProject} className="bg-red-600 hover:bg-red-700">
                Create Project
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Active Projects</CardTitle>
            <FolderOpen className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">6</div>
            <p className="text-xs text-blue-600 mt-1">Currently running</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Submissions</CardTitle>
            <CheckCircle className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">93</div>
            <p className="text-xs text-green-600 mt-1">Total received</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Pending Review</CardTitle>
            <Eye className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">17</div>
            <p className="text-xs text-yellow-600 mt-1">Need grading</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Avg. Score</CardTitle>
            <CheckCircle className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">85%</div>
            <p className="text-xs text-purple-600 mt-1">Student average</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects Table */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">Project Overview</CardTitle>
          <CardDescription className="text-base">Monitor student project progress and submissions</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-4">Project</TableHead>
                <TableHead className="font-semibold text-gray-900">Batch</TableHead>
                <TableHead className="font-semibold text-gray-900">Due Date</TableHead>
                <TableHead className="font-semibold text-gray-900">Submissions</TableHead>
                <TableHead className="font-semibold text-gray-900">Progress</TableHead>
                <TableHead className="font-semibold text-gray-900">Status</TableHead>
                <TableHead className="font-semibold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="py-4">
                    <div>
                      <div className="font-semibold text-gray-900">{project.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{project.description}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        Graded: {project.graded}/{project.submissions}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-medium">
                      {project.batch}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{project.dueDate}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">
                        {project.submissions}/{project.totalStudents}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        project.status === "Completed"
                          ? "default"
                          : project.status === "Review"
                            ? "secondary"
                            : "outline"
                      }
                      className={
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : project.status === "Review"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => handleViewSubmissions(project.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => handleGradeProject(project.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
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
