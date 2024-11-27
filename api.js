import axios from 'axios';

export const fetchFlights = async (departure, destination, date) => {
  try {
    const response = await axios.get(
      "https://sky-scrapper.p.rapidapi.com/v1/flights/searchAirport", // Updated endpoint
      {
        headers: {
          'X-RapidAPI-Key': '87da0421b8msh892eed53424f292p1e3bd2jsn9cfd26d8dbb4',
          'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
        },
        params: {
          originSkyId: departure,    // Use SkyId instead of airport code
          destinationSkyId: destination, // Use SkyId instead of airport code
          fromDate: date,  // Use proper parameter name for date
          currency: "USD",
        },
      }
    );
    console.log('API Response:', response.data); // Log the response
    return response.data;
  } catch (error) {
    console.error('Error Fetching Flights:', error.response || error.message);
    return null;
  }
};
