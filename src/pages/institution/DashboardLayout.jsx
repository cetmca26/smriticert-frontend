"use client"

import React, { useState } from "react"
import {
  BookOpen,
  Building,
  BadgeIcon as Certificate,
  ChevronDown,
  FileEdit,
  GraduationCap,
  Home,
  LogOut,
  Menu,
  Settings,
  User,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useNavigate } from "react-router-dom";

export function DashboardLayout({ children, activeTab, setActiveTab }) {
  const navigation = [
    { name: "Overview", value: "overview", icon: Home },
    { name: "Institution Details", value: "institution", icon: Building },
    { name: "Courses", value: "courses", icon: BookOpen },
    { name: "Certificates", value: "certificates", icon: Certificate },
    { name: "Students", value: "students", icon: Users },
    { name: "Verify Institutes", value: "verify", icon: FileEdit },
  ]
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-gray-900 text-white w-64">
      <div className="flex h-16 items-center gap-2 border-b border-gray-800 px-6">
        <GraduationCap className="h-6 w-6 text-purple-500" />
      <span className="text-xl font-bold ">  <span className="text-xl font-bold  text-cyan-400">Smrithi</span>Cert</span>
      </div>
      <nav className="flex-1 overflow-auto p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.value}>
              <button
                onClick={() => handleTabChange(item.value)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === item.value
                    ? "bg-indigo-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-400">admin@example.edu</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 text-white border-0">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span  onClick={() => navigate("/")}>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">{SidebarContent()}</div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden absolute top-4 left-4 z-50">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          {SidebarContent()}
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden text-white  border-gray-800">
        <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-gray-900 px-4 md:px-6">
          <div className="flex items-center">
            <div className="md:hidden w-8"></div>
            
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold">
              {navigation.find((item) => item.value === activeTab)?.name || "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-gray-950 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
