import React from "react";
import { useState, useEffect } from "react";

function Weather() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Rishikesh");
 

  useEffect(() => {
    const fetchapi = async () => {
      try {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=efb47ea84d75d3fa90e91c1914253856`
        const response = await fetch(url
      
          
        );
        if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    setCity(data);
      } catch (error) {
        console.log("ERROR while connecting:", error);
      };
      
        fetchapi();
      
    }
    
     }, [search]);

  const find = (e) => {
    e.preventDefault();
    setCity(search);
    setSearch("");

    
  };
  return (
    <>
   
          <div>
  <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
        <div>
            <form onSubmit={find}>
              <input
                type="text"
                id="city"
                placeholder="enter the city"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-lg border-solid border-blue border-8"
              />

              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 "
              >
                Search
              </button>
            </form>
          </div>
         
          <div className="font-bold text-xl">{city}</div>
          <div className="text-sm text-gray-500">time</div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <svg
              className="w-32 h-32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              
            </svg>
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">25</div>
            <div className="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up">Max temperature:</i>
                </span>
                <span className="text-sm font-light text-gray-500">28°C</span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down">Min temperature:</i>
                </span>
                <span className="text-sm font-light text-gray-500">20°C</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">9k/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">68%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">10km</div>
            </div>
          </div>
        </div>   
      </div>
      
          </div>
  
    </>
  );
}

export default Weather;
