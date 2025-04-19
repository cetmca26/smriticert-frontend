"use client"

import { useState } from "react"
import { BookOpen, Edit, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function CourseManagement() {
  const [courses, setCourses] = useState([
    {
      id: "1",
      name: "Computer Science Fundamentals",
      code: "CSF101",
      duration: "4 months",
      description: "Introduction to computer science principles and programming basics.",
      students: 124,
      certificates: 98,
    },
    {
      id: "2",
      name: "Advanced Data Structures",
      code: "ADS202",
      duration: "3 months",
      description: "In-depth study of data structures and algorithms for efficient problem solving.",
      students: 86,
      certificates: 72,
    },
    {
      id: "3",
      name: "Web Development Bootcamp",
      code: "WDB303",
      duration: "6 months",
      description: "Comprehensive training in modern web development technologies and practices.",
      students: 156,
      certificates: 132,
    },
  ])

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentCourse, setCurrentCourse] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    duration: "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddCourse = () => {
    const newCourse = {
      id: Date.now().toString(),
      name: formData.name,
      code: formData.code,
      duration: formData.duration,
      description: formData.description,
      students: 0,
      certificates: 0,
    }

    setCourses((prev) => [...prev, newCourse])
    setFormData({ name: "", code: "", duration: "", description: "" })
    setIsAddDialogOpen(false)
  }

  const handleEditCourse = () => {
    if (!currentCourse) return

    setCourses((prev) =>
      prev.map((course) =>
        course.id === currentCourse.id
          ? {
              ...course,
              name: formData.name,
              code: formData.code,
              duration: formData.duration,
              description: formData.description,
            }
          : course
      )
    )

    setIsEditDialogOpen(false)
    setCurrentCourse(null)
  }

  const handleDeleteCourse = (id) => {
    setCourses((prev) => prev.filter((course) => course.id !== id))
  }

  const openEditDialog = (course) => {
    setCurrentCourse(course)
    setFormData({
      name: course.name,
      code: course.code,
      duration: course.duration,
      description: course.description,
    })
    setIsEditDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Course Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] bg-gray-900 border-gray-800">
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
              <DialogDescription>Enter the details for the new course.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Course Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Introduction to Programming"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Course Code</Label>
                  <Input id="code" name="code" value={formData.code} onChange={handleChange} placeholder="e.g. CS101" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g. 3 months"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter course description"
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddCourse}>Add Course</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-2">
                  <BookOpen className="h-5 w-5 mt-1 text-indigo-500" />
                  <div>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>
                      {course.code} • {course.duration}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="icon" onClick={() => openEditDialog(course)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteCourse(course.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-4">{course.description}</p>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-500">Students</p>
                  <p className="font-medium">{course.students}</p>
                </div>
                <div>
                  <p className="text-gray-500">Certificates</p>
                  <p className="font-medium">{course.certificates}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-gray-900 border-gray-800">
          <DialogHeader>
            <DialogTitle>Edit Course</DialogTitle>
            <DialogDescription>Update the details for this course.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Course Name</Label>
              <Input id="edit-name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-code">Course Code</Label>
                <Input id="edit-code" name="code" value={formData.code} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-duration">Duration</Label>
                <Input id="edit-duration" name="duration" value={formData.duration} onChange={handleChange} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditCourse}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
