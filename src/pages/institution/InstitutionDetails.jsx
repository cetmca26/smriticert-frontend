"use client"

import React, { useState } from "react"
import { Building, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function InstitutionDetails({ isEditable }) {
  const [isEditing, setIsEditing] = useState(false)
  const [institutionData, setInstitutionData] = useState({
    name: "Westlake University",
    type: "Private University",
    established: "1985",
    address: "123 Education Ave, Academic City, AC 12345",
    email: "admin@westlake.edu",
    phone: "(555) 123-4567",
    website: "www.westlake.edu",
    description:
      "Westlake University is a premier institution dedicated to excellence in education and research across multiple disciplines.",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInstitutionData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // Removed the toast notification
    // You can add your custom logic here instead of the toast
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          <Building className="h-5 w-5 text-indigo-500" />
          <div>
            <CardTitle>Institution Details</CardTitle>
            <CardDescription>Information about your institution</CardDescription>
          </div>
        </div>
        {isEditable && !isEditing && (
          <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
            Edit Details
          </Button>
        )}
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Institution Name</Label>
            {isEditing ? (
              <Input id="name" name="name" value={institutionData.name} onChange={handleChange} />
            ) : (
              <p className="text-sm font-medium">{institutionData.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Institution Type</Label>
            {isEditing ? (
              <Input id="type" name="type" value={institutionData.type} onChange={handleChange} />
            ) : (
              <p className="text-sm font-medium">{institutionData.type}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="established">Established</Label>
            {isEditing ? (
              <Input id="established" name="established" value={institutionData.established} onChange={handleChange} />
            ) : (
              <p className="text-sm font-medium">{institutionData.established}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            {isEditing ? (
              <Input id="email" name="email" value={institutionData.email} onChange={handleChange} />
            ) : (
              <p className="text-sm font-medium">{institutionData.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            {isEditing ? (
              <Input id="phone" name="phone" value={institutionData.phone} onChange={handleChange} />
            ) : (
              <p className="text-sm font-medium">{institutionData.phone}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            {isEditing ? (
              <Input id="website" name="website" value={institutionData.website} onChange={handleChange} />
            ) : (
              <p className="text-sm font-medium">{institutionData.website}</p>
            )}
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Address</Label>
            {isEditing ? (
              <Input id="address" name="address" value={institutionData.address} onChange={handleChange} />
            ) : (
              <p className="text-sm font-medium">{institutionData.address}</p>
            )}
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">Description</Label>
            {isEditing ? (
              <Textarea
                id="description"
                name="description"
                value={institutionData.description}
                onChange={handleChange}
                rows={3}
              />
            ) : (
              <p className="text-sm">{institutionData.description}</p>
            )}
          </div>
        </div>
      </CardContent>
      {isEditing && (
        <CardFooter className="flex justify-end space-x-2 border-t border-gray-800 pt-4">
          <Button variant="outline" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
