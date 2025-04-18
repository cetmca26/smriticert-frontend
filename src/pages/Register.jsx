import React from 'react';
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    
    <div className="bg-white dark:bg-gray-950">
        {/* Back Button */}
    <button
      onClick={() => navigate("/")}
      className="absolute top-6 left-6 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition z-auto"
    >
      ← Back
    </button>
    <div className="min-h-screen flex items-center justify-center pt-4 ">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Choose Registration Type
        </h1>
        <p className="text-center text-sky-200 mb-12 max-w-2xl mx-auto">
          Select whether you want to register as a student looking for institutions
          or as an institution offering courses to students.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Card */}
          <div className="p-6 bg-black/30 backdrop-blur-xl border border-white/10 hover:bg-black/40 transition-all cursor-pointer group rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Student</h2>
            <p className="text-sky-200 mb-6">
              Register as a student to explore courses, track your applications, and
              manage your educational journey.
            </p>
            <button
              onClick={() => window.location.href = '/register/student'}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md font-medium group-hover:translate-y-[-2px] transition-all"
            >
              Register as Student
            </button>
          </div>

          {/* Institution Card */}
          <div className="p-6 bg-black/30 backdrop-blur-xl border border-white/10 hover:bg-black/40 transition-all cursor-pointer group rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Institution</h2>
            <p className="text-sky-200 mb-6">
              Register your institution to showcase courses, connect with students,
              and grow your educational community.
            </p>
            <button
              onClick={() => window.location.href = '/register/institution'}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md font-medium group-hover:translate-y-[-2px] transition-all"
            >
              Register as Institution
            </button>
          </div>
        </div>

        <p className="text-center text-white/60 mt-8">
          Already have an account?{" "}
          <a
            href="/"
            className="text-sky-400 hover:text-sky-300 hover:underline"
          >
            Login
          </a>
        </p>
        
      </div>
    </div>
    </div>

  );
}

export default Register;
