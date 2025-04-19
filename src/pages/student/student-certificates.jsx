"use client"

import { useState } from "react"
import { Award, Download, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function StudentCertificates() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  // Mock data
  const certificates = [
    {
      id: "1",
      title: "Computer Science Fundamentals",
      issuer: "Westlake University",
      issueDate: "2023-05-15",
      credentialId: "CERT-CSF-001",
      status: "active",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "2",
      title: "Advanced Data Structures",
      issuer: "Westlake University",
      issueDate: "2023-06-22",
      credentialId: "CERT-ADS-002",
      status: "active",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "3",
      title: "Web Development Bootcamp",
      issuer: "Tech Institute",
      issueDate: "2022-12-10",
      expiryDate: "2024-12-10",
      credentialId: "CERT-WDB-123",
      status: "active",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "4",
      title: "Python Programming",
      issuer: "CodeAcademy",
      issueDate: "2022-03-05",
      credentialId: "CA-PY-456",
      status: "active",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
  ]

  const filteredCertificates = certificates.filter(
    (certificate) =>
      certificate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      certificate.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      certificate.credentialId.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const viewCertificate = (certificate) => {
    setSelectedCertificate(certificate)
  }

  return (
    <div className="space-y-6 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Certificates</h2>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-xl">Certificates</CardTitle>
              <CardDescription>View and share your earned certificates</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search certificates..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="rounded-md border border-gray-800 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificate</TableHead>
                  <TableHead>Issuer</TableHead>
                  <TableHead className="hidden md:table-cell">Issue Date</TableHead>
                  <TableHead className="hidden md:table-cell">Credential ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCertificates.length > 0 ? (
                  filteredCertificates.map((certificate) => (
                    <TableRow key={certificate.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-900/20 border border-indigo-800/30">
                            <Award className="h-5 w-5 text-indigo-500" />
                          </div>
                          <div>
                            <p className="font-medium">{certificate.title}</p>
                            <p className="text-xs text-gray-500 md:hidden">{certificate.issuer}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{certificate.issuer}</TableCell>
                      <TableCell className="hidden md:table-cell">{certificate.issueDate}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <span className="font-mono text-xs">{certificate.credentialId}</span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            certificate.status === "active"
                              ? "bg-green-900/20 text-green-300 border-green-800"
                              : "bg-yellow-900/20 text-yellow-300 border-yellow-800"
                          }
                        >
                          {certificate.status === "active" ? "Active" : "Expired"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => viewCertificate(certificate)}>
                                <ExternalLink className="mr-2 h-3 w-3" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[700px] bg-gray-900 border-gray-800">
                              <DialogHeader>
                                <DialogTitle>{certificate.title}</DialogTitle>
                                <DialogDescription>Issued by {certificate.issuer}</DialogDescription>
                              </DialogHeader>
                              <div className="py-4">
                                <div className="rounded-md overflow-hidden border border-gray-800 mb-4">
                                  <img
                                    src={certificate.imageUrl || "/placeholder.svg"}
                                    alt={`${certificate.title} Certificate`}
                                    className="w-full h-auto"
                                  />
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <p className="text-gray-400">Credential ID</p>
                                    <p className="font-mono">{certificate.credentialId}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-400">Issue Date</p>
                                    <p>{certificate.issueDate}</p>
                                  </div>
                                  {certificate.expiryDate && (
                                    <div>
                                      <p className="text-gray-400">Expiry Date</p>
                                      <p>{certificate.expiryDate}</p>
                                    </div>
                                  )}
                                  <div>
                                    <p className="text-gray-400">Status</p>
                                    <Badge
                                      variant="outline"
                                      className={
                                        certificate.status === "active"
                                          ? "bg-green-900/20 text-green-300 border-green-800"
                                          : "bg-yellow-900/20 text-yellow-300 border-yellow-800"
                                      }
                                    >
                                      {certificate.status === "active" ? "Active" : "Expired"}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <DialogFooter className="gap-2">
                                <Button variant="outline">
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </Button>
                                <Button>
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Share
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-3 w-3" />
                            Download
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6 text-gray-500">
                      No certificates found matching your search
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
