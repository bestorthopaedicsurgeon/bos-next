"use client"

import React from "react"
import Link from "next/link"
import { 
  Users, 
  UserPlus, 
  Calendar, 
  BarChart3, 
  Star, 
  FileText,
  Stethoscope,
  TrendingUp,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const AdminDashboard = () => {
  // Mock data - in real app, fetch from API
  const stats = [
    {
      title: "Total Doctors",
      value: "24",
      change: "+2 this month",
      icon: Stethoscope,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Total Patients",
      value: "1,204",
      change: "+15% from last month",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Appointments Today",
      value: "42",
      change: "8 pending",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Reviews",
      value: "4.8",
      change: "Average rating",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    }
  ]

  const quickActions = [
    {
      title: "Create Doctor Profile",
      description: "Add a new doctor to the system",
      href: "/admin/doctors/create",
      icon: UserPlus,
      color: "bg-[#2F797B] hover:bg-[#236B6D]"
    },
    {
      title: "View All Doctors",
      description: "Manage existing doctor profiles",
      href: "/admin/doctors",
      icon: Stethoscope,
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Appointments",
      description: "View and manage appointments",
      href: "/admin/appointments",
      icon: Calendar,
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Analytics",
      description: "View system analytics",
      href: "/admin/analytics",
      icon: BarChart3,
      color: "bg-purple-600 hover:bg-purple-700"
    }
  ]

  const recentActivities = [
    {
      type: "doctor",
      message: "Dr. Smith's profile was updated",
      time: "2 hours ago",
      icon: Stethoscope
    },
    {
      type: "appointment", 
      message: "New appointment scheduled",
      time: "3 hours ago",
      icon: Calendar
    },
    {
      type: "review",
      message: "New review submitted for Dr. Johnson",
      time: "5 hours ago", 
      icon: Star
    },
    {
      type: "patient",
      message: "New patient registration",
      time: "1 day ago",
      icon: Users
    }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your medical practice efficiently</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className="block p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${action.color} text-white group-hover:scale-105 transition-transform`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Recent Activities</CardTitle>
            <CardDescription>Latest system activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="p-2 rounded-full bg-white">
                    <activity.icon className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Link
                href="/admin/activities"
                className="text-sm text-[#2F797B] hover:text-[#236B6D] font-medium"
              >
                View all activities →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                All Systems Operational
              </div>
              <p className="text-sm text-gray-600 mt-2">Database, API, and Services</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                99.9% Uptime
              </div>
              <p className="text-sm text-gray-600 mt-2">Last 30 days</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
                <BarChart3 className="w-4 h-4" />
                Performance Good
              </div>
              <p className="text-sm text-gray-600 mt-2">Average response time: 250ms</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminDashboard
