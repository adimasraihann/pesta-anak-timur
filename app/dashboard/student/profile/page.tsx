"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Award,
  BookOpen,
  Calendar,
  Clock,
  TrendingUp,
  CheckCircle,
  Edit,
  Trophy,
  Target,
  Zap,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useData } from "@/contexts/data-context"
import { useEffect, useState } from "react"

export default function StudentProfile() {
  const { toast } = useToast()
  const { user } = useAuth()
  const { getModulesByBatch } = useData()
  const [modules, setModules] = useState<any[]>([])

  useEffect(() => {
    if (user?.batch) {
      const batchModules = getModulesByBatch(user.batch)
      setModules(batchModules)
    }
  }, [user, getModulesByBatch])

  const studentStats = {
    coursesEnrolled: 1, // Only their assigned batch
    coursesCompleted: modules.filter((m) => m.progress === 100).length,
    totalStudyHours: 72,
    averageScore: 88,
    currentStreak: 12,
    totalAssignments: modules.reduce((acc, m) => acc + (m.lessons || 0), 0),
    completedAssignments: Math.floor(modules.reduce((acc, m) => acc + (m.lessons || 0), 0) * 0.7),
  }

  const achievements = [
    {
      title: "First Steps",
      description: "Completed your first course",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      earned: true,
      earnedDate: "2024-12-01",
    },
    {
      title: "High Achiever",
      description: "Scored 90% or higher on an assignment",
      icon: Star,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      earned: true,
      earnedDate: "2024-12-05",
    },
    {
      title: "Consistent Learner",
      description: "Study for 7 days in a row",
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-100",
      earned: true,
      earnedDate: "2024-12-10",
    },
    {
      title: "Speed Demon",
      description: "Complete a course in record time",
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      earned: false,
    },
    {
      title: "Master Student",
      description: "Complete all modules in your batch",
      icon: Trophy,
      color: "text-red-600",
      bgColor: "bg-red-100",
      earned: false,
    },
    {
      title: "Goal Crusher",
      description: "Complete all assignments on time",
      icon: Target,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      earned: false,
    },
  ]

  const courseProgress = [
    {
      title: user?.batch || "Your Batch",
      mentor: "Your Mentor",
      progress:
        modules.length > 0 ? Math.round((modules.filter((m) => m.progress === 100).length / modules.length) * 100) : 0,
      score: studentStats.averageScore,
      status: "In Progress",
      startDate: "2024-10-01",
      completionDate: null,
    },
  ]

  const recentActivity = [
    {
      type: "assignment",
      title: "Completed Module Assignment",
      course: user?.batch || "Your Batch",
      date: "2024-12-15",
      score: 92,
    },
    {
      type: "achievement",
      title: "Unlocked 'Consistent Learner' Badge",
      course: null,
      date: "2024-12-10",
      score: null,
    },
    {
      type: "assignment",
      title: "Submitted Project Work",
      course: user?.batch || "Your Batch",
      date: "2024-12-08",
      score: 88,
    },
  ]

  const handleEditProfile = () => {
    toast({
      title: "Edit Profile",
      description: "Redirecting to profile editor...",
      variant: "success",
    })
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return BookOpen
      case "achievement":
        return Trophy
      default:
        return CheckCircle
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "assignment":
        return "text-blue-600"
      case "achievement":
        return "text-yellow-600"
      default:
        return "text-gray-600"
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-lg text-gray-600 mt-2">Track your learning journey and achievements</p>
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
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt={user.name} />
              <AvatarFallback className="bg-red-100 text-red-600 text-3xl font-bold">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
                <Badge className="bg-blue-100 text-blue-800">Active Student</Badge>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                Student in {user.batch}, passionate about learning and developing new skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Batch: {user.batch}</Badge>
                <Badge variant="outline">Active Learner</Badge>
                <Badge variant="outline">Goal-Oriented</Badge>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined October 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{studentStats.totalStudyHours}h studied</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>{studentStats.currentStreak} day streak</span>
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
            <CardTitle className="text-sm font-medium text-blue-700">Modules Completed</CardTitle>
            <BookOpen className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">{studentStats.coursesCompleted}</div>
            <p className="text-xs text-blue-600 mt-1">Out of {modules.length} total</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Average Score</CardTitle>
            <Star className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">{studentStats.averageScore}%</div>
            <p className="text-xs text-green-600 mt-1">Across all assignments</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Current Batch</CardTitle>
            <Award className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-yellow-900">{user.batch}</div>
            <p className="text-xs text-yellow-600 mt-1">Your learning track</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Study Streak</CardTitle>
            <TrendingUp className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">{studentStats.currentStreak}</div>
            <p className="text-xs text-purple-600 mt-1">Days in a row</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Content */}
      <Tabs defaultValue="progress" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="progress">Batch Progress</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl font-bold text-gray-900">Batch Progress</CardTitle>
              <CardDescription className="text-base">Your learning journey in {user.batch}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {courseProgress.map((course, index) => (
                  <div key={index} className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-600">Mentor: {course.mentor}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={course.status === "Completed" ? "default" : "secondary"}
                          className={
                            course.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }
                        >
                          {course.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm font-bold text-gray-900">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Score</span>
                          <span className="text-sm font-bold text-gray-900">{course.score}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">
                            {course.score >= 90 ? "Excellent" : course.score >= 80 ? "Good" : "Fair"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Timeline</div>
                        <div className="text-sm text-gray-600">
                          <div>Started: {course.startDate}</div>
                          {course.completionDate && <div>Completed: {course.completionDate}</div>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl font-bold text-gray-900">Achievements & Badges</CardTitle>
              <CardDescription className="text-base">
                Recognition for your learning milestones and accomplishments
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 border rounded-lg ${
                      achievement.earned ? "bg-gray-50 border-green-200" : "bg-gray-100 border-gray-200 opacity-60"
                    }`}
                  >
                    <div className={`p-3 rounded-full ${achievement.bgColor}`}>
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                        {achievement.earned && <CheckCircle className="w-4 h-4 text-green-600" />}
                      </div>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      {achievement.earned ? (
                        <p className="text-xs text-green-600 mt-1">Earned on {achievement.earnedDate}</p>
                      ) : (
                        <p className="text-xs text-gray-500 mt-1">Not earned yet</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl font-bold text-gray-900">Recent Activity</CardTitle>
              <CardDescription className="text-base">Your latest learning activities and achievements</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const IconComponent = getActivityIcon(activity.type)
                  const iconColor = getActivityColor(activity.type)

                  return (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50">
                      <div className="p-2 bg-white rounded-full">
                        <IconComponent className={`w-5 h-5 ${iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{activity.title}</h4>
                        {activity.course && <p className="text-sm text-gray-600">{activity.course}</p>}
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs text-gray-500">{activity.date}</span>
                          {activity.score && (
                            <Badge variant="outline" className="text-xs">
                              Score: {activity.score}%
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
