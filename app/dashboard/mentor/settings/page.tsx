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
import { Settings, Bell, Shield, User, Mail, Calendar, Clock, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function MentorSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [weeklyReports, setWeeklyReports] = useState(true)
  const [studentMessages, setStudentMessages] = useState(true)
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

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-lg text-gray-600 mt-2">Manage your account preferences and teaching settings</p>
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
              <CardDescription className="text-base">Update your personal and professional details</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                  <AvatarFallback className="bg-red-100 text-red-600 text-xl font-bold">JS</AvatarFallback>
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
                  <Input id="firstName" defaultValue="John" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Smith" className="h-11" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.smith@email.com" className="h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+62 812 3456 7890" className="h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell students about your experience and expertise..."
                  defaultValue="Experienced music producer with 10+ years in the industry. Specialized in electronic music production and audio engineering."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expertise">Areas of Expertise</Label>
                <Input
                  id="expertise"
                  placeholder="e.g., Music Production, Audio Engineering, Mixing"
                  defaultValue="Music Production, Audio Engineering, Mixing & Mastering"
                  className="h-11"
                />
              </div>
            </CardContent>
          </Card>

          {/* Teaching Preferences */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <Settings className="w-5 h-5" />
                Teaching Preferences
              </CardTitle>
              <CardDescription className="text-base">Configure your teaching and mentoring settings</CardDescription>
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
                <Label className="text-base font-semibold">Available Hours</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Start Time</Label>
                    <Input id="start-time" type="time" defaultValue="09:00" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-time">End Time</Label>
                    <Input id="end-time" type="time" defaultValue="17:00" className="h-11" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-students">Maximum Students per Batch</Label>
                <Input id="max-students" type="number" defaultValue="35" className="h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="response-time">Expected Response Time</Label>
                <Select defaultValue="24h">
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1h">Within 1 hour</SelectItem>
                    <SelectItem value="4h">Within 4 hours</SelectItem>
                    <SelectItem value="24h">Within 24 hours</SelectItem>
                    <SelectItem value="48h">Within 48 hours</SelectItem>
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
                Security Settings
              </CardTitle>
              <CardDescription className="text-base">Manage your account security and privacy</CardDescription>
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
            </CardContent>
          </Card>
        </div>

        {/* Notification Settings */}
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
                    <Label className="text-sm font-medium">Weekly Reports</Label>
                    <p className="text-xs text-gray-500">Student progress summaries</p>
                  </div>
                  <Switch checked={weeklyReports} onCheckedChange={setWeeklyReports} />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Student Messages</Label>
                    <p className="text-xs text-gray-500">Direct messages from students</p>
                  </div>
                  <Switch checked={studentMessages} onCheckedChange={setStudentMessages} />
                </div>
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
                Schedule Office Hours
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                Email All Students
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="w-4 h-4 mr-2" />
                Set Away Message
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
