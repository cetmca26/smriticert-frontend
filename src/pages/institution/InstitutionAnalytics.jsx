import React from "react";

const InstitutionAnalytics = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800">Institution Analytics</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Performance Overview</h4>
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-bold">100+</p>
              <p className="text-sm text-gray-600">Students Enrolled</p>
            </div>
            <div>
              <p className="text-lg font-bold">75%</p>
              <p className="text-sm text-gray-600">Graduation Rate</p>
            </div>
          </div>
        </div>

        {/* Certificates Issued */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Certificates Issued</h4>
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-bold">150+</p>
              <p className="text-sm text-gray-600">Certificates Issued</p>
            </div>
            <div>
              <p className="text-lg font-bold">30%</p>
              <p className="text-sm text-gray-600">Pending Verification</p>
            </div>
          </div>
        </div>

        {/* Students' Performance */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Students' Performance</h4>
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-bold">85%</p>
              <p className="text-sm text-gray-600">Average Exam Score</p>
            </div>
            <div>
              <p className="text-lg font-bold">70%</p>
              <p className="text-sm text-gray-600">Pass Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for Graph/Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h4 className="text-xl font-semibold mb-4">Institution Performance Trends</h4>
        <div className="h-60 bg-gray-200 rounded-md">
          {/* This could be replaced with a chart component */}
          <p className="text-center text-gray-600 pt-24">Chart Goes Here</p>
        </div>
      </div>
    </div>
  );
};

export default InstitutionAnalytics;