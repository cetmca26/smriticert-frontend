import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const steps = [
  {
    title: "Basic Information",
    fields: ["institutionName", "email", "password", "confirm password"],
  },
  {
    title: "Location & Contact",
    fields: ["address", "city", "state", "website"],
  },
  {
    title: "Institution Details",
    fields: ["type", "tier", "yearEstablished", "accreditation"],
  },
  {
    title: "Courses & Programs",
    fields: ["coursesOffered"],
  },
];

const InstitutionRegister = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    institutionName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    website: "",
    type: "",
    tier: "",
    yearEstablished: "",
    accreditation: "",
    coursesOffered: [],
    newCourseName: "",
    newCourseId: "",
    newAggregation: "",
  });

  const validateStep = () => {
    const fields = steps[currentStep].fields;
    const newErrors = {};

    fields.forEach((field) => {
      const value = formData[field];
      if (!value || (Array.isArray(value) && value.length === 0)) {
        newErrors[field] = `${field
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())} is required`;
      }

      if (field === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors.email = "Invalid email format";
        }
      }

      if (field === "confirmPassword" && value !== formData.password) {
        newErrors["confirmPassword"] = "Passwords do not match";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateStep()) return;
  
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        const response = await fetch(`${BACKEND_URL}auth/register/institution`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            institutionName: formData.institutionName,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            website: formData.website,
            type: formData.type,
            tier: formData.tier,
            yearEstablished: formData.yearEstablished,
            accreditation: formData.accreditation,
            coursesOffered: formData.coursesOffered,
          }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message || "Registration failed");
        }
  
        alert("Institution registered successfully!");
        navigate("/login");
      } catch (err) {
        alert(err.message);
      }
    }
  };
  

  const currentStepFields = steps[currentStep].fields;

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen py-26 px-4">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Institution Registration
          </h1>
          <p className="text-sky-200 mb-6 text-lg">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full mx-2 ${
                index === currentStep
                  ? "bg-sky-500"
                  : index < currentStep
                  ? "bg-green-500"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStepFields.map((field) => (
            <div key={field}>
              {field === "tier" ? (
                <select
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
                  value={formData.tier}
                  onChange={(e) =>
                    setFormData({ ...formData, tier: e.target.value })
                  }
                >
                  <option value="">Select Tier</option>
                  <option value="1">Tier 1</option>
                  <option value="2">Tier 2</option>
                  <option value="3">Tier 3</option>
                </select>
              ) : field === "coursesOffered" ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Course Name"
                      className="p-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50"
                      value={formData.newCourseName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          newCourseName: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Course ID"
                      className="p-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50"
                      value={formData.newCourseId}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          newCourseId: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Aggregation"
                      className="p-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50"
                      value={formData.newAggregation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          newAggregation: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                    onClick={() => {
                      if (
                        formData.newCourseName.trim() &&
                        formData.newCourseId.trim()
                      ) {
                        setFormData({
                          ...formData,
                          coursesOffered: [
                            ...formData.coursesOffered,
                            {
                              name: formData.newCourseName,
                              id: formData.newCourseId,
                              aggregation: formData.newAggregation,
                            },
                          ],
                          newCourseName: "",
                          newCourseId: "",
                          newAggregation: "",
                        });
                      } else {
                        alert("Course Name and ID are required.");
                      }
                    }}
                  >
                    Add Course
                  </button>

                  <ul className="list-disc list-inside text-white space-y-2">
                    {formData.coursesOffered.map((course, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center"
                      >
                        <span>
                          {course.name} (ID: {course.id}, Agg:{" "}
                          {course.aggregation || "N/A"})
                        </span>
                        <button
                          type="button"
                          className="text-red-400 text-sm ml-2"
                          onClick={() => {
                            const updatedCourses = [
                              ...formData.coursesOffered,
                            ];
                            updatedCourses.splice(idx, 1);
                            setFormData({
                              ...formData,
                              coursesOffered: updatedCourses,
                            });
                          }}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "password" ||
                          field === "confirm password"
                        ? "password"
                        : "text"
                    }
                    placeholder={field
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                    className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50"
                    value={formData[field] || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                  />
                  {errors[field] && (
                    <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
                  )}
                </>
              )}
            </div>
          ))}

          <div className="flex justify-between pt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded"
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className={`px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded ${
                currentStep === 0 ? "ml-auto" : ""
              }`}
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstitutionRegister;
