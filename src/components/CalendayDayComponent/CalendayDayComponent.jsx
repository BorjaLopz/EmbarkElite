import React, { useState } from "react";

function CalendayDayComponent({
  day,
  isToday,
  isPastDay,
  handleSelectDate,
  selectedDate,
  monthOffset,
  dates,
}) {
  const [isSelected, setIsSelected] = useState(false);

  console.log("dates");
  console.log(dates);

  // const handleClick = () => {
  //   const clickedDate = new Date(
  //     selectedDate.getFullYear(),
  //     selectedDate.getMonth() + monthOffset,
  //     day
  //   );

  //   handleSelectDate(clickedDate);

  //   setIsSelected(
  //     dates.departure &&
  //       clickedDate.toDateString() === dates.departure.toDateString()
  //   );
  //   // if (
  //   //   dates.departure &&
  //   //   clickedDate.toDateString() === dates.departure.toDateString()
  //   // ) {
  //   //   setIsSelected(true);
  //   // } else {
  //   //   setIsSelected(false);
  //   // }
  // };

  // const getDayClassName = () => {
  //   let classes = `calendar-day ${isToday ? "today" : ""} ${
  //     isPastDay && !isToday ? "past-day" : ""
  //   }`;

  //   // Agregar clase adicional si el día coincide con la fecha de salida
  //   if (
  //     dates.departure &&
  //     clickedDate.toDateString() === dates.departure.toDateString()
  //   ) {
  //     classes += " departure-day";
  //   }

  //   // Puedes agregar más lógica para otras fechas (por ejemplo, llegada)

  //   return classes;
  // };

  const handleClick = () => {
    const clickedDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + monthOffset,
      day
    );

    handleSelectDate(clickedDate);
    setIsSelected(
      dates.departure &&
        clickedDate.toDateString() === dates.departure.toDateString()
    );
  };

  const getDayClassName = () => {
    const clickedDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + monthOffset,
      day
    );

    let classes = `calendar-day ${isToday ? "today" : ""} ${
      isPastDay && !isToday ? "past-day" : ""
    }`;

    // Agregar clase adicional si el día coincide con la fecha de salida
    if (
      dates.departure &&
      clickedDate &&
      clickedDate.toDateString() === dates.departure.toDateString()
    ) {
      classes += "departureDay";
    }

    // Puedes agregar más lógica para otras fechas (por ejemplo, llegada)

    // Agregar clase adicional si el día coincide con la fecha de salida
    if (
      dates.arrival &&
      clickedDate &&
      clickedDate.toDateString() === dates.arrival.toDateString()
    ) {
      classes += "arrivalDay";
    }

    if (
      dates.departure &&
      dates.arrival &&
      clickedDate &&
      clickedDate > dates.departure &&
      clickedDate < dates.arrival
    ) {
      classes += " travelDay";
    }
    return classes;
  };

  return (
    <div className={getDayClassName()} onClick={() => handleClick()}>
      {day}
    </div>
  );
}

export default CalendayDayComponent;
