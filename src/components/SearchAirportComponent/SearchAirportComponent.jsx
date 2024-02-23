import React, { useState } from "react";
import airportCodes from "../../airportsCodes.json";
import "./style.css";

const MAX_NUMBER_AIRPORTS = 6;

function SearchAirportComponent({
  onSelectAirport,
  placeholder,
  className = "",
  maxAirports = MAX_NUMBER_AIRPORTS,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [matchingAirports, setMatchingAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleOnChangeOrigin = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length >= 3) {
      const matches = airportCodes.filter((airport) =>
        airportMatchesQuery(airport, query.toLowerCase())
      );
      setMatchingAirports(matches.slice(0, maxAirports));
    } else {
      setMatchingAirports([]);
    }
  };

  const handleClearSelection = () => {
    onSelectAirport(null);
    setSelectedAirport(null);
    setSearchQuery("");
    setMatchingAirports([]);
  };

  const handleInputFocus = () => {
    setIsInputFocus(true);
  };

  // const handleOnBlur = () => {
  //   if (!selectedAirport) {
  //     setIsInputFocus(false);
  //     setSearchQuery("");
  //     setMatchingAirports([]);
  //   }
  // };

  const handleSelectAirport = (selectedAirport) => {
    onSelectAirport(selectedAirport);
    setSelectedAirport(selectedAirport);
    setMatchingAirports([]);
  };

  // Buscamos el nombre del pais, aeropuerto o ciudad
  const airportMatchesQuery = (airport, query) => {
    return (
      airport.country.toLowerCase().includes(query) ||
      airport.city.toLowerCase().includes(query) ||
      airport.name.toLowerCase().includes(query)
    );
  };
  return (
    <section className={`inputSearchSection ${className}`}>
      <input
        type="text"
        onChange={handleOnChangeOrigin}
        onFocus={handleInputFocus}
        // onBlur={handleOnBlur}
        value={
          selectedAirport
            ? `${selectedAirport.name} (${selectedAirport.iata_code})`
            : searchQuery
        }
        placeholder="País, ciudad o aeropuerto"
      />
      {selectedAirport && (
        <button id="buttonClear" onClick={() => handleClearSelection()}>
          <img src="/Icons/close.svg" alt="" />
        </button>
      )}
      <p id="tagInput">{placeholder}</p>

      {isInputFocus && matchingAirports.length > 0 && (
        <div id="listOfAirports">
          <ul>
            {matchingAirports.map((airport) => (
              <li
                key={airport.iata_code}
                onClick={() => handleSelectAirport(airport)}
              >
                {airport.name} - {airport.city} - {airport.iata_code}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default SearchAirportComponent;
