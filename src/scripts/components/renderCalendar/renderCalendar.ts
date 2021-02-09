const renderCalendar = ({ appElement, currentDate }: { appElement: Element; currentDate: Date }) => {
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  calendarContainer.prepend(calendarHead);
  calendarContainer.append(calendarBody);
  appElement.append(calendarContainer);
  console.log(currentDate);
};

export default renderCalendar;
