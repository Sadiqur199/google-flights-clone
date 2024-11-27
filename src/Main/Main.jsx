import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Component/Navbar/Navbar";
import SearchResults from "../Component/SrarchResult/SearchResult";


const Main = () => {
  const [airports, setAirports] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredAirport, setFilteredAirport] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [suggestions, setSuggestions] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(
          "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
          {
            params: { query: "new", locale: "en-US" },
            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
              "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
            },
          }
        );
        setAirports(response.data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error.response || error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchValue) => {
    const filteredSuggestions = airports.filter(
      (airport) =>
        airport.skyId.toLowerCase().includes(searchValue.toLowerCase()) ||
        airport.presentation.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    const exactMatch = filteredSuggestions.find(
      (airport) =>
        airport.skyId.toLowerCase() === searchValue.toLowerCase() ||
        airport.presentation.title.toLowerCase() === searchValue.toLowerCase()
    );
    setFilteredAirport(exactMatch || null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        suggestions={suggestions}
        setFilteredAirport={setFilteredAirport}
      />
      {/* Main Content */}
      <div className="p-6">
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : (
          <SearchResults
            airports={airports}
            filteredAirport={filteredAirport}
            searchInput={searchInput}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
