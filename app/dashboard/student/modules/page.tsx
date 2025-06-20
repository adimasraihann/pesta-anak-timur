"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Play, CheckCircle, Lock, BookOpen, Video, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useData } from "@/contexts/data-context"

export default function StudentModules() {
  const [filterCategory, setFilterCategory] = useState("all")
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
        category: module.category,
        progress: module.progress || 0,
        status: module.progress === 100 ? "completed" : module.progress > 0 ? "in-progress" : "available",
        duration: module.duration,
        lessons: module.lessons,
        videos: Math.floor(module.lessons * 0.8), // Estimate videos
        assignments: Math.floor(module.lessons * 0.3), // Estimate assignments
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

  const filteredModules = modules.filter((module) => {
    return filterCategory === "all" || module.category === filterCategory
  })

  const completedModules = modules.filter((m) => m.status === "completed").length
  const inProgressModules = modules.filter((m) => m.status === "in-progress").length
  const totalModules = modules.length
  const overallProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Learning Modules</h1>
          <p className="text-lg text-gray-600 mt-2">Continue your learning journey in {user.batch}</p>
        </div>
        <div className="w-64">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Music Producer">Music Producer</SelectItem>
              <SelectItem value="Barista">Barista</SelectItem>
              <SelectItem value="Content Creator">Content Creator</SelectItem>
              <SelectItem value="Event Organizer">Event Organizer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">Course Progress - {user.batch}</CardTitle>
          <CardDescription className="text-base">Your overall learning progress</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">{totalModules}</div>
              <div className="text-sm text-blue-600">Total Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900">{completedModules}</div>
              <div className="text-sm text-green-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-900">{inProgressModules}</div>
              <div className="text-sm text-yellow-600">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-900">{overallProgress}%</div>
              <div className="text-sm text-purple-600">Overall Progress</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Course Completion</span>
              <span className="text-sm text-gray-500">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Modules Grid */}
      {filteredModules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModules.map((module) => (
            <Card
              key={module.id}
              className={`shadow-lg border-0 hover:shadow-xl transition-shadow ${module.status === "locked" ? "opacity-60" : ""}`}
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={module.thumbnail || "/placeholder.svg"}
                    alt={module.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {module.status === "completed" ? (
                      <CheckCircle className="w-12 h-12 text-green-600 bg-white rounded-full" />
                    ) : module.status === "in-progress" ? (
                      <Play className="w-12 h-12 text-white bg-red-600 rounded-full p-3" />
                    ) : module.status === "locked" ? (
                      <Lock className="w-12 h-12 text-gray-400 bg-white rounded-full p-3" />
                    ) : (
                      <Play className="w-12 h-12 text-white bg-blue-600 rounded-full p-3" />
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={
                        module.status === "completed"
                          ? "default"
                          : module.status === "in-progress"
                            ? "secondary"
                            : "outline"
                      }
                      className={
                        module.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : module.status === "in-progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-600"
                      }
                    >
                      {module.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{module.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{module.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{module.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    <span>{module.videos} videos</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{module.assignments} assignments</span>
                  </div>
                  <span>{module.progress}% complete</span>
                </div>

                {module.progress > 0 && <Progress value={module.progress} className="mb-4 h-2" />}

                <Button
                  className={`w-full text-lg ${
                    module.status === "locked" ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
                  }`}
                  disabled={module.status === "locked"}
                  onClick={() => handleModuleAction(module)}
                >
                  {module.status === "completed"
                    ? "Review Module"
                    : module.status === "in-progress"
                      ? "Continue Learning"
                      : module.status === "locked"
                        ? "Locked"
                        : "Start Module"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Modules Available</h3>
          <p className="text-gray-600">No modules are available for your batch at the moment.</p>
          <p className="text-gray-500 mt-2">Contact your administrator for more information.</p>
        </div>
      )}
    </div>
  )
}
