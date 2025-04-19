import React, { useState } from 'react'
import  { DashboardLayout } from "./DashboardLayout";
import { InstitutionDetails }  from "./InstitutionDetails";
import { InstituteVerification }  from "./InstituteVerification";
import { VerificationProgress } from "./VerificationProgress";
import  { CourseManagement }  from "./CourseManagement";
import  { CertificatePublishing }  from "./CertificatePublishing";
import { StudentsList } from "./StudentsList";

function InstitutionDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === "overview" && (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4  rounded-mdshadow-sm">
            <VerificationProgress />
          </div>
          <div className="p-4  rounded-md  shadow-sm">
            <InstitutionDetails isEditable={false} />
          </div>
        </div>
      )}

      {activeTab === "institution" && (
        <div className="p-4  rounded-md shadow-sm">
          <InstitutionDetails isEditable={true} />
        </div>
      )}

      {activeTab === "courses" && (
        <div className="p-4  rounded-md shadow-sm">
          <CourseManagement />
        </div>
      )}

      {activeTab === "certificates" && (
        <div className="p-4  rounded-md   shadow-sm">
          <CertificatePublishing />
        </div>
      )}

      {activeTab === "students" && (
        <div className="p-4  rounded-md shadow-sm">
          <StudentsList />
        </div>
      )}
      {activeTab === "verify" && (
        <div className="p-4  rounded-md shadow-sm">
          <InstituteVerification />
        </div>
      )}
    </DashboardLayout>
  )
}

export default InstitutionDashboard