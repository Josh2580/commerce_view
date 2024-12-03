import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginMutation } from "../features/auth/authApi"; // Adjust the path if needed
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [errorMessage, setErrorMessage] = useState(""); // State to capture errors
  const [loginApi, { isLoading, isError }] = useLoginMutation(); // RTK query mutation hook

  // console.log("MyCurrentAccess: ", MyCurrentAccess);

  // Handle form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous error messages
    setErrorMessage("");
    const loginFormData = new FormData();
    loginFormData.append("email", email);
    loginFormData.append("password", password);

    try {
      // Perform the login mutation
      const { access } = await loginApi(loginFormData).unwrap();
      if (access) {
        dispatch(setCredentials(access));
      }
      // Handle successful login (you may want to store the user data in Redux)

      // Redirect or update UI on success (you can use React Router for this)
      // Example: Navigate to home page after successful login
      navigate(-1);
    } catch (error) {
      // Handle any error (e.g., invalid login credentials)
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state
            />
          </div>
          {isError && (
            <p className="text-red-500 text-sm mt-2">Error: {errorMessage}</p>
          )}
          <div className="text-right">
            <Link
              to="/forget-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
