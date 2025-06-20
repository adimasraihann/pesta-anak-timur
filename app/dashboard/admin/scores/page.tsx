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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Star, BarChart3, TrendingUp, Search, Filter, Edit, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ScoresAndFeedback() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterModule, setFilterModule] = useState("all")
  const { toast } = useToast()

  const scores = [
    {
      id: 1,
      student: {
        name: "Maria Sari",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      module: "Introduction to Music Production",
      assignment: "Final Project",
      score: 92,
      feedback:
        "Excellent work! Your music production shows great understanding of the concepts. Work on balancing the mix a bit more.",
      submittedDate: "2024-12-10",
      gradedBy: "John Smith",
    },
    {
      id: 2,
      student: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      module: "Audio Recording Techniques",
      assignment: "Vocal Recording",
      score: 85,
      feedback: "Good recording quality. Pay attention to room acoustics and microphone placement.",
      submittedDate: "2024-12-12",
      gradedBy: "Sarah Johnson",
    },
    {
      id: 3,
      student: {
        name: "Sarah Kim",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      module: "Content Creation Fundamentals",
      assignment: "Video Editing Project",
      score: 78,
      feedback: "Solid editing skills. Work on pacing and transitions for a more polished result.",
      submittedDate: "2024-12-14",
      gradedBy: "Mike Wilson",
    },
    {
      id: 4,
      student: {
        name: "Ahmad Rizki",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      module: "Coffee Brewing Mastery",
      assignment: "Espresso Technique",
      score: 95,
      feedback: "Outstanding technique and consistency. Excellent attention to detail.",
      submittedDate: "2024-12-15",
      gradedBy: "Lisa Chen",
    },
  ]

  const handleAddScore = () => {
    toast({
      title: "Score Added Successfully!",
      description: "Student score and feedback have been recorded.",
      variant: "success",
    })
    setIsDialogOpen(false)
  }

  const filteredScores = scores.filter((score) => {
    const matchesSearch =
      score.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      score.module.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesModule = filterModule === "all" || score.module.includes(filterModule)
    return matchesSearch && matchesModule
  })

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Scores & Feedback</h1>
          <p className="text-lg text-gray-600 mt-2">Manage student assessments and provide constructive feedback</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
              <Plus className="w-5 h-5 mr-2" />
              Add Score & Feedback
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Add Score & Feedback</DialogTitle>
              <DialogDescription>Grade a student's assignment and provide constructive feedback.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="student" className="text-sm font-medium">
                  Select Student
                </Label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Choose student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maria-sari">Maria Sari</SelectItem>
                    <SelectItem value="john-doe">John Doe</SelectItem>
                    <SelectItem value="sarah-kim">Sarah Kim</SelectItem>
                    <SelectItem value="ahmad-rizki">Ahmad Rizki</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="module" className="text-sm font-medium">
                  Module
                </Label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select module" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="intro-music-production">Introduction to Music Production</SelectItem>
                    <SelectItem value="audio-recording">Audio Recording Techniques</SelectItem>
                    <SelectItem value="content-creation">Content Creation Fundamentals</SelectItem>
                    <SelectItem value="coffee-brewing">Coffee Brewing Mastery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="assignment" className="text-sm font-medium">
                  Assignment
                </Label>
                <Input id="assignment" placeholder="e.g., Final Project" className="h-11" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="score" className="text-sm font-medium">
                  Score (0-100)
                </Label>
                <Input id="score" type="number" min="0" max="100" placeholder="85" className="h-11" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="feedback" className="text-sm font-medium">
                  Feedback
                </Label>
                <Textarea
                  id="feedback"
                  placeholder="Provide constructive feedback on the student's work..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddScore} className="bg-red-600 hover:bg-red-700">
                Save Score & Feedback
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Assignments Graded</CardTitle>
            <Star className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">248</div>
            <p className="text-xs text-blue-600 mt-1">Total assessments</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Average Score</CardTitle>
            <BarChart3 className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">84.5</div>
            <p className="text-xs text-green-600 mt-1">Out of 100</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Pending Grading</CardTitle>
            <TrendingUp className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">12</div>
            <p className="text-xs text-yellow-600 mt-1">Awaiting review</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Feedback Given</CardTitle>
            <MessageSquare className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">236</div>
            <p className="text-xs text-purple-600 mt-1">Detailed comments</p>
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
                  placeholder="Search by student name or module..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
            </div>
            <div className="w-full sm:w-64">
              <Select value={filterModule} onValueChange={setFilterModule}>
                <SelectTrigger className="h-11">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by module" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Modules</SelectItem>
                  <SelectItem value="Music Production">Music Production</SelectItem>
                  <SelectItem value="Audio Recording">Audio Recording</SelectItem>
                  <SelectItem value="Content Creation">Content Creation</SelectItem>
                  <SelectItem value="Coffee Brewing">Coffee Brewing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scores Table */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">Student Scores & Feedback</CardTitle>
          <CardDescription className="text-base">Review and manage assessment results</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-4">Student</TableHead>
                <TableHead className="font-semibold text-gray-900">Module & Assignment</TableHead>
                <TableHead className="font-semibold text-gray-900">Score</TableHead>
                <TableHead className="font-semibold text-gray-900">Feedback</TableHead>
                <TableHead className="font-semibold text-gray-900">Submission Date</TableHead>
                <TableHead className="font-semibold text-gray-900">Graded By</TableHead>
                <TableHead className="font-semibold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredScores.map((score) => (
                <TableRow key={score.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={score.student.avatar || "/placeholder.svg"} alt={score.student.name} />
                        <AvatarFallback className="bg-red-100 text-red-600 font-semibold">
                          {score.student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="font-semibold">{score.student.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{score.module}</div>
                      <div className="text-sm text-gray-500">{score.assignment}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`text-lg font-semibold ${
                        score.score >= 90
                          ? "bg-green-100 text-green-800"
                          : score.score >= 75
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {score.score}/100
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <p className="text-sm text-gray-600 truncate">{score.feedback}</p>
                  </TableCell>
                  <TableCell className="text-sm">{score.submittedDate}</TableCell>
                  <TableCell className="text-sm">{score.gradedBy}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
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
