/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = import.meta.env.BACKEND_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/login`, { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      if (res.data.user.role === "student") navigate("/student-dashboard");
      else navigate("/institution-dashboard");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">

     

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Login</h2>
          {/* Back Button */}
          <button
          type="button"
          onClick={() => navigate('/')}
          className="text-sm text-blue-600 hover:underline mb-2"
        >
          ← Back
        </button>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="cursor-pointer w-full px-4 py-2 mt-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
