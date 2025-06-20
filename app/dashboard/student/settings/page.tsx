"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, Bell, Shield, User, Mail, Calendar, Clock, Save, Palette } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function StudentSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [assignmentReminders, setAssignmentReminders] = useState(true)
  const [classReminders, setClassReminders] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const { toast } = useToast()

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
      variant: "success",
    })
  }

  const handleChangePassword = () => {
    toast({
      title: "Password Change Request",
      description: "Password reset link has been sent to your email.",
      variant: "success",
    })
  }

  const handleExportData = () => {
    toast({
      title: "Data Export Started",
      description: "Your learning data is being prepared for download.",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-lg text-gray-600 mt-2">Manage your account preferences and learning settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
              <CardDescription className="text-base">
                Update your personal information and learning preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                  <AvatarFallback className="bg-red-100 text-red-600 text-xl font-bold">MS</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" className="mb-2">
                    Change Photo
                  </Button>
                  <p className="text-sm text-gray-500">JPG, PNG or GIF. Max size 2MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Maria" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Sari" className="h-11" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="maria.sari@email.com" className="h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+62 812 3456 7890" className="h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">About Me</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell others about your learning goals and interests..."
                  defaultValue="Aspiring music producer passionate about electronic music and sound design. Currently learning the fundamentals of music production."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Learning Interests</Label>
                <Input
                  id="interests"
                  placeholder="e.g., Music Production, Audio Engineering, Sound Design"
                  defaultValue="Music Production, Electronic Music, Beat Making"
                  className="h-11"
                />
              </div>
            </CardContent>
          </Card>

          {/* Learning Preferences */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <Settings className="w-5 h-5" />
                Learning Preferences
              </CardTitle>
              <CardDescription className="text-base">Customize your learning experience</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="asia-jakarta">
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia-jakarta">Asia/Jakarta (WIB)</SelectItem>
                      <SelectItem value="asia-singapore">Asia/Singapore (SGT)</SelectItem>
                      <SelectItem value="asia-kuala_lumpur">Asia/Kuala Lumpur (MYT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select defaultValue="indonesian">
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indonesian">Bahasa Indonesia</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">Study Schedule</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferred-start">Preferred Start Time</Label>
                    <Input id="preferred-start" type="time" defaultValue="09:00" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferred-end">Preferred End Time</Label>
                    <Input id="preferred-end" type="time" defaultValue="21:00" className="h-11" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="study-goal">Daily Study Goal (hours)</Label>
                <Select defaultValue="2">
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="2">2 hours</SelectItem>
                    <SelectItem value="3">3 hours</SelectItem>
                    <SelectItem value="4">4+ hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="learning-pace">Learning Pace</Label>
                <Select defaultValue="moderate">
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slow">Slow & Steady</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="fast">Fast Track</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <Shield className="w-5 h-5" />
                Security & Privacy
              </CardTitle>
              <CardDescription className="text-base">Manage your account security and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Login Notifications</Label>
                    <p className="text-sm text-gray-500">Get notified when someone logs into your account</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Profile Visibility</Label>
                    <p className="text-sm text-gray-500">Allow other students to see your profile</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">Password</Label>
                <div className="space-y-2">
                  <Input type="password" placeholder="Current password" className="h-11" />
                  <Input type="password" placeholder="New password" className="h-11" />
                  <Input type="password" placeholder="Confirm new password" className="h-11" />
                </div>
                <Button variant="outline" onClick={handleChangePassword}>
                  Change Password
                </Button>
              </div>

              <div className="pt-4 border-t">
                <Button variant="outline" onClick={handleExportData} className="w-full">
                  Export My Learning Data
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Download all your learning progress, certificates, and course data
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notification & Display Settings */}
        <div className="space-y-8">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
              <CardDescription>Choose what notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Email Notifications</Label>
                    <p className="text-xs text-gray-500">Receive updates via email</p>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Push Notifications</Label>
                    <p className="text-xs text-gray-500">Browser notifications</p>
                  </div>
                  <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Assignment Reminders</Label>
                    <p className="text-xs text-gray-500">Deadline notifications</p>
                  </div>
                  <Switch checked={assignmentReminders} onCheckedChange={setAssignmentReminders} />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Class Reminders</Label>
                    <p className="text-xs text-gray-500">Upcoming class notifications</p>
                  </div>
                  <Switch checked={classReminders} onCheckedChange={setClassReminders} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <Palette className="w-5 h-5" />
                Display & Audio
              </CardTitle>
              <CardDescription>Customize your learning interface</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Dark Mode</Label>
                    <p className="text-xs text-gray-500">Switch to dark theme</p>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Sound Effects</Label>
                    <p className="text-xs text-gray-500">Enable notification sounds</p>
                  </div>
                  <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="video-quality">Video Quality</Label>
                <Select defaultValue="auto">
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto</SelectItem>
                    <SelectItem value="720p">720p</SelectItem>
                    <SelectItem value="1080p">1080p</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="playback-speed">Default Playback Speed</Label>
                <Select defaultValue="1x">
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.75x">0.75x</SelectItem>
                    <SelectItem value="1x">1x (Normal)</SelectItem>
                    <SelectItem value="1.25x">1.25x</SelectItem>
                    <SelectItem value="1.5x">1.5x</SelectItem>
                    <SelectItem value="2x">2x</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl font-bold text-gray-900">Quick Actions</CardTitle>
              <CardDescription>Frequently used settings and actions</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Update Study Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="w-4 h-4 mr-2" />
                Set Study Reminders
              </Button>
            </CardContent>
          </Card>

          {/* Save Button */}
          <Button onClick={handleSaveSettings} className="w-full bg-red-600 hover:bg-red-700 text-white">
            <Save className="w-4 h-4 mr-2" />
            Save All Settings
          </Button>
        </div>
      </div>
    </div>
  )
}
