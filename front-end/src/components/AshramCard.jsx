import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { farmers } from "../data/farmers";

function FarmerDetailPage() {
  const { farmerId } = useParams();
  const farmer = farmers.find((f) => f.id === parseInt(farmerId || "0"));

  if (!farmer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Farmer not found
          </h2>
          <Link to="/" className="text-green-600 hover:text-green-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

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
              <p className="text-gray-700">📞 {farmer.contact}</p>
              <p className="text-gray-700">📍 {farmer.location}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Farm Details
              </h3>
              <p className="text-gray-700">
                Products Available: {farmer.products.length}
              </p>
              <p className="text-gray-700">
                Categories:{" "}
                {farmer.products
                  .map((p) => p.category)
                  .filter((v, i, a) => a.indexOf(v) === i)
                  .join(", ")}
              </p>
            </div>
          </div>

          {farmer.description && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                About
              </h3>
              <p className="text-gray-700">{farmer.description}</p>
            </div>
          )}
        </div>

        {/* Farmer's Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Products from {farmer.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {farmer.products.map((product) => (
              <ProductCard key={product.id} product={product} farmerId={farmer.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerDetailPage;
