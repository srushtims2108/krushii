import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FarmersPage = () => {
  const [farmers, setFarmers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFarmers, setFilteredFarmers] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/farmers")
      .then((res) => res.json())
      .then((data) => {
        setFarmers(data);
        setFilteredFarmers(data);
      })
      .catch((err) => console.error("Error fetching farmers:", err));
  }, []);

  // Translation function using MyMemory API
  const translateText = async (text, targetLang) => {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=en|${targetLang}`
      );
      const data = await response.json();
      return data.responseData.translatedText;
    } catch (error) {
      console.error("Translation error:", error);
      return text; // Return original text if translation fails
    }
  };

  // Debounce search to avoid too many API calls
  useEffect(() => {
    const searchWithTranslation = async () => {
      if (searchQuery.trim() === "") {
        setFilteredFarmers(farmers);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);

      // Original query
      const query = searchQuery.toLowerCase();

      // Translate to Kannada
      const kannadaQuery = await translateText(searchQuery, "kn");

      // Create array of search terms (original + translated)
      const searchTerms = [
        query,
        kannadaQuery.toLowerCase(),
      ];

      const filtered = farmers.filter((farmer) => {
        // Check if any search term matches
        return searchTerms.some((term) => {
          // Search in location
          const locationMatch = farmer.location?.toLowerCase().includes(term);

          // Search in product names and categories
          const productsMatch = farmer.products?.some((product) => {
            const nameMatch = product.name?.toLowerCase().includes(term);
            const categoryMatch = product.category?.toLowerCase().includes(term);
            return nameMatch || categoryMatch;
          });

          // Search in name
          const nameMatch = farmer.name?.toLowerCase().includes(term);

          // Search in description
          const descriptionMatch = farmer.description?.toLowerCase().includes(term);

          return locationMatch || productsMatch || nameMatch || descriptionMatch;
        });
      });

      setFilteredFarmers(filtered);
      setIsSearching(false);
    };

    // Debounce: wait 800ms after user stops typing
    const timeoutId = setTimeout(() => {
      searchWithTranslation();
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, farmers]);

  return (
    <div className="min-h-screen bg-green-50 py-6 sm:py-12 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 text-center mb-6">
          🌿 Farmers Directory
        </h1>

        {/* Search Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in English or Kannada (e.g., 'vegetables', 'Tumakuru', 'ತರಕಾರಿ')..."
              className="w-full px-5 py-4 pr-12 text-gray-700 bg-white border-2 border-green-200 rounded-2xl focus:outline-none focus:border-green-500 shadow-sm transition"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600">
              {isSearching ? (
                <svg
                  className="animate-spin h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}
            </div>
          </div>
          {searchQuery && !isSearching && (
            <p className="mt-3 text-sm text-gray-600 text-center">
              Found {filteredFarmers.length} farmer
              {filteredFarmers.length !== 1 ? "s" : ""} matching "{searchQuery}"
            </p>
          )}
          {isSearching && (
            <p className="mt-3 text-sm text-gray-500 text-center">
              Searching in both languages...
            </p>
          )}
        </div>

        {filteredFarmers.length === 0 && !isSearching ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {searchQuery
                ? `No farmers found matching "${searchQuery}"`
                : "No farmers found."}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-green-600 hover:text-green-700 font-medium underline"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFarmers.map((farmer) => {
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