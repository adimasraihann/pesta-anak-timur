"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Award, Users, BookOpen, TrendingUp, Clock, CheckCircle, Edit } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function MentorProfile() {
  const { toast } = useToast()

  const mentorStats = {
    totalStudents: 92,
    activeBatches: 3,
    completedCourses: 8,
    averageRating: 4.8,
    totalReviews: 47,
    responseTime: "2 hours",
    completionRate: 89,
  }

  const achievements = [
    {
      title: "Top Mentor",
      description: "Highest rated mentor this month",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Student Favorite",
      description: "Most liked by students",
      icon: Star,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Course Creator",
      description: "Created 5+ comprehensive courses",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Mentor of the Year",
      description: "Outstanding contribution to education",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const recentReviews = [
    {
      student: "Maria Sari",
      rating: 5,
      comment: "John is an amazing mentor! His music production course helped me create my first professional track.",
      date: "2024-12-10",
      course: "Music Production Basics",
    },
    {
      student: "Ahmad Rizki",
      rating: 5,
      comment: "Very patient and knowledgeable. The mixing techniques I learned are invaluable.",
      date: "2024-12-08",
      course: "Advanced Audio Mixing",
    },
    {
      student: "Sarah Kim",
      rating: 4,
      comment: "Great course structure and clear explanations. Would recommend to anyone starting in music production.",
      date: "2024-12-05",
      course: "Music Production Basics",
    },
  ]

  const courses = [
    {
      title: "Music Production Basics",
      students: 45,
      rating: 4.9,
      completion: 89,
      status: "Active",
    },
    {
      title: "Advanced Audio Mixing",
      students: 32,
      rating: 4.8,
      completion: 76,
      status: "Active",
    },
    {
      title: "Recording Studio Setup",
      students: 28,
      rating: 4.7,
      completion: 92,
      status: "Completed",
    },
  ]

  const handleEditProfile = () => {
    toast({
      title: "Edit Profile",
      description: "Redirecting to profile editor...",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-lg text-gray-600 mt-2">Your teaching profile and achievements</p>
        </div>
        <Button onClick={handleEditProfile} className="bg-red-600 hover:bg-red-700">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      {/* Profile Header */}
      <Card className="shadow-lg border-0">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="John Smith" />
              <AvatarFallback className="bg-red-100 text-red-600 text-3xl font-bold">JS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl font-bold text-gray-900">John Smith</h2>
                <Badge className="bg-green-100 text-green-800">Verified Mentor</Badge>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                Experienced music producer with 10+ years in the industry. Specialized in electronic music production
                and audio engineering.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Music Production</Badge>
                <Badge variant="outline">Audio Engineering</Badge>
                <Badge variant="outline">Mixing & Mastering</Badge>
                <Badge variant="outline">Electronic Music</Badge>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{mentorStats.totalStudents} Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>
                    {mentorStats.averageRating} ({mentorStats.totalReviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Responds in {mentorStats.responseTime}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Students</CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">{mentorStats.totalStudents}</div>
            <p className="text-xs text-blue-600 mt-1">Across all courses</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Active Batches</CardTitle>
            <BookOpen className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">{mentorStats.activeBatches}</div>
            <p className="text-xs text-green-600 mt-1">Currently teaching</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Average Rating</CardTitle>
            <Star className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">{mentorStats.averageRating}</div>
            <p className="text-xs text-yellow-600 mt-1">From {mentorStats.totalReviews} reviews</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Completion Rate</CardTitle>
            <CheckCircle className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">{mentorStats.completionRate}%</div>
            <p className="text-xs text-purple-600 mt-1">Student completion</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Content */}
      <Tabs defaultValue="achievements" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="achievements" className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl font-bold text-gray-900">Achievements & Badges</CardTitle>
              <CardDescription className="text-base">
                Recognition for your outstanding teaching performance
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50">
                    <div className={`p-3 rounded-full ${achievement.bgColor}`}>
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl font-bold text-gray-900">My Courses</CardTitle>
              <CardDescription className="text-base">Courses you've created and are currently teaching</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div key={index} className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                      <Badge
                        variant={course.status === "Active" ? "default" : "secondary"}
                        className={
                          course.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }
                      >
                        {course.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Students Enrolled</span>
                          <span className="text-sm font-bold text-gray-900">{course.students}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{course.students} students</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Course Rating</span>
                          <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">{course.rating} rating</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Completion Rate</span>
                          <span className="text-sm font-bold text-gray-900">{course.completion}%</span>
                        </div>
                        <Progress value={course.completion} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl font-bold text-gray-900">Student Reviews</CardTitle>
              <CardDescription className="text-base">What your students are saying about your courses</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {recentReviews.map((review, index) => (
                  <div key={index} className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                            {review.student
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.student}</h4>
                          <p className="text-sm text-gray-600">{review.course}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
