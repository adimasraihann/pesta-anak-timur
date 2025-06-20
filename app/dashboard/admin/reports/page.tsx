"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Download, FileText, TrendingUp, Users, BookOpen, Award, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ExportReports() {
  const [selectedReport, setSelectedReport] = useState("student-progress")
  const [selectedPeriod, setSelectedPeriod] = useState("this-month")
  const { toast } = useToast()

  const reportTypes = [
    { value: "student-progress", label: "Student Progress Report" },
    { value: "batch-performance", label: "Batch Performance Report" },
    { value: "module-completion", label: "Module Completion Report" },
    { value: "certificate-issued", label: "Certificate Issued Report" },
    { value: "attendance-report", label: "Attendance Report" },
    { value: "financial-summary", label: "Financial Summary" },
  ]

  const periods = [
    { value: "this-week", label: "This Week" },
    { value: "this-month", label: "This Month" },
    { value: "last-month", label: "Last Month" },
    { value: "this-quarter", label: "This Quarter" },
    { value: "this-year", label: "This Year" },
    { value: "custom", label: "Custom Range" },
  ]

  const recentReports = [
    {
      id: 1,
      name: "Student Progress Report - December 2024",
      type: "Student Progress",
      generatedDate: "2024-12-15",
      size: "2.4 MB",
      format: "PDF",
    },
    {
      id: 2,
      name: "Batch Performance Analysis - Q4 2024",
      type: "Batch Performance",
      generatedDate: "2024-12-10",
      size: "1.8 MB",
      format: "Excel",
    },
    {
      id: 3,
      name: "Certificate Issued Report - November 2024",
      type: "Certificates",
      generatedDate: "2024-12-01",
      size: "856 KB",
      format: "PDF",
    },
  ]

  const handleGenerateReport = () => {
    const reportName = reportTypes.find((r) => r.value === selectedReport)?.label
    const periodName = periods.find((p) => p.value === selectedPeriod)?.label

    toast({
      title: "Report Generated Successfully!",
      description: `${reportName} for ${periodName} has been generated and is ready for download.`,
      variant: "success",
    })
  }

  const handleDownloadReport = (reportId: number) => {
    toast({
      title: "Report Downloaded",
      description: "Report has been downloaded successfully.",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Export Reports</h1>
          <p className="text-lg text-gray-600 mt-2">Generate and download comprehensive reports and analytics</p>
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
            <div className="text-3xl font-bold text-blue-900">125</div>
            <p className="text-xs text-blue-600 mt-1">Active learners</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Completion Rate</CardTitle>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-900">84%</div>
            <p className="text-xs text-green-600 mt-1">Average across batches</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700">Modules Completed</CardTitle>
            <BookOpen className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-900">1,248</div>
            <p className="text-xs text-yellow-600 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Certificates Issued</CardTitle>
            <Award className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900">156</div>
            <p className="text-xs text-purple-600 mt-1">Total certificates</p>
          </CardContent>
        </Card>
      </div>

      {/* Report Generator */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">Generate New Report</CardTitle>
          <CardDescription className="text-base">Create custom reports based on your requirements</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Report Type</label>
              <Select value={selectedReport} onValueChange={setSelectedReport}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  {reportTypes.map((report) => (
                    <SelectItem key={report.value} value={report.value}>
                      {report.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Time Period</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  {periods.map((period) => (
                    <SelectItem key={period.value} value={period.value}>
                      {period.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button onClick={handleGenerateReport} className="bg-red-600 hover:bg-red-700 text-white h-11 w-full">
                <FileText className="w-5 h-5 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Batch Performance */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-lg font-bold text-gray-900">Batch Performance Overview</CardTitle>
            <CardDescription>Current completion rates by batch</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Music Production Batch 1</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Content Creator Batch 2</span>
                  <span className="text-sm text-gray-500">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Barista Skills Batch 1</span>
                  <span className="text-sm text-gray-500">91%</span>
                </div>
                <Progress value={91} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Event Organizer Batch 1</span>
                  <span className="text-sm text-gray-500">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Statistics */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-lg font-bold text-gray-900">Monthly Statistics</CardTitle>
            <CardDescription>Key metrics for December 2024</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-900">32</div>
                <div className="text-sm text-blue-600">New Enrollments</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-900">24</div>
                <div className="text-sm text-green-600">Certificates Issued</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-900">156</div>
                <div className="text-sm text-yellow-600">Modules Completed</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-900">89%</div>
                <div className="text-sm text-purple-600">Attendance Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl font-bold text-gray-900">Recent Reports</CardTitle>
          <CardDescription className="text-base">Previously generated reports available for download</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-900 py-4">Report Name</TableHead>
                <TableHead className="font-semibold text-gray-900">Type</TableHead>
                <TableHead className="font-semibold text-gray-900">Generated Date</TableHead>
                <TableHead className="font-semibold text-gray-900">Size</TableHead>
                <TableHead className="font-semibold text-gray-900">Format</TableHead>
                <TableHead className="font-semibold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentReports.map((report) => (
                <TableRow key={report.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-gray-900 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                        <FileText className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="font-semibold">{report.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-medium">
                      {report.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{report.generatedDate}</TableCell>
                  <TableCell>{report.size}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{report.format}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => handleDownloadReport(report.id)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <Eye className="w-4 h-4" />
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
