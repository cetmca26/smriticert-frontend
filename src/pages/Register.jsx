import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BACKEND_URL = import.meta.env.BACKEND_URL;

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await axios.post(`${BACKEND_URL}/auth/register`, {
        name,
        email,
        password,
        role,
      });

      if (res.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError(err.response.data?.msg || "Bad Request");
      } else {
        setError("Registration failed. Try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">


      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Register</h2>
          {/* Back Button */}
          <button
          type="button"
          onClick={() => navigate('/')}
          className="text-sm text-blue-600 hover:underline mb-2"
        >
          ← Back
        </button>
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Student</option>
            <option value="institution">Institution</option>
          </select>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <a
            onClick={() => navigate("/login")}
            className="cursor-pointer text-blue-600 hover:underline focus:outline-none"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
