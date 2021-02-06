

const renderHead = ({ activeYear, activeMonth, daysInMonth, calendarContainer }) => {
  const calendarHead = document.createElement("thead");
  calendarHead.classList.add("calendar-table__head");

  const calendarRow = document.createElement("tr");
  calendarRow.classList.add("calendar-table__head-row");

  calendarHead.append(calendarRow);

  let calendarColumn = document.createElement("th");
  calendarColumn.classList.add("calendar-table__head-column");
  calendarColumn.classList.add("calendar-table__head-column--btn-cell");

  const addVacationButton = document.createElement("button");
  addVacationButton.classList.add("calendar-table__add-vacation-button");
  addVacationButton.innerHTML = "Add Vacation";

  calendarColumn.append(addVacationButton);
  calendarRow.append(calendarColumn);

  const firstDayInMonth = new Date(activeYear, activeMonth, 1).getDay();

  let activeDay = firstDayInMonth;

  for (let i = 1; i <= daysInMonth; i++) {
    calendarColumn = document.createElement("th");
    calendarColumn.classList.add("calendar-table__head-column");

    if (activeDay % 7 == 0 || activeDay % 7 == 6) {
      calendarColumn.classList.add("weekend");
    }

    calendarColumn.innerHTML = `<span class="calendar-table__head-week-day">${
      new Date(activeYear, activeMonth, i).toLocaleDateString('en-US', { weekday: 'short' })
    }</span><span class="calendar-table__month-day">${i}</span>`;
    calendarRow.append(calendarColumn);
    activeDay++;
  }

  calendarColumn = document.createElement("th");
  calendarColumn.classList.add("calendar-table__head-column");
  calendarColumn.classList.add("calendar-table__head-column--sum-cell");
  calendarColumn.innerHTML = "Sum";
  calendarRow.append(calendarColumn);

  calendarContainer.append(calendarHead);
};

const renderBody = ({ activeYear, activeMonth, daysInMonth, departmentTeams, calendarContainer }) => {
  const calendarBody = document.createElement("tbody");
  calendarBody.classList.add("calendar-table__body");

  for (let i = 0; i < departmentTeams.teams.length; i++) {
    const numberOfRow = departmentTeams.teams[i].members.length;
    let teamNum = (i + 1) % 4;
    if (teamNum === 0) {
      teamNum = 4;
    }

    for (let j = 0; j < numberOfRow + 1; j++) {
      const firstDayInMonth = new Date(activeYear, activeMonth, 1).getDay();
      let activeDay = firstDayInMonth;

      const bodyRow = document.createElement("tr");

      if (j === 0) {
        bodyRow.classList.add("team-first-row");
      }

      if (j === numberOfRow) {
        bodyRow.classList.add("team-last-row");
      }

      bodyRow.classList.add("calendar-table__body-row");
      bodyRow.classList.add("teamColor" + teamNum);

      calendarBody.append(bodyRow);

      const bodyColumn = document.createElement("td");
      bodyColumn.classList.add("calendar-table__body-first-column");
      bodyColumn.classList.add("first-column");
      bodyRow.append(bodyColumn);

      if (j === 0) {
        bodyColumn.innerHTML = `<div class="team-info-cell"><span class="team-info-cell__team-name">${departmentTeams.teams[i].name}</span>
        <div class="team-info-cell__wrapper">
										<div class="team-info-cell__number-people">${departmentTeams.teams[i].members.length}</div>
										<div class="team-info-cell__percent">${departmentTeams.teams[i].percentageOfAbsent[activeMonth]}%</div>
                    <div class="team-info-cell__collapse"></div></div></div>`;
      } else {
        bodyColumn.innerHTML = `<span>${departmentTeams.teams[i].members[j - 1].name}</span>`;
      }

      for (let k = 1; k <= daysInMonth + 1; k++) {
        const bodyColumn = document.createElement("td");
        bodyColumn.classList.add("calendar-table__body-column");

        let lastCell = k;
        if (lastCell === daysInMonth + 1) {
          bodyColumn.classList.add("sum-cell");
        }

        if (activeDay % 7 == 0 || activeDay % 7 == 6) {
          bodyColumn.classList.add("weekend");
        }

        bodyRow.append(bodyColumn);
        activeDay++;
      }
    }
  }

  calendarContainer.append(calendarBody);
};

const renderCalendar = ({ appElement, activeDate, departmentTeams }) => {
  const calendarContainer = document.createElement("table");
  calendarContainer.classList.add("calendar-table");

  const activeMonth = activeDate.getMonth();
  const activeYear = activeDate.getFullYear();
  const daysInMonth = new Date(activeYear, activeMonth + 1, 0).getDate();

  renderHead({ activeYear, activeMonth, daysInMonth, calendarContainer });
  renderBody({ activeYear, activeMonth, daysInMonth, departmentTeams, calendarContainer });

  appElement.append(calendarContainer);
};

export default renderCalendar;
