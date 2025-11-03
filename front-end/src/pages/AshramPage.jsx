import React, { useEffect, useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaLeaf, FaUser } from "react-icons/fa";

const AshramPage = () => {
  const [ashrams, setAshrams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAshrams() {
      try {
        const res = await fetch("http://localhost:5000/api/ashrams");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setAshrams(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAshrams();
  }, []);

  if (loading) return <p className="p-6 text-center text-gray-600">Loading ashrams...</p>;
  if (error) return <p className="p-6 text-center text-red-600">Error: {error}</p>;
  if (!ashrams.length) return <p className="p-6 text-center text-gray-600">No ashrams found.</p>;

  return (
    <div className="min-h-screen bg-green-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
          🌱 Ashram Directory
        </h1>

        {/* Ashram Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ashrams.map((ashram) => (
            <div
              key={ashram._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-6 flex flex-col justify-between"
            >
              {/* Ashram Name */}
              <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                🌿 {ashram.ashramName || "Ashram"}
              </h2>

              {/* Contact Person */}
              <p className="text-gray-700 mb-2 flex items-center gap-2">
                <FaUser className="text-green-600" /> 
                <span className="font-medium">Contact:</span> {ashram.name || "N/A"}
              </p>

              {/* Address */}
              <p className="text-gray-700 mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-600" /> 
                <span className="font-medium">Address:</span> {ashram.address || "N/A"}
              </p>

              {/* Mobile Numbers */}
              <p className="text-gray-700 mb-2 flex items-center gap-2">
                <FaPhone className="text-green-600" /> 
                <span className="font-medium">Mobile:</span>{" "}
                {ashram.mobile && ashram.mobile.length > 0
                  ? ashram.mobile.join(", ")
                  : "N/A"}
              </p>

              {/* Crop Diversity */}
              <p className="text-gray-700 mt-3 flex items-center gap-2">
                <FaLeaf className="text-green-600" /> 
                <span className="font-medium">Crops / Plants:</span>{" "}
                {ashram.cropDiversity || "No details available"}
              </p>

              {/* View More / Action Button */}
              <div className="mt-6">
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AshramPage;
