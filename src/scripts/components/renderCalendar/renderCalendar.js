const daysList = {
	0: "Su",
	1: "Mo",
	2: "Tu",
	3: "We",
	4: "Th",
	5: "Fr",
	6: "St",
};

const renderCalendar = ({ appElement, currentDate }) => {

	const calendarContainer = document.createElement("table");
	calendarContainer.classList.add("calendar-table");

	const calendarHead = document.createElement("thead");
	calendarHead.classList.add("calendar-table__head");

	const calendarBody = document.createElement("tbody");
	calendarBody.classList.add("calendar-table__body");

	const calendarRow = document.createElement("tr");
	calendarRow.classList.add("calendar-table__row");

	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();

	calendarHead.append(calendarRow);

	const daysInMonth = new Date (currentYear, currentMonth + 1, 0).getDate();
	const firstDayInMonth = new Date (currentYear, currentMonth, 1).getDay();

	let activeDay = firstDayInMonth;

	for(let i = 0; i < daysInMonth; i++) {

		const calendarColumn = document.createElement("th");
		calendarColumn.classList.add("calendar-table__column");

		if(activeDay % 7 == 0 || activeDay % 7 == 6) {
			calendarColumn.classList.add("weekend");
		}

		calendarColumn.innerHTML = `<span class="calendar-table__week-day">${daysList.[activeDay % 7]}</span><span class="calendar-table__month-day">${i + 1}</span>`;
		calendarRow.append(calendarColumn);
		activeDay++;

	}

	calendarContainer.prepend(calendarHead); // This element contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
	calendarContainer.append(calendarBody); // This element contain tr > td*monthLength
	appElement.append(calendarContainer);

};

export default renderCalendar;
