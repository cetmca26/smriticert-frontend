import React, { useState } from "react";

const institutionsData = [
  {
    name: "Stanford University",
    country: "United States",
    connections: 248,
    verifiedRecords: 52,
  },
  {
    name: "University of Cambridge",
    country: "United Kingdom",
    connections: 186,
    verifiedRecords: 41,
  },
  {
    name: "University of Tokyo",
    country: "Japan",
    connections: 173,
    verifiedRecords: 28,
  },
  {
    name: "ETH Zurich",
    country: "Switzerland",
    connections: 154,
    verifiedRecords: 33,
  },
];

const GlobalNetworks = () => {
  const [search, setSearch] = useState("");

  const filteredInstitutions = institutionsData.filter((inst) =>
    inst.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Global Network</h2>

      {/* Metrics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <MetricCard label="Connected Institutions" value="56" change="+3 in the last month" />
        <MetricCard label="Global Reach" value="23 Countries" change="5 continents covered" />
        <MetricCard label="Cross-Verifications" value="328" change="+45 this month" />
        <MetricCard label="Pending Requests" value="6" change="-2 from last week" />
      </div>

      {/* Institution Network Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Institution Network
          </h3>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Invite Institution
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search institutions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input w-full md:w-64"
          />
          <select className="input w-full md:w-40">
            <option value="">Sort</option>
            <option value="name">Name</option>
            <option value="connections">Connections</option>
          </select>
          <select className="input w-full md:w-40">
            <option value="">Filter</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredInstitutions.map((inst, idx) => (
            <InstitutionCard key={idx} {...inst} />
          ))}
        </div>
      </div>

      {/* Global Map Visualization */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Global Presence</h3>
        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
          <span className="text-gray-600 dark:text-gray-300">Interactive global map visualization would be displayed here</span>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ label, value, change }) => (
  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
    <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{value}</h4>
    <p className="text-xs text-green-600 dark:text-green-400">{change}</p>
  </div>
);

const InstitutionCard = ({ name, country, connections, verifiedRecords }) => (
  <div className="p-4 bg-white dark:bg-gray-800 border rounded-lg shadow-md flex flex-col justify-between">
    <div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{country}</p>
      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
        {connections} connections<br />
        {verifiedRecords} records verified
      </p>
    </div>
    <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-fit">
      View Profile
    </button>
  </div>
);

export default GlobalNetworks;
