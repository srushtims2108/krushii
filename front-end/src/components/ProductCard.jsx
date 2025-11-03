import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, farmerId }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="mb-3">
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {product.category}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {product.description || "No description available"}
      </p>
      <div className="flex justify-between items-center">
      </div>
    </div>
  );
}

export default ProductCard;
