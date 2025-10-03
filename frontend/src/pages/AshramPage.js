import React, { useEffect, useState } from "react";

function AshramPage() {
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

  if (loading) return <p className="p-4 text-center">Loading ashrams...</p>;
  if (error) return <p className="p-4 text-center text-black-600">Error: {error}</p>;
  if (!ashrams.length) return <p className="p-4 text-center">No ashrams found.</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-black-700">Ashram Directory</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {ashrams.map((ashram) => (
          <div
            key={ashram._id}
            className="border-2 border-black-600 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 bg-white"
          >
            <h2 className="text-xl font-bold text-black-700 mb-3">{ashram.name}</h2>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Address:</span>{" "}
              {ashram.address || "Not available"}
            </p>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Mobile:</span>{" "}
              {ashram.mobile && ashram.mobile.length > 0
                ? ashram.mobile.join(", ")
                : "Not available"}
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Crops / Plants:</span>{" "}
              {ashram.cropDiversity || "No details available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AshramPage;
