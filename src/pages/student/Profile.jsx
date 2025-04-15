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

  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Edit Profile</h3>

      {/* Profile Photo + Basic Info */}
      <div className="flex items-center space-x-6 mb-8">
        <img
          className="w-24 h-24 rounded-full object-cover border-2 border-indigo-600"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div className="space-y-2 w-full">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" defaultValue="John Doe" />
          <input type="text" placeholder="Professional Title" className="w-full p-2 border rounded" defaultValue="Frontend Developer" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" defaultValue="john@example.com" />
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Education</h4>
        <button className="mb-4 text-sm text-indigo-500 hover:underline">+ Add Education</button>
        <div className="space-y-2">
          <input type="text" className="w-full p-2 border rounded" placeholder="Institution" defaultValue="University of Technology" />
          <input type="text" className="w-full p-2 border rounded" placeholder="Year" defaultValue="2020 - 2024" />
          <input type="text" className="w-full p-2 border rounded" placeholder="Degree/Certificate" defaultValue="B.Tech in CS" />
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Work Experience</h4>
        <button className="mb-4 text-sm text-indigo-500 hover:underline">+ Add Experience</button>
        <div className="space-y-2">
          <input type="text" className="w-full p-2 border rounded" placeholder="Company" defaultValue="Tech Solutions Inc." />
          <input type="text" className="w-full p-2 border rounded" placeholder="Duration" defaultValue="2022 - Present" />
          <input type="text" className="w-full p-2 border rounded" placeholder="Position" defaultValue="Frontend Developer" />
          <textarea className="w-full p-2 border rounded" rows="3" placeholder="Description"></textarea>
        </div>
      </div>

      {/* Bio */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Bio</h4>
        <textarea className="w-full p-2 border rounded" rows="4" placeholder="Tell others about yourself..."></textarea>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Skills</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Add a skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button onClick={addSkill} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
