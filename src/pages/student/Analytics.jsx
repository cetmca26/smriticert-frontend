import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const recordsData = [
  { month: "Jan", records: 40, verifications: 28 },
  { month: "Feb", records: 50, verifications: 35 },
  { month: "Mar", records: 70, verifications: 52 },
  { month: "Apr", records: 65, verifications: 60 },
  { month: "May", records: 85, verifications: 78 },
  { month: "Jun", records: 90, verifications: 84 },
];

const recordTypes = [
  { name: "Bachelor's", value: 45 },
  { name: "Master's", value: 28 },
  { name: "PhD", value: 12 },
  { name: "Certificate", value: 15 },
];

const verificationSources = [
  { month: "Jan", Employers: 20, Institutions: 10, Students: 10 },
  { month: "Feb", Employers: 25, Institutions: 5, Students: 5 },
  { month: "Mar", Employers: 30, Institutions: 15, Students: 7 },
  { month: "Apr", Employers: 28, Institutions: 18, Students: 14 },
  { month: "May", Employers: 40, Institutions: 25, Students: 13 },
  { month: "Jun", Employers: 50, Institutions: 20, Students: 14 },
];

const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"];

export default function Analytics() {
  return (
    <section className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Analytics & Reports</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Last 30 Days Overview</p>

      {/* Records & Verifications Chart */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Records & Verifications</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={recordsData}>
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="records" fill="#4f46e5" name="Records Issued" />
            <Bar dataKey="verifications" fill="#10b981" name="Verifications" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Record Type Distribution */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Record Types Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={recordTypes}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {recordTypes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Verification Sources Chart */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Verification Sources</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={verificationSources}>
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Employers" stackId="a" fill="#f59e0b" />
            <Bar dataKey="Institutions" stackId="a" fill="#4f46e5" />
            <Bar dataKey="Students" stackId="a" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
