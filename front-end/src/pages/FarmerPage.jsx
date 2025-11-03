import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FarmersPage = () => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/farmers")
      .then((res) => res.json())
      .then((data) => setFarmers(data))
      .catch((err) => console.error("Error fetching farmers:", err));
  }, []);

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
          🌿 Farmers Directory
        </h1>

        {farmers.length === 0 ? (
          <p className="text-center text-gray-600">No farmers found.</p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {farmers.map((farmer) => {
              const productCount = farmer.products?.length || 0;
              const categories = [
                ...new Set(farmer.products?.map((p) => p.category)),
              ];

              return (
                <div
                  key={farmer._id}
                  className="bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-xl transition-transform transform hover:-translate-y-1 p-6 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-green-700 mb-2">
                      {farmer.name}
                    </h2>
                    <p className="text-gray-600 text-sm mb-1">
                      📍 <span className="font-medium">{farmer.location}</span>
                    </p>
                    <p className="text-gray-600 text-sm mb-1">
                      📞 <span className="font-medium">{farmer.contact}</span>
                    </p>
                    <p className="text-gray-500 mt-2 text-sm line-clamp-3">
                      {farmer.description || "No description provided."}
                    </p>
                  </div>

                  <div className="mt-4 bg-green-50 rounded-xl p-4">
                    <div className="flex justify-between text-sm text-gray-700">
                      <span className="font-medium">Total Products:</span>
                      <span className="text-green-700 font-semibold">
                        {productCount}
                      </span>
                    </div>

                    <div className="mt-2">
                      <p className="font-medium text-sm text-gray-700">
                        Categories:
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {categories.length > 0 ? (
                          categories.map((cat, i) => (
                            <span
                              key={i}
                              className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs font-medium"
                            >
                              {cat}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-500 text-xs">None</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 text-center">
                    <Link
                      to={`/farmers/${farmer._id}`}
                      className="inline-block w-full bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-xl hover:bg-green-700 transition"
                    >
                      View Profile →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmersPage;
