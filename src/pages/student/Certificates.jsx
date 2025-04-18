import React from "react";

const certificateData = [
  {
    id: 1,
    name: "Blockchain Fundamentals",
    issuer: "Coursera",
    date: "March 10, 2024",
    certificateURL: "https://example.com/certificate1"
  },
  {
    id: 2,
    name: "Full Stack Web Development",
    issuer: "edX",
    date: "Jan 25, 2024",
    certificateURL: "https://example.com/certificate2"
  },
  {
    id: 3,
    name: "UI/UX Design Specialization",
    issuer: "Google",
    date: "Feb 15, 2025",
    certificateURL: "https://example.com/certificate3"
  },
];

const Certificates = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Certificates</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificateData.map((cert) => (
          <div key={cert.id} className="p-5 bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded-xl hover:shadow-md transition">
            <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{cert.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Issuer: <span className="font-medium">{cert.issuer}</span></p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Date: <span className="font-medium">{cert.date}</span></p>
            <a
              href={cert.certificateURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
