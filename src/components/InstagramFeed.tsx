import React from "react";

const instagramPosts = [
  {
    image: "https://via.placeholder.com/150?text=Post+1",
    link: "https://www.instagram.com",
  },
  {
    image: "https://via.placeholder.com/150?text=Post+2",
    link: "https://www.instagram.com",
  },
  {
    image: "https://via.placeholder.com/150?text=Post+3",
    link: "https://www.instagram.com",
  },
  {
    image: "https://via.placeholder.com/150?text=Post+4",
    link: "https://www.instagram.com",
  },
];

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Follow Us on Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {instagramPosts.map((post, index) => (
            <a
              href={post.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
