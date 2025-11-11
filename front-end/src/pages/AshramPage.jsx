import React, { useEffect, useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaLeaf, FaUser, FaSearch } from "react-icons/fa";

const AshramPage = () => {
  const [ashrams, setAshrams] = useState([]);
  const [filteredAshrams, setFilteredAshrams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function fetchAshrams() {
      try {
        const res = await fetch("http://localhost:5000/api/ashrams");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setAshrams(data);
        setFilteredAshrams(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAshrams();
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

  // Handle bilingual search with translation
  useEffect(() => {
    const searchWithTranslation = async () => {
      if (searchTerm.trim() === "") {
        setFilteredAshrams(ashrams);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);

      // Original query
      const query = searchTerm.toLowerCase();

      // Translate to Kannada
      const kannadaQuery = await translateText(searchTerm, "kn");

      // Create array of search terms (original + translated)
      const searchTerms = [query, kannadaQuery.toLowerCase()];

      const filtered = ashrams.filter((ashram) => {
        // Check if any search term matches
        return searchTerms.some((term) => {
          // Search in address
          const addressMatch = ashram.address?.toLowerCase().includes(term);

          // Search in ashram name
          const nameMatch = ashram.ashramName?.toLowerCase().includes(term);

          // Search in contact person name
          const contactMatch = ashram.name?.toLowerCase().includes(term);

          // Search in crop diversity
          const cropMatch = ashram.cropDiversity?.toLowerCase().includes(term);

          return addressMatch || nameMatch || contactMatch || cropMatch;
        });
      });

      setFilteredAshrams(filtered);
      setIsSearching(false);
    };

    // Debounce: wait 800ms after user stops typing
    const timeoutId = setTimeout(() => {
      searchWithTranslation();
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, ashrams]);

  if (loading)
    return <p className="p-6 text-center text-gray-600">Loading ashrams...</p>;
  if (error)
    return <p className="p-6 text-center text-red-600">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-green-50 py-6 sm:py-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-green-800 mb-6">
          🌱 Ashram Directory
        </h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search in English or Kannada (e.g., 'Tumakuru', 'organic', 'ತುಮಕೂರು')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-4 pl-12 pr-12 text-lg border-2 border-green-300 rounded-full focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 text-xl" />
            
            {/* Loading spinner */}
            {isSearching && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="animate-spin h-5 w-5 text-green-600"
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
              </div>
            )}
          </div>

          {/* Search Results Count */}
          {!isSearching && (
            <p className="text-center text-gray-600 mt-3">
              {filteredAshrams.length === ashrams.length
                ? `Showing all ${ashrams.length} ashrams`
                : `Found ${filteredAshrams.length} ashram(s) matching "${searchTerm}"`}
            </p>
          )}
          
          {isSearching && (
            <p className="text-center text-gray-500 mt-3">
              Searching in both languages...
            </p>
          )}
        </div>

        {/* No Results Message */}
        {filteredAshrams.length === 0 && !isSearching && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">
              No ashrams found for "{searchTerm}"
            </p>
            <p className="text-gray-500 mt-2">
              Try searching with a different address or location
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Ashram Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredAshrams.map((ashram) => (
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
                <span className="font-medium">Contact:</span>{" "}
                {ashram.name || "N/A"}
              </p>

              {/* Address - Highlighted if matches search */}
              <p className="text-gray-700 mb-2 flex items-start gap-2">
                <FaMapMarkerAlt className="text-green-600 mt-1" />
                <span>
                  <span className="font-medium">Address:</span>{" "}
                  <span
                    className={
                      searchTerm &&
                      ashram.address
                        ?.toLowerCase()
                        .includes(searchTerm.toLowerCase())
                        ? "bg-yellow-200 px-1 rounded"
                        : ""
                    }
                  >
                    {ashram.address || "N/A"}
                  </span>
                </span>
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
              <p className="text-gray-700 mt-3 flex items-start gap-2">
                <FaLeaf className="text-green-600 mt-1" />
                <span>
                  <span className="font-medium">Crops / Plants:</span>{" "}
                  {ashram.cropDiversity || "No details available"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AshramPage;