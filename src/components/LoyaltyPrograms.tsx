import React from "react";

const loyaltyPrograms = [
  {
    id: "1",
    name: "Gold Member",
    points: "1,500",
    benefits: ["Free shipping", "Exclusive discounts"],
  },
  {
    id: "2",
    name: "Silver Member",
    points: "500",
    benefits: ["Early access to sales"],
  },
];

export const LoyaltyPrograms: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Loyalty Programs</h2>
      <div className="space-y-4">
        {loyaltyPrograms.map((program) => (
          <div key={program.id} className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">{program.name}</h3>
            <p className="text-gray-700">Points: {program.points}</p>
            <p className="text-gray-700">Benefits:</p>
            <ul className="list-disc pl-5">
              {program.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
