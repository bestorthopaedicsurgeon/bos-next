"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Users,
  UserPlus,
  Calendar,
  BarChart3,
  Settings,
  Home,
  FileText,
  Stethoscope,
  ClipboardList,
  Star,
  MessageSquare
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Menu items
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: Home,
    },
    {
      title: "Doctors",
      icon: Stethoscope,
      items: [
        {
          title: "All Doctors",
          url: "/admin/doctors",
        },
        {
          title: "Create Doctor",
          url: "/admin/doctors/create",
        },
        {
          title: "Doctor Applications",
          url: "/admin/doctors/applications",
        },
      ],
    },
    // {
    //   title: "Patients",
    //   icon: Users,
    //   items: [
    //     {
    //       title: "All Patients",
    //       url: "/admin/patients",
    //     },
    //     {
    //       title: "Patient Reports",
    //       url: "/admin/patients/reports",
    //     },
    //   ],
    // },
    // {
    //   title: "Appointments",
    //   icon: Calendar,
    //   items: [
    //     {
    //       title: "All Appointments",
    //       url: "/admin/appointments",
    //     },
    //     {
    //       title: "Appointment Analytics",
    //       url: "/admin/appointments/analytics",
    //     },
    //   ],
    // },
    // {
    //   title: "Reviews",
    //   url: "/admin/reviews",
    //   icon: Star,
    // },
    // {
    //   title: "Content Management",
    //   icon: FileText,
    //   items: [
    //     {
    //       title: "Blog Posts",
    //       url: "/admin/content/blogs",
    //     },
    //     {
    //       title: "Pages",
    //       url: "/admin/content/pages",
    //     },
    //   ],
    // },
    {
      title: "Analytics",
      url: "/admin/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: Settings,
    },
  ],
}

export function AdminSidebar({ ...props }) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/admin">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#2F797B] text-sidebar-primary-foreground">
                  <Stethoscope className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Admin Panel</span>
                  <span className="truncate text-xs">Best Orthopaedic Surgeons</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => {
                if (item.items) {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                      <SidebarMenu className="ml-4">
                        {item.items.map((subItem) => (
                          <SidebarMenuItem key={subItem.title}>
                            <SidebarMenuButton 
                              asChild 
                              isActive={pathname === subItem.url}
                              className="w-full"
                            >
                              <Link href={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarMenuItem>
                  )
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      isActive={pathname === item.url}
                    >
                      <Link href={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className="text-sidebar-foreground/70">
                <Home className="size-4" />
                <span>Back to Site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
} 