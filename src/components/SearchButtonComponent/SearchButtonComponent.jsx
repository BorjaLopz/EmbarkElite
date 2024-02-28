import React from "react";
import "./style.css";
import { useDepartureArrivalContext } from "../../Context/DepartureArrivalContext";

function SearchButtonComponent() {
  const { departureLocation, arrivalLocation, arrivalDate, departureDate } =
    useDepartureArrivalContext();

  const handleOnClick = () => {
    console.log(departureLocation);
    console.log(arrivalLocation);
    console.log(departureDate);
    console.log(arrivalDate);
  };
  return (
    <button id="buttonSearch" onClick={handleOnClick}>
      buscar
    </button>
  );
}

export default SearchButtonComponent;
