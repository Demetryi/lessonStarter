
const renderBar = ({ appElement, activeDate }) => {
  const calendarToolbar = document.createElement("div");
  calendarToolbar.classList.add("calendar-bar"); // Add class example

  const header = document.createElement("h2");
  header.classList.add("calendar-bar__header");

  const prevButton = document.createElement("button");
  prevButton.classList.add("calendar-bar__control-button");
  prevButton.classList.add("calendar-bar__control-button--prev");

  const nextButton = document.createElement("button");
  nextButton.classList.add("calendar-bar__control-button");
  nextButton.classList.add("calendar-bar__control-button--next");

  header.textContent = activeDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  calendarToolbar.append(prevButton);
  calendarToolbar.append(header);
  calendarToolbar.append(nextButton);
  appElement.prepend(calendarToolbar);
};

export default renderBar;
