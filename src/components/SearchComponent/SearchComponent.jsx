import React, { useState } from "react";
import SearchAirportComponentDeparture from "../SearchAirportComponentDeparture/SearchAirportComponentDeparture";
import SearchAirportComponentArrival from "../SearchAirportComponentArrival/SearchAirportComponentArrival";
import SearchDateComponent from "../SearchDateComponent/SearchDateComponent";
import "./style.css";
import SearchButtonComponent from "../SearchButtonComponent/SearchButtonComponent";

function SearchComponent() {
  const [selectedAirports, setSelectedAirports] = useState([]);

  const handleSelectAirport = (selectedAirport) => {
    // Maneja la lógica para almacenar el aeropuerto seleccionado en el array
    setSelectedAirports([...selectedAirports, selectedAirport]);
  };

  return (
    <section id="searchEngineComponents">
      <SearchAirportComponentDeparture
        onSelectAirport={handleSelectAirport}
        placeholder={"Desde"}
        maxAirports={3}
        className="firstSearch"
      />

      <SearchAirportComponentArrival
        onSelectAirport={handleSelectAirport}
        placeholder={"A"}
        maxAirports={3}
      />

      <SearchDateComponent />
      <SearchButtonComponent />
    </section>
  );
}

export default SearchComponent;
