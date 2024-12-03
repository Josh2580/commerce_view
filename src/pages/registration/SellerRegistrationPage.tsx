import React, { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";

export const SellerRegistrationPage: React.FC = () => {
  const [step, setStep] = useState(1);

  const steps = [
    "Personal Information",
    "Store Details",
    "Banking Details",
    "Confirmation",
  ];

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="font-bold text-xl text-gray-800">YourBrand</div>
          <div className="flex items-center gap-4">
            <a
              href="#help"
              className="text-blue-600 hover:underline text-sm flex items-center"
            >
              <FiHelpCircle className="mr-1" /> Help Center
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 mt-6">
        {/* Left Panel */}
        <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Steps</h3>
          <ul className="space-y-2">
            {steps.map((s, index) => (
              <li
                key={index}
                className={`flex items-center p-2 rounded-md ${
                  index + 1 === step
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span
                  className={`mr-2 w-6 h-6 rounded-full flex items-center justify-center font-semibold ${
                    index + 1 === step
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {index + 1}
                </span>
                {s}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Panel */}
        <main className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {steps[step - 1]}
          </h2>

          {step === 1 && (
            <div>
              {/* Personal Info Step */}
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {/* Additional fields */}
            </div>
          )}

          {step === 2 && (
            <div>
              {/* Store Details Step */}
              <label
                htmlFor="store"
                className="block text-sm font-medium text-gray-700"
              >
                Store Name
              </label>
              <input
                type="text"
                id="store"
                placeholder="Enter your store name"
                className="block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {/* Additional fields */}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              disabled={step === 1}
            >
              Previous
            </button>
            {step < steps.length ? (
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Submit
              </button>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-12 py-4 text-center text-sm text-gray-500">
        © 2024 YourBrand. All rights reserved. Terms and Privacy apply.
      </footer>
    </div>
  );
};
