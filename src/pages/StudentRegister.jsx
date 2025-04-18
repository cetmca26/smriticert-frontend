import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const StudentRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      setErrors({});
      setApiError("");
      const res = await axios.post(`${BACKEND_URL}auth/register/student`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword, 
        phone: formData.phone,
        country: formData.country,
      });

      console.log("Registration successful:", res.data);
      navigate("/login");
    } catch (error) {
      console.error("API error:", error);
      if (error.response?.data?.message) {
        setApiError(error.response.data.message);
      } else {
        setApiError("Registration failed. Please try again.");
      }
    }
  };

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
            Student Registration
          </h1>
          <p className="text-sky-200 mb-6 text-lg">Please fill in your details</p>
        </div>

        {apiError && (
          <p className="text-red-500 text-center mb-4">{apiError}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Confirm Password", name: "confirmPassword", type: "password" },
            { label: "Phone", name: "phone", type: "text" },
            { label: "Country", name: "country", type: "text" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <input
                type={type}
                name={name}
                placeholder={label}
                className={`w-full p-3 rounded bg-white/10 border ${
                  errors[name] ? "border-red-500" : "border-white/20"
                } text-white placeholder:text-white/50`}
                value={formData[name]}
                onChange={(e) =>
                  setFormData({ ...formData, [name]: e.target.value })
                }
              />
              {errors[name] && (
                <p className="text-red-400 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
