"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Star,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AnalyticsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await fetch("/api/admin/analytics");
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || "Failed to load analytics");
        if (json.success) setData(json.data);
        else throw new Error(json?.error || "Failed to load analytics");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p className="text-gray-500">Loading analytics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p className="text-gray-500">No analytics data available.</p>
      </div>
    );
  }

  const metrics = [
    {
      title: "Total Users",
      value: data.totalUsers.toLocaleString(),
      change: data.usersThisMonth > 0 ? `+${data.usersThisMonth} this month` : "—",
      changeType: data.usersThisMonth > 0 ? "increase" : "neutral",
      description: "Registered users",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Doctors",
      value: data.activeDoctors.toString(),
      change: `${data.totalDoctors} total`,
      changeType: "neutral",
      description: "Visible doctor profiles",
      icon: Activity,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Average Rating",
      value: data.averageRating > 0 ? data.averageRating.toFixed(1) : "—",
      change: data.totalReviews > 0 ? `${data.totalReviews} reviews` : "No reviews yet",
      changeType: "neutral",
      description: "From doctor reviews",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Contact Submissions",
      value: data.contactCount.toString(),
      change: data.contactsThisMonth > 0 ? `+${data.contactsThisMonth} this month` : "—",
      changeType: data.contactsThisMonth > 0 ? "increase" : "neutral",
      description: "Contact form entries",
      icon: MessageSquare,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Real data from your platform</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="transition-shadow hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">{metric.value}</p>
                  <div className="mt-2 flex items-center">
                    {metric.changeType === "increase" && (
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    )}
                    {metric.changeType === "decrease" && (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                    <span
                      className={`ml-1 text-sm font-medium ${
                        metric.changeType === "increase"
                          ? "text-green-600"
                          : metric.changeType === "decrease"
                            ? "text-red-600"
                            : "text-gray-600"
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{metric.description}</p>
                </div>
                <div className={`rounded-full p-3 ${metric.bgColor}`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Top Doctors by Reviews
            </CardTitle>
            <CardDescription>
              Doctors with the most reviews (no appointment data in system)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {data.topDoctors && data.topDoctors.length > 0 ? (
              <div className="space-y-4">
                {data.topDoctors.map((doctor, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#2F797B] text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{doctor.name}</p>
                        <p className="text-sm text-gray-600">
                          {doctor.reviewCount} review{doctor.reviewCount !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No review data yet.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest contact, claims, and reviews</CardDescription>
          </CardHeader>
          <CardContent>
            {data.recentActivities && data.recentActivities.length > 0 ? (
              <div className="space-y-4">
                {data.recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-gray-50"
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        activity.type === "contact"
                          ? "bg-green-500"
                          : activity.type === "claim"
                            ? "bg-blue-500"
                            : activity.type === "review"
                              ? "bg-yellow-500"
                              : "bg-purple-500"
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                    </div>
                    <p className="shrink-0 text-xs text-gray-500">{activity.time}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No recent activity.</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">
              {data.questionCount ?? 0}
            </div>
            <div className="mt-1 text-sm text-gray-600">Questions Asked</div>
            <div className="mt-2 text-xs text-gray-500">Patient Q&A</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600">{data.blogCount ?? 0}</div>
            <div className="mt-1 text-sm text-gray-600">Blog Posts</div>
            <div className="mt-2 text-xs text-gray-500">Published</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">
              {data.claimCount ?? 0}
            </div>
            <div className="mt-1 text-sm text-gray-600">Profile Claims</div>
            <div className="mt-2 text-xs text-gray-500">Pending or processed</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;
