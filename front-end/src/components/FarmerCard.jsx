// src/components/FarmerCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const FarmerCard = ({ farmer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="bg-green-100 rounded-full p-3 mr-4">
          <span className="text-green-600 text-2xl">👨‍🌾</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{farmer.name}</h3>
          <p className="text-gray-600">{farmer.location}</p>
        </div>
      </div>

      {/* Contact */}
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Contact:</span> {farmer.contact || "Not available"}
      </p>

      {/* Products preview */}
      {farmer.products && farmer.products.length > 0 && (
        <div className="mb-4">
          <span className="font-semibold">Products:</span>
          <ul className="list-disc list-inside mt-1 text-gray-700">
            {farmer.products.slice(0, 2).map((product, idx) => (
              <li key={idx}>{product.name}</li>
            ))}
            {farmer.products.length > 2 && <li>and more...</li>}
          </ul>
        </div>
      )}

      <Link
        to={`/farmers/${farmer._id}`}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
      >
        View Profile
      </Link>
    </div>
  );
};

export default FarmerCard;
