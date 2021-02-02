const monthsList = {
	1: "January",
	2: "February",
	3: "March",
	4: "April",
	5: "May",
	6: "June",
	7: "July",
	8: "August",
	9: "September",
	10: "October",
	11: "November",
	12: "December",
};


const renderBar = ({ appElement, currentDate }) => {

	const calendarToolbar = document.createElement("div");
	calendarToolbar.classList.add("calendar-bar"); // Add class example

	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();
	const header = document.createElement("h2");
	header.classList.add("calendar-bar__header");
	
	header.textContent = monthsList.[currentMonth + 1] + ' ' + currentYear;

	calendarToolbar.prepend(header);
	appElement.prepend(calendarToolbar);

};

export default renderBar;
