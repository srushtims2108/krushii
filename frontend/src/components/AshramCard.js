import React from "react";

const AshramCard = ({ ashram }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 rounded-full p-3 mr-4">
          <span className="text-blue-600 text-2xl">🏡</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{ashram.name}</h3>
          <p className="text-gray-600">{ashram.address}</p>
        </div>
      </div>

      {/* Contact & Details */}
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-medium">Mobile:</span>{" "}
          {ashram.mobile && ashram.mobile.length > 0
            ? ashram.mobile.join(", ")
            : "Not available"}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Crops / Plants:</span>{" "}
          {ashram.crops || "No details available"}
        </p>
      </div>
    </div>
  );
};

export default AshramCard;
