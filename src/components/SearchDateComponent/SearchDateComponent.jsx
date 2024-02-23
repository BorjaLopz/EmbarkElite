import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import CalendarComponent from "../CalendarComponent/CalendarComponent";

function SearchDateComponent() {
  const [selectedDepartureDate, setSelectedDepartureDate] = useState(null);
  const [selectedArrivalDate, setSelectedArrivalDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [onlyOneWay, setOnlyOneWay] = useState(false);

  const handleCheckboxOneWay = () => {
    setOnlyOneWay(!onlyOneWay);
  };

  const handleDepartureDate = (date) => {
    console.log(`date: ${date}`);
  };

  const handleArrivalDate = (date) => {
    console.log(`date: ${date}`);
  };

  const handleSelectDate = (date) => {
    if (onlyOneWay) {
      setSelectedDepartureDate(date);
      setSelectedArrivalDate("");
    } else {
      if (selectedDepartureDate && selectedArrivalDate) {
        setSelectedDepartureDate(date);
        setSelectedArrivalDate(null);
      } else if (selectedDepartureDate && !selectedArrivalDate) {
        setSelectedArrivalDate(date);
      } else {
        setSelectedDepartureDate(date);
      }
    }

    console.log(`date: ${date}`);
    console.log(`selectedDepartureDate: ${selectedDepartureDate}`);
    console.log(`selectedArrivalDate: ${selectedArrivalDate}`);
  };

  // useEffect(() => {
  //   // Acciones adicionales después de que los estados se han actualizado
  //   console.log(
  //     "Estados actualizados:",
  //     selectedDepartureDate,
  //     selectedArrivalDate
  //   );
  // }, [selectedDepartureDate, selectedArrivalDate]);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleOnFocus = () => {
    setIsCalendarOpen(true);
  };

  const handleOnBlur = () => {
    setIsCalendarOpen(false);
  };

  // Función para formatear la fecha en DD/MM/AA
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <section id="dateSection">
        <section
          className={`dateSearchSection ${onlyOneWay ? "lastSearch" : ""}`}
        >
          <input
            type="text"
            placeholder="Añadir fecha"
            readOnly
            // onClick={toggleCalendar}
            onFocus={handleOnFocus}
            // onBlur={handleOnBlur}
            value={
              selectedDepartureDate ? formatDate(selectedDepartureDate) : ""
            }
          />

          <p id="tagInput">Ida</p>
        </section>
        {!onlyOneWay && (
          <section className="dateSearchSection lastSearch">
            <input
              type="text"
              placeholder="Añadir fecha"
              readOnly
              onFocus={handleOnFocus}
              // onBlur={handleOnBlur}
              value={selectedArrivalDate ? formatDate(selectedArrivalDate) : ""}
            />

            <p id="tagInput">Vuelta</p>
          </section>
        )}
        {isCalendarOpen && (
          <CalendarComponent
            onSelectDate={handleSelectDate}
            initialSelectedDate={selectedDepartureDate || new Date()}
            selectedDeparture={selectedDepartureDate}
            handleDepartureDate={handleDepartureDate}
            handleArrivalDate={handleArrivalDate}
            handleCheckboxOneWay={handleCheckboxOneWay}
            dates={{
              departure: selectedDepartureDate,
              arrival: selectedArrivalDate,
            }}
          />
        )}
      </section>
    </>
  );
}

export default SearchDateComponent;
