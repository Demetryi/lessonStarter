const daysList = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

const renderHead = ({ activeYear, activeMonth, calendarContainer }) => {
  const calendarHead = document.createElement("thead");
  calendarHead.classList.add("calendar-table__head");

  const calendarRow = document.createElement("tr");
  calendarRow.classList.add("calendar-table__row");

  calendarHead.append(calendarRow);

  let calendarColumn = document.createElement("th");
  calendarColumn.classList.add("calendar-table__column");
  calendarColumn.classList.add("calendar-table__column--btn-cell");

  const addVacationButton = document.createElement("button");
  addVacationButton.classList.add("calendar-table__add-vacation-button");
  addVacationButton.innerHTML = "Add Vacation";
  addVacationButton.addEventListener("click", () => {
    console.log("asdas");
  });

  calendarColumn.append(addVacationButton);
  calendarRow.append(calendarColumn);

  const daysInMonth = new Date(activeYear, activeMonth + 1, 0).getDate();
  const firstDayInMonth = new Date(activeYear, activeMonth, 1).getDay();

  let activeDay = firstDayInMonth;

  for (let i = 1; i <= daysInMonth; i++) {
    calendarColumn = document.createElement("th");
    calendarColumn.classList.add("calendar-table__column");

    if (activeDay % 7 == 0 || activeDay % 7 == 6) {
      calendarColumn.classList.add("weekend");
    }

    calendarColumn.innerHTML = `<span class="calendar-table__week-day">${
      daysList[activeDay % 7]
    }</span><span class="calendar-table__month-day">${i}</span>`;
    calendarRow.append(calendarColumn);
    activeDay++;
  }

  calendarColumn = document.createElement("th");
  calendarColumn.classList.add("calendar-table__column");
  calendarColumn.classList.add("calendar-table__column--sum-cell");
  calendarColumn.innerHTML = "Sum";
  calendarRow.append(calendarColumn);

  calendarContainer.append(calendarHead);
};

const renderCalendar = ({ appElement, activeDate }) => {
  const calendarContainer = document.createElement("table");
  calendarContainer.classList.add("calendar-table");

  const activeMonth = activeDate.getMonth();
  const activeYear = activeDate.getFullYear();

  renderHead({ activeMonth, activeYear, calendarContainer });

  const calendarBody = document.createElement("tbody");
  calendarBody.classList.add("calendar-table__body");

  calendarContainer.append(calendarBody);
  appElement.append(calendarContainer);
};

export default renderCalendar;
