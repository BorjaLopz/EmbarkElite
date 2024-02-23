import React, { useState } from "react";
import SearchAirportComponent from "../SearchAirportComponent/SearchAirportComponent";
import SearchDateComponent from "../SearchDateComponent/SearchDateComponent";
import "./style.css";

function SearchComponent() {
  const [selectedAirports, setSelectedAirports] = useState([]);

  const handleSelectAirport = (selectedAirport) => {
    // Maneja la lógica para almacenar el aeropuerto seleccionado en el array
    setSelectedAirports([...selectedAirports, selectedAirport]);
  };

  return (
    <section id="searchEngineComponents">
      <SearchAirportComponent
        onSelectAirport={handleSelectAirport}
        placeholder={"Desde"}
        maxAirports={3}
        className="firstSearch"
      />

      <SearchAirportComponent
        onSelectAirport={handleSelectAirport}
        placeholder={"A"}
        maxAirports={3}
      />

      <SearchDateComponent placeholder={"Ida"} />
    </section>
  );
}

export default SearchComponent;
