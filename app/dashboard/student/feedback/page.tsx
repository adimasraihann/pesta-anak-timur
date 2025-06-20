"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, Star, ThumbsUp, Send, BookOpen, TrendingUp, Award } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function StudentFeedback() {
  const [newFeedback, setNewFeedback] = useState("")
  const [selectedModule, setSelectedModule] = useState("")
  const { toast } = useToast()

  const receivedFeedback = [
    {
      id: 1,
      mentor: "John Smith",
      module: "Music Production Basics",
      assignment: "First Beat Creation",
      score: 88,
      feedback:
        "Great work on your first beat! Your rhythm structure is solid and the sound selection shows good taste. For improvement, try experimenting with more dynamic changes in your arrangement and consider adding subtle automation to make the track more engaging.",
      date: "2024-12-10",
      type: "Assignment",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      mentor: "John Smith",
      module: "Audio Recording Techniques",
      assignment: "Vocal Recording Project",
      score: 92,
      feedback:
        "Excellent vocal recording quality! You've clearly applied the microphone positioning techniques we discussed. The vocal clarity is impressive and the room acoustics are well-controlled. Keep up this level of attention to detail.",
      date: "2024-12-08",
      type: "Project",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      mentor: "Sarah Johnson",
      module: "Music Production Basics",
      assignment: "Module 3 Quiz",
      score: 85,
      feedback:
        "Good understanding of the fundamental concepts. You showed strong knowledge in EQ and compression basics. Review the section on reverb types for better understanding, as this appeared in a few missed questions.",
      date: "2024-12-05",
      type: "Quiz",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const courseProgress = [
    {
      course: "Music Production Basics",
      progress: 78,
      averageScore: 87,
      completedAssignments: 12,
      totalAssignments: 15,
    },
    {
      course: "Audio Recording Techniques",
      progress: 65,
      averageScore: 90,
      completedAssignments: 8,
      totalAssignments: 12,
    },
  ]

  const handleSubmitFeedback = () => {
    if (!newFeedback.trim() || !selectedModule) {
      toast({
        title: "Missing Information",
        description: "Please select a module and write your feedback.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Feedback Submitted!",
      description: "Your feedback has been sent to your mentor.",
      variant: "success",
    })
    setNewFeedback("")
    setSelectedModule("")
  }

  const handleLikeFeedback = (feedbackId: number) => {
    toast({
      title: "Feedback Liked",
      description: "Thank you for your response!",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Feedback & Progress</h1>
        <p className="text-lg text-gray-600 mt-2">View mentor feedback and track your learning progress</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Average Score</CardTitle>
            <TrendingUp className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">88%</div>
            <p className="text-xs text-blue-600 mt-1">Across all assignments</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Feedback Received</CardTitle>
            <MessageSquare className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">23</div>
            <p className="text-xs text-green-600 mt-1">From mentors</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Completed Tasks</CardTitle>
            <BookOpen className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">20</div>
            <p className="text-xs text-yellow-600 mt-1">Out of 27 total</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Achievements</CardTitle>
            <Award className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">5</div>
            <p className="text-xs text-purple-600 mt-1">Badges earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="received" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="received">Received Feedback</TabsTrigger>
          <TabsTrigger value="progress">Progress Overview</TabsTrigger>
          <TabsTrigger value="give">Give Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="received" className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl font-bold text-gray-900">Mentor Feedback</CardTitle>
              <CardDescription className="text-base">
                Detailed feedback from your mentors on assignments and projects
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {receivedFeedback.map((feedback) => (
                  <div key={feedback.id} className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={feedback.avatar || "/placeholder.svg"} alt={feedback.mentor} />
                          <AvatarFallback className="bg-red-100 text-red-600 font-semibold">
                            {feedback.mentor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">{feedback.mentor}</h3>
                          <p className="text-sm text-gray-600">{feedback.module}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {feedback.type}
                            </Badge>
                            <span className="text-xs text-gray-500">{feedback.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-bold text-lg text-gray-900">{feedback.score}%</span>
                        </div>
                        <p className="text-sm text-gray-600">{feedback.assignment}</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <p className="text-gray-700 leading-relaxed">{feedback.feedback}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleLikeFeedback(feedback.id)}
                        className="flex items-center gap-2"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        Helpful
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Reply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl font-bold text-gray-900">Learning Progress</CardTitle>
              <CardDescription className="text-base">Track your progress across all enrolled courses</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-8">
                {courseProgress.map((course, index) => (
                  <div key={index} className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900">{course.course}</h3>
                      <Badge className="bg-blue-100 text-blue-800">{course.progress}% Complete</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{course.progress}%</div>
                        <p className="text-sm text-gray-600">Overall Progress</p>
                        <Progress value={course.progress} className="mt-2" />
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">{course.averageScore}%</div>
                        <p className="text-sm text-gray-600">Average Score</p>
                        <div className="flex items-center justify-center mt-2">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">Excellent</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {course.completedAssignments}/{course.totalAssignments}
                        </div>
                        <p className="text-sm text-gray-600">Assignments Done</p>
                        <Progress
                          value={(course.completedAssignments / course.totalAssignments) * 100}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="give" className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl font-bold text-gray-900">Give Feedback</CardTitle>
              <CardDescription className="text-base">
                Share your thoughts about the course or ask questions
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Select Module</label>
                  <Select value={selectedModule} onValueChange={setSelectedModule}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Choose a module to give feedback on" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="music-basics">Music Production Basics</SelectItem>
                      <SelectItem value="recording">Audio Recording Techniques</SelectItem>
                      <SelectItem value="mixing">Mixing & Mastering</SelectItem>
                      <SelectItem value="general">General Course Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Feedback</label>
                  <Textarea
                    value={newFeedback}
                    onChange={(e) => setNewFeedback(e.target.value)}
                    placeholder="Share your thoughts, ask questions, or suggest improvements..."
                    className="min-h-[150px]"
                  />
                  <p className="text-xs text-gray-500">
                    Your feedback helps improve the course for everyone. Be specific and constructive.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Button onClick={handleSubmitFeedback} className="bg-red-600 hover:bg-red-700">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Feedback
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setNewFeedback("")
                      setSelectedModule("")
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
