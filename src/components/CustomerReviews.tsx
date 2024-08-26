import React from "react";

export const CustomerReviews: React.FC = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4 ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.39 2.82 1.03-6-4.37-4.26 6.05-.88L10 0l2.68 5.68 6.05.88-4.37 4.26 1.03 6z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500">(4 stars)</span>
          </div>
          <p className="text-gray-700">
            Great phone, fast performance, and beautiful design. I love the
            camera quality!
          </p>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < 5 ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.39 2.82 1.03-6-4.37-4.26 6.05-.88L10 0l2.68 5.68 6.05.88-4.37 4.26 1.03 6z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500">(5 stars)</span>
          </div>
          <p className="text-gray-700">
            The best iPhone I've ever used! Highly recommended.
          </p>
        </div>

        <div>
          <button className="btn btn-primary">Write a Review</button>
        </div>
      </div>
    </section>
  );
};
