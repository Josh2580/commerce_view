import React from "react";

const testimonials = [
  {
    customer: "John Doe",
    feedback: "Great service and fast delivery. Highly recommend!",
    avatar: "https://via.placeholder.com/50?text=JD",
  },
  {
    customer: "Jane Smith",
    feedback:
      "The product quality is amazing. I am very satisfied with my purchase.",
    avatar: "https://via.placeholder.com/50?text=JS",
  },
  {
    customer: "Alice Johnson",
    feedback: "Excellent customer support. Will definitely shop here again.",
    avatar: "https://via.placeholder.com/50?text=AJ",
  },
];

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.customer}
                className="mx-auto w-16 h-16 rounded-full mb-4"
              />
              <p className="text-lg font-medium text-gray-700">
                {testimonial.customer}
              </p>
              <p className="text-gray-500 mt-2">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
