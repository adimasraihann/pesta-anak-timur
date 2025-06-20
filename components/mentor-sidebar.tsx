"use client"

import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Calendar,
  Users,
  BookOpen,
  FileCheck,
  CheckSquare,
  BarChart3,
  Settings,
  User,
  LogOut,
  GraduationCap,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

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

const menuItems = [
  {
    title: "Dashboard Overview",
    url: "/dashboard/mentor",
    icon: LayoutDashboard,
  },
  {
    title: "Assigned Classes",
    url: "/dashboard/mentor/classes",
    icon: Calendar,
  },
  {
    title: "Students List",
    url: "/dashboard/mentor/students",
    icon: Users,
  },
  {
    title: "Module Structure",
    url: "/dashboard/mentor/modules",
    icon: BookOpen,
  },
  {
    title: "Final Project Review",
    url: "/dashboard/mentor/projects",
    icon: FileCheck,
  },
  {
    title: "Module Completion",
    url: "/dashboard/mentor/completion",
    icon: CheckSquare,
  },
  {
    title: "Progress Summary",
    url: "/dashboard/mentor/progress",
    icon: BarChart3,
  },
]

const accountItems = [
  {
    title: "Settings",
    url: "/dashboard/mentor/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    url: "/dashboard/mentor/profile",
    icon: User,
  },
  {
    title: "Logout",
    url: "/",
    icon: LogOut,
  },
]

export function MentorSidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black/20 z-40" onClick={() => setIsMobileOpen(false)} />
      )}

      <Sidebar
        className={`border-r border-gray-200 bg-white ${isMobileOpen ? "sidebar-mobile" : "sidebar-mobile closed"} md:translate-x-0`}
      >
        <SidebarHeader className="border-b border-gray-100 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 tracking-tight">Mentor Panel</h2>
              <p className="text-sm text-gray-500 font-medium">Pesta Anak Timur</p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-3 py-6">
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
              Teaching
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => {
                  const isActive = pathname === item.url
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`
                          flex items-center gap-3 px-5 py-3 mx-3 mb-1 rounded-lg transition-all duration-200 ease-in-out text-sm font-medium relative cursor-pointer
                          ${
                            isActive
                              ? "bg-red-500 text-white font-semibold"
                              : "bg-transparent text-gray-800 hover:bg-red-50 hover:text-red-500"
                          }
                        `}
                      >
                        <a
                          href={item.url}
                          onClick={() => setIsMobileOpen(false)}
                          className="flex items-center gap-3 w-full"
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              e.currentTarget.parentElement.style.backgroundColor = "#fdeaea"
                              e.currentTarget.parentElement.style.color = "#e53935"
                              e.currentTarget.parentElement.style.transform = "translateY(-1px)"
                              const icon = e.currentTarget.querySelector("svg")
                              if (icon) icon.style.color = "#d32f2f"
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.parentElement.style.backgroundColor = "transparent"
                              e.currentTarget.parentElement.style.color = "#212121"
                              e.currentTarget.parentElement.style.transform = "translateY(0)"
                              const icon = e.currentTarget.querySelector("svg")
                              if (icon) icon.style.color = "#e53935"
                            }
                          }}
                        >
                          <item.icon
                            className={`w-5 h-5 transition-colors duration-200 ease-in-out ${
                              isActive ? "text-white" : "text-red-500"
                            }`}
                          />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-gray-100 p-3">
          <SidebarMenu>
            {accountItems.map((item) => {
              const isActive = pathname === item.url
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`
                      flex items-center gap-3 px-5 py-3 mx-3 mb-1 rounded-lg transition-all duration-200 ease-in-out text-sm font-medium relative cursor-pointer
                      ${
                        isActive
                          ? "bg-red-500 text-white font-semibold"
                          : "bg-transparent text-gray-800 hover:bg-red-50 hover:text-red-500"
                      }
                    `}
                  >
                    <a
                      href={item.url}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center gap-3 w-full"
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.parentElement.style.backgroundColor = "#fdeaea"
                          e.currentTarget.parentElement.style.color = "#e53935"
                          e.currentTarget.parentElement.style.transform = "translateY(-1px)"
                          const icon = e.currentTarget.querySelector("svg")
                          if (icon) icon.style.color = "#d32f2f"
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.parentElement.style.backgroundColor = "transparent"
                          e.currentTarget.parentElement.style.color = "#212121"
                          e.currentTarget.parentElement.style.transform = "translateY(0)"
                          const icon = e.currentTarget.querySelector("svg")
                          if (icon) icon.style.color = "#e53935"
                        }
                      }}
                    >
                      <item.icon
                        className={`w-4 h-4 transition-colors duration-200 ease-in-out ${
                          isActive ? "text-white" : "text-red-500"
                        }`}
                      />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  )
}
