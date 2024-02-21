import React, { useState } from "react";
import SearchAirportComponent from "../SearchAirportComponent/SearchAirportComponent";

function SearchComponent() {
  const [selectedAirports, setSelectedAirports] = useState([]);

  const handleSelectAirport = (selectedAirport) => {
    // Maneja la lógica para almacenar el aeropuerto seleccionado en el array
    setSelectedAirports([...selectedAirports, selectedAirport]);
  };

  return (
    <>
      <SearchAirportComponent
        onSelectAirport={handleSelectAirport}
        placeholder={"Desde"}
        maxAirports={3}
      />

      <SearchAirportComponent
        onSelectAirport={handleSelectAirport}
        placeholder={"A"}
        maxAirports={3}
      />
    </>
  );
}

export default SearchComponent;
