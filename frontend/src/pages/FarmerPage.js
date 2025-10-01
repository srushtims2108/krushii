import React, { useEffect, useState } from "react";

function FarmerPage() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFarmers() {
      try {
        const res = await fetch("http://localhost:5000/api/farmers"); // use 127.0.0.1
        console.log("Fetch status:", res.status);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Data received from backend:", data);

        if (!Array.isArray(data)) {
          throw new Error("Backend did not return an array!");
        }

        setFarmers(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFarmers();
  }, []);

  if (loading) return <p>Loading farmers...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!farmers.length) return <p>No farmers found.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Farmers & Products</h1>
      {farmers.map((farmer) => (
        <div
          key={farmer._id}
          style={{
            border: "1px solid #ccc",
            margin: "1rem 0",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2>{farmer.name}</h2>
          <p>Contact: {farmer.contact || "Not available"}</p>
          <p>Location: {farmer.location || "Not available"}</p>
          <h3>Products:</h3>
          {farmer.products && farmer.products.length > 0 ? (
            <ul>
              {farmer.products.map((product, idx) => (
                <li key={idx}>
                  <strong>{product.name}</strong> ({product.category}) -{" "}
                  {product.description || "No description"}
                </li>
              ))}
            </ul>
          ) : (
            <p>No products listed.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FarmerPage;
