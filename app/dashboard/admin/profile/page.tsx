"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, Phone, MapPin, Calendar, Shield, Key, Bell } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const { toast } = useToast()

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated!",
      description: "Your profile information has been saved successfully.",
      variant: "success",
    })
    setIsEditing(false)
  }

  const handleChangePassword = () => {
    toast({
      title: "Password Changed!",
      description: "Your password has been updated successfully.",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Profile</h1>
        <p className="text-lg text-gray-600 mt-2">Manage your personal information and account settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gray-50 border-b text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Admin Avatar" />
                <AvatarFallback className="bg-red-100 text-red-600 text-2xl font-bold">AD</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">Admin User</CardTitle>
            <CardDescription>System Administrator</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-sm">admin@pestaanaktimur.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-sm">Joined December 2023</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-500" />
                <span className="text-sm">Super Administrator</span>
              </div>
            </div>
            <Button onClick={() => setIsEditing(!isEditing)} className="w-full mt-6 bg-red-600 hover:bg-red-700">
              {isEditing ? "Cancel Edit" : "Edit Profile"}
            </Button>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            {/* Personal Information */}
            <TabsContent value="personal">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Update your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="Admin" disabled={!isEditing} className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="User" disabled={!isEditing} className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="admin@pestaanaktimur.com"
                      disabled={!isEditing}
                      className="h-11"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+62 812-3456-7890" disabled={!isEditing} className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="Jakarta, Indonesia" disabled={!isEditing} className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Experienced system administrator with expertise in educational technology and learning management systems."
                      disabled={!isEditing}
                      className="min-h-[100px]"
                    />
                  </div>
                  {isEditing && (
                    <div className="flex justify-end gap-4">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSaveProfile} className="bg-red-600 hover:bg-red-700">
                        Save Changes
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-5 h-5" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>Manage your password and security preferences</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Change Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" className="h-11" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" className="h-11" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" className="h-11" />
                      </div>
                      <Button onClick={handleChangePassword} className="bg-red-600 hover:bg-red-700">
                        Change Password
                      </Button>
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Login Sessions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-gray-500">Chrome on Windows • Jakarta, Indonesia</p>
                        </div>
                        <span className="text-sm text-green-600">Active</span>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Mobile Session</p>
                          <p className="text-sm text-gray-500">Safari on iPhone • 2 hours ago</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Revoke
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences */}
            <TabsContent value="preferences">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gray-50 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Preferences
                  </CardTitle>
                  <CardDescription>Customize your experience and notification settings</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Notification Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive notifications via email</p>
                        </div>
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Student Registration</p>
                          <p className="text-sm text-gray-500">Notify when new students register</p>
                        </div>
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Assignment Submissions</p>
                          <p className="text-sm text-gray-500">Notify when assignments are submitted</p>
                        </div>
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">System Updates</p>
                          <p className="text-sm text-gray-500">Notify about system maintenance and updates</p>
                        </div>
                        <input type="checkbox" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Display Preferences</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <select id="language" className="w-full h-11 px-3 border rounded-md">
                          <option value="id">Bahasa Indonesia</option>
                          <option value="en">English</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <select id="timezone" className="w-full h-11 px-3 border rounded-md">
                          <option value="asia-jakarta">Asia/Jakarta (WIB)</option>
                          <option value="asia-makassar">Asia/Makassar (WITA)</option>
                          <option value="asia-jayapura">Asia/Jayapura (WIT)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-red-600 hover:bg-red-700">Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
