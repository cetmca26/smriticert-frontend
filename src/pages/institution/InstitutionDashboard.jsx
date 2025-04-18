import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const InstitutionDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white h-full p-4 transition-width duration-300 ${isSidebarOpen ? "w-64" : "w-20"}`}>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white mb-4"
        >
          {isSidebarOpen ? "<" : ">"}
        </button>
        {isSidebarOpen && (
          <div>
            <h2 className="text-xl font-bold mb-4">Institution Menu</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/institution-dashboard">Dashboard</Link>
              </li>
              <li><Link to="/institution-dashboard/publish-certificate">Publish Certificate</Link></li>

              <li>
                <Link to="/institution-dashboard/verification-pending">Pending Verification</Link>
              </li>
              <li>
                <Link to="/institution-dashboard/add-course">Add New Course</Link>
              </li>
              <li>
                <Link to="/institution-dashboard/records">Educational Records</Link>
              </li>
              <li>
                <Link to="/institution-dashboard/analytics">Analytics</Link>
              </li>
              <li>
                <Link to="/institution-dashboard/support">Support</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <h1 className="text-3xl font-semibold mb-6">Institution Dashboard</h1>

        {/* Default Content when no route is active */}
        <div className="text-lg text-gray-700 mb-6">
          <p>
            Welcome to the Institution Dashboard! Please select a section from the sidebar to view more details.
          </p>
        </div>

        {/* This renders the child routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default InstitutionDashboard;