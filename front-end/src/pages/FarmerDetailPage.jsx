import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function FarmerDetailPage() {
  const { id } = useParams(); // matches /farmers/:id
  const [farmer, setFarmer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFarmer() {
      try {
        const res = await fetch(`http://localhost:5000/api/farmers/${id}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setFarmer(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFarmer();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-600 text-lg">Loading farmer details...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-600 text-lg">Error: {error}</p>
      </div>
    );

  if (!farmer)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-700 text-lg">Farmer not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="text-green-600 hover:text-green-800">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">{farmer.name}</span>
        </div>

        {/* Farmer Profile */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 rounded-full p-4 mr-6">
              <span className="text-green-600 text-4xl">👨‍🌾</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{farmer.name}</h1>
              <p className="text-gray-600 text-lg">{farmer.location}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-700">📞 {farmer.contact || "N/A"}</p>
              <p className="text-gray-700">📍 {farmer.location || "N/A"}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Farm Details
              </h3>
              <p className="text-gray-700">
                Products Available:{" "}
                {farmer.products ? farmer.products.length : 0}
              </p>
              <p className="text-gray-700">
                Categories:{" "}
                {farmer.products && farmer.products.length > 0
                  ? [
                      ...new Set(farmer.products.map((p) => p.category)),
                    ].join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>

          {farmer.description && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
              <p className="text-gray-700">{farmer.description}</p>
            </div>
          )}
        </div>

        {/* Farmer's Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Products from {farmer.name}
          </h2>
          {farmer.products && farmer.products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {farmer.products.map((product, index) => (
                <ProductCard key={index} product={product} farmerId={farmer._id} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No products listed by this farmer.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FarmerDetailPage;
