import React from "react";

const Navbar = ({ searchInput, setSearchInput, handleSearch, suggestions, setFilteredAirport }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Flights</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by Sky ID or Title"
          className="p-2 rounded-md text-black"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        {searchInput && (
          <div className="absolute bg-white shadow-md rounded-md mt-2 w-full max-h-48 overflow-y-auto">
            {suggestions.length > 0 ? (
              suggestions.map((airport, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-200 text-black cursor-pointer"
                  onClick={() => {
                    setSearchInput(airport.presentation.title);
                    setFilteredAirport(airport);
                  }}
                >
                  {airport.presentation.title} ({airport.skyId})
                </div>
              ))
            ) : (
              <p className="p-2 text-gray-600">No results found</p>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
