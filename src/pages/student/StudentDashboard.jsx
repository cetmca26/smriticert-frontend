import React from 'react'

import { useState } from "react"
import { StudentDashboardLayout } from "./student-dashboard-layout"
import { StudentPortfolio } from "./student-portfolio"
import { StudentCertificates } from "./student-certificates"
import { StudentAnalytics } from "./student-analytics"
import { StudentThemeSettings } from "./student-theme-settings"
import { StudentSharingOptions } from "./student-sharing-options"



function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("portfolio")
  return (
    <StudentDashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
    {activeTab === "portfolio" && <StudentPortfolio />}
    {activeTab === "certificates" && <StudentCertificates />}
    {activeTab === "analytics" && <StudentAnalytics />}
    {activeTab === "theme" && <StudentThemeSettings />}
    {activeTab === "sharing" && <StudentSharingOptions />}
  </StudentDashboardLayout>
  )
}

export default StudentDashboard