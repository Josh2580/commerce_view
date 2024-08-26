import React, { useState } from "react";

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle newsletter signup logic
    alert(`Thank you for subscribing with ${email}`);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates and offers directly in your inbox.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-2 border border-gray-300 rounded-l-lg"
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
