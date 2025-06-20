"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, CheckCircle, Play, Calendar, Star, TrendingUp, ArrowRight, Video } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useData } from "@/contexts/data-context"
import { useEffect, useState } from "react"

export default function StudentDashboard() {
  const { toast } = useToast()
  const { user } = useAuth()
  const { getModulesByBatch } = useData()
  const [modules, setModules] = useState<any[]>([])

  useEffect(() => {
    if (user?.batch) {
      const batchModules = getModulesByBatch(user.batch)
      // Convert to the format expected by the UI
      const formattedModules = batchModules.map((module) => ({
        id: module.id,
        title: module.title,
        description: module.description,
        progress: module.progress || 0,
        status: module.progress === 100 ? "completed" : module.progress > 0 ? "in-progress" : "locked",
        duration: module.duration,
        thumbnail: "/placeholder.svg?height=120&width=200",
      }))
      setModules(formattedModules)
    }
  }, [user, getModulesByBatch])

  const handleModuleAction = (module: any) => {
    if (module.status === "locked") {
      toast({
        title: "Module Locked",
        description: "Complete previous modules to unlock this one.",
      })
    } else if (module.status === "in-progress") {
      toast({
        title: "Continuing Module",
        description: `Resuming ${module.title}. Good luck!`,
      })
    } else if (module.status === "completed") {
      toast({
        title: "Reviewing Module",
        description: `Revisiting ${module.title}. Refresh your knowledge!`,
      })
    } else {
      toast({
        title: "Starting Module",
        description: `Starting ${module.title}. Let's get started!`,
      })
    }
  }

  const handleJoinClass = () => {
    toast({
      title: "Joining Class",
      description: "Opening Zoom meeting...",
    })
  }

  const handleContinueLearning = () => {
    toast({
      title: "Continuing Module",
      description: "Resuming your current module. Good luck!",
    })
  }

  // Calculate progress stats
  const completedModules = modules.filter((m) => m.status === "completed").length
  const totalModules = modules.length
  const overallProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0
  const inProgressModule = modules.find((m) => m.status === "in-progress")

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">
      {/* First 100vh Section */}
      <div className="h-screen flex flex-col p-8 max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Welcome back, {user.name}! 👋</h1>
          <p className="text-lg text-gray-600 font-medium">Continue your learning journey in {user.batch}</p>
        </div>

        {/* Your Progress Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">Your Progress</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Progress */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0 pb-2">
                  <div className="text-sm font-semibold text-gray-600 tracking-wide">Course Progress</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-apple">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-gray-900 tracking-tight">{overallProgress}%</div>
                  <Progress value={overallProgress} className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500"></div>
                  </Progress>
                  <p className="text-sm text-gray-600 font-medium">
                    {completedModules} of {totalModules} modules completed
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Study Time */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0 pb-2">
                  <div className="text-sm font-semibold text-gray-600 tracking-wide">Study Time</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-apple">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900 tracking-tight">24h</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">+2h</span>
                    </div>
                    <span className="text-sm text-gray-500">this week</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Average Score */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0 pb-2">
                  <div className="text-sm font-semibold text-gray-600 tracking-wide">Average Score</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-apple">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900 tracking-tight">87%</div>
                  <div className="text-sm text-emerald-600 font-semibold">Excellent performance!</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upcoming Class & Continue Learning */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-0">
          {/* Upcoming Class */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Upcoming Class</h2>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300 h-full">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 to-blue-100/50 border border-blue-200/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-apple">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Live Q&A Session</h3>
                    <p className="text-sm text-gray-600 font-medium mb-2">{user.batch}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="font-medium">Today, 3:00 PM</span>
                    </div>
                  </div>
                  <Button
                    onClick={handleJoinClass}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-apple hover:shadow-apple-lg transition-all duration-300 flex-shrink-0"
                  >
                    Join Meeting
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Continue Learning */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Continue Learning</h2>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300 h-full">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                {inProgressModule ? (
                  <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-red-50/80 to-red-100/50 border border-red-200/30">
                    <div className="relative flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=80&width=120"
                        alt="Module thumbnail"
                        className="w-24 h-16 object-cover rounded-xl shadow-apple"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-apple hover:scale-105 transition-transform cursor-pointer">
                          <Play className="w-4 h-4 text-red-600 ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{inProgressModule.title}</h3>
                        <p className="text-sm text-gray-600 font-medium">Module • {inProgressModule.duration}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-700">Progress</span>
                          <span className="text-sm font-semibold text-red-600">{inProgressModule.progress}%</span>
                        </div>
                        <Progress
                          value={inProgressModule.progress}
                          className="h-2 bg-gray-200/50 rounded-full overflow-hidden"
                        >
                          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500"></div>
                        </Progress>
                      </div>
                    </div>
                    <Button
                      onClick={handleContinueLearning}
                      className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-2 rounded-xl shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 flex-shrink-0"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="text-center p-6">
                    <p className="text-gray-600">No modules in progress. Start a new module to continue learning!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Content Below 100vh - Course Modules */}
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Course Modules - {user.batch}</h2>
            <Button
              variant="outline"
              className="bg-white/80 border-gray-200/50 shadow-apple hover:shadow-apple-lg transition-all duration-300 rounded-xl"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {modules.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module) => (
                <Card
                  key={module.id}
                  className={`group bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1 ${module.status === "locked" ? "opacity-60" : ""}`}
                >
                  <div className="relative">
                    <img
                      src={module.thumbnail || "/placeholder.svg"}
                      alt={module.title}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {module.status === "completed" ? (
                        <div className="w-16 h-16 bg-emerald-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-apple">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                      ) : module.status === "in-progress" ? (
                        <div className="w-16 h-16 bg-red-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-apple hover:scale-105 transition-transform cursor-pointer">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gray-400/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-apple">
                          <span className="text-white text-2xl">🔒</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={
                          module.status === "completed"
                            ? "bg-emerald-100/90 text-emerald-800 border-0 backdrop-blur-sm"
                            : module.status === "in-progress"
                              ? "bg-red-100/90 text-red-800 border-0 backdrop-blur-sm"
                              : "bg-gray-100/90 text-gray-600 border-0 backdrop-blur-sm"
                        }
                      >
                        {module.status === "completed"
                          ? "Completed"
                          : module.status === "in-progress"
                            ? "In Progress"
                            : "Locked"}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{module.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{module.description}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{module.duration}</span>
                      </div>
                      <span className="font-semibold">{module.progress}% complete</span>
                    </div>

                    {module.progress > 0 && (
                      <Progress value={module.progress} className="h-2 bg-gray-200/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            module.status === "completed"
                              ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                              : "bg-gradient-to-r from-red-500 to-red-600"
                          }`}
                        ></div>
                      </Progress>
                    )}

                    <Button
                      className={`w-full font-semibold py-3 rounded-xl shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-0.5 ${
                        module.status === "locked"
                          ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
                          : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                      }`}
                      disabled={module.status === "locked"}
                      onClick={() => handleModuleAction(module)}
                    >
                      {module.status === "completed"
                        ? "Review"
                        : module.status === "in-progress"
                          ? "Continue"
                          : "Start Module"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No modules available for your batch yet.</p>
              <p className="text-gray-500">Contact your administrator for more information.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
