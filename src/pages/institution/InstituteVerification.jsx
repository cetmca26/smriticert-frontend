"use client";

import { useState } from "react";
import { Eye, Check, X } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function InstituteVerification() {
  const [selectedInstitute, setSelectedInstitute] = useState(null);

  const institutes = [
    {
      id: "1",
      name: "TechVille Institute",
      type: "Private College",
      established: "2010",
      address: "456 Tech Street, Innovation City",
      email: "admin@techville.edu",
      phone: "(555) 678-1234",
      website: "www.techville.edu",
      description: "TechVille Institute focuses on cutting-edge education in software and electronics.",
    },
    {
      id: "2",
      name: "Green Valley University",
      type: "Public University",
      established: "1995",
      address: "789 Green Blvd, Ecology Town",
      email: "info@greenvalley.edu",
      phone: "(555) 321-9876",
      website: "www.greenvalley.edu",
      description: "Green Valley University is known for its environmental science programs.",
    },
  ];

  const handleVerify = () => {
    alert(`Verified: ${selectedInstitute?.name}`);
    setSelectedInstitute(null);
  };

  const handleReject = () => {
    alert(`Rejected: ${selectedInstitute?.name}`);
    setSelectedInstitute(null);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Institute Verification</h2>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle>Pending Verification</CardTitle>
          <CardDescription>Review and verify institution applications</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Institute Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Established</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {institutes.map((institute) => (
                <TableRow key={institute.id}>
                  <TableCell>{institute.name}</TableCell>
                  <TableCell>{institute.type}</TableCell>
                  <TableCell>{institute.established}</TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedInstitute(institute)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] bg-gray-900 border-gray-800 text-white">
                        <DialogHeader>
                          <DialogTitle>{selectedInstitute?.name}</DialogTitle>
                          <DialogDescription>Review institute details before verification.</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <p><strong>Type:</strong> {selectedInstitute?.type}</p>
                          <p><strong>Established:</strong> {selectedInstitute?.established}</p>
                          <p><strong>Email:</strong> {selectedInstitute?.email}</p>
                          <p><strong>Phone:</strong> {selectedInstitute?.phone}</p>
                          <p><strong>Website:</strong> {selectedInstitute?.website}</p>
                          <p><strong>Address:</strong> {selectedInstitute?.address}</p>
                          <p><strong>Description:</strong> {selectedInstitute?.description}</p>
                        </div>
                        <DialogFooter>
                          <Button variant="destructive" onClick={handleReject}>
                            <X className="mr-2 h-4 w-4" />
                            Reject
                          </Button>
                          <Button onClick={handleVerify}>
                            <Check className="mr-2 h-4 w-4" />
                            Verify
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
