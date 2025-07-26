"use client"

import React, { useState } from "react"
import { Save, Bell, Lock, Globe, Database, Mail, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    // General Settings
    siteName: "Best Orthopaedic Surgeons",
    siteDescription: "Find and connect with the best orthopaedic surgeons in Australia",
    contactEmail: "admin@bestorthopaedicsurgeons.com",
    contactPhone: "+61 400 000 000",
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    reviewNotifications: true,
    
    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordComplexity: true,
    
    // Feature Toggles
    doctorRegistration: true,
    patientRegistration: true,
    onlineBooking: true,
    reviewSystem: true,
    
    // Email Settings
    smtpHost: "",
    smtpPort: "587",
    smtpUsername: "",
    smtpPassword: "",
    
    // Maintenance
    maintenanceMode: false,
    maintenanceMessage: "We're currently performing maintenance. Please check back later."
  })

  const [loading, setLoading] = useState(false)

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSave = async () => {
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success("Settings saved successfully!")
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your system configuration</p>
        </div>
        <Button 
          onClick={handleSave} 
          disabled={loading}
          className="bg-[#2F797B] hover:bg-[#236B6D]"
        >
          <Save className="h-4 w-4 mr-2" />
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              General Settings
            </CardTitle>
            <CardDescription>Basic site configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => handleSettingChange('siteName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="siteDescription">Site Description</Label>
              <Textarea
                id="siteDescription"
                value={settings.siteDescription}
                onChange={(e) => handleSettingChange('siteDescription', e.target.value)}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input
                id="contactEmail"
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleSettingChange('contactEmail', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Contact Phone</Label>
              <Input
                id="contactPhone"
                value={settings.contactPhone}
                onChange={(e) => handleSettingChange('contactPhone', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Settings
            </CardTitle>
            <CardDescription>Configure notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="emailNotifications">Email Notifications</Label>
                <p className="text-sm text-gray-600">Receive system notifications via email</p>
              </div>
              <Switch
                id="emailNotifications"
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="smsNotifications">SMS Notifications</Label>
                <p className="text-sm text-gray-600">Receive notifications via SMS</p>
              </div>
              <Switch
                id="smsNotifications"
                checked={settings.smsNotifications}
                onCheckedChange={(checked) => handleSettingChange('smsNotifications', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="appointmentReminders">Appointment Reminders</Label>
                <p className="text-sm text-gray-600">Send automatic appointment reminders</p>
              </div>
              <Switch
                id="appointmentReminders"
                checked={settings.appointmentReminders}
                onCheckedChange={(checked) => handleSettingChange('appointmentReminders', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="reviewNotifications">Review Notifications</Label>
                <p className="text-sm text-gray-600">Get notified about new reviews</p>
              </div>
              <Switch
                id="reviewNotifications"
                checked={settings.reviewNotifications}
                onCheckedChange={(checked) => handleSettingChange('reviewNotifications', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Security Settings
            </CardTitle>
            <CardDescription>Configure security and authentication</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                <p className="text-sm text-gray-600">Require 2FA for admin accounts</p>
              </div>
              <Switch
                id="twoFactorAuth"
                checked={settings.twoFactorAuth}
                onCheckedChange={(checked) => handleSettingChange('twoFactorAuth', checked)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
              <Input
                id="sessionTimeout"
                type="number"
                value={settings.sessionTimeout}
                onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="passwordComplexity">Password Complexity</Label>
                <p className="text-sm text-gray-600">Enforce strong password requirements</p>
              </div>
              <Switch
                id="passwordComplexity"
                checked={settings.passwordComplexity}
                onCheckedChange={(checked) => handleSettingChange('passwordComplexity', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Feature Toggles */}
        <Card>
          <CardHeader>
            <CardTitle>Feature Toggles</CardTitle>
            <CardDescription>Enable or disable system features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="doctorRegistration">Doctor Registration</Label>
                <p className="text-sm text-gray-600">Allow new doctor registrations</p>
              </div>
              <Switch
                id="doctorRegistration"
                checked={settings.doctorRegistration}
                onCheckedChange={(checked) => handleSettingChange('doctorRegistration', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="patientRegistration">Patient Registration</Label>
                <p className="text-sm text-gray-600">Allow new patient registrations</p>
              </div>
              <Switch
                id="patientRegistration"
                checked={settings.patientRegistration}
                onCheckedChange={(checked) => handleSettingChange('patientRegistration', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="onlineBooking">Online Booking</Label>
                <p className="text-sm text-gray-600">Enable online appointment booking</p>
              </div>
              <Switch
                id="onlineBooking"
                checked={settings.onlineBooking}
                onCheckedChange={(checked) => handleSettingChange('onlineBooking', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="reviewSystem">Review System</Label>
                <p className="text-sm text-gray-600">Allow patients to submit reviews</p>
              </div>
              <Switch
                id="reviewSystem"
                checked={settings.reviewSystem}
                onCheckedChange={(checked) => handleSettingChange('reviewSystem', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Email Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Configuration
            </CardTitle>
            <CardDescription>SMTP settings for outgoing emails</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="smtpHost">SMTP Host</Label>
              <Input
                id="smtpHost"
                placeholder="smtp.gmail.com"
                value={settings.smtpHost}
                onChange={(e) => handleSettingChange('smtpHost', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpPort">SMTP Port</Label>
              <Input
                id="smtpPort"
                placeholder="587"
                value={settings.smtpPort}
                onChange={(e) => handleSettingChange('smtpPort', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpUsername">SMTP Username</Label>
              <Input
                id="smtpUsername"
                placeholder="your-email@gmail.com"
                value={settings.smtpUsername}
                onChange={(e) => handleSettingChange('smtpUsername', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpPassword">SMTP Password</Label>
              <Input
                id="smtpPassword"
                type="password"
                placeholder="••••••••"
                value={settings.smtpPassword}
                onChange={(e) => handleSettingChange('smtpPassword', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Maintenance Mode */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Maintenance Mode
            </CardTitle>
            <CardDescription>Control site availability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="maintenanceMode">Enable Maintenance Mode</Label>
                <p className="text-sm text-gray-600">Put the site in maintenance mode</p>
              </div>
              <Switch
                id="maintenanceMode"
                checked={settings.maintenanceMode}
                onCheckedChange={(checked) => handleSettingChange('maintenanceMode', checked)}
              />
            </div>
            {settings.maintenanceMode && (
              <div className="space-y-2">
                <Label htmlFor="maintenanceMessage">Maintenance Message</Label>
                <Textarea
                  id="maintenanceMessage"
                  value={settings.maintenanceMessage}
                  onChange={(e) => handleSettingChange('maintenanceMessage', e.target.value)}
                  rows={3}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SettingsPage 