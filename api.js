import axios from 'axios';

export const fetchFlights = async(departure,destination,date) =>{
  try{
    const reponse = await axios.get("https://sky-scrapper.p.rapidapi.com/v1/flights",{
      headers:{
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
      },
      params:{
        origin:departure,
        destination:destination,
        departureDate:date,
        adults:1,
      }

    });
    return Response.data
  }
  catch(error){
    console.error('Error Fetching Flights:',error)
    return null;
  }
}