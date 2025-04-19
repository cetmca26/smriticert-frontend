"use client"

import { useState } from "react"
import {
  Award,
  BarChart3,
  ChevronDown,
  GraduationCap,
  LogOut,
  Menu,
  Palette,
  Settings,
  Share2,
  User,
  UserCircle,
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useNavigate } from "react-router-dom";


export function StudentDashboardLayout({ children, activeTab, setActiveTab }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: "Portfolio", value: "portfolio", icon: UserCircle },
    { name: "Certificates", value: "certificates", icon: Award },
    { name: "Analytics", value: "analytics", icon: BarChart3 },
    { name: "Theme Settings", value: "theme", icon: Palette },
    { name: "Sharing Options", value: "sharing", icon: Share2 },
  ]

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSidebarOpen(false)
  }
  const navigate = useNavigate();

  const Sidebar = () => (
    <div className="flex h-full flex-col bg-gray-900 text-white">
      <div className="flex h-16 items-center gap-2 border-b border-gray-800 px-6">
        <GraduationCap className="h-6 w-6 text-indigo-500" />
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
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John Smith</p>
            <p className="text-xs text-gray-400">john.smith@example.com</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56  text-white border-0">
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
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <Sidebar />
      </div>

      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="absolute left-4 top-3 md:hidden z-50 text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden text-white">
        <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-gray-900 px-4 md:px-6">
          <div className="flex items-center md:hidden">
            <div className="w-8"></div> {/* Spacer for mobile menu button */}
            <h1 className="ml-4 text-xl font-bold">SmrithiCert</h1>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold">
              {navigation.find((item) => item.value === activeTab)?.name || "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className=" bg-purple-900">
              <Share2 className="mr-2 h-4 w-4" />
              Share Portfolio
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-gray-950 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
