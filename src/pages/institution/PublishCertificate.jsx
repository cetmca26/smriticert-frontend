import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PublishCertificate = () => {
  const navigate = useNavigate();

  // State for form fields
  const [studentId, setStudentId] = useState("");
  const [certificateType, setCertificateType] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [status, setStatus] = useState(""); // 'Pending' or 'Issued'

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the certificate data object
    const certificateData = {
      studentId,
      certificateType,
      issueDate,
      status,
    };

    // Handle certificate publishing logic here, e.g., saving to the backend
    // For now, we just log the certificate data
    console.log("Certificate Published: ", certificateData);

    // Redirect to institution dashboard or records after publishing
    navigate("/institution-dashboard/records");
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800">Publish Certificate</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Student ID</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter Student ID"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Certificate Type</label>
          <input
            type="text"
            value={certificateType}
            onChange={(e) => setCertificateType(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter Certificate Type"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Issue Date</label>
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Status</option>
            <option value="Issued">Issued</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Publish Certificate
          </button>
        </div>
      </form>
    </div>
  );
};

export default PublishCertificate;