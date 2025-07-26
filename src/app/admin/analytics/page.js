"use client"

import React from "react"
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar, 
  Star, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const AnalyticsPage = () => {
  // Mock analytics data
  const metrics = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12.3%",
      changeType: "increase",
      description: "Total registered users",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Appointments",
      value: "1,456",
      change: "+8.7%",
      changeType: "increase",
      description: "Appointments this month",
      icon: Calendar,
      color: "text-green-600", 
      bgColor: "bg-green-100"
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.2",
      changeType: "increase",
      description: "Average doctor rating",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      title: "Active Doctors",
      value: "124",
      change: "-2.1%",
      changeType: "decrease",
      description: "Doctors with appointments",
      icon: Activity,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ]

  const monthlyData = [
    { month: "Jan", appointments: 120, users: 200, revenue: 15000 },
    { month: "Feb", appointments: 150, users: 280, revenue: 18000 },
    { month: "Mar", appointments: 180, users: 320, revenue: 22000 },
    { month: "Apr", appointments: 200, users: 380, revenue: 25000 },
    { month: "May", appointments: 170, users: 420, revenue: 21000 },
    { month: "Jun", appointments: 220, users: 480, revenue: 28000 }
  ]

  const topDoctors = [
    { name: "Dr. John Smith", appointments: 45, rating: 4.9, revenue: "$12,500" },
    { name: "Dr. Sarah Johnson", appointments: 42, rating: 4.8, revenue: "$11,800" },
    { name: "Dr. Michael Brown", appointments: 38, rating: 4.7, revenue: "$10,200" },
    { name: "Dr. Emily Davis", appointments: 35, rating: 4.9, revenue: "$9,800" },
    { name: "Dr. David Wilson", appointments: 32, rating: 4.6, revenue: "$8,900" }
  ]

  const recentActivities = [
    { action: "New doctor registered", time: "2 hours ago", type: "doctor" },
    { action: "Appointment booked", time: "3 hours ago", type: "appointment" },
    { action: "Review submitted", time: "5 hours ago", type: "review" },
    { action: "Patient registered", time: "6 hours ago", type: "patient" },
    { action: "Doctor profile updated", time: "8 hours ago", type: "doctor" }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">System performance and usage statistics</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <div className="flex items-center mt-2">
                    {metric.changeType === 'increase' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                    <span className={`text-sm font-medium ml-1 ${
                      metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
                </div>
                <div className={`p-3 rounded-full ${metric.bgColor}`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Monthly Trends
            </CardTitle>
            <CardDescription>Appointments and user growth over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{data.month}</p>
                    <p className="text-sm text-gray-600">{data.appointments} appointments</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{data.users} users</p>
                    <p className="text-sm text-green-600">${data.revenue.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Doctors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Top Performing Doctors
            </CardTitle>
            <CardDescription>Doctors with highest appointment volume</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDoctors.map((doctor, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#2F797B] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{doctor.name}</p>
                      <p className="text-sm text-gray-600">{doctor.appointments} appointments</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                    </div>
                    <p className="text-sm text-green-600">{doctor.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent System Activities</CardTitle>
          <CardDescription>Latest actions performed in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'doctor' ? 'bg-blue-500' :
                  activity.type === 'appointment' ? 'bg-green-500' :
                  activity.type === 'review' ? 'bg-yellow-500' :
                  'bg-purple-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                </div>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600">98.5%</div>
            <div className="text-sm text-gray-600 mt-1">System Uptime</div>
            <div className="text-xs text-gray-500 mt-2">Last 30 days</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">250ms</div>
            <div className="text-sm text-gray-600 mt-1">Avg Response Time</div>
            <div className="text-xs text-gray-500 mt-2">All endpoints</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">99.2%</div>
            <div className="text-sm text-gray-600 mt-1">Success Rate</div>
            <div className="text-xs text-gray-500 mt-2">API requests</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AnalyticsPage 