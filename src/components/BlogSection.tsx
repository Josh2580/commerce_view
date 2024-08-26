import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Top 10 Gadgets to Buy in 2024",
    excerpt: "Discover the must-have gadgets for the upcoming year...",
    image: "https://via.placeholder.com/150?text=Top+Gadgets",
    link: "/blog/top-10-gadgets-2024",
  },
  {
    title: "How to Choose the Best Laptop for Work",
    excerpt: "A comprehensive guide to finding the perfect laptop...",
    image: "https://via.placeholder.com/150?text=Best+Laptop",
    link: "/blog/best-laptop-for-work",
  },
  {
    title: "Benefits of Smart Home Devices",
    excerpt: "Learn how smart home devices can improve your lifestyle...",
    image: "https://via.placeholder.com/150?text=Smart+Home",
    link: "/blog/smart-home-devices",
  },
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link
              to={post.link}
              key={index}
              className="block bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-700">
                  {post.title}
                </h3>
                <p className="text-gray-500 mt-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
