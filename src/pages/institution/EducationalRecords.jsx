import React from "react";

const EducationalRecords = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Educational Records</h1>
        <button className="text-blue-600 hover:underline">View All</button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Recent Records</h3>
        <table className="w-full text-left text-sm text-gray-600">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Student</th>
              <th className="p-2">Program</th>
              <th className="p-2">Date Issued</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Alex Johnson</td>
              <td className="p-2">Computer Science</td>
              <td className="p-2">Mar 20, 2025</td>
              <td className="p-2 text-green-600">Verified</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Maria Gomez</td>
              <td className="p-2">Business Admin</td>
              <td className="p-2">Apr 2, 2025</td>
              <td className="p-2 text-yellow-500">Pending</td>
            </tr>
            <tr>
              <td className="p-2">John Lee</td>
              <td className="p-2">Engineering</td>
              <td className="p-2">Apr 12, 2025</td>
              <td className="p-2 text-green-600">Verified</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EducationalRecords;