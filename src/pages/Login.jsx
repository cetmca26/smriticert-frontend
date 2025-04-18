/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}auth/login`, { email, password });
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
    <div className="bg-white dark:bg-gray-950 min-h-screen py-26 px-4">
    <button
      onClick={() => navigate("/")}
      className="absolute top-6 left-6 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition"
    >
      ← Back
    </button>

    <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Login</h1>
        <p className="text-sky-200 mb-6 text-lg">Welcome back! Please login.</p>
      </div>

      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="w-full px-4 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded transition"
        >
          Register
        </button>
      </form>
    </div>
  </div>
  );
}

export default Login;
