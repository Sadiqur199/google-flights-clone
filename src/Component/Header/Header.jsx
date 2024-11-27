import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [departure, setDeparture] = useState('');
  const [destination , setDestination] = useState('');
  const [date,setDate] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    onSearch(departure,destination,date)
  }

  return (
    <div className="bg-blue-500 p-6 text-white">
      <header>
        <form action="">
          <input
            type="text"
            placeholder="Departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="p-2 rounded border border-gray-300 focus:outline-none focus: ring-2 focus:ring-blue-300"
            required
          />

<input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-2 rounded border border-gray-300 focus:outline-none focus: ring-2 focus:ring-blue-300"
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 text-gray-400 rounded border border-gray-300 focus:outline-none focus: ring-2 focus:ring-blue-300"
            required
          />

          <button type="submit" className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-100">Search</button>
        </form>
      </header>
    </div>
  );
};

export default Header;
