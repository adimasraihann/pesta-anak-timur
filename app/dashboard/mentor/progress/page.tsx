"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Users, BookOpen, Clock, Download, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ProgressAnalytics() {
  const [selectedBatch, setSelectedBatch] = useState("all")
  const [timeRange, setTimeRange] = useState("month")
  const { toast } = useToast()

  const progressData = [
    { week: "Week 1", completion: 15, engagement: 85 },
    { week: "Week 2", completion: 32, engagement: 78 },
    { week: "Week 3", completion: 48, engagement: 82 },
    { week: "Week 4", completion: 65, engagement: 75 },
    { week: "Week 5", completion: 78, engagement: 80 },
    { week: "Week 6", completion: 85, engagement: 88 },
  ]

  const moduleProgressData = [
    { module: "Intro to Music", completed: 95, inProgress: 5, notStarted: 0 },
    { module: "Recording Basics", completed: 78, inProgress: 15, notStarted: 7 },
    { module: "Audio Editing", completed: 65, inProgress: 25, notStarted: 10 },
    { module: "Mixing & Mastering", completed: 42, inProgress: 35, notStarted: 23 },
    { module: "Final Project", completed: 12, inProgress: 28, notStarted: 60 },
  ]

  const engagementData = [
    { name: "High Engagement", value: 45, color: "#10B981" },
    { name: "Medium Engagement", value: 35, color: "#F59E0B" },
    { name: "Low Engagement", value: 20, color: "#EF4444" },
  ]

  const batchStats = [
    {
      batch: "Music Production Batch 1",
      students: 32,
      avgProgress: 78,
      avgScore: 85,
      completionRate: 68,
    },
    {
      batch: "Music Production Batch 2",
      students: 28,
      avgProgress: 65,
      avgScore: 82,
      completionRate: 54,
    },
  ]

  const handleExportReport = () => {
    toast({
      title: "Exporting Report",
      description: "Progress report is being generated...",
      variant: "success",
    })
  }

  const handleRefreshData = () => {
    toast({
      title: "Data Refreshed",
      description: "Progress analytics have been updated.",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Progress Analytics</h1>
          <p className="text-lg text-gray-600 mt-2">Analyze student learning patterns and performance</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedBatch} onValueChange={setSelectedBatch}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Batches</SelectItem>
              <SelectItem value="batch1">Music Production Batch 1</SelectItem>
              <SelectItem value="batch2">Music Production Batch 2</SelectItem>
            </SelectContent>
          </Select>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleRefreshData}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button onClick={handleExportReport} className="bg-red-600 hover:bg-red-700">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm border-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Students</CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">60</div>
            <p className="text-xs text-blue-600 mt-1">Across all batches</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Avg. Progress</CardTitle>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">72%</div>
            <p className="text-xs text-green-600 mt-1">+8% from last month</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Completion Rate</CardTitle>
            <BookOpen className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">61%</div>
            <p className="text-xs text-yellow-600 mt-1">Module completion</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Study Time</CardTitle>
            <Clock className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">4.2h</div>
            <p className="text-xs text-purple-600 mt-1">Avg. per week</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Progress Over Time</CardTitle>
            <CardDescription>Weekly completion and engagement trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="completion" stroke="#DC2626" strokeWidth={3} />
                <Line type="monotone" dataKey="engagement" stroke="#2563EB" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Student Engagement</CardTitle>
            <CardDescription>Distribution of engagement levels</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={engagementData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {engagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Module Progress Chart */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">Module Progress Breakdown</CardTitle>
          <CardDescription>Student progress across different course modules</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={moduleProgressData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="module" type="category" width={120} />
              <Tooltip />
              <Bar dataKey="completed" stackId="a" fill="#10B981" />
              <Bar dataKey="inProgress" stackId="a" fill="#F59E0B" />
              <Bar dataKey="notStarted" stackId="a" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Batch Comparison */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">Batch Performance Comparison</CardTitle>
          <CardDescription>Compare performance metrics across different batches</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {batchStats.map((batch, index) => (
              <div key={index} className="border rounded-lg p-6 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{batch.batch}</h3>
                  <Badge variant="outline" className="font-medium">
                    {batch.students} students
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Average Progress</span>
                      <span className="text-sm font-bold text-gray-900">{batch.avgProgress}%</span>
                    </div>
                    <Progress value={batch.avgProgress} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Average Score</span>
                      <span className="text-sm font-bold text-gray-900">{batch.avgScore}%</span>
                    </div>
                    <Progress value={batch.avgScore} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Completion Rate</span>
                      <span className="text-sm font-bold text-gray-900">{batch.completionRate}%</span>
                    </div>
                    <Progress value={batch.completionRate} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
