"use client"

import { useState } from "react"
import { Download, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function StudentsList() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data
  const students = [
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@example.com",
      studentId: "STU20230001",
      enrollmentDate: "2023-01-15",
      courses: 3,
      certificates: 2,
    },
    {
      id: "2",
      name: "Emma Johnson",
      email: "emma.j@example.com",
      studentId: "STU20230002",
      enrollmentDate: "2023-02-03",
      courses: 2,
      certificates: 1,
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael.b@example.com",
      studentId: "STU20230003",
      enrollmentDate: "2023-02-20",
      courses: 1,
      certificates: 0,
    },
    {
      id: "4",
      name: "Sophia Williams",
      email: "sophia.w@example.com",
      studentId: "STU20230004",
      enrollmentDate: "2023-03-05",
      courses: 3,
      certificates: 3,
    },
    {
      id: "5",
      name: "James Davis",
      email: "james.d@example.com",
      studentId: "STU20230005",
      enrollmentDate: "2023-03-18",
      courses: 2,
      certificates: 1,
    },
    {
      id: "6",
      name: "Olivia Miller",
      email: "olivia.m@example.com",
      studentId: "STU20230006",
      enrollmentDate: "2023-04-02",
      courses: 1,
      certificates: 0,
    },
    {
      id: "7",
      name: "William Wilson",
      email: "william.w@example.com",
      studentId: "STU20230007",
      enrollmentDate: "2023-04-15",
      courses: 2,
      certificates: 1,
    },
  ]

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-xl">Students Directory</CardTitle>
            <CardDescription>Manage and view all registered students</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative mb-6">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search by name, email or ID..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="rounded-md border border-gray-800 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>ID</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">Enrollment Date</TableHead>
                <TableHead className="text-center">Courses</TableHead>
                <TableHead className="text-center">Certificates</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                          <User className="h-4 w-4 text-indigo-500" />
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-xs text-gray-500 md:hidden">{student.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{student.studentId}</TableCell>
                    <TableCell className="hidden md:table-cell">{student.email}</TableCell>
                    <TableCell className="hidden md:table-cell">{student.enrollmentDate}</TableCell>
                    <TableCell className="text-center">{student.courses}</TableCell>
                    <TableCell className="text-center">
                      {student.certificates > 0 ? (
                        <Badge variant="outline" className="bg-indigo-900/20 text-indigo-300 border-indigo-800">
                          {student.certificates}
                        </Badge>
                      ) : (
                        <span className="text-gray-500">0</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                    No students found matching your search
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
