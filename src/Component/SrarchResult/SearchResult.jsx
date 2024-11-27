import React from "react";

const SearchResults = ({ airports, filteredAirport, searchInput }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Display filtered result if search is performed */}
      {filteredAirport ? (
        <div className="bg-white shadow-md rounded-md p-4 ">
          <h3 className="text-lg font-bold">{filteredAirport.presentation.title || "Unknown Title"}</h3>
          <p className="text-gray-600">
            {filteredAirport.presentation.subtitle || "No Subtitle Available"}
          </p>
          <div className="mt-2 text-sm">
            <span className="block">Sky ID: {filteredAirport.skyId || "N/A"}</span>
            <span className="block">
              Suggestion: {filteredAirport.presentation.suggestionTitle || "N/A"}
            </span>
            <span className="block">
              Entity Type: {filteredAirport.navigation.entityType || "N/A"}
            </span>
          </div>
        </div>
      ) : searchInput ? (
        <p className="text-gray-600">No matching data found.</p>
      ) : (
        // Default view when no search is performed
        airports.map((airport, index) => (
          <div key={index} className="bg-white  shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold">{airport.presentation.title || "Unknown Title"}</h3>
            <p className="text-gray-600">
              {airport.presentation.subtitle || "No Subtitle Available"}
            </p>
            <div className="mt-2 text-sm">
              <span className="block">Sky ID: {airport.skyId || "N/A"}</span>
              <span className="block">
                Suggestion: {airport.presentation.suggestionTitle || "N/A"}
              </span>
              <span className="block">
                Entity Type: {airport.navigation.entityId || "N/A"}
              </span>
              <span className="block">
                Entity Type: {airport.navigation.entityType || "N/A"}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;