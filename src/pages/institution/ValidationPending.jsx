import React, { useState } from "react";

const VerificationPending = () => {
  // Example data for pending verification items
  const [pendingItems, setPendingItems] = useState([
    {
      id: 1,
      studentName: "Alex Johnson",
      course: "Computer Science",
      certificate: "Graduation Certificate",
      status: "Pending",
    },
    {
      id: 2,
      studentName: "Maria Gomez",
      course: "Business Administration",
      certificate: "Diploma Certificate",
      status: "Pending",
    },
    {
      id: 3,
      studentName: "John Lee",
      course: "Engineering",
      certificate: "Bachelor's Degree",
      status: "Pending",
    },
  ]);

  const handleApprove = (id) => {
    // Find the item by ID and update status to "Verified"
    setPendingItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: "Verified" } : item
      )
    );
  };

  const handleReject = (id) => {
    // Remove the item from the list
    setPendingItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800">Pending Verification</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h4 className="text-xl font-semibold mb-4">Verification Pending</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-2">Student Name</th>
                <th className="p-2">Course</th>
                <th className="p-2">Certificate</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">{item.studentName}</td>
                  <td className="p-2">{item.course}</td>
                  <td className="p-2">{item.certificate}</td>
                  <td className="p-2">
                    <span
                      className={`${
                        item.status === "Pending"
                          ? "text-yellow-500"
                          : "text-green-600"
                      } font-semibold`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button
                      className="px-4 py-1 text-sm bg-green-600 text-white rounded-md mr-2 hover:bg-green-700"
                      onClick={() => handleApprove(item.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="px-4 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
                      onClick={() => handleReject(item.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerificationPending;