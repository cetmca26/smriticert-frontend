import React, { useState } from "react";

const InstitutionProfile = () => {
  const [specializations, setSpecializations] = useState(["Engineering", "Business"]);
  const [newSpec, setNewSpec] = useState("");

  const addSpecialization = () => {
    if (newSpec.trim()) {
      setSpecializations([...specializations, newSpec.trim()]);
      setNewSpec("");
    }
  };

  const handleSave = () => {
    // Placeholder logic — replace with real save functionality
    alert("Institution profile saved!");
  };

  return (
    <section className="p-6 md:p-10 bg-white dark:bg-gray-900 rounded-lg">
      <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Institution Profile
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Basic Information
          </h4>
          <div className="flex items-center space-x-6">
            <img
              className="w-24 h-24 rounded-full object-cover border-2 border-indigo-600"
              src="https://via.placeholder.com/150"
              alt="Institution Logo"
            />
            <div className="space-y-3 w-full">
              <input
                type="text"
                placeholder="Institution Name"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                defaultValue="Global University"
              />
              <input
                type="text"
                placeholder="Accreditation ID"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                defaultValue="ACC-987654"
              />
              <input
                type="email"
                placeholder="Official Email"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                defaultValue="contact@globaluni.edu"
              />
            </div>
          </div>
        </div>

        {/* Contact & Website Info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Contact & Web Presence
          </h4>
          <div className="space-y-3">
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Contact Person"
              defaultValue="Dr. Lisa Thompson"
            />
            <input
              type="tel"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Phone Number"
              defaultValue="+1 555-1234-567"
            />
            <input
              type="url"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Website URL"
              defaultValue="https://globaluni.edu"
            />
          </div>
        </div>

        {/* Institution Type */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Institution Details
          </h4>
          <div className="space-y-3">
            <select className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white">
              <option>University</option>
              <option>College</option>
              <option>Training Institute</option>
              <option>Certification Body</option>
            </select>
            <textarea
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              rows="4"
              placeholder="Brief Description"
              defaultValue="Global University is committed to delivering quality education and producing world-class graduates in various disciplines."
            />
          </div>
        </div>

        {/* Specializations Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Specializations
          </h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {specializations.map((spec, idx) => (
              <span
                key={idx}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm dark:bg-indigo-800 dark:text-indigo-100"
              >
                {spec}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="text"
              className="flex-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Add specialization..."
              value={newSpec}
              onChange={(e) => setNewSpec(e.target.value)}
            />
            <button
              onClick={addSpecialization}
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-10">
        <button
          onClick={handleSave}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow transition duration-200"
        >
          Save Changes
        </button>
      </div>
    </section>
  );
};

export default InstitutionProfile;