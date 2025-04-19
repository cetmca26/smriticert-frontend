"use client"

import { CheckCircle, Clock, FileCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function VerificationProgress() {
  const verificationStatus = {
    status: "in-progress",
    progress: 65,
    steps: [
      { name: "Application Submitted", completed: true, date: "Jan 15, 2023" },
      { name: "Document Verification", completed: true, date: "Feb 02, 2023" },
      { name: "Background Check", completed: true, date: "Feb 20, 2023" },
      { name: "Accreditation Review", completed: false, date: "In Progress" },
      { name: "Final Approval", completed: false, date: "Pending" },
    ],
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <FileCheck className="h-5 w-5 text-indigo-500" />
          <div>
            <CardTitle>Verification Status</CardTitle>
            <CardDescription>Current verification progress</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {verificationStatus.status === "pending" && <Clock className="h-5 w-5 text-yellow-500" />}
            {verificationStatus.status === "in-progress" && <Clock className="h-5 w-5 text-blue-500" />}
            {verificationStatus.status === "verified" && <CheckCircle className="h-5 w-5 text-green-500" />}
            <span className="font-medium capitalize">{verificationStatus.status.replace("-", " ")}</span>
          </div>
          <span className="text-sm font-medium">{verificationStatus.progress}%</span>
        </div>
        <Progress value={verificationStatus.progress} className="h-2 bg-gray-800 " />

        <div className="mt-6 space-y-4">
          {verificationStatus.steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div
                className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${
                  step.completed ? "bg-indigo-600" : "border border-gray-600"
                }`}
              >
                {step.completed && <CheckCircle className="h-3 w-3 text-white" />}
              </div>
              <div className="ml-3">
                <p className={`text-sm font-medium ${step.completed ? "text-white" : "text-gray-400"}`}>{step.name}</p>
                <p className="text-xs text-gray-500">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
