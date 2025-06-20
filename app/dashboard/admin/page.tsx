"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, BookOpen, Calendar, TrendingUp, ArrowUpRight, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminDashboard() {
  const { toast } = useToast()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 animate-fade-in">
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-lg text-gray-600 font-medium">Welcome back! Here's what's happening with your LMS.</p>
        </div>

        {/* Stats Cards - Removed Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-gray-600 tracking-wide">Active Students</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-apple">
                <Users className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-3xl font-bold text-gray-900 tracking-tight">1,234</div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-emerald-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">+12%</span>
                </div>
                <span className="text-sm text-gray-500">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-gray-600 tracking-wide">Completed Courses</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-apple">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-3xl font-bold text-gray-900 tracking-tight">89</div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-emerald-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">+5%</span>
                </div>
                <span className="text-sm text-gray-500">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-gray-600 tracking-wide">Upcoming Classes</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-apple">
                <Calendar className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-3xl font-bold text-gray-900 tracking-tight">24</div>
              <div className="text-sm text-gray-500 font-medium">Next 7 days</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300">
            <CardHeader className="border-b border-gray-100/50 bg-gradient-to-r from-white/90 to-gray-50/50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">Recent Activity</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">Latest updates from your LMS</CardDescription>
                </div>
                <Sparkles className="w-5 h-5 text-primary-500" />
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50/50 to-emerald-100/30 border border-emerald-200/30">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 shadow-glow"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-semibold text-gray-900">New student registered</p>
                  <p className="text-sm text-gray-600">Maria Sari joined Music Production batch</p>
                  <span className="text-xs text-gray-400 font-medium">2 min ago</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-blue-100/30 border border-blue-200/30">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 shadow-glow"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-semibold text-gray-900">Module completed</p>
                  <p className="text-sm text-gray-600">15 students completed "Basic Audio Editing"</p>
                  <span className="text-xs text-gray-400 font-medium">1 hour ago</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary-50/50 to-primary-100/30 border border-primary-200/30">
                <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 shadow-glow"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-semibold text-gray-900">New batch created</p>
                  <p className="text-sm text-gray-600">Content Creator Batch 3 has been set up</p>
                  <span className="text-xs text-gray-400 font-medium">3 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Batches */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300">
            <CardHeader className="border-b border-gray-100/50 bg-gradient-to-r from-white/90 to-gray-50/50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">Active Batches</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    Current learning batches and their progress
                  </CardDescription>
                </div>
                <TrendingUp className="w-5 h-5 text-primary-500" />
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">Music Production Batch 1</span>
                  <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-0 font-semibold">
                    32 students
                  </Badge>
                </div>
                <Progress value={75} className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"></div>
                </Progress>
                <p className="text-sm text-gray-600 font-medium">75% completion rate</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">Content Creator Batch 2</span>
                  <Badge className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 border-0 font-semibold">
                    28 students
                  </Badge>
                </div>
                <Progress value={60} className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500"></div>
                </Progress>
                <p className="text-sm text-gray-600 font-medium">60% completion rate</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">Barista Skills Batch 1</span>
                  <Badge className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border-0 font-semibold">
                    45 students
                  </Badge>
                </div>
                <Progress value={40} className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-500"></div>
                </Progress>
                <p className="text-sm text-gray-600 font-medium">40% completion rate</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions - Removed Certificate Generation */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-apple hover:shadow-apple-lg transition-all duration-300">
          <CardHeader className="border-b border-gray-100/50 bg-gradient-to-r from-white/90 to-gray-50/50">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-semibold text-gray-900">Quick Actions</CardTitle>
                <CardDescription className="text-gray-600 font-medium">Frequently used admin functions</CardDescription>
              </div>
              <ArrowUpRight className="w-5 h-5 text-primary-500" />
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <Button
                variant="outline"
                className="group h-24 flex flex-col items-center justify-center space-y-3 bg-white/80 border-gray-200/50 shadow-apple hover:shadow-apple-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl"
                onClick={() =>
                  toast({
                    title: "Feature Coming Soon!",
                    description: "Add Student functionality will be available soon.",
                    variant: "default",
                  })
                }
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Add Student</span>
              </Button>

              <Button
                variant="outline"
                className="group h-24 flex flex-col items-center justify-center space-y-3 bg-white/80 border-gray-200/50 shadow-apple hover:shadow-apple-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl"
                onClick={() =>
                  toast({
                    title: "Feature Coming Soon!",
                    description: "Create Module functionality will be available soon.",
                    variant: "default",
                  })
                }
              >
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Create Module</span>
              </Button>

              <Button
                variant="outline"
                className="group h-24 flex flex-col items-center justify-center space-y-3 bg-white/80 border-gray-200/50 shadow-apple hover:shadow-apple-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl"
                onClick={() =>
                  toast({
                    title: "Feature Coming Soon!",
                    description: "Schedule Class functionality will be available soon.",
                    variant: "default",
                  })
                }
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Schedule Class</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
