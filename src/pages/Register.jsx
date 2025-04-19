 import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useMetaMask from "../hooks/useMetamask";
import { registerInstitution } from "../utils/contract";
const BACKEND_URL = import.meta.env.BACKEND_URL;

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [institutionCode, setInstitutionCode] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState("");
  const navigate = useNavigate();
  const { connect, sign, isConnected, currentAccount } = useMetaMask();
  // useEffect(() => {
  //   connect().then((r) => {
  //     console.log("Connected to MetaMask:", r);
  //     sign("Register to the platform").then((signature) => {
  //       console.log("Signature:", signature);
  //     });
  //   });
  // }, [connect, sign]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (role === "student") {
        // Student registration validation
        if (!name || !email || !password) {
          setError("All fields are required for student registration");
          setIsLoading(false);
          return;
        }

        // Register student with backend
        const res = await axios.post(`${BACKEND_URL}/auth/register`, {
          name,
          email,
          password,
          role,
        });

        if (res.status === 200) {
          navigate("/login");
        }
      } else if (role === "institution") {
        // Institution registration validation
        if (!name || !institutionCode) {
          setError("Institution name and code are required");
          setIsLoading(false);
          return;
        }

        if (!isConnected) {
          setError("Please connect your MetaMask wallet first");
          setIsLoading(false);
          return;
        }

        // Register institution on blockchain
        const result = await registerInstitution(name, institutionCode, logoUrl);
        setTxHash(result.transactionHash);
        
        // If email and password are provided, also register with backend
        // if (email && password) {
        //   try {
        //     await axios.post(`${BACKEND_URL}/auth/register`, {
        //       name,
        //       email,
        //       password,
        //       role,
        //       institutionId: result.institutionId.toString(),
        //       walletAddress: currentAccount
        //     });
        //   } catch (backendErr) {
        //     console.error("Backend registration failed, but blockchain registration succeeded", backendErr);
        //     // We don't set an error here since the blockchain registration was successful
        //   }
        // }
        
        // Don't navigate away immediately so user can see the transaction hash
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response && err.response.status === 400) {
        setError(err.response.data?.msg || "Bad Request");
      } else if (err.code === 4001) {
        setError("Transaction rejected by user");
      } else {
        setError(err.message || "Registration failed. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Register
        </h2>
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-sm text-blue-600 hover:underline mb-2"
        >
          ← Back
        </button>
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Student</option>
            <option value="institution">Institution</option>
          </select>
          
          {role === "student" && (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}
          
          {role === "institution" && (
            <>
              <input
                type="text"
                placeholder="Institution Code (required)"
                value={institutionCode}
                onChange={(e) => setInstitutionCode(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Logo URL (optional)"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>Registering as an institution will require a MetaMask wallet connection.</p>
                {!isConnected && (
                  <button
                    type="button"
                    onClick={connect}
                    className="mt-2 px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition duration-300"
                  >
                    Connect MetaMask
                  </button>
                )}
                {isConnected && (
                  <p className="mt-2">Connected with: {currentAccount.substring(0, 6)}...{currentAccount.substring(currentAccount.length - 4)}</p>
                )}
              </div>
            </>
          )}
          
          {txHash && (
            <div className="p-3 bg-green-100 text-green-800 rounded-md">
              <p>Transaction successful!</p>
              <p className="text-xs break-all">Transaction Hash: {txHash}</p>
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading || (role === "institution" && !isConnected)}
            className={`w-full px-4 py-2 text-white rounded-md transition duration-300 ${
              isLoading || (role === "institution" && !isConnected)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Processing..." : "Register"}
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
