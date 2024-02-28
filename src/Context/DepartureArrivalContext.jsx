import { createContext, useContext, useState } from "react";

const DepartureArrivalContext = createContext();

export const DepartureArrivalProvide = ({ children }) => {
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);

  const contextValue = {
    departureLocation,
    setDepartureLocation,
    arrivalLocation,
    setArrivalLocation,
    departureDate,
    setDepartureDate,
    arrivalDate,
    setArrivalDate,
  };

  return (
    <DepartureArrivalContext.Provider value={contextValue}>
      {children}
    </DepartureArrivalContext.Provider>
  );
};

export const useDepartureArrivalContext = () => {
  return useContext(DepartureArrivalContext);
};
