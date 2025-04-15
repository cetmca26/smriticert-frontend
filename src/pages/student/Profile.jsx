import React, { useState } from "react";

const Profile = () => {
  const [skills, setSkills] = useState(["React", "JavaScript"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleSave = () => {
    // Placeholder logic — replace with real save functionality
    alert("Profile saved!");
  };

  return (
    <section className="p-6 md:p-10 bg-white dark:bg-gray-900 rounded-lg">
      <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Edit Profile
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Basic Info</h4>
          <div className="flex items-center space-x-6">
            <img
              className="w-24 h-24 rounded-full object-cover border-2 border-indigo-600"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <div className="space-y-3 w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                defaultValue="John Doe"
              />
              <input
                type="text"
                placeholder="Professional Title"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                defaultValue="Frontend Developer"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                defaultValue="john@example.com"
              />
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Education</h4>
          <button className="mb-4 text-sm text-indigo-500 hover:underline">+ Add Education</button>
          <div className="space-y-3">
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Institution"
              defaultValue="University of Technology"
            />
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Year"
              defaultValue="2020 - 2024"
            />
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Degree/Certificate"
              defaultValue="B.Tech in CS"
            />
          </div>
        </div>

        {/* Work Experience Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Work Experience</h4>
          <button className="mb-4 text-sm text-indigo-500 hover:underline">+ Add Experience</button>
          <div className="space-y-3">
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Company"
              defaultValue="Tech Solutions Inc."
            />
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Duration"
              defaultValue="2022 - Present"
            />
            <input
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Position"
              defaultValue="Frontend Developer"
            />
            <textarea
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>
        </div>

        {/* Bio Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Bio</h4>
          <textarea
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            rows="4"
            placeholder="Tell others about yourself..."
          ></textarea>
        </div>

        {/* Skills Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 lg:col-span-2">
          <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Skills</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm dark:bg-indigo-800 dark:text-indigo-100"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="text"
              className="flex-1 p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Add a skill..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button
              onClick={addSkill}
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

export default Profile;
