import React, { useState } from "react";

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccess(true);

    // Simulate API call (replace with actual backend call)
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {!success ? (
          <>
            {/* Header */}
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Forgot Password
            </h2>
            <p className="text-gray-600 text-sm text-center mt-2">
              Enter your registered email address below, and we’ll send you a
              link to reset your password.
            </p>

            {/* Form */}
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@example.com"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600">Success!</h2>
            <p className="text-gray-600 mt-2">
              A password reset link has been sent to{" "}
              <span className="font-medium">{email}</span>. Please check your
              email for further instructions.
            </p>
            <button
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              onClick={() => setSuccess(false)}
            >
              Reset Another Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// export default ForgotPassword;
