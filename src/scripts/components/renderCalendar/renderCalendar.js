const daysList = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

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
      daysList[activeDay % 7]
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

  // -----------------------------------------------------------------------------------

  // const departmentTeams = {
  //   teams: [
  //     {
  //       name: "Frontend Team",
  //       percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
  //       members: [
  //         {
  //           name: "FE_Team_User1",
  //           vacations: [
  //             { startDate: "20.12.2020", endDate: "22.12.2020", type: "Paid" },
  //             { startDate: "20.11.2020", endDate: "22.11.2020", type: "Paid" },
  //           ],
  //         },
  //         {
  //           name: "FE_Team_User1",
  //           vacations: [
  //             { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
  //             { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Backend Team",
  //       percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
  //       members: [
  //         {
  //           name: "FE_Team_User1",
  //           vacations: [
  //             { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
  //             { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
  //           ],
  //         },
  //         {
  //           name: "FE_Team_User1",
  //           vacations: [
  //             { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
  //             { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Backend Team",
  //       percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
  //       members: [
  //         {
  //           name: "FE_Team_User1",
  //           vacations: [
  //             { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
  //             { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
  //           ],
  //         },
  //         {
  //           name: "FE_Team_User1",
  //           vacations: [
  //             { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
  //             { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Backend Team",
  //       percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
  //       members: [
  //         {
  //           name: "FE_Team_User1",
  //           vacations: [
  //             { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
  //             { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
  //           ],
  //         },
  //         {
  //           name: "FE_Team_User1",
  //           vacations: [
  //             { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
  //             { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Backend Team",
  //       percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
  //       members: [
  //         {
  //           name: "FE_Team_User1",
  //           vacations: [
  //             { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
  //             { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
  //           ],
  //         },
  //         {
  //           name: "FE_Team_User1",
  //           vacations: [
  //             { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
  //             { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // };

  // -----------------------------------------------------------------------------------

  renderHead({ activeYear, activeMonth, daysInMonth, calendarContainer });
  renderBody({ activeYear, activeMonth, daysInMonth, departmentTeams, calendarContainer });

  appElement.append(calendarContainer);
};

export default renderCalendar;
