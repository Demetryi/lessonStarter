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

const renderBar = ({ appElement, activeDate }) => {
  const calendarToolbar = document.createElement("div");
  calendarToolbar.classList.add("calendar-bar"); // Add class example

  const currentMonth = activeDate.getMonth();
  const currentYear = activeDate.getFullYear();
  const header = document.createElement("h2");
  header.classList.add("calendar-bar__header");

  const prevButton = document.createElement("button");
  prevButton.classList.add("calendar-bar__control-button");
  prevButton.classList.add("calendar-bar__control-button--prev");

  const nextButton = document.createElement("button");
  nextButton.classList.add("calendar-bar__control-button");
  nextButton.classList.add("calendar-bar__control-button--next");

  header.textContent = monthsList[currentMonth + 1] + " " + currentYear;

  calendarToolbar.append(prevButton);
  calendarToolbar.append(header);
  calendarToolbar.append(nextButton);
  appElement.prepend(calendarToolbar);
};

export default renderBar;
