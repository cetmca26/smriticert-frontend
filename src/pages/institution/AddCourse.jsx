import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate();

  // State for form fields
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState(""); // Duration in weeks or months
  const [courseInstructor, setCourseInstructor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the course data object
    const newCourse = {
      courseName,
      courseDescription,
      courseDuration,
      courseInstructor,
    };

    // Handle course creation logic here, e.g., saving to the backend
    console.log("New Course Added: ", newCourse);

    // Redirect to institution dashboard after adding course
    navigate("/institution-dashboard");
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800">Add New Course</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Name</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter Course Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Course Description</label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter Course Description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Course Duration (in weeks)</label>
          <input
            type="number"
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter Course Duration"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Course Instructor</label>
          <input
            type="text"
            value={courseInstructor}
            onChange={(e) => setCourseInstructor(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter Instructor Name"
          />
        </div>

        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;