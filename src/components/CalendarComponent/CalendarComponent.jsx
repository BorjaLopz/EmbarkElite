import React, { useState } from "react";
import CalendayDayComponent from "../CalendayDayComponent/CalendayDayComponent";
import "./style.css";

function CalendarComponent({
  initialSelectedDate,
  onSelectDate,
  selectedDeparture,
  handleDepartureDate,
  handleArrivalDate,
  handleCheckboxOneWay,
  dates,
}) {
  // console.log(`selectedDeparture en CalendarComponent: ${selectedDeparture}`);

  const [selectedDate, setSelectedDate] = useState(
    selectedDeparture || initialSelectedDate
  );
  const [onlyOneWay, setOnlyOneWay] = useState(false);

  const handleDateClick = () => {};

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const startOfMonth = (date) => {
    return new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), 1)
    ).getUTCDay();
  };

  const renderCalendar = (monthOffset) => {
    const days = [];
    const currentMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + monthOffset,
      1
    );
    const totalDays = daysInMonth(
      currentMonth.getMonth(),
      currentMonth.getFullYear()
    );
    const startDay = startOfMonth(currentMonth);

    const hasSelectedDates = dates.departure && dates.arrival;

    for (let i = 0; i < startDay - 1; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let i = 1; i <= totalDays; i++) {
      const isToday =
        new Date().getDate() === i &&
        new Date().getMonth() === currentMonth.getMonth() &&
        new Date().getFullYear() === currentMonth.getFullYear();

      const isPastDay =
        new Date() >
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);

      days.push(
        <CalendayDayComponent
          key={i}
          day={i}
          isToday={isToday}
          isPastDay={isPastDay}
          handleSelectDate={onSelectDate}
          selectedDate={selectedDate}
          monthOffset={monthOffset}
          dates={dates}
        />
      );
    }

    // Agrega el elemento adicional para representar el rango de fechas seleccionadas
    if (hasSelectedDates) {
      days.push(
        <div
          key="date-range-background"
          className="travelDay"
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 8,
            gridRowStart: 1,
            gridRowEnd: Math.ceil((startDay + totalDays) / 7) + 1,
          }}
        ></div>
      );
    }

    return days;
  };

  return (
    <div className="calendarContainerWithButtons">
      <div className="calendar-container">
        <button
          className="changeMonthButton"
          onClick={() => {
            if (
              selectedDate.getMonth() > new Date().getMonth() ||
              selectedDate.getFullYear() > new Date().getFullYear()
            ) {
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() - 2
                )
              );
            }
          }}
          disabled={
            selectedDate.getMonth() === new Date().getMonth() &&
            selectedDate.getFullYear() === new Date().getFullYear()
          }
        >
          {"<"}
        </button>
        <div className="left-month">
          <div className="calendar-header">
            <div className="current-month">
              {selectedDate.toLocaleString("default", {
                month: "long",
              })}
            </div>
          </div>
          <div className="calendar-days">
            <div className="day-label">L</div>
            <div className="day-label">M</div>
            <div className="day-label">X</div>
            <div className="day-label">J</div>
            <div className="day-label">V</div>
            <div className="day-label">S</div>
            <div className="day-label">D</div>
            {renderCalendar(0)}
          </div>
        </div>

        <div className="right-month">
          <div className="calendar-header">
            <div className="current-month">
              {new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() + 1
              ).toLocaleString("default", {
                month: "long",
              })}
            </div>
          </div>
          <div className="calendar-days">
            <div className="day-label">L</div>
            <div className="day-label">M</div>
            <div className="day-label">X</div>
            <div className="day-label">J</div>
            <div className="day-label">V</div>
            <div className="day-label">S</div>
            <div className="day-label">D</div>
            {renderCalendar(1)}
          </div>
        </div>
        <button
          className="changeMonthButton"
          onClick={() =>
            setSelectedDate(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 2)
            )
          }
        >
          {">"}
        </button>
      </div>

      <section id="buttonsTravelOptions">
        <input
          type="checkbox"
          value={onlyOneWay}
          onChange={handleCheckboxOneWay}
        />
        SOLO IDA
        <button id="selectDates">seleccionar</button>
      </section>
    </div>
  );
}

export default CalendarComponent;
