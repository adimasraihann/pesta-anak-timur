"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Bell, Shield, Database, Mail, Palette } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [autoBackup, setAutoBackup] = useState(true)
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const { toast } = useToast()

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved!",
      description: "Your system settings have been updated successfully.",
      variant: "success",
    })
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
        <p className="text-lg text-gray-600 mt-2">Configure your LMS system preferences and settings</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                General Settings
              </CardTitle>
              <CardDescription>Basic system configuration and preferences</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="system-name">System Name</Label>
                  <Input id="system-name" defaultValue="Pesta Anak Timur LMS" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="system-url">System URL</Label>
                  <Input id="system-url" defaultValue="https://lms.pestaanaktimur.com" className="h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="system-description">System Description</Label>
                <Textarea
                  id="system-description"
                  defaultValue="Platform pembelajaran digital untuk mengembangkan kreativitas dan keterampilan anak-anak Indonesia Timur"
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="asia-jakarta">
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia-jakarta">Asia/Jakarta (WIB)</SelectItem>
                      <SelectItem value="asia-makassar">Asia/Makassar (WITA)</SelectItem>
                      <SelectItem value="asia-jayapura">Asia/Jayapura (WIT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Default Language</Label>
                  <Select defaultValue="id">
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="id">Bahasa Indonesia</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="maintenance-mode" checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
                <Label htmlFor="maintenance-mode">Enable Maintenance Mode</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure system notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-gray-500">Send notifications via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-gray-500">Send browser push notifications</p>
                  </div>
                  <Switch id="push-notifications" checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input id="admin-email" type="email" defaultValue="admin@pestaanaktimur.com" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-frequency">Notification Frequency</Label>
                <Select defaultValue="immediate">
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage system security and access controls</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input id="session-timeout" type="number" defaultValue="60" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                  <Input id="max-login-attempts" type="number" defaultValue="5" className="h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-policy">Password Policy</Label>
                <Select defaultValue="medium">
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (6+ characters)</SelectItem>
                    <SelectItem value="medium">Medium (8+ chars, mixed case)</SelectItem>
                    <SelectItem value="high">High (12+ chars, symbols required)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Require 2FA for admin accounts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>IP Whitelist</Label>
                    <p className="text-sm text-gray-500">Restrict admin access by IP</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Database Settings */}
        <TabsContent value="database">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Database Settings
              </CardTitle>
              <CardDescription>Configure database backup and maintenance</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-backup">Automatic Backup</Label>
                  <p className="text-sm text-gray-500">Enable daily database backups</p>
                </div>
                <Switch id="auto-backup" checked={autoBackup} onCheckedChange={setAutoBackup} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="backup-time">Backup Time</Label>
                <Input id="backup-time" type="time" defaultValue="02:00" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="backup-retention">Backup Retention (days)</Label>
                <Input id="backup-retention" type="number" defaultValue="30" className="h-11" />
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">
                  <Database className="w-4 h-4 mr-2" />
                  Create Backup Now
                </Button>
                <Button variant="outline" className="flex-1">
                  <Database className="w-4 h-4 mr-2" />
                  Restore Backup
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Settings
              </CardTitle>
              <CardDescription>Configure SMTP settings for email delivery</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smtp-host">SMTP Host</Label>
                  <Input id="smtp-host" defaultValue="smtp.gmail.com" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">SMTP Port</Label>
                  <Input id="smtp-port" type="number" defaultValue="587" className="h-11" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smtp-username">SMTP Username</Label>
                  <Input id="smtp-username" defaultValue="noreply@pestaanaktimur.com" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-password">SMTP Password</Label>
                  <Input id="smtp-password" type="password" className="h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="from-email">From Email Address</Label>
                <Input id="from-email" type="email" defaultValue="noreply@pestaanaktimur.com" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="from-name">From Name</Label>
                <Input id="from-name" defaultValue="Pesta Anak Timur LMS" className="h-11" />
              </div>
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Test Email Configuration
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Appearance Settings
              </CardTitle>
              <CardDescription>Customize the look and feel of your LMS</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select defaultValue="light">
                  <SelectTrigger className="h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="auto">Auto (System)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex items-center gap-4">
                  <Input id="primary-color" type="color" defaultValue="#E53935" className="w-16 h-11" />
                  <Input defaultValue="#E53935" className="h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="logo-upload">Logo Upload</Label>
                <Input id="logo-upload" type="file" accept="image/*" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="favicon-upload">Favicon Upload</Label>
                <Input id="favicon-upload" type="file" accept="image/*" className="h-11" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSaveSettings} className="bg-red-600 hover:bg-red-700 text-white px-8">
          Save All Settings
        </Button>
      </div>
    </div>
  )
}
