import React from "react";

const InstitutionSupport = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50">
      <h2 className="text-2xl font-bold">Support & Resources</h2>
      <input
        type="text"
        placeholder="Search for help articles..."
        className="w-full px-4 py-2 border rounded-md shadow-sm"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h4>Getting Started with Blockchain Verification</h4>
          <p>Learn the basics of blockchain and its use in verification.</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h4>How to Issue Verified Credentials</h4>
          <p>Step-by-step guide to issuing verified credentials.</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h4>Ensuring Certificate Security</h4>
          <p>Protecting your credentials from fraudulent activities.</p>
        </div>
      </div>
    </div>
  );
};

export default InstitutionSupport;