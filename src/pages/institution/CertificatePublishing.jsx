"use client";

import { useState } from "react";
import { Download, Plus, Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function CertificatePublishing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isPublishDialogOpen, setIsPublishDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const courses = [
    { id: "1", name: "Computer Science Fundamentals" },
    { id: "2", name: "Advanced Data Structures" },
    { id: "3", name: "Web Development Bootcamp" },
  ];

  const students = [
    { id: "1", name: "John Smith", email: "john.smith@example.com", studentId: "STU20230001" },
    { id: "2", name: "Emma Johnson", email: "emma.j@example.com", studentId: "STU20230002" },
    { id: "3", name: "Michael Brown", email: "michael.b@example.com", studentId: "STU20230003" },
    { id: "4", name: "Sophia Williams", email: "sophia.w@example.com", studentId: "STU20230004" },
    { id: "5", name: "James Davis", email: "james.d@example.com", studentId: "STU20230005" },
  ];

  const [certificates, setCertificates] = useState([
    {
      id: "1",
      courseId: "1",
      courseName: "Computer Science Fundamentals",
      studentId: "STU20230001",
      studentName: "John Smith",
      issueDate: "2023-05-15",
      certificateId: "CERT-CSF-001",
      status: "published",
    },
    {
      id: "2",
      courseId: "2",
      courseName: "Advanced Data Structures",
      studentId: "STU20230002",
      studentName: "Emma Johnson",
      issueDate: "2023-06-22",
      certificateId: "CERT-ADS-002",
      status: "published",
    },
  ]);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePublishCertificate = () => {
    if (!selectedStudent || !selectedCourse) return;

    const course = courses.find((c) => c.id === selectedCourse);
    if (!course) return;

    const newCertificate = {
      id: Date.now().toString(),
      courseId: course.id,
      courseName: course.name,
      studentId: selectedStudent.studentId,
      studentName: selectedStudent.name,
      issueDate: new Date().toISOString().split("T")[0],
      certificateId: `CERT-${course.name.substring(0, 3).toUpperCase()}-${certificates.length + 1}`.padStart(3, "0"),
      status: "published",
    };

    setCertificates((prev) => [...prev, newCertificate]);
    setIsPublishDialogOpen(false);
    setSelectedStudent(null);
    setSelectedCourse("");
  };

  const selectStudent = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="space-y-6 ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Certificate Management</h2>
        <Dialog open={isPublishDialogOpen} onOpenChange={setIsPublishDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4 " />
              Publish Certificate
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-gray-900 border-gray-800 text-white">
            <DialogHeader>
              <DialogTitle>Publish New Certificate</DialogTitle>
              <DialogDescription>Select a student and course to publish a certificate.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="space-y-2">
                <Label>Course</Label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-800 text-white">
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Label>Student</Label>
                  <div className="relative flex-1">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      placeholder="Search by name or ID"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>

                <div className="max-h-60 overflow-auto rounded border border-gray-800">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Student ID</TableHead>
                        <TableHead className="w-[100px]">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStudents.length > 0 ? (
                        filteredStudents.map((student) => (
                          <TableRow
                            key={student.id}
                            className={selectedStudent?.id === student.id ? "bg-indigo-900/20" : undefined}
                          >
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.studentId}</TableCell>
                            <TableCell>
                              <Button
                                variant={selectedStudent?.id === student.id ? "default" : "outline"}
                                size="sm"
                                onClick={() => selectStudent(student)}
                              >
                                Select
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={3} className="text-center py-4 text-gray-500">
                            No students found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsPublishDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handlePublishCertificate} disabled={!selectedStudent || !selectedCourse}>
                Publish Certificate
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Published Certificates</CardTitle>
          <CardDescription>Manage certificates issued to students</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-4">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search certificates..." className="pl-8" />
          </div>

          <div className="rounded-md border border-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificate ID</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificates.map((certificate) => (
                  <TableRow key={certificate.id}>
                    <TableCell className="font-medium">{certificate.certificateId}</TableCell>
                    <TableCell>{certificate.studentName}</TableCell>
                    <TableCell>{certificate.courseName}</TableCell>
                    <TableCell>{certificate.issueDate}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-3 w-3" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Send className="mr-2 h-3 w-3" />
                          Send
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
