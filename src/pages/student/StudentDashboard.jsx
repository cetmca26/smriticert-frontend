import React, { useState } from 'react';
import Profile from "./Profile";
import Certificates from "./Certificates";
import Settings from "./Settings";
import GlobalNetworks from "./GlobalNetworks";
import Support from "./Supportstudent";

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white">
      <div className="p-6 text-center font-bold text-lg border-b border-gray-700">
        Student Portal
      </div>
      <nav className="p-6">
        <ul className="space-y-4">
          {/* Dashboard */}
          <li>
            <button
              onClick={() => setActiveTab("Dashboard")}
              className={`flex items-center p-2 w-full text-left hover:bg-gray-700 rounded ${
                activeTab === "Dashboard" && "bg-gray-700"
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 00-8 8v8h16v-8a8 8 0 00-8-8z" />
              </svg>
              Dashboard
            </button>
          </li>
          {/* Profile */}
          <li>
            <button
              onClick={() => setActiveTab("Profile")}
              className={`flex items-center p-2 w-full text-left hover:bg-gray-700 rounded ${
                activeTab === "Profile" && "bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a5 5 0 100-10 5 5 0 000 10zm-7 8a7 7 0 0114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Profile
            </button>
          </li>
          {/* Certificates */}
          <li>
            <button
              onClick={() => setActiveTab("Certificates")}
              className={`flex items-center p-2 w-full text-left hover:bg-gray-700 rounded ${
                activeTab === "Certificates" && "bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="16" height="12" x="2" y="4" rx="2" ry="2" />
                <path d="M8 8h4v2H8V8z" />
              </svg>
              Certificates
            </button>
          </li>
          {/* Settings */}
          <li>
            <button
              onClick={() => setActiveTab("Settings")}
              className={`flex items-center p-2 w-full text-left hover:bg-gray-700 rounded ${
                activeTab === "Settings" && "bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.3 1.046a1 1 0 00-2.6 0l-.283.74a5.997 5.997 0 00-1.377.8l-.74-.283a1 1 0 00-1.216.356l-.636 1.101a1 1 0 00.356 1.216l.74.283c-.01.23-.017.458-.017.691s.007.461.017.691l-.74.283a1 1 0 00-.356 1.216l.636 1.101a1 1 0 001.216.356l.74-.283c.424.306.88.555 1.377.8l.283.74a1 1 0 001.971 0l.283-.74c.497-.245.953-.494 1.377-.8l.74.283a1 1 0 001.216-.356l.636-1.101a1 1 0 00-.356-1.216l-.74-.283c.01-.23.017-.458.017-.691s-.007-.461-.017-.691l.74-.283a1 1 0 00.356-1.216l-.636-1.101a1 1 0 00-1.216-.356l-.74.283a5.997 5.997 0 00-1.377-.8l-.283-.74zM10 13a3 3 0 110-6 3 3 0 010 6z" />
              </svg>
              Settings
            </button>
          </li>
          {/* Global Network */}
          <li>
            <button
              onClick={() => setActiveTab("GlobalNetworks")}
              className={`flex items-center p-2 w-full text-left hover:bg-gray-700 rounded ${
                activeTab === "GlobalNetworks" && "bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 10a5 5 0 1010 0 5 5 0 10-10 0z" />
                <path d="M12 4a8 8 0 00-8 8v1h16v-1a8 8 0 00-8-8z" />
              </svg>
              Global Network
            </button>
          </li>
          
          {/* Support */}
          <li>
            <button
              onClick={() => setActiveTab("Support")}
              className={`flex items-center p-2 w-full text-left hover:bg-gray-700 rounded ${
                activeTab === "Support" && "bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 13a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h10a3 3 0 013 3v6z" />
                <path d="M8 9h4M8 13h2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Support
            </button>
          </li>
          {/* Logout */}
          <li>
            <button
              onClick={() => alert("Logging out...")}
              className="flex items-center p-2 w-full text-left hover:bg-gray-700 rounded"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h7a1 1 0 110 2H5v10h6a1 1 0 110 2H4a1 1 0 01-1-1V4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M13.293 9.293a1 1 0 011.414 0L17 11.586a1 1 0 010 1.414l-2.293 2.293a1 1 0 11-1.414-1.414L14.586 13H9a1 1 0 110-2h5.586l-1.293-1.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderComponent = () => {
    if (activeTab === "Dashboard") {
      return (
        <div>
          <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
          {/* Dashboard Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Profile Completion Card */}
            <div className="group relative p-8 rounded-xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex items-center space-x-6 mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-700 dark:text-white">Profile Completion</h3>
                  <p className="text-gray-500 dark:text-gray-400">75% complete</p>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Certificates Card */}
            <div className="group relative p-8 rounded-xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-green-500 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" />
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" strokeWidth="2" stroke="currentColor" fill="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-700 dark:text-white">Certificates</h3>
                  <p className="text-gray-500 dark:text-gray-400">7 certificates, 3 new</p>
                </div>
              </div>
            </div>

            {/* Profile Views Card */}
            <div className="group relative p-8 rounded-xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-purple-500 dark:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-700 dark:text-white">Profile Views</h3>
                  <p className="text-gray-500 dark:text-gray-400">128 views (24% increase)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "Profile") {
      return <Profile />;
    } else if (activeTab === "Certificates") {
      return <Certificates />;
    } 
      else if (activeTab === "Settings") {
        return <Settings />;
    } 
      else if (activeTab === "GlobalNetworks") {
      return <GlobalNetworks />;
    } else if (activeTab === "Analytics") {
      return <Analytics/>;
    } 
    else if (activeTab === "Support") {
      return <Support />;
    } else {
      return <div>Unknown Tab</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
